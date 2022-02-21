<template>
  <div>
    <h1 class="text-center text-5xl font-bold mb-8">
      Projekte
    </h1>
    <div class="grid grid-cols-4">
      <div v-for="project in projects" :key="project.slug" class="bg-blue-600 p-4">
        <div>{{ project.title }}</div>
        <NuxtLink :to="project.path">
          Lies mehr.
        </NuxtLink>
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
  }
}
</script>
