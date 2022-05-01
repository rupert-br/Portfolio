<template>
  <div id="#project-container" class="max-w-7xl mx-auto">
    <div>
      <h1 class="text-center font-spacegrotesk text-5xl font-bold mb-12 mt-10 dark:text-white">
        Projekte
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-3 mx-8 md:mx-16 lg:mx-20 gap-4 gap-y-6 mb-24 dark:text-neutral-300">
        <NuxtLink v-for="project in projects" :key="project.slug" :to="project.path" class="group">
          <img :src="`/images/projects/${project.project_name}/${project.hero_image}`" alt="" class="group-hover:opacity-90 transition">
          <div class="px-4">
            <div class="text-xl font-bold group-hover:text-rose-800 transition">
              {{ project.title }}
            </div>
            <div class="font-extralight text-sm group-hover:text-rose-800 transition">
              {{ project.headline }}
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'

export default {
  props: {
    projects: {
      type: Array,
      required: true
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      gsap.from('.group', { duration: 1, scale: 0.5, opacity: 0, y: 200, stagger: 0.5 })
    }
  }

}
</script>
