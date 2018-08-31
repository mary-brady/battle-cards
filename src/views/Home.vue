<template>
  <div class="home container-fluid">
    <div v-if="!game.id">
      <form @submit.prevent="startGame">
        <input type="text" placeholder="Enter Your Name" v-model="newGame.playerName">
        <button type="submit">Submit</button>
      </form>
    </div>
    <div v-if="game.id">
      <Opponent />
      <hr />
      <div v-if="this.game.winner == 'Cats Game'">
        <p>It's a tie! Boooo</p>
      </div>
      <div v-if="this.game.over == true && this.game.winner != 'Cats Game'">
        <h1>{{this.game.winner.name}} Wins!!</h1>
      </div>
      <div>
        <button @click="fight" v-if="this.game.over == false">Fight!</button>
      </div>
      <hr />
    </div>
    <Player />
  </div>
</template>

<script>
// @ is an alias to /src
import Player from "@/components/Player.vue";
import Opponent from "@/components/Opponent.vue";

export default {
  name: "home",
  data() {
    return {
      newGame: {
        playerName: "",
        opponents: 1,
        set: 4
      }
    };
  },
  computed: {
    game() {
      return this.$store.state.game;
    }
  },
  methods: {
    startGame() {
      this.$store.dispatch("gameStart", this.newGame);
    },
    fight() {
      let fightData = {
        playerId: this.game.players[0].id,
        opponentId: this.game.players[1].id,
        playerCardId: this.$store.state.activeCard,
        opponentCardId: this.$store.state.opponentCard
      };
      this.$store.dispatch("fight", fightData);
    }
  },
  components: {
    Opponent,
    Player
  }
};
</script>