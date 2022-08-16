<template>
  <li class="flex px-6 py-3 hover:bg-leny-light-gray cursor-pointer relative" :class="!read && 'bg-leny-light-gray'">
    <span v-if="!read" class="indicator-item indicator-middle indicator-start badge badge-xs bg-leny-blue-800 mt-4 mr-2 h-2.5 px-1 -ml-4.5"></span>
    <img :src="require(`../assets/images/${image}`)" class="w-12 h-12 rounded-full border-2 p-1 border-leny-blue-800" loading="lazy" role="presentation" />
    <div class="ml-4">
      <p class="text-sm font-light text-leny-gray-700"> {{text}} </p>
      <span class="text-xxs text-leny-gray-600">{{time}}</span>
    </div>
  </li>
</template>
<script>
export default {
  name: "NotificationItem",
  props: {
    text: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
    time: {
      type: String,
      default: "",
    },
    read: {
      type: Boolean,
      default: true
    }
  },
};
</script>
