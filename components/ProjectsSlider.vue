<template>
  <div class="container flex items-center relative mt-8 mx-auto">
    <button id="slide-left" class="absolute shadow-xl left-0 w-14 h-14 mx-auto bg-blue-50 border border-slate-300 rounded-full flex justify-center items-center text-3xl hover:text-blue-600 transition" @click="scrollLeft()">
      &larr;
    </button>
    <button id="slide-right" class="absolute shadow-xl right-0 w-14 h-14 mx-auto bg-blue-50 border border-slate-300 rounded-full flex justify-center items-center text-3xl hover:text-blue-600 transition" @click="scrollRight()">
      &rarr;
    </button>
    <div id="slide-container" class="overflow-x-scroll scroll-smooth flex">
      <div class="flex-none m-5">
        <img class="h-64 w-auto rounded-lg" src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea">
        <div class="p-2">
          <div class="text-xl mt-4 text-blue-600 font-extrabold uppercase">
            CHAGA Yoga
          </div>
          <div class="mb-3 text-xl font-light">
            Lorem ipsum dolor sit amet consectetur.
          </div>
          <a href="https://chaga.yoga" class="uppercase tracking-tighter font-semibold hover:text-blue-600 transition hover:underline">
            chaga.yoga
          </a>
        </div>
      </div>
      <div class="flex-none m-5">
        <img class="h-64 w-auto rounded-lg" src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea">
      </div>
      <div class="flex-none m-5">
        <img class="h-64 w-auto rounded-lg" src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollLeft () {
      document.getElementById('slide-container').scrollLeft -= 200
    },
    scrollRight () {
      document.getElementById('slide-container').scrollLeft += 200
    }
  }
}
</script>
