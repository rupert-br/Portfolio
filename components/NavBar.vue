<template>
  <nav class="px-4 sm:px-4 py-8">
    <div class="container flex flex-wrap justify-between items-center mx-auto font-spacegrotesk">
      <a href="#" class="flex text-3xl md:text-5xl font-extrabold p-4 rounded-lg text-neutral-800 dark:text-rose-500 hover:text-rose-500 dark:hover:text-rose-600 transition">
        RB
      </a>
      <div class="flex md:order-2">
        <a href="mailto:rupert.brandstaetter@gmail.com" class="text-white bg-rose-500 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 px-3 py-2 text-center mr-3 dark:bg-rose-500 dark:hover:bg-rose-700 dark:focus:ring-rose-800 transition">
          Kontaktiere mich!
        </a>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu"
          aria-expanded="false"
          @click="toggleNavbar"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            v-show="!isOpen"
            id="hamburger-icon"
            class="w-6 h-6 transition"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          ><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" /></svg>
          <svg
            v-show="isOpen"
            id="close-icon"
            class="w-6 h-6 transition"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          ><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
        </button>
      </div>
      <div id="mobile-menu" class="justify-between items-center w-full md:flex md:w-auto md:order-1" :class="{ hidden : !isOpen}">
        <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <!-- <li>
            <NuxtLink to="/about" href="#" class="block text-lg py-2 pr-4 pl-3 text-zinc-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-rose-600 md:p-0 md:dark:hover:text-white dark:text-zinc-50 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              Über mich
            </NuxtLink>
          </li> -->
          <li>
            <NuxtLink to="/project" href="#" class="block text-lg py-2 pr-4 pl-3 text-zinc-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-rose-600 md:p-0 md:dark:hover:text-white dark:text-zinc-50 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              Projekte
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/" href="#" class="block text-lg py-2 pr-4 pl-3 text-zinc-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-rose-600 md:p-0 md:dark:hover:text-white dark:text-zinc-50 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              Blog
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleNavbar () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
