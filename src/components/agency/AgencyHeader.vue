<template>
  <section class="bg-leny-blue-900 mt-[5.5rem] rounded-b-4xl py-11 mb-10">
    <div class="container mx-auto relative">
      <div class="flex">
        <div class="item w-1/5 h-auto flex justify-end">
          <div class="avatar">
            <div class="w-30 h-30 rounded-3xl bg-leny-cyan-400">
              <div v-if="$store.state.logo" :style="{ 'background-image': `url(${$store.state.logo})` }" class="w-30 h-30 bg-cover"></div>
              <p v-else class="text-white text-h1xl h-full flex items-center justify-center font-futura-ptbook">{{ $store.state.abbreviation }}</p>
            </div>
          </div>
        </div>
        <div class="item w-4/5 h-auto pl-5">
          <div class="box-wrapper">
            <div>
              <h3 class="text-leny-cyan-400 text-2xl font-futura-ptmedium mb-1">{{ $store.state.name }}</h3>
              <p class="mb-2 text-base text-white font-futura-ptbook">{{ $store.state.bio }}</p>
              <router-link to="/agency/edit_profile" class="
              py-2
              px-8
              inline-block
              text-center
              font-futura-ptbook
              text-sm text-white
              bg-leny-cyan-400
              rounded-full
              border border-leny-cyan-400
              hover:bg-transparent hover:text-leny-cyan-400
              transition
              duration-300
            ">Edit profile</router-link>
            </div>
            <div class="mt-4">
              <router-link to="/agency/agents" 
                class="text-base font-futura-ptbook hover:text-leny-cyan-400" 
                :class="page === 'agent' && 'text-leny-cyan-400' || 'text-white'">
                <span class="pr-3">Agents</span>
                <span>12</span>
              </router-link>
              <span class="px-3 text-leny-gray-800 text-base">|</span>

              <router-link to="/agency/ads" 
                class="font-futura-ptbook text-base hover:text-leny-cyan-400"
                :class="page === 'ads' && 'text-leny-cyan-400' || 'text-white'">
                <span class="pr-3">Ads</span>
                <span>8</span>
              </router-link>
              <span class="px-3 text-leny-gray-800 text-base">|</span>

              <router-link to="/agency/properties" 
                class="text-base font-futura-ptbook hover:text-leny-cyan-400"
                :class="page === 'property' && 'text-leny-cyan-400' || 'text-white'">
                <span class="pr-3">Properties</span>
                <span>12</span>
              </router-link>
              <span class="px-3 text-leny-gray-800 text-base">|</span>

              <router-link to="/agency/users" 
                class="text-base font-futura-ptbook hover:text-leny-cyan-400"
                :class="page === 'users' && 'text-leny-cyan-400' || 'text-white'" >
                <span class="pr-3">Users</span>
                <span>9</span>
              </router-link>
              <span class="px-3 text-leny-gray-800 text-base">|</span>

              <router-link to="/agency/estimation" 
                class="text-base font-futura-ptbook hover:text-leny-cyan-400"
                :class="page === 'estimation' && 'text-leny-cyan-400' || 'text-white'">
                <span class="pr-3">Estimation</span>
                <span>6</span>
              </router-link>
              <span class="px-3 text-leny-gray-800 text-base">|</span>

              <router-link to="/agency/chat" 
                class="text-base font-futura-ptbook  hover:text-leny-cyan-400"
                :class="page === 'chat' && 'text-leny-cyan-400' || 'text-white'">
                <span class="pr-3">chats</span>
                <span>7</span>
              </router-link>

            </div>
          </div>
        </div>
      </div>
      <div v-if="actionButton" class="header-button-section absolute right-[8.5rem] -bottom-12 space-x-4">
        <label v-if="secondActionButton" class="
              cursor-pointer
              py-3
              px-8
              w-24
              text-center
              font-futura-ptbook
              text-sm text-leny-cyan-400
              bg-white
              rounded-full
              border border-leny-cyan-400
              hover:bg-leny-gray-400
              transition
              duration-300"
            @click="$emit('display-exclude')">{{secondButtonText}}</label>
          <label v-if="isModalAction" :for="`create-${page}`" class="
              cursor-pointer
              py-3
              px-8
              w-24
              text-center
              font-futura-ptbook
              text-sm text-white
              bg-leny-cyan-400
              rounded-full
              border border-leny-cyan-400
              hover:bg-leny-cyan-500
              transition
              duration-300
            ">{{actionButtonText}}
          </label>
          <router-link :to="`/agency/${page}`" v-else class="
              cursor-pointer
              py-3
              px-8
              w-24
              text-center
              font-futura-ptbook
              text-sm text-white
              bg-leny-cyan-400
              rounded-full
              border border-leny-cyan-400
              hover:bg-leny-cyan-500
              transition
              duration-300
            ">
            {{actionButtonText}}
          </router-link>
      </div>
    </div>
    <create-agent />
    <create-ads />
  </section>
</template>
<script>
import CreateAgent from "../modals/CreateAgent.vue";
import CreateAds from "../modals/CreateAds.vue";
export default {
  name: "AgencyHeader",
  components: {
    CreateAgent,
    CreateAds
  },
  props: {
    page: {
      type: String,
      default: "",
    },
    actionButton: {
      type: Boolean,
      default: true,
    },
    isModalAction: {
      type: Boolean,
      default: true
    },
    secondActionButton: {
      type: Boolean,
      default: false,
    },
    actionButtonText: {
      type: String,
      default: "",
    },
    secondButtonText: {
      type: String,
      default: "",
    },
  },
};
</script>
