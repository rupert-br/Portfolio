<template>
  <div class="bg-slate-50 dark:bg-zinc-800 ">
    <NavBar />
    <NuxtLink to="/project" class="bg-blue-600 text-white rounded-lg p-1 mx-2 my-1">
      &larr; Zurück
    </NuxtLink>
    <article>
      <h1 class="text-5xl">
        {{ project.title }}
      </h1>
      <h3>
        {{ project.headline }}
      </h3>
      <nuxt-content :document="project" />
    </article>
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
