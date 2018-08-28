<template>
  <div class="home">
    <h1> hello </h1>
 
  </div>
</template>

<script>
// @ is an alias to /src
import Player from "@/components/Player.vue";
import Opponent from "@/components/Opponent.vue";

export default {
  name: "home",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {
    Opponent,
    Player
  }
};
</script>
