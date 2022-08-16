<template>
  <section class="video-section-wrapper my-12">
    <div class="container mx-auto">
      <h1 class="
          section-title
          text-center text-2xl md:text-h1xl text-leny-blue-900
          uppercase
          font-semibold
          mb-3
        ">
        Retention is the new growth
      </h1>
      <p class="
          section-desc
          text-sm text-leny-gray-700
          font-extralight
          text-center
        ">
        Generate leads from buyers, sellers, investors, lessors etc., in an
        automated way. Boost and stay close to your prospects by offering the
        better real estate alert, from your website or mobile application
      </p>
      <div class="video-wrapper relative">
        <!--<svg class="w-16 h-16 absolute inset-0 m-auto fill-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path>
        </svg>-->
        <video class="mx-auto my-8 rounded-3xl w-full h-video5 bg-black" id="welcome-video" preload="auto" autoplay loop muted controls>
          <source src="../assets/images/video.mp4#t=8" type="video/mp4" />
        </video>
      </div>
      <div class="card-items grid md:grid-cols-3 gap-6 mt-10 md:mt-24">
        <div class="card-wrapper mt-6 md:mt-0">
          <div class="flex flex-col">
            <div class="col-end-2">
              <h2 class="text-leny-blue-900 font-medium text-2xl md:text-h2xl text-center mb-3.5">Boost your acquisition channel</h2>
              <p class="text-sm text-leny-gray-700 font-light text-center">Attract new users by helping them find their future accommodation thanks to an alert personalized, real-time, news advertisements placed online.</p>
            </div>
            <div class="col-end-2 pt-7">
              <img src="../assets/images/image-card.png" alt="put your alternative text here to enhance your application accessibility" class="drop-shadow-xl hidden md:flex" />
              <img src="../assets/images/image_mobile_1.png" alt="put your alternative text here to enhance your application accessibility" class="drop-shadow-xl flex md:hidden" />
            </div>
          </div>
        </div>
        <div class="card-wrapper mt-6 md:mt-0">
          <div class="flex flex-col">
            <div class="col-end-2">
              <img src="../assets/images/image-card-2.png" alt="put your alternative text here to enhance your application accessibility" class="drop-shadow-xl hidden md:flex" />
              <img src="../assets/images/image_mobile_2.png" alt="put your alternative text here to enhance your application accessibility" class="drop-shadow-xl flex md:hidden" />
            </div>
            <div class="col-end-2 pt-0 md:pt-7 order-first md:order-last mb-7 md:mb-0">
              <h2 class="text-leny-blue-900 font-medium text-2xl md:text-h2xl text-center mb-3.5">Increase your conversions</h2>
              <p class="text-sm text-leny-gray-700 font-light text-center">Your daily presence as well as that of your partners between ads and in messaging of your users, throughout their search real estate.</p>
              <p class="text-sm text-leny-gray-700 font-extralight text-center mt-3.5">Offer your services, <a href="#" class="text-leny-blue-600 font-normal">at the appropriate time</a></p>
            </div>
          </div>
        </div>
        <div class="card-wrapper mt-6 md:mt-0">
          <div class="flex flex-col">
            <div class="col-end-2">
              <h2 class="text-leny-blue-900 font-medium text-2xl md:text-h2xl text-center mb-3.5">Manage your advertising inserts</h2>
              <p class="text-sm text-leny-gray-700 font-light text-center">You will have the opportunity to monetize a share of your advertising inserts. Paid partnerships will be offered: mortgage brokers, architects, decorators, carpenters, hunters, diagnosticians, insurers, etc.</p>
            </div>
            <div class="col-end-2 pt-7">
              <img src="../assets/images/image-card-3.png" alt="put your alternative text here to enhance your application accessibility" class="drop-shadow-xl hidden md:flex" />
              <img src="../assets/images/image_mobile_3.png" alt="put your alternative text here to enhance your application accessibility" class="drop-shadow-xl flex md:hidden" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "VideoSection",
};
</script>
<style scoped>
</style>
