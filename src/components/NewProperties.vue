<template>
  <section class="py-14 bg-leny-blue-900">
    <div class="container mx-auto">
      <div class="block md:flex items-center justify-between">
        <div class="text-center md:text-left mb-6 md:mb-0 w-full md:w-1/2">
          <h2 class="text-2xl md:text-h2xl uppercase text-white font-futura-ptmedium">
            Receive our <span class="text-leny-cyan-400">new properties</span>
          </h2>
          <p class="mb-0 text-white text-sm mt-1.5 font-futura-ptbook">
            Sign up to stay up to date and receive the latest properties on the
            real estate market
          </p>
        </div>
        <div class="w-full md:w-1/2 block md:flex md:space-x-3 lg:space-x-6">
          <input class="
              placeholder:text-sm placeholder:text-slate-400
              bg-white
              font-futura-ptlight
              w-full
              md:w-8/12
              border border-slate-300
              rounded-full
              py-3
              pl-9
              pr-3
              shadow-sm
              focus:outline-none
              focus:border-sky-500
              focus:ring-sky-500
              focus:ring-1
              sm:text-sm" placeholder="Your mail..." type="email" name="myEmail" />
          <a href="#" class="
              flex-auto
              font-futura-ptbook
              justify-center
              py-3
              px-8
              lg:px-4
              mt-5 block w-1/2 mx-auto
              md:mt-0 md:inline md:w-24 md:mx-0
              text-center
              font-regular
              text-sm text-white
              bg-leny-cyan-400
              rounded-full
              border border-leny-cyan-400
              hover:bg-transparent hover:text-leny-cyan-400
              shadow-md
              transition
              duration-300
            ">Notify me</a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "NewProperties",
};
</script>
