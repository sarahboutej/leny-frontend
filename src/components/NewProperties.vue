<template>
  <section class="py-14 bg-leny-blue-900">
    <div class="container mx-auto">
      <div class="grid grid-cols-5 grid-rows-1 gap-4 items-center">
        <div class="box col-start-1 col-end-3">
          <h2 class="text-h2xl uppercase text-white font-medium">
            Receive our <span class="text-leny-cyan-400">new properties</span>
          </h2>
          <p class="mb-0 text-white text-sm">
            Sign up to stay up to date and receive the latest properties on the
            real estate market
          </p>
        </div>
        <div class="box col-start-3 col-end-6 space-x-6">
          <input class="
              placeholder:text-xs placeholder:text-slate-400
              bg-white
              w-3/4
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
              py-3
              px-12
              w-24
              text-center
              font-regular
              text-xs text-white
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
