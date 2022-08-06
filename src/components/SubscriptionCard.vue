<template>
  <div class="subsecritip-card relative card-wrapper shadow-[0px_0px_6px_rgba(0,0,0,0.29)] rounded-3xl py-8 px-9 z-10 before:w-full before:h-3/4 before:absolute before:top-0 before:inset-x-0 before:mx-auto before:bg-card before:bg-no-repeat before:bg-top before:bg-contain before:z-0" :class="(isFavorite && 'bg-leny-blue-800 my-0 md:-my-8 shadow-2xl') || ''">
    <div>
      <h3 class="text-leny-cyan-400 text-2xl font-medium">
        {{ planName }} Plan
      </h3>
      <span class="text-base text-leny-gray-700 font-normal" :class="(isFavorite && 'text-white') || ''">{{ planType }} Subscription</span>
      <img :src="require(`../assets/images/${icon}`)" class="mx-auto my-11" loading="lazy" role="presentation" />
      <ul class="pb-28">
        <li v-for="item in planDetails" :key="item" class="flex mb-4">
          <img src="../assets/images/check_icon.svg" loading="lazy" role="presentation" width="12" height="12" />
          <span class="ml-3 text-sm text-leny-gray-700" :class="(isFavorite && 'text-white') || ''">
            {{ item }}
          </span>
        </li>
      </ul>
      <div class="absolute bottom-6 inset-x-0 ax-auto mt-8">
        <p class="text-center text-leny-cyan-400 text-2xl font-medium mb-8" :class="(isFavorite && 'text-white') || ''">
          {{ price }} $ H.T
        </p>
        <a href="/signup" class="py-3 px-12 w-48 block mx-auto text-center font-regular text-xs text-white bg-leny-blue-800 rounded-full border border-leny-blue-800 hover:bg-transparent hover:text-leny-blue-800 shadow-md transition duration-300" :class="
            (isFavorite &&
              'bg-leny-cyan-400 border-leny-cyan-400 hover:text-leny-cyan-400') ||
            ''
          ">GO {{ planName }}</a>
      </div>
    </div>
    <span v-if="isFavorite" class="w-16 h-16 absolute bg-white -top-4 -right-4 rounded-full text-xs flex justify-center items-center text-center text-leny-cyan-400 shadow-[0px_0px_6px_rgba(0,0,0,0.29)] p-3">Most Popular</span>
  </div>
</template>
<script>
export default {
  name: "SubscriptionCard",
  props: {
    planName: {
      type: String,
      default: () => "",
    },
    planType: {
      type: String,
      default: () => "",
    },
    icon: {
      type: String,
      default: () => "",
    },
    planDetails: {
      type: Array,
      default: () => [],
    },
    price: {
      type: String,
      default: () => "",
    },
    isFavorite: {
      type: Boolean,
      default: () => false,
    },
  },
};
</script>
