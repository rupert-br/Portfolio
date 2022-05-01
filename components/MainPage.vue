<template>
  <div class="px-2 md:px-40">
    <div class="mt-16 mb-20 md:mt-20 md:mb-20 mx-auto max-w-6xl">
      <div class="flex flex-col md:flex-row items-center mx-auto">
        <div id="hero">
          <div class="text-4xl md:text-6xl font-bold md:pb-6 font-spacegrotesk dark:text-white">
            Hello, I'm Rupert
          </div>
          <div class="text-2xl font-mono mt-2 dark:text-white">
            <span class="py-3 decoration-rose-500 underline underline-offset-4 decoration-solid decoration-4 tracking-tighter">Web Developer</span>
          </div>
        </div>
      </div>
    </div>

    <div id="projects-section" class="flex flex-col mx-auto mt-32">
      <h1 class="text-center text-4xl md:text-5xl font-bold font-spacegrotesk dark:text-white">
        Aktuelle Projekte
      </h1>
      <NuxtLink to="/project" class="flex justify-center mt-2 text-neutral-500 hover:text-rose-600 dark:text-neutral-300">
        Alle Projekte ansehen &rarr;
      </NuxtLink>
    </div>

    <ProjectsSlider id="projects-slider" :projects="projects" />

    <div id="technologien" class="mt-32 mb-20">
      <h1 class="text-center text-4xl md:text-5xl font-bold mb-12 font-spacegrotesk dark:text-white">
        Verwendete Technologien
      </h1>
      <div class="flex flex-wrap space-x-3 justify-center px-4 md:px-24">
        <div v-for="(key, tech) in technologies" :key="tech" class="cursor-default my-2 bg-neutral-700 shadow-md shadow-neutral-500/30 dark:shadow-lg dark:shadow-rose-500/20 hover:bg-rose-600 transition px-4 py-2 text-white text-xl">
          {{ tech }}
        </div>
      </div>
    </div>

    <div id="kontakt" class="mt-28 mb-20 px-4">
      <div class="text-center text-4xl md:text-5xl font-bold font-spacegrotesk dark:text-white">
        Kontakt
      </div>
      <div class="p-5 text-center space-y-8 dark:text-neutral-300">
        <div>
          Du willst zusammen arbeiten oder hast Fragen?
        </div>
        <div class="bg-rose-500 hover:bg-rose-700 px-6 transition-all py-3 text-3xl cursor-pointer max-w-fit flex justify-center mx-auto">
          <a href="mailto:rupert.brandstaetter@gmail.com" class="text-white pr-2">
            Sag Hallo!
          </a>
          <div class="animate-wiggle">
            &#128075;
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  props: {
    projects: {
      type: Array,
      required: true
    },
    technologies: {
      type: Object,
      required: true
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      gsap.from('#hero', {
        opacity: 0,
        x: 20,
        duration: 1,
        delay: 1.4
      })
      gsap.from('#projects-section', {
        opacity: 0,
        x: -200,
        duration: 1.5,
        delay: 1.5
      })
      gsap.from('#projects-slider', {
        opacity: 0,
        y: 300,
        duration: 1.5,
        delay: 1.5
      })
      gsap.from('#technologien', {
        scrollTrigger: {
          trigger: '#technologien',
          start: 'center bottom',
          end: 'center top'
        },
        x: 200,
        delay: 0.4,
        duration: 1.5,
        opacity: 0,
        ease: 'power2'
      })
      gsap.from('#kontakt', {
        scrollTrigger: '#kontakt',
        x: -200,
        delay: 0.4,
        duration: 1.5,
        opacity: 0,
        ease: 'power2'
      })
    }
  }
}
</script>
