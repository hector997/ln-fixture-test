<template>
  <div class="container">
    <div class="cards-heading" v-for="item in getDates" :key="item">
        <p>{{dateFormat(item)}}</p>
        <div class="cards">
            <div style="margin: 0" v-for="match in matchData" :key="match.matchId">
                <div class="match-card" v-if="match.fecha === item">
                    <div class="team-display">
                        <p>{{match.equipoA.equipo}}</p>
                        <input class="team-input" type="text" @input="handleInput(match.matchId,match.equipoA.equipo, $event.target.value )">
                    </div>
                    <div class="team-display">
                        <p>{{match.equipoB.equipo}}</p>
                        <input class="team-input" type="text" @input="handleInput(match.matchId,match.equipoB.equipo, $event.target.value )">
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  name: 'results',
  props: {
      matchData: Array
  },
  data: () => ({
      matchDate:[],
      matchPrediction: {

      }
  }),
  watch(){
      
  },
  computed: {
      getDates(){
        let datesArr = [];
        for (let item of this.matchData ){
            datesArr.push(item.fecha)
        }
        return [...new Set(datesArr)]
      },
  },
  methods:{
    dateFormat(date){
        moment.locale('es');
        return moment(String(date)).format('dddd LL')
    },
    handleInput(matchId,teamName,inputData){
        if(inputData){
        let currentPrediction = {
            matchId: matchId,
            teamName: teamName,
            prediction: inputData
            }
        this.$emit('prediction',currentPrediction)
        }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cards{
    border-style: solid none none solid;
    .match-card{
        border-style: solid;
        margin: 10px;
        height: 220px;
        width: 300px;
        .team-display{
            margin-left: 10px;
            display: flex;
            justify-content: space-between;
            .team-input{
                margin: auto 10px;
                width: 30px;
                height: 20px;
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
