<template>
  <div class="bg-neutral-50 dark:bg-neutral-800">
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
