<script setup>
import {useScriptTag} from '@vueuse/core';

defineProps({
  /**
   * Url of the twitter timeline without 'twitter.com/'
   * @example TwitterDev/lists/national-parks?ref_src=twsrc%5Etfw
   */
  url: {type: String, required: true},
  /**
   * Link description to show if the timeline can't be loaded for some reason or is loading
   * @example 'A Twitter List by TwitterDev', 'Loading...'
   */
  description: {type: String, default: ''},
  /**
   * Height of the timeline in pixels (by default it is as high as needed to show all tweets)
   * @example 720
   */
  height: {type: String, default: ''},
  /**
   * Width of the timeline
   * @example 720
   */
  width: {type: String, default: ''},
  /**
   * Language key to use by twitter timeline
   * 
   * By default the browser language of the user will be chosen or if not detectable English
   * @example 'en', 'de', 'es', 'fr'
   */
  lang: {type: String, default: ''},
  /**
   * Theme to use by twitter timeline
   * 
   * By default the system settings of the user will be chosen or if not detectable the light theme
   * @values '', 'light', 'dark',
   */
  theme: {type: String, default: ''},
  /**
   * If tracking by Twitter should be prevented
   */
  doNotTrack: {type: Boolean, default: false},
});

useScriptTag('https://platform.twitter.com/widgets.js');
</script>

<template>
  <!-- The class 'twitter-timeline' has to been set to get twitter recogize the element -->
  <a
    class="twitter-timeline"
    :href="'https://twitter.com/' + url"
    :data-height="height"
    :data-width="width"
    :data-lang="lang"
    :data-theme="theme"
    :data-dnt="doNotTrack ? 'true' : 'false'"
  >{{ description }}</a>
</template>

<style scoped>
</style>
