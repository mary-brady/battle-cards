<template>
    <div class="opponent-view">
      <p>{{myOpponent.name}}</p>
      <p>Remaining Cards: {{myOpponent.remainingCards}}</p>
      <div v-for="card in myOpponent.hand" :key="card.name">
        <div class="card" style="width: 10rem;">
          <img class="card-img-top" :src="card.img" alt="">
      <div class="card-body">
        <h5 class="card-title"><b>{{card.name}}</b></h5>
      </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><b>Attack</b>: {{card.attack}}</li>
    <li class="list-group-item"><b>Health</b>: {{card.health}}</li>
    <li class="list-group-item"><b>Defense</b>: {{card.defense}}</li>
  </ul>
</div> 
    <button @click="setOpponentCard(card)">Play Card</button>
    </div>
</div>
</template>

<script>
export default {
  name: "Opponent",
  props: {
    msg: String
  },
  computed: {
    myOpponent() {
      return this.$store.state.game.players[1];
    }
  },
  methods: {
    setOpponentCard(card) {
      this.$store.dispatch("setOpponentCard", card);
    }
  }
};
</script>

<style scoped>
.opponent-view {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
