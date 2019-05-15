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
        <td>{{match}}</td>
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
    profile: [],
    match: [],
    id: [],
    };
},
mounted() {
    this.getData();
},
updated(){
    this.getMatch();
},
methods: {
    getData() {
    axios
        .get("https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Yevely?api_key=RGAPI-d893d9b2-efaa-461f-a4c9-5c98cd53630b")
        .then(response => {this.profile = response.data})
    },
    getMatch(){
      var profile = this.profile;
      axios
        .get("https://na1.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/"+profile.id+"?api_key=RGAPI-d893d9b2-efaa-461f-a4c9-5c98cd53630b")
        .then( response => {this.match = response.data})
    }
},
};
//https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/RiotSchmick?api_key=RGAPI-d893d9b2-efaa-461f-a4c9-5c98cd53630b
</script>

<style>
</style>
