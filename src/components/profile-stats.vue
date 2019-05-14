<template>
  <div class="window">
    <label class="drop">
      Servers
      <i class="fas fa-caret-down"></i>
    </label>
    <table id="tables">
      <thead>
        <tr>
          <th>Name</th>
          <th>Level</th>
        </tr>
      </thead>
      <tbody>
        <td>
          {{profile.name}}
        </td>
         <td>
          {{profile.summonerLevel}}
        </td>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
name: "table",
components:{
},
data() {
    return {
    profile: [] 
    };
},
mounted() {
    this.getData();
},
methods: {
    getData() {
    axios
        .get("https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Rosé Hime Bunny?api_key=RGAPI-d893d9b2-efaa-461f-a4c9-5c98cd53630b")
        .then(response => {this.profile = response.data})
        console.log(this.profile)
        
    }
},
};
//https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/RiotSchmick?api_key=RGAPI-d893d9b2-efaa-461f-a4c9-5c98cd53630b
</script>

<style>
</style>
