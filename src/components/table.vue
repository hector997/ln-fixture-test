<template>
    <div class="container">
        <div class="header">
            <h2 class="group">GRUPO</h2>
            <div class="is-flex title-container">
                <h1 class="group-name">C</h1>
                <p class="desc">simula los resultados que faltan y mira como queda la tabla</p>
            </div>
        </div>
        <div class="table-container">
            <table>
                <tr class="">
                    <th>posiciones</th>
                    <th>pts</th>
                    <th>pj</th>
                    <th>g</th>
                    <th>e</th>
                    <th>p</th>
                    <th>gf</th>
                    <th>gc</th>
                    <th>dg</th>
                </tr>
                <tr v-for="item in this.teamData" :key="item.key">
                    <td>{{item.nombre}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
  name: 'table',
  props: {
      teamData: Array
  },
  data: () => ({
  }),
}
</script>
<style scoped lang="scss">
.is-flex{
    display: inline-flex;
}
.container{
    
    margin: 0;
    padding: 0;
    display: block;
    .header{
        text-align: left;
        display: block;
        position: relative;
    .group{
        margin: 0;
    }
    .title-container{
        justify-content: space-between;
        position: inherit;
        border-style: solid;
        width: 100%;
        .group-name{
            font-size: 100px;
            margin: 0;
        }
        .desc{
            position: absolute;
            right: 0;
            bottom: 0;
            font-size: 16px;
            width: 60%;
            text-align: right;
            padding-right: 5px;
        }
    }
    }
    .table-container{
    border-style: solid;
    padding: 0;
    width: 100%;
}
}




h3 {
  margin: 40px 0 0;
  font-family: 'LN font';
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
