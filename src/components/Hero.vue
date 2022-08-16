<template>
  <section class="flex items-center md:min-h-[calc(100vh_-_5.625rem)] md:h-[calc(100vh_-_5.625rem)] mt-[5.5rem] md:overflow-hidden">
    <div class="container mx-auto">
      <div class="grid items-center md:grid-cols-5 grid-rows-1 gap-4">
        <div class="prose md:col-start-1 md:col-end-3 text-center md:text-left">
          <p class="text-sm md:text-base uppercase font-futura-ptmedium text-leny-blue-900 mb-0">your real estate ad aggregator,in brand</p>
          <img src="../assets/images/White_word.png" class="w-3/4 mx-auto md:mx-0">
          <!--<p class="text-7xl leading-none uppercase text-white drop-shadow-[0px_0px_1px_rgba(0,0,0,0.8)] stroke-1 mb-3">White</p>-->
          <p class="text-xs md:text-sm text-leny-gray-700 font-futura-ptlight mb-10">
            A customizable platform, in your name facilitation the search for your customers. Ads from more than 3000 real estate sites, grouped in one and the same place
          </p>
          <router-link to="/search" class="
              font-futura-ptbook
              py-3
              px-12
              w-48
              text-center
              font-regular
              text-sm text-white
              bg-leny-blue-800
              rounded-full
              border border-leny-blue-800
              hover:bg-transparent hover:text-leny-blue-800
              shadow-md
              transition
              duration-300">Try For Free</router-link>
        </div>
        <div class="justify-self-end md:col-start-3 md:col-end-6  order-first md:order-last">
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
