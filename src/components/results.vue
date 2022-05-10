<template>
  <div class="container">
    <div class="cards-heading" v-for="item in getDates" :key="item">
      <p class="date-display">{{ dateFormat(item) }}</p>
      <div class="cards">
        <div class="top-border"></div>
        <div v-for="match in matchData" :key="match.matchId">
          <div class="match-card" v-if="match.fecha === item">
            <div class="team-display">
              <p>{{ match.equipoA.equipo }}</p>
              <input
                class="team-input"
                type="text"
                @input="
                  handleInput(
                    match.matchId,
                    match.equipoA.id,
                    $event.target.value
                  )
                "
              />
            </div>
            <div class="team-separator"></div>
            <div class="team-display">
              <p>{{ match.equipoB.equipo }}</p>
              <input
                class="team-input"
                type="text"
                @input="
                  handleInput(
                    match.matchId,
                    match.equipoB.id,
                    $event.target.value
                  )
                "
              />
            </div>
            <div class="team-separator"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "results",
  props: {
    matchData: Array,
  },
  data: () => ({}),
  computed: {
    getDates() {
      let datesArr = [];
      for (let item of this.matchData) {
        datesArr.push(item.fecha);
      }
      return [...new Set(datesArr)];
    },
  },
  methods: {
    dateFormat(date) {
      //date format
      moment.locale("es");
      return moment(String(date)).format("dddd LL");
    },
    handleInput(matchId, teamId, inputData) {
      //este metodo se llama cuando se hace un input en la card y arma el objeto a emitirle al padre
      let currentPrediction = {
        matchId: matchId,
        teamId: teamId,
        prediction: inputData,
        predictionId: teamId + "-" + matchId,
      };
      this.$emit("prediction", currentPrediction);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media screen and (max-width: 1500px) {
  .container {
    display: block;
    width: 450px;
  }
  .date-display {
    margin: 5px 0 !important;
  }
  .cards {
    justify-content: center;
    .match-card {
      max-height: 50px;
      width: 100% !important;
      display: flex;
      justify-content: space-between;
      margin: 2px !important;
      .team-separator {
        display: none;
      }
      .team-display {
        font-size: 14px !important;
      }
    }
  }
}
.container {
  padding: 15px;
  .cards-heading {
    .date-display {
      color: var(--secondary);
      font-weight: 800;
      font-size: 16px;
      text-align: left;
      padding-left: 5px;
    }
    .top-border {
      border-top: solid;
      border-color: var(--secondaryLight);
    }
    .cards {
      color: var(--secondary);
      border-color: var(--secondaryLight);
      border-style: none none none solid;
      padding-left: 10px;
      .match-card {
        margin: 15px;
        height: 220px;
        width: 300px;
        background: var(--primary);
        border-radius: 8px;
        .team-separator {
          border-top: solid;
          border-color: #fafafa;
          border-width: 0.5px;
          width: 90%;
          margin: auto;
        }
        .team-display {
          margin-left: 15px;
          display: flex;
          justify-content: space-between;
          font-size: 18px;
          font-weight: 800;
          color: #fafafa;
          .team-input {
            margin: auto 15px;
            width: 35px;
            height: 25px;
            border: none;
            border-radius: 5px;
            font-family: "SuecaSlab";
            font-weight: 800;
            font-size: 18px;
            color: #fafafa;
            background: var(--primaryDark);
          }
        }
      }
    }
  }
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
</style>
