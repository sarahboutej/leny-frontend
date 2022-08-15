<template>
  <Header :active-page="'contact'" />
  <section class="banner-wrapper mt-[5.625rem] bg-contact-banner bg-no-repeat bg-cover bg-center">
    <div class="container mx-auto h-52 md:h-80 flex flex-col align-center justify-center">
      <h1 class="text-white text-h2xl md:text-h1xl uppsercase text-center font-medium">Contact Us</h1>
    </div>
  </section>
  <section class="contact-container py-14">
    <div class="container mx-auto">
      <div class="grid md:grid-cols-5 grid-rows-1 gap-6">
        <div class="md:col-start-1 md:col-end-3">
          <p class="text-2xl font-medium text-leny-blue-800 pb-5 mb-6">
            Contact information
          </p>
          <ul class="">
            <li class="flex mb-4">
              <img src="../assets/images/location_icon.svg" loading="lazy" role="presentation" />
              <span class="ml-3 text-xs md:text-sm text-leny-gray-700">
                6 Place de la Gare, JouÉ-lÈs-tours, France
              </span>
            </li>
            <li class="flex mb-4">
              <img src="../assets/images/email_icon.svg" loading="lazy" role="presentation" />
              <span class="ml-3 text-xs md:text-sm text-leny-gray-700">
                contact@leny.com
              </span>
            </li>
            <li class="flex mb-4">
              <img src="../assets/images/phone.svg" loading="lazy" role="presentation" />
              <span class="ml-3 text-xs md:text-sm text-leny-gray-700">
                +33616405152
              </span>
            </li>
          </ul>
          <p class="text-sm text-leny-blue-800 mt-12 mb-4">For more information please contact us:</p>
          <form action="">
            <div class="relative">
              <label for="myName" class="text-leny-gray-800 text-xs md:text-sm">Name</label>
              <input class="placeholder:text-xs placeholder:text-slate-400 bg-white rounded-full py-3 pl-8 pr-3 mb-4 mt-3 w-full shadow-[0px_0px_6px_rgba(0,0,0,0.29)] focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Name..." type="text" id="myName" name="myName" />
            </div>
            <div class="relative">
              <label for="myEmail" class="text-leny-gray-800 text-xs md:text-sm">Email</label>
              <input class="placeholder:text-xs placeholder:text-slate-400 bg-white rounded-full py-3 pl-8 pr-3 mb-4 mt-3 w-full shadow-[0px_0px_6px_rgba(0,0,0,0.29)] focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Email..." type="email" id="myEmail" name="myEmail" />
            </div>
            <div class="relative">
              <label for="mySubject" class="text-leny-gray-800 text-xs md:text-sm">Subject</label>
              <input class="placeholder:text-xs placeholder:text-slate-400 bg-white rounded-full py-3 pl-8 pr-3 mb-4 mt-3 w-full shadow-[0px_0px_6px_rgba(0,0,0,0.29)] focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Subject..." type="text" id="mySubject" name="mySubject" />
            </div>
            <div class="relative mb-8">
              <label for="myMessage" class="text-leny-gray-800 text-xs md:text-sm">Name</label>
              <textarea rows="6" class="placeholder:text-xs placeholder:text-slate-400 bg-white rounded-3xl py-3 pl-8 pr-3 mb-4 mt-3 w-full shadow-[0px_0px_6px_rgba(0,0,0,0.29)] focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Message..." type="text" id="myMessage" name="myMessage" />
            </div>
            <p class="mx-auto md:mx-0 mb-0 text-center md:text-left">
              <a href="/" class="py-3 px-12 font-regular text-xs sm:text-sm text-white bg-leny-blue-800 rounded-full border border-leny-blue-800 hover:bg-transparent hover:text-leny-blue-800 shadow-md transition duration-300">Send</a>
            </p>
          </form>
        </div>
        <div class="md:col-start-3 md:col-end-6 mt-6 md:mt-0">
          <iframe class="rounded-3xl w-full h-72 md:h-4/6" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3392601.323197006!2d7.317632981994811!3d33.86164276080278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x125595448316a4e1%3A0x3a84333aaa019bef!2sTunisie!5e0!3m2!1sfr!2stn!4v1659889384680!5m2!1sfr!2stn" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "ContactUs",
  components: {
    Header,
    Footer,
  },
};
</script>
