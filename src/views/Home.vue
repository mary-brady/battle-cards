<template>
  <div class="home">
    <form v-on:submit.prevent="startGame">
      <input type="text" placeholder="Enter Your Name" v-model="newGame.playerName">
      </form>
      <div id="row">
        <div class="col-12">
        <Opponent />
        </div>
        </div>
<hr />
      <div id="row">
        <div class="col-12">
        <Player />
        </div>
      </div>
 
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
        set: 1
      },
      fightData: {
        playerId: this.game.players[0].id,
        opponentId: this.game.players[1].id,
        playerCardId: "",
        oponnentCardId: ""
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
    fight() {}
  },
  components: {
    Opponent,
    Player
  }
};
</script>
