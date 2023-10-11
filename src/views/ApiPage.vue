<template>
    <main>
    
    <h1>API Page</h1>
    <label for="searchInput">Search a Player</label>
    <input type="text" v-model="playerId" id="searchInput">
    <br>
    <button class="btn btn-success" @click="searchPlayer">Search</button>

    <p v-if="playerData">
    <p>ID: {{ playerData.id }}</p>
    <p>Name: {{ playerData.first_name }} {{ playerData.last_name }}</p>
    <p>Height: {{ playerData.height_feet }}' {{ playerData.height_inches }}"</p>
</p>
    </main>
</template>

<script>
import axios from 'axios';

export default {
    data () {
        return {
            playerId: "",
            playerData: null,
        };
    },
    methods: {
    async searchPlayer() {
    const options = {
      method: 'GET',
      url: 'https://free-nba.p.rapidapi.com/players/' + this.playerId,
      params: {
        page: '0',
        per_page: '25'
      },
      headers: {
        'X-RapidAPI-Key': '03118af0bbmshcdccaade96c0fffp1eedacjsn26e9787b18a0',
        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      this.playerData = response.data;
    //   this.playerName = response.data.first_name;
    //   this.lastName = (response.data.last_name);
    //   this.height = JSON.stringify(response.data.height_feet);
    //   this.inches = JSON.stringify(response.data.height_inches);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  },
}
}
</script>
<style>
h1 {
    margin-top: 50%;
}
</style>