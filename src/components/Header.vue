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
          <div class="relative  mt-1">
            <button class="bg-transparent border-0" @click="showLanguage = !showLanguage">
              <img src="../assets/images/language.svg" />
            </button>
            <div v-show="showLanguage" id="languageDropdown" class="absolute right-0 mt-2 bg-white rounded-3xl shadow-[0px_0px_6px_rgba(0,0,0,0.29)] p-6 divide-y px-6 py-3">
              <a href="#" class="text-xs text-leny-gray-700 block pb-2">French</a>
              <a href="#" class="text-xs text-leny-gray-700 block pt-2">English</a>
            </div>
          </div>
          <div class="relative  mt-1.5">
            <button class="bg-transparent border-0 relative" @click="show = !show">
              <img :src="show && require(`../assets/images/${notification1}`) || require(`../assets/images/${notification2}`)" />
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
            <!-- Dropdown menu -->
            <div v-show="show" id="notifDropdown" class="absolute right-0 pt-2 mt-2 bg-white rounded-3xl shadow-[0px_0px_6px_rgba(0,0,0,0.29)] w-96 min-h-notif">
              <div v-if="!showAlertSetting">
                <p class="text-base font-medium text-leny-blue-800 pb-2 pt-4 mx-6 before:leny-gray-700 before:border-leny-blue-800 relative before:w-9 before:border-b-2 before:absolute before:bottom-0 before:inset-x-0 mb-5"> Notification </p>
                <ul>
                  <li v-for="(item,index) in notifications" :key="index" class="flex px-6 py-3 hover:bg-leny-light-gray cursor-pointer">
                    <img :src="require(`../assets/images/${item.image}`)" class="w-11 h-11 rounded-full border-2 p-1 border-leny-blue-800" loading="lazy" role="presentation" />
                    <div class="ml-4">
                      <p class="text-sm font-light text-leny-gray-700"> {{item.text}} </p>
                      <span class="text-xxs text-leny-gray-600">{{item.time}}</span>
                    </div>
                  </li>
                </ul>
                <div class="bg-leny-light-gray text-center rounded-b-3xl py-3.5">
                  <a class="flex items-center space-x-1 justify-center cursor-pointer" @click="showAlertSetting = !showAlertSetting">
                    <img src="../assets/images/alert_notification_blue.svg" loading="lazy" role="presentation">
                    <span class="text-sm text-leny-cyan-400">Set Alert </span>
                    <img src="../assets/images/arrows.svg" loading="lazy" role="presentation">
                  </a>
                </div>
              </div>
              <div v-else>
                <p class="text-base font-medium text-leny-blue-800 pb-2 pt-4 mx-6 before:leny-gray-700 before:border-leny-blue-800 relative before:w-9 before:border-b-2 before:absolute before:bottom-0 before:inset-x-0 mb-5"> Choose frequency </p>
                <div class="mx-6">
                  <div class="flex mb-6 space-x-8">
                    <div class="flex items-center">
                      <input id="link-radioImmeddiately" type="radio" value="" class="w-4 h-4 drop-shadow-[0px_0px_3px_rgba(0,0,0,0.2)] accent-leny-blue-800">
                      <label for="link-radioImmeddiately" class="ml-3 text-xs text-leny-gray-700">Live/immediately</label>
                    </div>
                    <div class="flex items-center">
                      <input id="link-radioHour" type="radio" value="" class="w-4 h-4 drop-shadow-[0px_0px_3px_rgba(0,0,0,0.2)] accent-leny-blue-800">
                      <label for="link-radioHour" class="ml-3 text-xs text-leny-gray-700">Every hour</label>
                    </div>
                  </div>
                  <div class="flex justify-between">
                    <div class="flex items-center">
                      <input id="link-radioDay" type="radio" value="" class="w-4 h-4 drop-shadow-[0px_0px_3px_rgba(0,0,0,0.2)] accent-leny-blue-800">
                      <label for="link-radioDay" class="ml-3 text-xs text-leny-gray-700">Day</label>
                    </div>
                    <div class="flex items-center">
                      <input id="link-radioWeek" type="radio" value="" class="w-4 h-4 drop-shadow-[0px_0px_3px_rgba(0,0,0,0.2)] accent-leny-blue-800">
                      <label for="link-radioWeek" class="ml-3 text-xs text-leny-gray-700">Week</label>
                    </div>
                    <div class="flex items-center">
                      <input id="link-radioMonth" type="radio" value="" class="w-4 h-4 drop-shadow-[0px_0px_3px_rgba(0,0,0,0.2)] accent-leny-blue-800">
                      <label for="link-radioMonth" class="ml-3 text-xs text-leny-gray-700">Month</label>
                    </div>
                  </div>
                </div>
                <a @click="showAlertSetting = !showAlertSetting" class="
                  py-3
                  px-8
                  w-32
                  mx-6
                  mt-6
                  block
                  text-center
                  font-regular
                  text-xs text-white
                  bg-leny-blue-800
                  rounded-full
                  border border-leny-blue-800
                  hover:bg-transparent hover:text-leny-blue-800
                  shadow-md
                  transition
                  duration-300
                  cursor-pointer
                ">Save Alert</a>
              </div>
            </div>
          </div>
        </div>
        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <div class="relative  mt-1.5">
            <button class="bg-transparent border-0 relative" @click="show = !show">
              <img :src="show && require(`../assets/images/${notification1}`) || require(`../assets/images/${notification2}`)" class="w-4 mr-3"/>
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
            <!-- Dropdown menu -->
            <div v-show="show" id="notifDropdown" class="absolute right-0 pt-2 mt-2 bg-white rounded-3xl shadow-[0px_0px_6px_rgba(0,0,0,0.29)] w-96 min-h-notif">
              <div v-if="!showAlertSetting">
                <p class="text-base font-medium text-leny-blue-800 pb-2 pt-4 mx-6 before:leny-gray-700 before:border-leny-blue-800 relative before:w-9 before:border-b-2 before:absolute before:bottom-0 before:inset-x-0 mb-5"> Notification </p>
                <ul>
                  <li v-for="(item,index) in notifications" :key="index" class="flex px-6 py-3 hover:bg-leny-light-gray cursor-pointer">
                    <img :src="require(`../assets/images/${item.image}`)" class="w-11 h-11 rounded-full border-2 p-1 border-leny-blue-800" loading="lazy" role="presentation" />
                    <div class="ml-4">
                      <p class="text-sm font-light text-leny-gray-700"> {{item.text}} </p>
                      <span class="text-xxs text-leny-gray-600">{{item.time}}</span>
                    </div>
                  </li>
                </ul>
                <div class="bg-leny-light-gray text-center rounded-b-3xl py-3.5">
                  <a class="flex items-center space-x-1 justify-center cursor-pointer" @click="showAlertSetting = !showAlertSetting">
                    <img src="../assets/images/alert_notification_blue.svg" loading="lazy" role="presentation">
                    <span class="text-sm text-leny-cyan-400">Set Alert </span>
                    <img src="../assets/images/arrows.svg" loading="lazy" role="presentation">
                  </a>
                </div>
              </div>
              <div v-else>
                <p class="text-base font-medium text-leny-blue-800 pb-2 pt-4 mx-6 before:leny-gray-700 before:border-leny-blue-800 relative before:w-9 before:border-b-2 before:absolute before:bottom-0 before:inset-x-0 mb-5"> Choose frequency </p>
                <div class="mx-6">
                  <div class="flex mb-6 space-x-8">
                    <div class="flex items-center">
                      <input id="link-radioImmeddiately" type="radio" value="" class="w-4 h-4 drop-shadow-[0px_0px_3px_rgba(0,0,0,0.2)] accent-leny-blue-800">
                      <label for="link-radioImmeddiately" class="ml-3 text-xs text-leny-gray-700">Live/immediately</label>
                    </div>
                    <div class="flex items-center">
                      <input id="link-radioHour" type="radio" value="" class="w-4 h-4 drop-shadow-[0px_0px_3px_rgba(0,0,0,0.2)] accent-leny-blue-800">
                      <label for="link-radioHour" class="ml-3 text-xs text-leny-gray-700">Every hour</label>
                    </div>
                  </div>
                  <div class="flex justify-between">
                    <div class="flex items-center">
                      <input id="link-radioDay" type="radio" value="" class="w-4 h-4 drop-shadow-[0px_0px_3px_rgba(0,0,0,0.2)] accent-leny-blue-800">
                      <label for="link-radioDay" class="ml-3 text-xs text-leny-gray-700">Day</label>
                    </div>
                    <div class="flex items-center">
                      <input id="link-radioWeek" type="radio" value="" class="w-4 h-4 drop-shadow-[0px_0px_3px_rgba(0,0,0,0.2)] accent-leny-blue-800">
                      <label for="link-radioWeek" class="ml-3 text-xs text-leny-gray-700">Week</label>
                    </div>
                    <div class="flex items-center">
                      <input id="link-radioMonth" type="radio" value="" class="w-4 h-4 drop-shadow-[0px_0px_3px_rgba(0,0,0,0.2)] accent-leny-blue-800">
                      <label for="link-radioMonth" class="ml-3 text-xs text-leny-gray-700">Month</label>
                    </div>
                  </div>
                </div>
                <a @click="showAlertSetting = !showAlertSetting" class="
                  py-3
                  px-8
                  w-32
                  mx-6
                  mt-6
                  block
                  text-center
                  font-regular
                  text-xs text-white
                  bg-leny-blue-800
                  rounded-full
                  border border-leny-blue-800
                  hover:bg-transparent hover:text-leny-blue-800
                  shadow-md
                  transition
                  duration-300
                  cursor-pointer
                ">Save Alert</a>
              </div>
            </div>
          </div>
          <button class="outline-none mobile-menu-button">
            <img src="../assets/images/hamburger.svg" loading="lazy" role="presentation">
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
  data: () => {
    return {
      view: {
        atTopOfPage: true,
      },
      show: false,
      showAlertSetting: false,
      showLanguage: false,
      notification1: "notification_icon_selected.svg",
      notification2: "notification.svg",
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
