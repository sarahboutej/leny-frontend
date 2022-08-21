<template>
  <div class="w-1/3 rounded-2.5 text-base px-6 py-4.5 relative" 
     :class="isActive && 'relative bg-leny-blue-700 border-2 border-leny-blue-700 text-white hover:border-leny-cyan-400' || 'bg-leny-gray-300 border-2 border-leny-gray-300 text-leny-gray-700'"
     @mouseover="showCancelBtn = true"
     @mouseleave="showCancelBtn = false">
    <span v-if="isActive && showCancelBtn" class="absolute -right-2 -top-2 rounded-full bg-leny-cyan-400 w-6 h-6 flex items-center justify-center font-futura-ptbook cursor-pointer">x</span>
    <div class="card-wrapper cursor-pointer">
      <h4 class="text-base font-futura-ptmedium mb-2" :class="isActive && 'text-leny-cyan-400' || 'text-leny-blue-500'"> {{ title }} </h4>
      <p class="font-futura-ptlight mb-0"> {{ subTitle }} </p>
      <p class="font-futura-ptbook mt-10"> {{ price }} </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "SubscriptionPlan",
  props: {
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
    price: {
      type: String,
      default: "",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  data: () => {
    return {
      showCancelBtn: false
    }
  }
};
</script>
