<template>
  <div class="relative card-wrapper shadow-[0px_0px_6px_rgba(0,0,0,0.29)] rounded-search-card-mobile md:rounded-search-card pb-2 md:pb-8">
    <div class="relative">
      <p class="absolute left-5 top-5">
        <img src="../assets/images/heart.svg" loading="lazy" role="presentation">
      </p>
      <img :src="require(`../assets/images/${image}`)" class="mx-auto mb-3 w-full" loading="lazy" role="presentation" />
      <div class="px-6">
         <span class="text-sm text-leny-cyan-400 font-normal">{{ itemType }}</span>
      <h3 class="text-leny-gray-700 text-base font-medium mb-4">
        {{ itemTitle }}
      </h3>
      <p class="flex mb-1">
        <img src="../assets/images/location_icon.svg" loading="lazy" role="presentation" width="10" />
        <span class="ml-3 text-sm text-leny-gray-700 font-light">
          6 Place de la Gare, JouÉ-lÈs-tours, France
        </span>
      </p>
      <div class="flex space-x-4">
        <p class="flex">
          <img src="../assets/images/bathroom.svg" loading="lazy" role="presentation" />
          <span class="ml-2 text-sm text-leny-gray-700 font-light">
            {{ bathroom }}
          </span>
        </p>
        <p class="flex">
          <img src="../assets/images/bedroom_icon.svg" loading="lazy" role="presentation" />
          <span class="ml-2 text-sm text-leny-gray-700">
            {{ rooms }}
          </span>
        </p>
        <p class="flex">
          <img src="../assets/images/size_area_icon.svg" loading="lazy" role="presentation" />
          <span class="ml-2 text-sm text-leny-gray-700 font-light">
            {{ area }} m²
          </span>
        </p>
      </div>
      <p class="text-right mt-2 text-leny-cyan-400 text-sm font-medium">
        ${{ price }}
      </p>
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
  },
};
</script>
