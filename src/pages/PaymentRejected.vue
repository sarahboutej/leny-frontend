<template>
  <section>
    <div class="grid grid-cols-7 min-h-screen items-center sm:gap-4">
      <div class="
          hidden
          sm:flex
          min-h-screen
          col-start-1 col-end-4
          bg-dark-login-image bg-center bg-no-repeat bg-cover
        "></div>
      <div class="
          col-start-1 col-end-8
          sm:col-start-4 sm:col-end-8
          min-h-screen
          flex flex-col
          items-center
          justify-center
          text-center
          mx-auto
          w-full
          pr-4
          lg:pr-0
          pl-4
          sm:pl-0
          bg-dark-login-image
          bg-center
          bg-no-repeat
          bg-cover
          sm:bg-white
          sm:bg-login-sm
        ">
        <img src="../assets/images/full_logo.png" alt="" class="hidden sm:block w-22 mx-auto mb-3" />
        <img src="../assets/images/white_full_logo.png" alt="" class="block sm:hidden w-22 mx-auto mb-3" />
        <p class="
            uppercase
            text-sm sm:text-base text-white sm:text-leny-gray-800
            pb-5
            before:leny-gray-700 before:border-leny-gray-600
            relative
            before:w-11
            before:border-b-2
            before:absolute
            before:bottom-0
            before:inset-x-0
            mb-4
            sm:mb-10
            before:mx-auto
          ">
          Welcome to leny for real estate
        </p>
        <div>
          <p class="text-h2xl text-leny-cyan-400 sm:text-leny-blue-800 font-medium mb-6">Rejected</p>
          <p class="text-sm sm:text-base text-white sm:text-leny-gray-800 font-medium mb-3">Payment not submitted</p>
          <p class="text-xs sm:text-sm text-white sm:text-leny-gray-800">“Please check your mail”</p>
          <a href="#" class="
              text-sm text-leny-cyan-400 sm:text-leny-blue-800
              block
              mt-8
              underline underline-offset-1
            ">Click Here</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LoginPage",
};
</script>
