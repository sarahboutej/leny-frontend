<template>
  <!-- Put this part before </body> tag -->
    <input type="checkbox" id="menuModal" class="modal-toggle w-6 h-6 ml-3 right-4" />
    <label for="menuModal" class="modal cursor-pointer">
      <label class="modal-box relative self-start mt-6 bg-white" for="">
        <div class="flex items-center justify-between">
          <div id="languageMobileDropdown" class="dropdown bg-white">
             <div tabindex="0" class="bg-transparent border-0"  @click="languageMobileOpened = !languageMobileOpened">
                 <img :src="!languageMobileOpened && require('../assets/images/language.svg')  || require('../assets/images/languageSelected_icon.svg')" />
              </div>
              <LanguageMenu v-if="languageMobileOpened" />
          </div>
          <label for="menuModal" class="btn-lg cursor-pointer absolute right-2 top-2">✕</label>
        </div>

        <p class="py-4 text-center mx-auto mt-6 space-y-3">
          <router-link to="/subscription_plan" class="
                font-futura-ptbook
                relative
                px-4
                pb-2
                text-sm text-leny-gray-700
                hover:text-leny-blue-800
                transition
                duration-300
                block
                hover:before:bg-leny-blue-800
                hover:before:w-4
                hover:before:h-px
                hover:before:absolute
                hover:before:bottom-0
                hover:before:inset-x-0
                hover:before:mx-auto
              ">Subscription Plans</router-link>
          <router-link to="/contact" class="
                font-futura-ptbook
                relative
                px-4
                pb-2
                text-sm text-leny-gray-700
                hover:text-leny-blue-800
                transition
                duration-300
                block
                hover:before:bg-leny-blue-800
                hover:before:w-4
                hover:before:h-px
                hover:before:absolute
                hover:before:bottom-0
                hover:before:inset-x-0
                hover:before:mx-auto
              ">Contact Us</router-link>
        </p>
        <p class="text-center mx-auto mt-4 space-x-6">
          <router-link to="/login" class="
              font-futura-ptbook
              py-2
              px-8
              text-center
              font-regular
              text-sm text-white
              bg-leny-blue-800
              rounded-full
              border border-leny-blue-800
              hover:bg-transparent hover:text-leny-blue-800
              transition
              duration-300
            ">Login</router-link>
          <router-link to="/search" class="
              font-futura-ptbook
              py-2
              px-8
              text-center
              font-regular
              text-sm text-white
              bg-leny-cyan-400
              rounded-full
              border border-leny-cyan-400
              hover:bg-transparent hover:text-leny-cyan-400
              transition
              duration-300
            ">Register</router-link>
        </p>
      </label>
    </label>
</template>
<script>
import LanguageMenu from './LanguageMenu.vue'
export default {
  name: "MobileMenu",
  components: {
    LanguageMenu
  },
  data: () => {
    return {
      languageMobileOpened: false
    }
  },
    mounted() {
    const parentHTML = document.getElementById('app');
    parentHTML.addEventListener('click', (e) => {
      if (!document.getElementById('languageMobileDropdown').contains(e.target)) {
        this.languageMobileOpened = false;
      }
    });
  },
}
</script>
