<template>
  <div class="bg-slate-50 dark:bg-zinc-800 ">
    <NavBar />
    <div class="mx-4 md:mx-20 mt-5 md:mt-10">
      <NuxtLink to="/project" class="bg-rose-500 text-white mx-2 md:mx-12 py-2 px-3">
        &larr; Zurück
      </NuxtLink>
      <div class="mt-8 grid grid-cols-1 md:grid-cols-2 mb-20 divide-y md:divide-y-0 divide-rose-500/20 md:divide-x md:divide-rose-500/20">
        <div class="px-2 md:px-12">
          <div class="text-md mb-2">
            {{ project.year }}
          </div>
          <h1 class="text-4xl md:text-5xl font-extrabold mb-2 font-spacegrotesk">
            {{ project.title }}
          </h1>
          <h3 class="mb-2">
            {{ project.headline }}
          </h3>
          <img :src="`/images/projects/${project.project_name}/${project.hero_image}`" alt="" class="group-hover:opacity-90 transition">
          <div class="mt-2 mb-4">
            <a :href="project.url" class="hover:text-rose-500 uppercase transition font-bold hover:underline text-lg">{{ project.urlCopy }}</a>
          </div>
        </div>
        <div class="px-2 md:px-12 mt-0 md:mt-16">
          <nuxt-content :document="project" class="mt-4 prose" />
          <div>
            <h3 class="font-bold mt-4">
              Verwendete Technologien
            </h3>
            <div class="flex flex-wrap space-x-3 mt-2">
              <div v-for="tech in project.technologies" :key="tech" class="bg-rose-500 px-3 py-2 mb-2 text-sm text-white">
                {{ tech }}
              </div>
            </div>
          </div>
        </div>
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
