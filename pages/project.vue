<template>
  <div class="bg-slate-50 dark:bg-zinc-800 ">
    <NavBar />
    <ProjectsPage :projects="projects" />
    <MainFooter />
  </div>
</template>

<script>
export default {
  name: 'ProjectsSite',
  async asyncData ({ $content, params }) {
    const projects = await $content('projects').fetch()
    return {
      projects
    }
  }
}
</script>
