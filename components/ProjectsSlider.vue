<template>
  <div class="container flex items-center relative mt-6 mx-auto">
    <button id="slide-left" class="absolute shadow-xl left-0 w-14 h-14 mx-auto bg-neutral-50 border border-neutral-300 rounded-full flex justify-center items-center text-3xl hover:text-rose-600 transition" @click="scrollLeft()">
      &larr;
    </button>
    <button id="slide-right" class="absolute shadow-xl right-0 w-14 h-14 mx-auto bg-neutral-50 border border-neutral-300 rounded-full flex justify-center items-center text-3xl hover:text-rose-600 transition" @click="scrollRight()">
      &rarr;
    </button>
    <div id="slide-container" class="overflow-x-scroll scroll-smooth flex">
      <div v-for="project in projects" :key="project.slug" class="flex-none m-5 w-96">
        <NuxtLink :to="`projects/${project.slug}`" class="group">
          <img class="h-auto w-auto" :src="`/images/projects/${project.project_name}/${project.hero_image}`">
          <div class="px-5 py-2">
            <div class="text-xl mt-4 group-hover:text-rose-800 font-extrabold uppercase transition dark:text-white">
              {{ project.title }}
            </div>
            <div class="mb-1 text-md font-light group-hover:text-rose-800 transition dark:text-neutral-300">
              {{ project.headline }}
            </div>
          </div>
        </NuxtLink>
        <a :href="project.url" class="px-5 py-2 uppercase tracking-tighter font-semibold hover:text-rose-800 transition hover:underline dark:text-white">
          {{ project.urlCopy }}
        </a>
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
    }
  },
  methods: {
    scrollLeft () {
      document.getElementById('slide-container').scrollLeft -= 200
    },
    scrollRight () {
      document.getElementById('slide-container').scrollLeft += 200
    }
  }
}
</script>
