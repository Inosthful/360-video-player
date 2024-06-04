<template>
  <div id="player">gg</div>
  fff
</template>

<script setup lang="ts">
import Clappr from "clappr";
import Video360 from "clappr-video360";
import elephant from "../assets/elephant.mp4";
import { onMounted } from "vue";

onMounted(() => {
  var Video360Url = elephant;

  // Configure your Clappr player.
  var PlayerInstance = new Clappr.Player({
    source: Video360Url,
    plugins: {
      container: [Video360],
    },
    parentId: "#player",
  });

  // Important to disable the click to pause native plugin of clappr
  // otherwise you won't be able to use correctly the player

  PlayerInstance.getPlugin("click_to_pause").disable();
});
</script>
<style scoped></style>
