<template>
  <!-- Navbar goes here -->
  <nav class="fixed w-full z-50 top-0" :class="[{ scrolled: !view.atTopOfPage && !isAgencyPage }, isAgencyPage && 'bg-leny-blue-900' || 'bg-white']">
    <div class="container mx-auto">
      <div class="flex justify-between items-center my-6">
        <div class="flex mr-5 flex-auto">
          <div>
            <!-- Website Logo -->
            <router-link to="/" class="flex items-center">
              <img v-if="isAgencyPage" src="../assets/images/logo_white.png" class="w-20" />
              <img v-else :src="view.atTopOfPage && require('../assets/images/logo.svg')  || require('../assets/images/logoblue_img.png')" />
            </router-link>
          </div>
          <!-- Primary Navbar items -->
          <div class="hidden md:flex items-center space-x-1 m-auto">
            <router-link to="/subscription_plan" class="
                relative
                px-2
                font-futura-ptbook
                text-sm text-leny-gray-700
                hover:text-leny-blue-800
                transition
                duration-300
                hover:before:w-4
                hover:before:h-px
                hover:before:absolute
                hover:before:-bottom-1
                hover:before:inset-x-0
                hover:before:mx-auto" :class="[activePage === 'subscription' && 'text-leny-blue-800 before:w-4 before:h-px before:absolute before:-bottom-1 before:inset-x-0 before:mx-auto' ,isAgencyPage && 'text-white hover:text-leny-cyan-400 before:bg-leny-cyan-400 hover:before:bg-leny-cyan-400' || 'text-leny-gray-700 hover:text-leny-blue-800 before:bg-leny-blue-800 hover:before:bg-leny-blue-800']">Subscription Plans</router-link>
            <router-link to="/contact" class="
                relative
                px-2
                font-futura-ptbook
                text-sm text-leny-gray-700
                hover:text-leny-blue-800
                transition
                duration-300
                hover:before:w-4
                hover:before:h-px
                hover:before:absolute
                hover:before:-bottom-1
                hover:before:inset-x-0
                hover:before:mx-auto" :class="[activePage === 'contact' && 'text-leny-blue-800 before:bg-leny-blue-800 before:w-4 before:h-px before:absolute before:-bottom-1 before:inset-x-0 before:mx-auto' ,isAgencyPage && 'text-white hover:text-leny-cyan-400 hover:before:bg-leny-cyan-400' || 'text-leny-gray-700 hover:text-leny-blue-800 hover:before:bg-leny-blue-800']">Contact Us</router-link>
          </div>
        </div>
        <!-- Secondary Navbar items -->
        <div class="hidden md:flex items-center space-x-3">
          <div v-if="isAgencyPage" class="mr-2">
            <div class="avatar placeholder items-center font-light">
              <div v-if="$store.state.logo" :style="{ 'background-image': `url(${$store.state.logo})` }" class="rounded-full w-8 bg-cover"></div>
              <div v-else class="bg-leny-cyan-400 text-white rounded-full w-8">
                <span class="text-sm font-futura-ptbook"> {{ abbriviation }} </span>
              </div>
              <span class="text-sm ml-2 text-white font-futura-ptlight">{{ $store.state.agencyName }}</span>
            </div>
          </div>
          <div v-else class="space-x-3">
            <router-link to="/login" class="
              py-2
              px-4
              w-24
              text-center
              font-futura-ptbook
              text-sm text-white
              bg-leny-blue-800
              rounded-full
              border border-leny-blue-800
              hover:bg-transparent hover:text-leny-blue-800
              transition
              duration-300
            ">Login</router-link>
            <router-link to="/search" class="
              py-2
              px-4
              w-24
              text-center
              font-futura-ptbook
              text-sm text-white
              bg-leny-cyan-400
              rounded-full
              border border-leny-cyan-400
              hover:bg-transparent hover:text-leny-cyan-400
              transition
              duration-300
            ">Register</router-link>
          </div>
          <div id="languageDropdown" class="dropdown dropdown-end">
            <div tabindex="0" class="border-0" @click="languageOpened = !languageOpened">
              <img v-if="isAgencyPage" src="../assets/images/language_white_icon.svg" />
              <img v-else :src="!languageOpened && require('../assets/images/language.svg')  || require('../assets/images/languageSelected_icon.svg')" />
            </div>
            <LanguageMenu v-if="languageOpened" />
          </div>
          <div id="notifDropdown" class="dropdown dropdown-end">
            <div tabindex="0" class="bg-transparent border-0 relative" @click="notificationsOpened = !notificationsOpened">
               <img v-if="isAgencyPage" src="../assets/images/notification-white.png" />
              <img v-else :src="!notificationsOpened && require('../assets/images/notification.svg')  || require('../assets/images/notification_icon_selected.svg')" />
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
            </div>
            <NotificationMenu v-if="notificationsOpened" />
          </div>
        </div>
        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <div id="notifMobileDropdown" class="dropdown dropdown-end">
            <div tabindex="0" class="bg-transparent border-0 relative" @click="notificationsMobileOpened = !notificationsMobileOpened">
              <img :src="!notificationsMobileOpened && require('../assets/images/notification.svg')  || require('../assets/images/notification_icon_selected.svg')" class="w-4" />
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
            </div>
            <NotificationMenu v-if="notificationsMobileOpened" />
          </div>
          <div for="menuModal" class="modal-button ml-4">
            <img src="../assets/images/hamburger.svg" loading="lazy" role="presentation">
          </div>
          <MobileMenu />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import MobileMenu from "./MobileMenu.vue";
import LanguageMenu from "./LanguageMenu.vue";
import NotificationMenu from "./NotificationMenu.vue";
export default {
  name: "HeaderItem",
  components: {
    MobileMenu,
    LanguageMenu,
    NotificationMenu,
  },
  props: {
    activePage: {
      type: String,
      default: "",
    },
    isAgencyPage: {
      type: Boolean,
      default: () => false,
    },
  },
  data: () => {
    return {
      notificationsOpened: false,
      notificationsMobileOpened: false,
      languageOpened: false,
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
  computed: {
    abbriviation () {
      return this.$store.getters.getCompanyAbbreviation;
    }
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    const parentHTML = document.getElementById("app");
    parentHTML.addEventListener("click", (e) => {
      if (!document.getElementById("notifDropdown").contains(e.target)) {
        this.notificationsOpened = false;
      }
    });
    parentHTML.addEventListener("click", (e) => {
      if (!document.getElementById("languageDropdown").contains(e.target)) {
        this.languageOpened = false;
      }
    });
    parentHTML.addEventListener("click", (e) => {
      if (!document.getElementById("notifMobileDropdown").contains(e.target)) {
        this.notificationsMobileOpened = false;
      }
    });
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
