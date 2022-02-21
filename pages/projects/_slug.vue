<template>
  <div class="bg-slate-50 dark:bg-zinc-800 ">
    <NavBar />
    <NuxtLink to="/project">
      Zurück
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
