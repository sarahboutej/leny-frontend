<template>
  <section>
    <div class="grid grid-cols-7 min-h-screen items-center sm:gap-4">
      <div class="sm:flex items-center justify-center sm:min-h-screen col-start-1 col-end-8 sm:col-start-1 sm:col-end-4 bg-dark-login-image bg-center bg-no-repeat bg-cover">
        <div class="lg:w-4/5 py-12 px-4 lg:px-0 lg:py-0">
          <div class="mb-9">
            <router-link to="/signup">
              <img src="../assets/images/arrow_icon.svg" alt="" />
            </router-link>
          </div>
          <div>
            <span class="text-white text-base block">Try Leny Standard</span>
            <h1 class="text-white text-h2xl lg:text-h1xl font-medium mb-0">
              14 days free
            </h1>
            <span class="text-white text-base block mb-14">Then 89 € per month</span>
            <p class="flex justify-between mb-3">
              <span class="text-white text-base">Subtotal</span>
              <span class="text-white text-base">89 €</span>
            </p>
            <hr class="opacity-50 mb-14" />
            <p class="flex justify-between mb-3">
              <span class="text-leny-gray-500 text-base">VAT (20% inclusive)</span>
              <span class="text-white text-base">89 €</span>
            </p>
            <hr class="opacity-50 mb-4" />
            <p class="flex justify-between mb-4">
              <span class="text-white text-base">Total after trial</span>
              <span class="text-white text-base">89 €</span>
            </p>
            <p class="flex justify-between mb-4">
              <span class="text-white text-base">Total due today</span>
              <span class="text-white text-base">0.00 €</span>
            </p>
          </div>
        </div>
      </div>
      <div class="col-start-1 col-end-8 sm:col-start-4 sm:col-end-8 sm:min-h-screen flex flex-col justify-center mx-auto w-full lg:w-3/4 pr-4 lg:pr-0 pl-4 sm:pl-0 py-6 sm:py-0">
        <p class="text-h2xl sm:text-h2xl font-medium text-leny-blue-800 pb-5 before:leny-gray-700 before:border-leny-gray-600 relative before:w-11 before:border-b-2 before:absolute before:bottom-0 before:inset-x-0 mb-10">
          Payment details
        </p>
        <form action="">
          <div class="relative">
            <label for="myUserName" class="text-leny-gray-800 text-sm">Email</label>
            <input class="placeholder:text-xs placeholder:text-slate-400 bg-white rounded-full py-3 sm:py-4 pl-8 pr-3 mb-4 mt-3 w-full shadow-[0px_0px_6px_rgba(0,0,0,0.29)] focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Email..." type="email" id="myUserName" name="myUserName" />
          </div>
          <div class="relative">
            <p class="text-leny-gray-800 text-sm mb-3 mt-4">Card information</p>
            <div class="relative">
              <input class="placeholder:text-xs placeholder:text-slate-400 bg-white rounded-full py-3 sm:py-4 pl-8 pr-3 mb-4 w-full shadow-[0px_0px_6px_rgba(0,0,0,0.29)] focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="1234 1234 1234" type="number" name="cardInformation" />
              <div class="flex absolute inset-y-0 right-0 justify-end mr-8 items-center pl-3 pointer-events-none w-full mb-4">
                <img src="../assets/images/visa_icon.svg" class="mr-2" alt="" />
                <img src="../assets/images/mastercard_icon.svg" alt="" />
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <input class="placeholder:text-xs placeholder:text-slate-400 bg-white rounded-full py-3 sm:py-4 pl-8 pr-3 mb-4 w-full shadow-[0px_0px_6px_rgba(0,0,0,0.29)] focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="MM/YY" type="text" name="dateCard" />
            </div>
            <div class="relative">
              <input class="placeholder:text-xs placeholder:text-slate-400 bg-white rounded-full py-3 sm:py-4 pl-8 pr-2 mb-4 w-full shadow-[0px_0px_6px_rgba(0,0,0,0.29)] focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="CVC" type="text" name="dateCard" />
              <div class="flex absolute inset-y-0 right-0 justify-end mr-8 items-center pl-3 pointer-events-none w-full mb-4">
                <img src="../assets/images/CVC_icon.svg" alt="" />
              </div>
            </div>
          </div>
          <div class="relative">
            <p class="text-leny-gray-800 text-sm mb-3 mt-4">Name on card</p>
            <div>
              <input class="placeholder:text-xs placeholder:text-slate-400 bg-white rounded-full py-3 sm:py-4 pl-8 pr-3 mb-4 w-full shadow-[0px_0px_6px_rgba(0,0,0,0.29)] focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Name" type="number" name="cardName" />
            </div>
          </div>
          <div class="relative mb-7">
            <p class="text-leny-gray-800 text-sm mb-3 mt-4">
              Country or region
            </p>
            <select class="placeholder:text-xs placeholder:text-slate-400 bg-white rounded-full py-3 sm:py-4 pl-8 pr-3 mb-4 w-full shadow-[0px_0px_6px_rgba(0,0,0,0.29)] focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" name="cardName">
              <option value="volvo" selected>France</option>
              <option value="saab">Egypt</option>
              <option value="opel">Tunisia</option>
              <option value="audi">USA</option>
            </select>
          </div>
          <router-link to="/success" class="py-3 px-12 block w-3/4 mx-auto text-center font-regular text-xs sm:text-sm text-white bg-leny-blue-800 rounded-full border border-leny-blue-800 hover:bg-transparent hover:text-leny-blue-800 shadow-md transition duration-300">Start Trial</router-link>
          <p class="signup text-center text-sm w-3/4 mx-auto text-leny-gray-800 mt-3 font-light">
            After you trial ends, you will be charged 89 € per month starting
            May 11, 2022. You can always can always cancel before then. >
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PaymentPage",
};
</script>
