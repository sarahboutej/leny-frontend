<template>
  <!-- Navbar goes here -->
  <nav class="bg-white fixed w-full z-50 top-0" :class="{ scrolled: !view.atTopOfPage }">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center my-6">
        <div class="flex mr-5 flex-auto">
          <div>
            <!-- Website Logo -->
            <a href="/" class="flex items-center">
              <img src="../assets/images/logo.svg" />
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
          <button class="bg-transparent border-0">
            <img src="../assets/images/language.svg" />
          </button>
          <button class="bg-transparent border-0 relative">
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
          </button>
        </div>
        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button class="outline-none mobile-menu-button">
            <svg class="w-6 h-6 text-gray-500 hover:text-green-500" x-show="!showMenu" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- mobile menu -->
    <div class="hidden mobile-menu">
      <a href="/subscription_plan" class="
          py-4
          px-2
          text-gray-500
          font-semibold
          hover:text-yellow-500
          transition
          duration-300
        ">Subscription Plans</a>
      <a href="/contact" class="
          py-4
          px-2
          text-gray-500
          font-semibold
          hover:text-yellow-500
          transition
          duration-300
        ">Contact Us</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderItem",
  data() {
    return {
      view: {
        atTopOfPage: true,
      },
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    // the function to call when the user scrolls, added as a method
    handleScroll() {
      // when the user scrolls, check the pageYOffset
      if (window.pageYOffset > 0) {
        // user is scrolled
        if (this.view.atTopOfPage) this.view.atTopOfPage = false;
      } else {
        // user is at top of page
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
