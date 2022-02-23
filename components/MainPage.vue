<template>
  <div class="px-2 md:px-40">
    <div class="mt-16 mb-20 md:mt-20 md:mb-20 mx-auto max-w-6xl">
      <div class="flex flex-col md:flex-row items-center mx-auto">
        <div class="">
          <div class="text-4xl md:text-6xl font-bold md:pb-6 font-spacegrotesk dark:text-white">
            Hello, I'm Rupert
          </div>
          <div class="text-2xl font-mono mt-2 dark:text-white">
            <span class="py-3 decoration-rose-500 underline underline-offset-4 decoration-solid decoration-4 tracking-tighter">Web Developer</span>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col mx-auto mt-32">
      <h1 class="text-center text-4xl md:text-5xl font-bold font-spacegrotesk">
        Akutelle Projekte
      </h1>
      <NuxtLink to="/project" class="flex justify-center mt-2 text-neutral-500 hover:text-rose-600">
        Alle Projekte ansehen &rarr;
      </NuxtLink>
    </div>

    <ProjectsSlider :projects="projects" />

    <div class="mt-32 mb-20">
      <h1 class="text-center text-5xl font-bold mb-12 font-spacegrotesk">
        Verwendete Technologien
      </h1>
      <div class="flex flex-wrap space-x-3 justify-center px-4 md:px-24">
        <div v-for="(key, tech) in technologies" :key="tech" class="my-2 bg-neutral-600 shadow-md shadow-neutral-500/30 hover:bg-rose-600 transition px-4 py-2 text-white text-xl">
          {{ tech }}
        </div>
      </div>
    </div>

    <div class="mt-28 mb-20 px-4">
      <div class="text-center text-5xl font-bold font-spacegrotesk">
        Kontakt
      </div>
      <div class="p-5 text-center space-y-8">
        <div>
          Du willst zusammen arbeiten oder hast Fragen?
        </div>
        <div class="mb-6">
          <a href="mailto:rupert.brandstaetter@gmail.com" class="bg-rose-600 hover:bg-rose-700 px-6 py-3 text-3xl text-white">
            Sag Hallo! &#128075;
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
  }
}
</script>
