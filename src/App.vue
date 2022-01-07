<template>
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

<script>
import TwitterTimeline from './components/TwitterTimeline.vue'

export default {
  name: 'App',
  components: {
    TwitterTimeline
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
