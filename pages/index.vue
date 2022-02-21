<template>
  <div class="bg-slate-50 dark:bg-zinc-800 ">
    <NavBar />
    <MainPage :projects="projects" :technologies="getUsedTechnologies" />
    <MainFooter />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData ({ $content, params }) {
    const hello = await $content('hello').fetch()
    const projects = await $content('projects').fetch()
    return {
      hello, projects
    }
  },
  computed: {
    getUsedTechnologies () {
      const usedTechnologies = {}
      this.projects.forEach((element) => {
        element.technologies.forEach((elem) => {
          if (usedTechnologies[elem]) {
            usedTechnologies[elem]++
          } else {
            usedTechnologies[elem] = 1
          }
        })
      })

      const results = []
      for (const key in usedTechnologies) {
        results.push({ facilityId: key, responseCount: usedTechnologies[key] })
      }

      return results
    }
  }
}
</script>
