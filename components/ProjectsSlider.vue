<template>
  <div class="container flex items-center relative mt-8 mx-auto">
    <button id="slide-left" class="absolute shadow-xl left-0 w-14 h-14 mx-auto bg-blue-50 rounded-full flex justify-center items-center text-3xl hover:text-blue-600 transition" @click="scrollLeft()">
      &larr;
    </button>
    <button id="slide-right" class="absolute shadow-xl right-0 w-14 h-14 mx-auto bg-blue-50 rounded-full flex justify-center items-center text-3xl" @click="scrollRight()">
      &rarr;
    </button>
    <div id="slide-container" class="overflow-x-scroll scroll-smooth flex">
      <div class="flex-none m-5">
        <img class="h-64 w-auto" src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea">
        <div class="text-lg mt-4 text-blue-600 font-extrabold uppercase">
          TEST
        </div>
        <div class="mb-3 text-xl">
          Lorem ipsum dolor sit amet consectetur.
        </div>
        <a href="https://chaga.yoga" class="uppercase tracking-tighter font-semibold hover:text-blue-600 transition hover:underline">
          chaga.yoga
        </a>
      </div>
      <div class="flex-none m-5">
        <img class="h-64 w-auto" src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea">
      </div>
      <div class="flex-none m-5">
        <img class="h-64 w-auto" src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea">
      </div>
      <div class="flex-none h-60 w-96 bg-blue-600 m-5">
        4
      </div>
      <div class="flex-none h-60 w-96 bg-blue-600 m-5">
        5
      </div>
      <div class="flex-none h-60 w-96 bg-blue-600 m-5">
        6
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
