<template>
  <div class="card overflow-visible flex items-start flex-row bg-white shadow-[0px_0px_6px_rgba(0,0,0,0.29)] py-5">
    <div class="avatar pl-5 pr-3.5">
      <div class="w-23">
        <img :src="require(`../../assets/images/agents/${userPhoto}`)" class="w-auto h-auto" />
      </div>
    </div>
    <div class="card-body px-2 py-0">
      <div class="flex justify-between">
        <h2 class="card-title font-futura-ptmedium font-normal text-leny-blue-800 text-2xl">{{ userName }}</h2>
        <div v-if="isAgent" class="dropdown dropdown-right">
          <label tabindex="0" class="btn btn-sm btn-circle btn-ghost">
            <img src="../../assets/images/three_dots.svg" loading="lazy" role="presentation">
          </label>
          <ul tabindex="0" class="dropdown-content menu bg-white w-32 rounded-box shadow-xl">
            <li>
              <label for="update-modal" class="modal-button w-full active:bg-leny-cyan-400 focus:bg-leny-cyan-400">
                <a class="flex items-center justify-between">
                  <img src="../../assets/images/update_icon.svg" loading="lazy" role="presentation">
                  <span class="text-leny-gray-800 font-futura-ptbook ml-3">Update</span>
                </a>
              </label>
            </li>
            <li>
              <label for="delete-modal" class="modal-button w-full active:bg-leny-cyan-400 focus:bg-leny-cyan-400">
                <a class="flex items-center justify-between">
                  <img src="../../assets/images/delete_icon.svg" loading="lazy" role="presentation">
                  <span class="text-leny-gray-800 font-futura-ptbook ml-4">Delete</span>
                </a>
              </label>
            </li>
          </ul>
        </div>
      </div>
      <p class="flex">
        <img src="../../assets/images/email_icon.svg" loading="lazy" role="presentation" class="w-3" />
        <span class="ml-3 text-xs md:text-sm text-leny-gray-700 font-futura-ptlight">
          {{ userEmail }}
        </span>
      </p>
      <p class="flex mb-1">
        <img src="../../assets/images/phone.svg" loading="lazy" role="presentation" class="w-3" />
        <span class="ml-3 text-xs md:text-sm text-leny-gray-700  font-futura-ptlight">
          {{ userPhone }}
        </span>
      </p>
      <div v-if="displayAction" class="card-actions">
          <router-link v-if="isChatCard" to="/agency/chat/details" class="
          h-8 flex items-center justify-between
          px-8
          text-center
          font-futura-ptbook
          text-sm text-white
          bg-leny-blue-800
          rounded-full
          border border-leny-blue-800
          hover:bg-transparent hover:text-leny-blue-800
          transition
          duration-300"> {{ buttonlabel }} </router-link>
        <label for="assign-user" v-else class="
          h-8 flex items-center justify-between
          px-8
          text-center
          cursor-pointer
          font-futura-ptbook
          text-sm text-white
          bg-leny-blue-800
          rounded-full
          border border-leny-blue-800
          hover:bg-transparent hover:text-leny-blue-800
          transition
          duration-300"> {{ buttonlabel }} </label>
      </div>
    </div>
  </div>
  <update-agent v-if="isAgent" />
  <delete-agent v-if="isAgent" />
  <assign-user v-if="isAgent" />
</template>
<script>
import UpdateAgent from "../modals/UpdateAgent.vue";
import DeleteAgent from "../modals/DeleteAgent.vue";
import AssignUser from "../modals/AssignUser.vue"
export default {
  name: "AgentCard",
  components: {
    UpdateAgent,
    DeleteAgent,
    AssignUser
  },
  props: {
    userName: {
      type: String,
      default: "",
    },
    userEmail: {
      type: String,
      default: "",
    },
    userPhone: {
      type: String,
      default: "",
    },
    userPhoto: {
      type: String,
      default: null,
    },
    isAgent: {
      type: Boolean,
      default: true,
    },
    displayAction: {
      type: Boolean,
      default: true,
    },
    buttonlabel: {
      type: String,
      default: null,
    },
    isChatCard: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
