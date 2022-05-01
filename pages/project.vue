<template>
  <div class="bg-neutral-50 dark:bg-neutral-800">
    <NavBar />
    <ProjectsPage id="projects-page" :projects="projects" />
    <MainFooter />
  </div>
</template>

<script>
import { gsap } from 'gsap'

export default {
  name: 'ProjectsSite',
  async asyncData ({ $content, params }) {
    const projects = await $content('projects').fetch()
    return {
      projects
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      gsap.from('#projects-page', {
        opacity: 0,
        y: 200,
        duration: 1,
        delay: 0.5
      })
    }
  }
}
</script>
