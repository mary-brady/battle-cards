<template>
  <div class="home container-fluid">
    <div v-if="!game.id">
      <form @submit.prevent="startGame">
        <input type="text" placeholder="Enter Your Name" v-model="newGame.playerName">
      </form>
    </div>
    <div v-if="game.id">
      <div id="row">
        <div class="col-12">
          <Opponent />
        </div>
      </div>
      <hr />
      <div>
        <button @click="fight">Fight!</button>
      </div>
      <div id="row">
        <div class="col-12">
          <Player />
        </div>
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
        set: 2
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