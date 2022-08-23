<template>
  <div class="flex">
    <input 
      v-if="excludeProperty" 
      type="checkbox" 
      class="mr-1 -mt-2 w-4 h-4 text-white bg-white shadow-[0px_0px_6px_rgba(0,0,0,0.29)] rounded-sm border-white focus:ring-0 focus:ring-offset-0 checked:bg-check" />
    <div class="relative card-wrapper shadow-[0px_0px_6px_rgba(0,0,0,0.29)] rounded-search-card-mobile md:rounded-search-card pb-2 md:pb-6">
      <div class="relative">
        <p class="absolute left-5 top-3">
          <button v-if="isPropertiesPage" class="rounded-full bg-white text-leny-cyan-400 px-4 py-2 text-xs flex items-center hover:bg-leny-gray-400">
            <img src="../../assets/images/premium_icon.svg" loading="lazy" role="presentation" class="mr-2 w-4" />
            <span class="text-xs">Premium</span>
          </button>
        </p>
        <!-- <p class="absolute top-5 cursor-pointer tooltip tooltip-left" :class="isPropertiesPage && 'right-5' || 'left-5'" data-tip="Mark as favorite">
          <img src="../../assets/images/heart.svg" loading="lazy" role="presentation">
        </p> -->
        <p class="absolute top-[45%] right-5">
          <img src="../../assets/images/arrow-next.svg" loading="lazy" role="presentation">
        </p>
        <img :src="require(`../../assets/images/${image}`)" class="mx-auto mb-3 w-full" loading="lazy" role="presentation" />
      </div>
      <div class="px-6">
        <span class="text-sm text-leny-cyan-400 font-futura-ptlight">{{ itemType }}</span>
        <h3 class="text-leny-gray-700 text-base font-futura-ptmedium mb-4">
          {{ itemTitle }}
        </h3>
        <p class="flex items-start mb-1">
          <img src="../../assets/images/location_icon.svg" loading="lazy" role="presentation" width="10" class="mt-1" />
          <span class="ml-3 text-sm text-leny-gray-700 font-futura-ptlight">
            6 Place de la Gare, JouÉ-lÈs-tours, France
          </span>
        </p>
        <div class="flex space-x-4">
          <p class="flex">
            <img src="../../assets/images/bathtub.svg" loading="lazy" role="presentation" />
            <span class="ml-2 text-sm text-leny-gray-700 font-futura-ptlight">
              {{ bathroom }}
            </span>
          </p>
          <p class="flex">
            <img src="../../assets/images/bedroom_icon.svg" loading="lazy" role="presentation" />
            <span class="ml-2 text-sm text-leny-gray-700 font-futura-ptlight">
              {{ rooms }}
            </span>
          </p>
          <p class="flex">
            <img src="../../assets/images/size_area_icon.svg" loading="lazy" role="presentation" />
            <span class="ml-2 text-sm text-leny-gray-700 font-futura-ptlight">
              {{ area }} m²
            </span>
          </p>
        </div>
        <div class="flex justify-between mt-2">
          <span class="text-right mt-2 text-leny-cyan-400 text-sm font-futura-ptmedium">${{ price }}</span>
          <span class="flex items-center" v-if="isPropertiesPage">
            <img src="../../assets/images/timer_icon.svg" loading="lazy" role="presentation" class="mr-2 w-2.5" />
            <span class="text-leny-red-600 text-xs font-futura-ptlight">{{ restTime }} hr</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SearchCard",
  props: {
    itemType: {
      type: String,
      default: () => "",
    },
    itemTitle: {
      type: String,
      default: () => "",
    },
    address: {
      type: String,
      default: () => "",
    },
    area: {
      type: Number,
      default: () => 0,
    },
    bathroom: {
      type: Number,
      default: () => 0,
    },
    rooms: {
      type: Number,
      default: () => 0,
    },
    price: {
      type: String,
      default: () => "",
    },
    image: {
      type: String,
      default: () => "",
    },
    restTime: {
      type: String,
      default: () => "",
    },
    isPropertiesPage: {
      type: Boolean,
      default: () => true,
    },
    showExclude: {
      type: Boolean,
      default: () => true,
    },
  },
  computed: {
    excludeProperty () {
      return this.showExclude;
    }
  },
};
</script>
