<template>
  <section class="py-14 bg-leny-light-gray">
    <div class="container mx-auto text-center">
      <img src="../assets/images/full_logo.png" alt="" class="w-20 md:w-28 mx-auto mb-6" />
      <p class="text-xs md:text-sm text-leny-gray-700 font-futura-ptlight mb-5 w-full md:w-1/2 mx-auto">
        A customizable platform, in your name facilitation the search for your
        customers. Ads from more than 3000 real estate sites, grouped in one and
        the same place
      </p>
      <div class="flex items-center space-x-1 justify-center mb-12">
        <router-link to="/subscription_plan" class="
            relative
            px-2
            pb-2
            font-futura-ptlight
            md:text-base text-xs text-leny-gray-700
            hover:text-leny-blue-800
            transition
            duration-300">Subscription Plans</router-link>
        <router-link to="/contact" class="
            relative
            px-2
            pb-2
            font-futura-ptlight
            md:text-base text-xs text-leny-gray-700
            hover:text-leny-blue-800
            transition
            duration-300">Contact Us</router-link>
      </div>
      <div class="social-media flex items-center justify-center space-x-3 mb-3">
        <a href="https://www.facebook.com" target="_blank"><img src="../assets/images/facebook_icon.svg" alt=""></a>
        <a href="https://www.instagram.com" target="_blank"><img src="../assets/images/instagram_icon.svg" alt=""></a>
        <a href="https://www.linkedin.com/" target="_blank"><img src="../assets/images/linkedin_icon.svg" alt=""></a>
        <a href="https://www.whatsapp.com/" target="_blank"><img src="../assets/images/whatsapp_icon.svg" alt=""></a>
      </div>
      <p class="coryright text-sm text-leny-blue-800 mb-0 font-futura-ptbook">
        All Rights Reserved @ 20222
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "FooterSection",
};
</script>
