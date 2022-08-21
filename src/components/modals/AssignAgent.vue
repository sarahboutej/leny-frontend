
<template>
  <input type="checkbox" id="assign-agent" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box w-86 px-9 overflow-hidden">
      <p class="text-2xl font-futura-ptmedium text-leny-cyan-400 pb-2 before:leny-gray-700 before:border-leny-gray-400 relative before:w-11 before:border-b before:absolute before:bottom-0 before:inset-x-0 mb-4">
        Choose Agent
      </p>
      <p class="text-sm text-leny-gray-700 font-futura-ptlight mb-4">Choose the agent to whom you want to transfer the estimate</p>
      <ul class="h-80 overflow-x-hidden overflow-y-scroll scrollbar scrollbar-thumb-leny-gray-500 scrollbar-thumb-rounded-lg scrollbar-track-gray-100 scrollbar-medium">
        <li v-for="(agent, index) in agentsList" :key="index" class="pl-2 mb-4 flex items-center">
          <input type="checkbox" class="mr-2 w-4 h-4 text-white bg-white shadow-[0px_0px_6px_rgba(0,0,0,0.29)] rounded-sm border-white focus:ring-0 focus:ring-offset-0 checked:bg-check" />
          <div class="avatar mr-3">
            <div class="w-9 rounded-full">
              <img :src="require(`../../assets/images/agents/${agent.avatar}`)" alt="" />
            </div>
          </div>
          <span class="text-leny-blue-800 text-sm font-futura-ptbook">{{agent.name}}</span>
        </li>
      </ul>
      <div class="actions mt-6">
        <label for="assign-agent" class="
          py-2.5
          w-36
          block
          mx-auto
          text-center
          font-futura-ptbook
          text-sm text-white
          bg-leny-blue-800
          rounded-full
          border border-leny-blue-800
          hover:bg-transparent hover:text-leny-blue-800
          transition
          duration-300"> Assign </label>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AssignAgent",
  data: () => {
    return {
      agentsList: [
        {name: "Agent Name", avatar: "face_1.jpg"},
        {name: "Agent Name", avatar: "face_2.jpg"},
        {name: "Agent Name", avatar: "face_3.jpg"},
        {name: "Agent Name", avatar: "face_4.jpg"},
        {name: "Agent Name", avatar: "face_5.jpg"},
        {name: "Agent Name", avatar: "face_6.jpg"},
        {name: "Agent Name", avatar: "face_4.jpg"},
        {name: "Agent Name", avatar: "face_8.jpg"},
        {name: "Agent Name", avatar: "face_9.jpg"},
        {name: "Agent Name", avatar: "face_5.jpg"},

      ],
    };
  },
};
</script>
