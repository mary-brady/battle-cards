<template>
  <div class="player-view">
    <div>
      {{myPlayer}}
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
  }
};
</script>

<style scoped>
</style>
