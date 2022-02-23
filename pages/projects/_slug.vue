<template>
  <div class="bg-slate-50 dark:bg-zinc-800 ">
    <NavBar />
    <div class="mx-12">
      <NuxtLink to="/project" class="bg-rose-500 text-white px-4 py-2 mx-2">
        &larr; Zurück
      </NuxtLink>
      <div class="mt-8">
        <h1 class="text-5xl font-extrabold mb-2 font-spacegrotesk">
          {{ project.title }}
        </h1>
        <h3>
          {{ project.headline }}
        </h3>
        <p>Article last updated: {{ project.year }}</p>
        <nuxt-content :document="project" class="mt-4 prose" />
      </div>
    </div>
    <MainFooter />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const project = await $content('projects', params.slug).fetch()
    return { project }
  }
}
</script>
