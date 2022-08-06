<template>
  <section class="flex items-center min-h-[calc(100vh_-_5.625rem)] h-[calc(100vh_-_5.625rem)] mt-[5.625rem] overflow-hidden">
    <div class="container mx-auto">
      <div class="grid items-center grid-cols-5 grid-rows-1 gap-4">
        <div class="prose col-start-1 col-end-3">
          <p class="text-base uppercase font-medium text-leny-blue-900 mb-0">your real estate ad aggregator,in brand</p>
          <p class="text-7xl leading-none uppercase text-white drop-shadow-[0px_0px_1px_rgba(0,0,0,0.8)] stroke-1 mb-3">White</p>
          <p class="text-sm text-leny-gray-700 font-light mb-10">
            A customizable platform, in your name facilitation the search for your customers. Ads from more than 3000 real estate sites, grouped in one and the same place
          </p>
          <a href="/search" class="
              py-3
              px-12
              w-48
              text-center
              font-regular
              text-xs text-white
              bg-leny-blue-800
              rounded-full
              border border-leny-blue-800
              hover:bg-transparent hover:text-leny-blue-800
              shadow-md
              transition
              duration-300">Try For Free</a>
        </div>
        <div class="justify-self-end col-start-3 col-end-6">
          <img src="../assets/images/hero.jpg" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "HeroItem",
};
</script>