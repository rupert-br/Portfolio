<template>
  <div class="px-2 md:px-40">
    <div class="flex flex-col md:flex-row pt-16 pb-16 items-center mx-auto">
      <div class="basis-1/2 text-center">
        <div class="text-6xl font-bold pb-6 font-spacegrotesk dark:text-white">
          Hello, I'm Rupert
        </div>
        <div class="text-2xl font-mono mt-2 dark:text-white">
          <span class="py-3 px-4 decoration-green-500 underline underline-offset-4 decoration-solid decoration-4 tracking-tighter">Web Developer</span>
        </div>
      </div>
      <div class="basis-1/2">
        <div class="h-64 w-64 ml-4 shadow-xl bg-green-500 shadow-green-300/80 text-white text-6xl font-extrabold mt-12 md:mt-0 flex items-center justify-center">
          <img src="/images/pixel_me.png" alt="Pixel Image Rupert" class="object-clip">
        </div>
      </div>
    </div>

    <div class="flex flex-col mx-auto">
      <h1 class="text-center text-5xl font-bold mt-20 font-spacegrotesk">
        Letzte Projekte
      </h1>
      <NuxtLink to="/project" class="flex justify-center mt-2 text-blue-600">
        Alle Projekte ansehen &rarr;
      </NuxtLink>
    </div>

    <ProjectsSlider :projects="projects" />

    <div class="mt-20 mb-20">
      <h1 class="text-center text-5xl font-bold mb-12 font-spacegrotesk">
        Verwendete Technologien
      </h1>
      <div class="flex flex-wrap space-x-3 justify-center">
        <div v-for="(key, tech) in technologies" :key="tech" class="my-2 bg-green-500 shadow-md shadow-green-500/30 hover:bg-green-700 transition px-4 py-2 text-white text-xl">
          {{ tech }}
        </div>
      </div>
    </div>

    <div class="mt-28 mb-10 px-4">
      <div class="text-center text-6xl font-bold font-spacegrotesk">
        Kontakt
      </div>
      <div class="p-5 text-center space-y-8">
        <div>
          Du will zusammen arbeiten oder hast Fragen?
        </div>
        <div class="mb-6">
          <a href="mailto:rupert.brandstaetter@gmail.com" class="bg-blue-600 px-4 py-3 text-3xl text-white">
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
