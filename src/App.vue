<script setup>
import TwitterTimeline from './components/TwitterTimeline.vue';
</script>

<template>
  <h1>Vue Twitter Timeline</h1>
  <TwitterTimeline
    url="TwitterDev/lists/national-parks?ref_src=twsrc%5Etfw"
    description="Loading..."
    height="480"
    width="520"
    lang="de"
    theme="dark"
    doNotTrack
  />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 2rem;
}
</style>
