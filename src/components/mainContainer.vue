<template>
  <div class="wrapper">
    <Table />
    <Results/>
  </div>
</template>

<script>
import Table from './table.vue'
import Results from './results.vue'
import axios from 'axios'

export default {
  components: { 
    Table,
    Results
   },
  name: 'mainContainer',
  data: () =>({
    matchData:[],
    teamsData: [],

  }),
  mounted() {
    this.getMatchData();
    this.getTeamData()
  },
  methods: {
    async getMatchData(){
      let response = await axios.get('https://especialess3.lanacion.com.ar/22/03/mundial2022-fixture/data/fechas.json')
            const data = Array.from(response.data)
            let grupoC = []
            for(let item of data){
              if(item.grupo === 'C'){
                grupoC.push(item)
              }
            }
            console.log('grupoc',grupoC)
            this.matchData = grupoC;
    },
    async getTeamData(){
       let response = await axios.get('https://especialess3.lanacion.com.ar/22/03/mundial2022-fixture/data/diccEquipos.json')
            const data = Array.from(response.data)
            this.teamsData = data
            console.log('teams',data)
    }
  }
}

</script>
<style>
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
.wrapper{
  display: flex;
  width: 90%;
  justify-content: space-evenly;
}
</style>
