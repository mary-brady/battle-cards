<template>
  <div class="player-view">
    <div v-if="myPlayer.hand.length > 0" class="if">
      <div class="name-stuff">
    <p>{{myPlayer.name}}</p>
    <p>Remaining Cards: {{myPlayer.remainingCards}}</p>
    </div>
    <div class="card-deck">
    <div v-for="card in myPlayer.hand" :key="card.name">
      <button @click="setActiveCard(card)">Play Card</button>
      <div class="card border-dark mb-3" style="width: 10rem;">
        <img class="card-img-top" :src="card.img" alt="">
        <div class="card-body">
          <h5 class="card-title">
            <b>{{card.name}}</b>
          </h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <b>Attack</b>: {{card.attack}}</li>
          <li class="list-group-item">
            <b>Health</b>: {{card.health}}</li>
          <li class="list-group-item">
            <b>Defense</b>: {{card.defense}}</li>
        </ul>
      </div>
      </div>
  </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "Player",
  props: {
    msg: String
  },
  computed: {
    myPlayer() {
      if (this.$store.state.game.players) {
        return this.$store.state.game.players[0];
      }
      return;
    }
  },
  methods: {
    setActiveCard(card) {
      this.$store.dispatch("setActiveCard", card);
    }
  }
};
</script>

<style scoped>
.player-view {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.if {
  display: flex;
}
.name-stuff {
  padding-right: 5px;
}
</style>