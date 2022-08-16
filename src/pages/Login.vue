<template>
  <section>
    <div class="grid grid-cols-1 md:grid-cols-2 min-h-screen items-center sm:gap-4">
      <div class="
          hidden
          md:flex
          min-h-screen
          bg-login-image bg-center bg-no-repeat bg-cover
        "></div>
      <div class="
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
          md:pl-0
          bg-login-image
          bg-center
          bg-no-repeat
          bg-cover
          md:bg-white
          md:bg-login-sm
        ">
        <img src="../assets/images/full_logo.png" alt="" class="hidden md:block w-22 mx-auto mb-3" />
        <img src="../assets/images/white_full_logo.png" alt="" class="block md:hidden w-22 mx-auto mb-3" />
        <p class="
            font-futura-ptbook
            uppercase
            text-sm md:text-base text-white md:text-leny-gray-800
            pb-5
            before:leny-gray-700 before:border-white md:before:border-leny-gray-600
            relative
            before:w-11
            before:border-b
            before:absolute
            before:bottom-0
            before:inset-x-0
            mb-10
            before:mx-auto
          ">
          Welcome to leny for real estate
        </p>
        <form action="" class="w-full lg:w-84">
          <div class="relative">
            <div class="
                flex
                absolute
                inset-y-0
                left-0
                items-center
                pl-4
                pointer-events-none
                w-full
                mb-4
              ">
              <svg class="w-4 h-4 text-leny-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
            <input class="
                placeholder:text-xs placeholder:text-slate-400 
                font-futura-ptlight
                bg-white
                rounded-full
                py-3
                md:py-2.5
                pl-11
                pr-3
                mb-4
                w-full
                shadow-[0px_0px_6px_rgba(0,0,0,0.29)]
                focus:outline-none
                focus:border-sky-500
                focus:ring-sky-500
                focus:ring-1
                md:text-sm
              " placeholder="Username..." type="text" name="myUserName" />
          </div>
          <div class="relative mb-7">
            <div class="
                flex
                absolute
                inset-y-0
                left-0
                items-center
                pl-4
                pointer-events-none
                w-full
                mb-4
              ">
              <svg class="w-4 h-4 text-leny-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <input class="
                placeholder:text-xs placeholder:text-slate-400
                font-futura-ptlight
                bg-white
                rounded-full
                py-3
                md:py-2.5
                pl-11
                pr-3
                mb-4
                w-full
                shadow-[0px_0px_6px_rgba(0,0,0,0.29)]
                focus:outline-none
                focus:border-sky-500
                focus:ring-sky-500
                focus:ring-1
                md:text-sm
              " placeholder="Password..." type="password" name="myPassword" />
          </div>
          <a href="/" class="
              font-futura-ptbook
              py-3
              px-14
              w-24
              text-center
              font-normal
              text-xs sm:text-sm text-white
              bg-leny-blue-800
              rounded-full
              border border-leny-blue-800
              hover:bg-transparent hover:text-leny-blue-800
              shadow-md
              transition
              duration-300
            ">Login</a>
          <a href="#" class="
              font-futura-ptbook
              text-sm text-white md:text-leny-blue-800
              block
              mt-8
              underline underline-offset-1
            ">Forgot Password</a>
        </form>
        <p class="
            signup
            text-sm text-white md:text-leny-gray-800
            font-futura-ptlight
            absolute
            bottom-10
          ">
          Have an account?
          <router-link to="/search" class="text-white sm:text-leny-blue-800 font-futura-ptbook">Sign up</router-link>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LoginPage",
};
</script>
