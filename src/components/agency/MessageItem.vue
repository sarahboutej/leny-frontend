<template>
  <div class="flex mt-6">
    <div class="avatar">
      <div class="w-11 h-11 rounded-full mr-2">
        <img :src="isAgent && require(`../../assets/images/agents/${agentAvatar}`) || require(`../../assets/images/agents/${userAvatar}`)" />
      </div>
    </div>
    <div v-if="isAgent" class="p-2 rounded-md bg-leny-blue-800">
      <p class="text-sm font-futura-ptbook text-leny-cyan-400">{{ agentName }}</p>
      <p class="text-sm font-futura-ptlight text-white">{{ messageText }}</p>
    </div>
    <div v-else class="p-2 rounded-md bg-leny-cyan-400">
      <p class="text-sm font-futura-ptbook text-white">{{ userName }}</p>
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
    userAvatar: {
      type: String,
      default: () => "",
    },
    agentName: {
      type: String,
      default: () => "",
    },
    agentAvatar: {
      type: String,
      default: () => "",
    },
  },
};
</script>
