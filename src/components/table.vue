<template>
  <div class="container">
    <div class="header">
      <h1 class="group">GRUPO</h1>
      <div class="is-flex title-container">
        <h1 class="group-name">C</h1>
        <div class="desc">
          <p>simula los resultados que faltan y mira como queda la tabla</p>
          <i class="icon fa-solid fa-caret-down"></i>
        </div>
      </div>
    </div>
    <div class="table-container">
      <table>
        <!-- titulo de la tabla -->
        <tr class="table-head">
          <th class="table-item">Posiciones</th>
          <th class="table-item">PTS</th>
          <th class="table-item">PJ</th>
          <th class="table-item">G</th>
          <th class="table-item">E</th>
          <th class="table-item">P</th>
          <th class="table-item">GF</th>
          <th class="table-item">GC</th>
          <th class="table-item">DG</th>
        </tr>
        <!-- contenido de la tabla -->
        <tr class="table-content" v-for="item in matchesArr" :key="item.id">
          <td>{{ item.equipo }}</td>
          <td>{{ item.score }}</td>
          <td>{{ item.playedMatches }}</td>
          <td>{{ item.wonMatches }}</td>
          <td>{{ item.drawnMatches }}</td>
          <td>{{ item.lostMatches }}</td>
          <td>{{ item.goalsMade }}</td>
          <td>{{ item.goalsRecieved }}</td>
          <td>{{ item.goalDiff }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "table",
  props: {
    predictionData: Array,
    teamsData: Array,
  },
  data: () => ({}),
  watch: {},
  computed: {
    getFinalScore() {
      //esta computed devuelve un map que contiene a los dos equipos que se enfrentaron en dado partido segun su id
      let matches = new Map();
      this.predictionData.forEach((prediction) => {
        console.log("pred", prediction);
        if (matches.has(prediction.matchId)) {
          matches.set(prediction.matchId, [
            ...matches.get(prediction.matchId),
            prediction,
          ]);
        } else {
          matches.set(prediction.matchId, [prediction]);
        }
      });
      console.log("matches", matches);
      return Array.from(matches.values());
    },
    matchesArr() {
      // esta computed devuelve un array de objetos con todos los datos parseados para ser usados por la tabla
      let arr = [];
      let winner = "";
      this.teamsData.forEach((element) => {
        winner = this.teamScore(element.nombreCorto).matchWinner;
        arr.push({
          id: element.nombreCorto,
          equipo: element.nombre,
          score: this.teamScore(element.nombreCorto).score,
          playedMatches: this.teamScore(element.nombreCorto).playedMatches,
          wonMatches: this.teamScore(element.nombreCorto).wonMatches,
          drawnMatches: this.teamScore(element.nombreCorto).drawMatches,
          lostMatches: this.teamScore(element.nombreCorto).lostMatches,
          goalsMade: this.getGoalData(element.nombreCorto).goalsMade,
          goalsRecieved: this.getGoalData(element.nombreCorto).goalsRecieved,
          goalDiff: this.getGoalData(element.nombreCorto).goalDiff,
          matchWinner: 0,
        });
      });
      let sortedArr = arr.sort((a, b) => {
        //aca se ordena la tabla segun los criterios mencionados en la consigna
        if (b.score != a.score) {
          return b.score - a.score;
        } else if (b.goalDiff != a.goalDiff) {
          return b.goalDiff - a.goalDiff;
        } else if (b.goalsMade != a.goalsMade) {
          return b.goalsMade - a.goalsMade;
        } else if (winner === a.id) {
          a.matchWinner += 1;
          return b.matchWinner - a.matchWinner;
        } else if (winner === b.id) {
          b.matchWinner += 1;
          return a.matchWinner - b.matchWinner;
        }
      });
      console.log("sorted", sortedArr);
      return arr;
    },
  },
  methods: {
    matchWinner(match) {
      // este metodo recibe cada partido y devuelve quien fue el ganador para luego poder ordenar la lista.
      if (match[0].prediction > match[1].prediction) {
        return match[0].teamId;
      } else if (match[1].prediction > match[0].prediction) {
        return match[1].teamId;
      } else return "empate";
    },
    teamScore(nombreCorto) {
      //este metodo  compara los goles de cada partido y tambien devuelve quien fue el ganador
      let score = 0;
      let wonMatches = 0;
      let lostMatches = 0;
      let drawMatches = 0;
      let playedMatches = 0;
      let winner = "";
      this.getFinalScore.forEach((element) => {
        if (element.length < 2) return; //si hay menos de dos predicciones, no se hacen calculos
        const equipoA = element[0];
        const equipoB = element[1];
        winner = this.matchWinner(element); //revisa quien fue el ganador de este partido
        if (equipoA.teamId === nombreCorto) {
          //counter de partidos jugados
          playedMatches += 1;
          if (equipoA.prediction > equipoB.prediction) {
            //si el equipo gana suma 3 puntos
            score += 3;
            wonMatches += 1;
          } else if (equipoA.prediction === equipoB.prediction) {
            //si el equipo empata suma solo 1 punto
            score += 1;
            drawMatches += 1;
          } else if (equipoA.prediction < equipoB.prediction) {
            //si el equipo pierde no suma puntos
            lostMatches += 1;
          }
        } else if (equipoB.teamId === nombreCorto) {
          playedMatches += 1;
          if (equipoB.prediction > equipoA.prediction) {
            score += 3;
            wonMatches += 1;
          } else if (equipoB.prediction === equipoA.prediction) {
            score += 1;
            drawMatches += 1;
          } else if (equipoB.prediction < equipoA.prediction) {
            lostMatches += 1;
          }
        }
      });
      return {
        score: score,
        wonMatches: wonMatches,
        lostMatches: lostMatches,
        drawMatches: drawMatches,
        playedMatches: playedMatches,
        matchWinner: winner,
      };
    },
    getGoalData(nombreCorto) {
      //este metodo calcula los goles hechos, recibidos y la diferencia de goles
      let goalsMade = 0;
      let goalsRecieved = 0;
      let goalDiff = 0;

      this.getFinalScore.forEach((element) => {
        if (element.length < 2) return; //si hay menos de dos predicciones, no se hacen calculos

        const equipoA = element[0];
        const equipoB = element[1];

        if (equipoA.teamId === nombreCorto) {
          goalsMade += Number(equipoA.prediction);
          goalsRecieved += Number(equipoB.prediction);
        } else if (equipoB.teamId === nombreCorto) {
          goalsMade += Number(equipoB.prediction);
          goalsRecieved += Number(equipoB.prediction);
        }

        goalDiff = goalsMade - goalsRecieved;
      });
      return {
        goalsMade: goalsMade,
        goalsRecieved: goalsRecieved,
        goalDiff: goalDiff,
      };
    },
  },
};
</script>
<style scoped lang="scss">
@media only screen and (max-width: 1500px) {
  .container {
    zoom: 0.7;
  }
}
.is-flex {
  display: inline-flex;
}
.container {
  margin: 0;
  padding: 0;
  display: block;
  .header {
    text-align: left;
    display: block;
    position: relative;
    .group {
      margin: 0;
      padding-top: 12px;
      font-size: 45px;
      color: var(--secondaryDark);
      border-bottom: solid;
      border-color: var(--secondaryLight);
    }
    .title-container {
      justify-content: space-between;
      position: inherit;
      width: 100%;
      .group-name {
        font-size: 120px;
        margin: 0;
        padding-left: 10px;
        color: var(--primaryLight);
      }
      .desc {
        position: absolute;
        right: 0;
        bottom: 0;

        width: 60%;
        text-align: right;
        font-weight: 600;
        padding-right: 5px;
        padding-bottom: 5px;

        p {
          font-size: 12px;
          text-transform: uppercase;
          color: var(--secondaryDark);
          margin-bottom: 0px !important;
        }
        .icon {
          font-size: 30px;
          color: var(--secondary);
        }
      }
    }
  }
  table {
    width: 100%;
    font-size: 18px;
    border-style: hidden solid solid hidden;
    border-width: 1px;
    border-color: var(--primary);
    border-collapse: collapse;
    margin: 0 auto;
    color: var(--primary);
    td,
    th {
      padding: 20px 10px;
      border-width: 0.5px;
      border-style: solid;
      border-spacing: 0;
    }
    .table-content {
      color: var(--primary);
    }
  }
}

h3 {
  margin: 40px 0 0;
  font-family: "LN font";
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
