<template>
  <div class="container">
    <TeamsTable class="table-wrapper" :teamData="teamsData"/>
    <Results class="results-wrapper" :matchData="parseTeamData()" @prediction="onPrediction"/>
  </div>
</template>

<script>
import TeamsTable from './table.vue'
import Results from './results.vue'
import axios from 'axios'
import {nanoid} from 'nanoid'
export default {
  components: { 
    TeamsTable,
    Results
   },
  name: 'mainContainer',
  data: () =>({
    matchData:[],
    teamsData: [],
    parsedTeams: [],
    parsedMatches: [],
    matchPrediction: []

  }),
  mounted() {
    this.getMatchData();
    this.getTeamData();
  },
  computed:{
   
  },
  methods: {
    async getMatchData(){
      let response = await axios.get('https://especialess3.lanacion.com.ar/22/03/mundial2022-fixture/data/fechas.json')
            const data = Array.from(response.data)
            let grupoC = []
            for(let item of data){
              if(item.grupo === 'C'){
                item = {...item, matchId:nanoid()}
                grupoC.push(item)
              }
            }
            console.log('grupoc',grupoC)
            this.matchData = grupoC;
    },
    async getTeamData(){
      let response = await axios.get('https://especialess3.lanacion.com.ar/22/03/mundial2022-fixture/data/diccEquipos.json')
      const data = Array.from(response.data)
      for( let item of data){
        if(item.grupo.includes('C')){
          this.teamsData.push(item)
        }
      }
      console.log('teamsData', this.teamsData)
      this.parseTeamData()
    },
    parseTeamData(){
      let parsedArr = []
      let equipoA = {}
      let equipoB = {}
      
      for( let match of this.matchData){
        this.teamsData.forEach(element => {
          if(match.equipoA.includes(element.grupo)){
           equipoA = {equipo:element.nombre, id: element.nombreCorto, prediccion: ''}
          } else if (match.equipoB.includes(element.grupo)){
            equipoB = {equipo:element.nombre, id: element.nombreCorto, prediccion: ''}
          }
        });
        parsedArr.push({matchId:match.matchId, fecha: match.fecha, equipoA, equipoB})
      }
      console.log('parsedArr',parsedArr)
      return parsedArr
      
    },
     onPrediction(payload){
      console.log(payload)
    }
  },
}

</script>
<style>
@import url(https://especialess3.lanacion.com.ar/fonts/SuecaSlab-Heavy.woff);
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
.is-flex{
  display: inline-flex;
}
.container{
  display: flex;
  margin: auto;
  width: 95%;
  justify-content: space-evenly;
}
.table-wrapper{
  width: 30%;
}
.results-wrapper{
  width: 70%;
}
</style>
