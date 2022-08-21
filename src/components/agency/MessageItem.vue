<template>
  <div class="flex mt-6">
    <div class="avatar">
      <div class="w-11 h-11 rounded-full mr-2">
        <img :src="require(`../../assets/images/agents/${avatar}`)" />
      </div>
    </div>
    <div class="p-2 rounded-md" :class="isAgent && 'bg-leny-blue-800' || 'bg-leny-cyan-400'">
      <p class="text-sm font-futura-ptbook" :class="isAgent && 'text-leny-cyan-400' || 'text-white'">{{ userName }}</p>
      <p class="text-sm font-futura-ptlight text-white">{{ messageText }}</p>
    </div>
  </div>

</template>
<script>
export default {
  name: "MessageItem",
  props: {
    isAgent: {
      type: Boolean,
      default: true,
    },
    messageText: {
      type: String,
      default: () => "",
    },
    userName: {
      type: String,
      default: () => "",
    },
    avatar: {
      type: String,
      default: () => "",
    },
  },
};
</script>
