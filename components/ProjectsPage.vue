<template>
  <div>
    <h1 class="text-center font-spacegrotesk text-5xl font-bold mb-12 mt-10">
      Projekte
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-3 mx-8 md:mx-24 gap-4 mb-24">
      <NuxtLink v-for="project in projects" :key="project.slug" :to="project.path" class="group">
        <img :src="`/images/projects/${project.project_name}/${project.hero_image}`" alt="" class="group-hover:opacity-90 transition">
        <div class="p-2">
          <div class="text-xl font-bold group-hover:text-rose-500 transition">
            {{ project.title }}
          </div>
          <div class="font-extralight text-sm group-hover:text-rose-500 transition">
            {{ project.headline }}
          </div>
        </div>
      </NuxtLink>
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
  }
}
</script>
