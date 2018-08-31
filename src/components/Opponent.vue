<template>
    <div class="opponent-view">
        <div class="name-stuff">
            <p>{{myOpponent.name}}</p>
            <p>Remaining Cards: {{myOpponent.remainingCards}}</p>
        </div>
        <div class="card-deck">
            <div v-for="card in myOpponent.hand" :key="card.name">
                    <div class="card border-dark mb-3" style="width: 10rem;">
                        <img v-if="!card.visible" src="../assets/card.png" alt="back of card" class="card-back">
                    <img v-if="card.visible" class="card-img-top" :src="card.img" alt="">
                    <div v-if="card.visible" class="card-body">
                        <h5 class="card-title">
                            <b>{{card.name}}</b>
                        </h5>
                    </div>
                    <ul v-if="card.visible" class="list-group list-group-flush">
                        <li class="list-group-item">
                            <b>Attack</b>: {{card.attack}}</li>
                        <li class="list-group-item">
                            <b>Health</b>: {{card.health}}</li>
                        <li class="list-group-item">
                            <b>Defense</b>: {{card.defense}}</li>
                    </ul>
                </div>
                <div>
                    <button @click="setOpponentCard(card)">Play Card</button>
                </div>
            </div>
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
  justify-content: center;
  align-items: center;
}

.name-stuff {
  margin: 5px;
}

.card-deck {
  display: flex;
}

.card-back {
  max-height: 300px;
}
</style>