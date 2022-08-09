<template>
  <!-- Navbar goes here -->
  <nav class="bg-white fixed w-full z-50 top-0" :class="{ scrolled: !view.atTopOfPage }">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center my-6">
        <div class="flex mr-5 flex-auto">
          <div>
            <!-- Website Logo -->
            <a href="/" class="flex items-center">
              <img :src="view.atTopOfPage && require('../assets/images/logo.svg')  || require('../assets/images/logoblue_img.png')" />
            </a>
          </div>
          <!-- Primary Navbar items -->
          <div class="hidden md:flex items-center space-x-1 m-auto">
            <a href="/subscription_plan" class="
                relative
                px-2
                pb-2
                text-sm text-leny-gray-700
                hover:text-leny-blue-800
                transition
                duration-300
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
                hover:before:bg-leny-blue-800
                hover:before:w-4
                hover:before:h-px
                hover:before:absolute
                hover:before:bottom-0
                hover:before:inset-x-0
                hover:before:mx-auto
              ">Contact Us</a>
          </div>
        </div>
        <!-- Secondary Navbar items -->
        <div class="hidden md:flex items-center space-x-3">
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
          <div class="dropdown dropdown-end mt-1">
             <label tabindex="0" class="bg-transparent border-0">
                <img src="../assets/images/language.svg" />
              </label>
              <LanguageMenu />
          </div>
          <div class="dropdown dropdown-end mt-1.5">
            <label tabindex="0" class="bg-transparent border-0 relative">
              <img src="../assets/images/notification.svg" />
              <span class="
                absolute
                top-0
                left-0
                w-1.5
                h-1.5
                min-h-1.5
                bg-leny-cyan-400
                rounded-full
              "></span>
            </label>
            <NotificationMenu />
          </div>
        </div>
        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="bg-transparent border-0 relative">
              <img src="../assets/images/notification.svg" class="w-4 mr-3"/>
              <span class="
                absolute
                top-0
                left-0
                w-1.5
                h-1.5
                min-h-1.5
                bg-leny-cyan-400
                rounded-full
              "></span>
            </label>
            <NotificationMenu />
          </div>
          <label for="my-modal-4" class="modal-button">
            <img src="../assets/images/hamburger.svg" loading="lazy" role="presentation">
          </label>
        </div>
      </div>
    </div>
  </nav>
  <MobileMenu />
</template>

<script>
import MobileMenu from "./MobileMenu.vue";
import LanguageMenu from './LanguageMenu.vue';
import NotificationMenu from './NotificationMenu.vue'
export default {
  name: "HeaderItem",
  components: {
    MobileMenu,
    LanguageMenu,
    NotificationMenu
  },
  data: () => {
    return {
      view: {
        atTopOfPage: true,
      },
      notifications: [
        {
          image: "img_notification.png",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          time: "11 Mar. 07:00",
        },
        {
          image: "img_notification.png",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          time: "11 Mar. 07:00",
        },
        {
          image: "img_notification.png",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          time: "11 Mar. 07:00",
        },
        {
          image: "img_notification.png",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          time: "11 Mar. 07:00",
        },
        {
          image: "img_notification.png",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          time: "11 Mar. 07:00",
        },
      ],
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > 0) {
        if (this.view.atTopOfPage) this.view.atTopOfPage = false;
      } else {
        if (!this.view.atTopOfPage) this.view.atTopOfPage = true;
      }
    },
  },
};
</script>
<style scoped>
.scrolled {
  @apply shadow-xl;
}
</style>
