<template>
  <!-- Put this part before </body> tag -->
    <input type="checkbox" id="my-modal-4" class="modal-toggle" />
    <label for="my-modal-4" class="modal cursor-pointer">
      <label class="modal-box relative self-start mt-6" for="">
        <div class="flex items-center justify-between">
          <div class="dropdown">
             <label tabindex="0" class="bg-transparent border-0">
                <img src="../assets/images/language.svg" />
              </label>
              <LanguageMenu />
          </div>
          <label for="my-modal-4" class="btn-lg cursor-pointer absolute right-2 top-2">✕</label>
        </div>

        <p class="py-4 text-center mx-auto mt-6 space-y-5">
          <a href="/subscription_plan" class="
                relative
                px-2
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
              ">Subscription Plans</a>
          <a href="/contact" class="
                relative
                px-2
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
              ">Contact Us</a>
        </p>
        <p class="text-center mx-auto mt-4 space-x-6">
          <a href="/login" class="
              py-2
              px-4
              w-24
              text-center
              font-regular
              text-sm text-white
              bg-leny-blue-800
              rounded-full
              border border-leny-blue-800
              hover:bg-transparent hover:text-leny-blue-800
              shadow-md
              transition
              duration-300
            ">Login</a>
          <a href="/search" class="
              py-2
              px-4
              w-24
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
            ">Register</a>
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
  }
}
</script>
