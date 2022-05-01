<template>
  <div id="blog-container" class="px-2 md:px-40 h-screen mt-24 text-4xl font-spacegrotesk dark:text-white">
    Erster Blog-Eintrag folgt in Kürze ...
  </div>
</template>

<script>
import { gsap } from 'gsap'

export default {
  mounted () {
    this.init()
  },
  methods: {
    init () {
      gsap.from('#blog-container', {
        opacity: 0,
        y: 200,
        duration: 1.0,
        delay: 1.5
      })
    }
  }
}
</script>
