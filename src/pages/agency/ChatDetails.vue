<template>
  <Header :is-agency-page="true" />
  <AgencyHeader :actionButton="false" :page="'chat'" />
  <section class="pb-16">
    <div class="container mx-auto">
      <h1 class="text-h2xl text-leny-blue-800 mb-6 font-futura-ptmedium">
        Chat
      </h1>
      <div class="flex space-x-6">
        <div class="w-1/3 space-y-6" :class="showMessagePanel && 'items-strech'">
          <agent-card v-for="(agent, index) in usersItems" :key="index" :user-name="agent.name" :user-email="agent.email" :user-phone="agent.phone" :user-photo="agent.photo" :isAgent="false" :buttonlabel="'Messages'" />
        </div>
        <div class="w-2/3">
          <div v-if="!showMessagePanel" class="agent-list shadow-[0px_0px_6px_rgba(0,0,0,0.29)] p-8 pt-4.5 rounded-2xl">
            <h4 class="card-title font-futura-ptbook text-leny-blue-800 text-2xl mb-4.5">
              Agent’s user list:
            </h4>
            <div class="flex space-x-5">
              <div v-for="(user, index) in agentUsers" :key="index" class="text-center cursor-pointer" @click="showMessagePanel = true; showPropertyBtn = false">
                <div class="avatar">
                  <div class="w-[45px] rounded-full">
                    <img :src="
                        require(`../../assets/images/agents/${user.avatar}`)
                      " />
                  </div>
                </div>
                <p class="text-sm text-leny-gray-700 font-futura-ptbook">
                  {{ user.name }}
                </p>
              </div>
            </div>
          </div>
          <div v-else class="h-full">
            <div class="flex space-x-4 h-full">
              <div class="w-5/6 shadow-[0px_0px_6px_rgba(0,0,0,0.29)] rounded-3xl flex flex-col">
                <div class="panel-header rounded-t-3xl bg-leny-blue-800 h-18 flex items-center px-8">
                  <div class="avatar pr-4.5">
                    <div class="w-9 rounded-full">
                      <img src="../../assets/images/agents/face_5.jpg" />
                    </div>
                  </div>
                  <div>
                    <p class="text-base text-white font-futura-ptbook">
                      Agent Name
                    </p>
                    <p class="flex items-center">
                      <img src="../../assets/images/home_icon.svg" loading="lazy" role="presentation" />
                      <span class="text-sm text-leny-cyan-400 font-futura-ptbook pl-2">Property Name</span>
                    </p>
                  </div>
                </div>
                <div class="panel-body flex-1 px-8">
                  <message-item v-for="(message, index) in messagesList" :key="index" :is-agent="message.isAgent" :messageText="message.messageText" :userName="message.userName" :avatar="message.avatar" />
                </div>
                <div class="panel-footer h-18 border-t border-leny-gray-500 flex items-center px-8">
                  <input v-model="message" class="border-0 focus:ring-0 pl-0 text-leny-gray-200 font-futura-ptbook placeholder:text-sm placeholder:text-leny-gray-200 bg-transparent w-full focus:outline-none sm:text-sm" type="text" placeholder="Send a message…" />
                  <div class="actions-container flex space-x-5">
                    <button class="w-5">
                      <img src="../../assets/images/emojis_icon.svg" loading="lazy" role="presentation" class="pt-0.5" />
                    </button>
                    <button class="w-5">
                      <img src="../../assets/images/attachment_icon.svg" loading="lazy" role="presentation" />
                    </button>
                    <button class="w-5" @click="addMessage()">
                      <img src="../../assets/images/send_icon.svg" loading="lazy" role="presentation" />
                    </button>
                  </div>
                </div>
              </div>
              <div class="w-1/6" @mouseover="showPropertyBtn = true" @mouseleave="showPropertyBtn = false">
                <button v-if="showPropertyBtn && showMessagePanel" class="mt-4 h-8 flex items-center justify-between px-4 text-center font-futura-ptlight text-xs text-white bg-leny-blue-800 rounded-full border border-leny-blue-800 hover:bg-transparent hover:text-leny-blue-800 transition duration-300" @click="showMessagePanel = false" >
                  Property Name
                </button>
                <div class="mt-2">
                  <div class="flex flex-col space-y-4.5">
                    <div v-for="(user, index) in agentUsers" :key="index" class="text-center cursor-pointer">
                      <div class="avatar">
                        <div class="w-15 rounded-full">
                          <img src="../../assets/images/propertychat.jpg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>
<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import AgencyHeader from "../../components/agency/AgencyHeader.vue";
import AgentCard from "../../components/agency/UserCard.vue";
import MessageItem from "../../components/agency/MessageItem.vue"
export default {
  name: "AgentsPage",
  components: {
    Header,
    Footer,
    AgencyHeader,
    AgentCard,
    MessageItem
  },
  data: () => {
    return {
      showMessagePanel: false,
      showPropertyBtn: false,
      message: '',
      usersItems: [
        {
          name: "User Name",
          email: "agent-email@gmail.com",
          phone: "+33216897123",
          photo: "face_1.jpg",
        },
        {
          name: "User Name",
          email: "agent-email@gmail.com",
          phone: "+33216897123",
          photo: "face_2.jpg",
        },
        {
          name: "User Name",
          email: "agent-email@gmail.com",
          phone: "+33216897123",
          photo: "face_3.jpg",
        },
      ],
      agentUsers: [
        {
          name: "User Name",
          avatar: "face_4.jpg",
        },
        {
          name: "User Name",
          avatar: "face_5.jpg",
        },
        {
          name: "User Name",
          avatar: "face_6.jpg",
        },
        {
          name: "User Name",
          avatar: "face_7.jpg",
        },
      ],
      arrayMessages: [
        {
          isAgent: true,
          userName: "Agent Name",
          messageText: "Hello",
          avatar: "face_1.jpg"
        },
        {
          isAgent: false,
          userName: "User Name",
          messageText: "Hello, Can you Help me",
          avatar: "face_2.jpg"
        }
      ]
    };
  },
  computed: {
    messagesList () {
      return this.arrayMessages;
    }
  },
  methods: {
    addMessage() {
      if (this.message) {
        this.arrayMessages.push({isAgent: true, userName: "Agent Name", messageText: this.message, avatar: "face_1.jpg"});
        this.message = '';
      }
    }
  }
};
</script>
