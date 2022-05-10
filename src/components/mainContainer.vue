<template>
  <div class="container">
    <TeamsTable
      class="table-wrapper"
      :teamsData="teamsData"
      :predictionData="tablePrediction"
    />
    <Results
      class="results-wrapper"
      :matchData="parseTeamData()"
      @prediction="onPrediction"
    />
  </div>
</template>

<script>
import TeamsTable from "./table.vue";
import Results from "./results.vue";
import axios from "axios";
import { nanoid } from "nanoid";
export default {
  components: {
    TeamsTable,
    Results,
  },
  name: "mainContainer",
  data: () => ({
    matchData: [],
    teamsData: [],
    parsedTeams: [],
    parsedMatches: [],
    mapPredictions: new Map(),
    tablePrediction: [],
  }),
  mounted() {
    this.getMatchData();
    this.getTeamData();
  },
  computed: {},
  methods: {
    async getMatchData() {
      // aca se obtienen los datos de los partidos y se filtran solo los del grupo "c"
      let response = await axios.get(
        "https://especialess3.lanacion.com.ar/22/03/mundial2022-fixture/data/fechas.json"
      );
      const data = Array.from(response.data);
      let grupoC = [];
      for (let item of data) {
        if (item.grupo === "C") {
          item = { ...item, matchId: nanoid() }; //aca se le asigna una id a cada partido
          grupoC.push(item);
        }
      }
      console.log("grupoc", grupoC);
      this.matchData = grupoC;
    },
    async getTeamData() {
      //aca se obtienen los equipos y se filtran solo los del grupo "c"
      let response = await axios.get(
        "https://especialess3.lanacion.com.ar/22/03/mundial2022-fixture/data/diccEquipos.json"
      );
      const data = Array.from(response.data);
      for (let item of data) {
        if (item.grupo.includes("C")) {
          this.teamsData.push(item);
        }
      }
      console.log("teamsData", this.teamsData);
      this.parseTeamData();
    },
    parseTeamData() {
      let parsedArr = [];
      let equipoA = {};
      let equipoB = {};

      for (let match of this.matchData) {
        this.teamsData.forEach((element) => {
          //aca se arman los objetos simplificados de cada equipo para enviar a las cards y a la tabla
          if (match.equipoA.includes(element.grupo)) {
            equipoA = {
              equipo: element.nombre,
              id: element.nombreCorto,
              prediccion: "",
            };
          } else if (match.equipoB.includes(element.grupo)) {
            equipoB = {
              equipo: element.nombre,
              id: element.nombreCorto,
              prediccion: "",
            };
          }
        });
        parsedArr.push({
          // aca se arma el objeto simplificado de cada partido y se le agregan los datos de cada equipo participante en el partido
          matchId: match.matchId,
          fecha: match.fecha,
          equipoA,
          equipoB,
        });
      }
      console.log("parsedArr", parsedArr);
      return parsedArr;
    },
    onPrediction(payload) {
      this.mapPredictions.set(payload.predictionId, payload);
      this.tablePrediction = Array.from(this.mapPredictions.values());
    },
  },
};
</script>
<style>
@media only screen and (max-width: 1500px) {
  .container {
    display: flex;
    flex-flow: row wrap;
    max-width: 600px;
  }
}

* {
  font-family: "SuecaSlab";
}
h3 {
  margin: 40px 0 0;
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
.is-flex {
  display: inline-flex;
}
.container {
  display: flex;
  margin: auto;
  width: 95%;
  justify-content: space-evenly;
}
.table-wrapper {
  width: 30%;
  min-width: 460px;
}
.results-wrapper {
  width: 70%;
}
</style>
