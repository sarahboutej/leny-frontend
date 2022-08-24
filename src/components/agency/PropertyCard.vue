<template>
  <div class="flex">
    <input v-if="excludeProperty" type="checkbox" class="mr-1 -mt-2 w-4 h-4 text-white bg-white shadow-[0px_0px_6px_rgba(0,0,0,0.29)] rounded-sm border-white focus:ring-0 focus:ring-offset-0 checked:bg-check" />
    <div class="relative card-wrapper shadow-[0px_0px_6px_rgba(0,0,0,0.29)] rounded-search-card-mobile md:rounded-search-card pb-2 md:pb-6">
      <div class="relative">
        <p class="absolute z-10 left-5 top-3">
          <button v-if="isPropertiesPage" class="rounded-full bg-white text-leny-cyan-400 px-4 py-2 text-xs flex items-center hover:bg-leny-gray-400">
            <img src="../../assets/images/premium_icon.svg" loading="lazy" role="presentation" class="mr-2 w-4" />
            <span class="text-xs">Premium</span>
          </button>
        </p>
        <p class="absolute top-[45%] right-5">
          <img src="../../assets/images/arrow-next.svg" loading="lazy" role="presentation">
        </p>
        <div :id="id" class="carousel slide relative" data-bs-interval="false">
          <div class="carousel-inner relative w-full rounded-3xl overflow-hidden">
            <div v-for="(image,index) in images" :key="index" class="carousel-item relative float-left w-full" :class="index === 0 && 'active'">
              <img :src="require(`../../assets/images/${image}`)" class="block w-full" alt="Wild Landscape" />
              <button v-if="index !== 0" class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0 opacity-100" type="button" :data-bs-target="`#${id}`" data-bs-slide="prev">
                <span class="carousel-control-prev-icon bg-slider-prev-arrow inline-block bg-no-repeat w-5 h-5" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button v-if="index !== images.length-1" class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0 opacity-100" type="button" :data-bs-target="`#${id}`" data-bs-slide="next">
                <span class="carousel-control-next-icon bg-slider-next-arrow inline-block bg-no-repeat w-5 h-5" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
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
    id: {
      type: String,
      default: () => "",
    },
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
    images: {
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
  data: () => {
    return {
      slideIndex: 0,
    };
  },
  computed: {
    excludeProperty() {
      return this.showExclude;
    },
  },
};
</script>
