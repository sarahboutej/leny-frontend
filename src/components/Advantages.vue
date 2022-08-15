<template>
  <section class="py-14">
    <div class="container mx-auto">
      <div class="section-title text-center mb-9">
        <h2 class="text-2xl md:text-h2xl text-leny-blue-900">
          Take advantage of our tailor - made tool, In
          <span class="text-leny-cyan-400">your</span> image
        </h2>
        <p class="text-base text-leny-gray-700 mb-0">
          Features and settings designed for per professionals ion the real
          estate business
        </p>
      </div>
      <div class="section-content hidden md:flex">
        <div class="tabs block">
          <button v-for="(tab, index) in tabs" :key="index" class="tab flex w-44 text-left px-0 justify-start space-x-5 mb-5" :class="(activeTab === index) && 'tab-active border-0 border-none'" @click="activeTab = index">
            <img :src="require(`../assets/images/${tab.icon}`)" alt="" />
            <span class="text-base text-leny-gray-700 ml-4">{{tab.name}}</span>
          </button>
          <a href="#" class="block py-3 px-14 text-center font-regular text-sm text-white bg-leny-blue-800 rounded-full border border-leny-blue-800 hover:bg-transparent hover:text-leny-blue-800 shadow-md transition duration-300">Explore</a>
        </div>
        <div class="card-wrapper overflow-hidden ml-16">
          <div v-for="(tab, index) in tabs" :key="index" class="card animate-slideIn" :class="activeTab !=index && 'hidden'">
            <img :src="require(`../assets/images/${tab.content}`)" alt="put alternative text here">
          </div>
        </div>
      </div>
      <div class="carousel w-full flex md:hidden">
        <div 
          v-for="(tab, index) in tabs" :key="index"
          :id="`item${index}`" class="carousel-item w-full relative"
          @touchstart="activeSlide = index">
          <img :src="require(`../assets/images/${tab.contentMobile}`)" class="w-full" />
          <p class="text-center absolute inset-x-0 bottom-6 flex justify-center">
            <img :src="require(`../assets/images/${tab.icon}`)" alt="" />
            <span class="text-base text-leny-gray-700 ml-4">{{tab.name}}</span>
          </p>
        </div>
      </div>
      <div class="flex md:hidden justify-center w-full mt-4 gap-1">
        <a  v-for="(tab, index) in tabs" :key="index" 
            :href="`#item${index}`" class="bg-leny-gray-500 w-1 h-1 rounded-full" :class="activeSlide === index && 'active-slide bg-leny-gray-700'" @click="activeSlide = index"></a>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "AdvantageSection",
  data: () => {
    return {
      tabs: [
        {
          name: "Personalization",
          icon: "Personalization_icon.svg",
          content: "advantage.png",
          contentMobile: "advantage_mobile.png"
        },
        {
          name: "Conversations",
          icon: "Conversations_icon.svg",
          content: "advantage.png",
          contentMobile: "advantage_mobile.png"
        },
        {
          name: "Shares and sends",
          icon: "Shares_and_sends_icon.svg",
          content: "advantage.png",
          contentMobile: "advantage_mobile.png"
        },
        {
          name: "Saves searches",
          icon: "Saves_searches_icon.svg",
          content: "advantage.png",
          contentMobile: "advantage_mobile.png"
        },
        {
          name: "Advertising inserts",
          icon: "Advertising_inserts_icon.png",
          content: "advantage.png",
          contentMobile: "advantage_mobile.png"
        },
        {
          name: "Estimate made",
          icon: "Estimate_made_icon.svg",
          content: "advantage.png",
          contentMobile: "advantage_mobile.png"
        },
      ],
      activeTab: 1,
      activeSlide: 0
    };
  },
};
</script>
