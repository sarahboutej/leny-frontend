<template>
  <section>
    <div class="grid grid-cols-1 md:grid-cols-2 min-h-screen items-center sm:gap-4">
      <div class="
          md:flex
          items-center
          justify-center
          md:min-h-screen
          bg-dark-login-image bg-center bg-no-repeat bg-cover
        ">
        <div class="lg:w-4/5 py-12 px-4 lg:px-0 lg:py-0">
          <h1 class="text-white text-h2xl lg:text-h1xl font-futura-ptmedium mb-5">
            Your clients will be able to search all real estate websites at once
          </h1>
          <h2 class="text-white text-2xl lg:text-h2xl font-futura-ptmedium mb-3">
            14 day free trial
          </h2>
          <h2 class="text-white text-2xl lg:text-h2xl font-futura-ptmedium pb-6 border-b">
            Without engagement
          </h2>
          <ul class="mt-3 font-futura-ptbook">
            <li class="text-subtitle lg:text-2xl text-white">- 900+ ad sources</li>
            <li class="text-subtitle lg:text-2xl text-white">- Unlimited email sends</li>
            <li class="text-subtitle lg:text-2xl text-white">- Selection of ads in a basket</li>
            <li class="text-subtitle lg:text-2xl text-white">- Personalization + White Label</li>
            <li class="text-subtitle lg:text-2xl text-white">- Opportunities</li>
          </ul>
        </div>
      </div>
      <div class="
          md:min-h-screen
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
          py-6 sm:py-0
        ">
        <img src="../assets/images/full_logo.png" alt="" class="w-20 mx-auto mb-3" />
        <p class="
            font-futura-ptbook
            uppercase
            text-sm
            sm:text-base
            text-leny-gray-800
            pb-5
            before:leny-gray-700 before:border-leny-gray-600
            relative
            before:w-11
            before:border-b-2
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
              <svg class="w-4 h-4  text-leny-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
            <input class="
                border-0
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
              <svg class="w-4 h-4  text-leny-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <input class="
                border-0
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
              " placeholder="Email..." type="email" name="myEmail" />
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
              <svg class="w-4 h-4  text-leny-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <input class="
                border-0
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
          <router-link to="/payment" class="
              font-futura-ptbook
              py-3
              px-12
              w-24
              text-center
              font-regular
              text-xs
              sm:text-sm
              text-white
              bg-leny-blue-800
              rounded-full
              border border-leny-blue-800
              hover:bg-transparent hover:text-leny-blue-800
              transition
              duration-300
            ">Sign Up</router-link>
          <p class="
              font-futura-ptbook
              signup
              text-sm
            text-leny-gray-800
              mt-6
              font-light
            ">
            If you have an account?
            <router-link to="/login" class="text-leny-blue-800 font-futura-ptbook">
              Login
            </router-link>
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LoginPage",
};
</script>
