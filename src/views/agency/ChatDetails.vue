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
          <agent-card 
            v-for="(agent, index) in usersItems" 
            :key="index" 
            :id="agent.id"
            :user-name="agent.name" 
            :user-email="agent.email" 
            :user-phone="agent.phone" 
            :user-photo="agent.photo" 
            :isAgent="false" 
            :buttonlabel="agent.id !== $route.params.id && 'Messages' || 'close'" 
            :isChatCard="true" />
        </div>
        <div class="w-2/3">
          <div v-if="!showMessagePanel" class="agent-list shadow-[0px_0px_6px_rgba(0,0,0,0.29)] p-8 pt-4.5 rounded-2xl">
            <h4 class="card-title font-futura-ptbook text-leny-blue-800 text-2xl mb-4.5">
              Agent’s user list:
            </h4>
            <div v-if="agentUsers && agentUsers.length" class="flex space-x-5">
              <div v-for="(user, index) in agentUsers" :key="index" class="text-center cursor-pointer" @click="openChatPanel(user)">
                <div class="avatar">
                  <div class="w-[45px] rounded-full">
                    <img :src="
                        require(`../../assets/images/agents/${user.photo}`)
                      " />
                  </div>
                </div>
                <p class="text-sm text-leny-gray-700 font-futura-ptbook">
                  {{ user.name }}
                </p>
              </div>
            </div>
            <p v-else class="text-sm text-leny-gray-700 font-futura-ptbook">There is no users for this agent</p>
          </div>
          <div v-else class="h-full">
            <div class="flex space-x-4 h-full">
              <div class="w-5/6 shadow-[0px_0px_6px_rgba(0,0,0,0.29)] rounded-3xl flex flex-col">
                <div class="panel-header rounded-t-3xl bg-leny-blue-800 h-18 flex items-center px-8">
                  <div class="avatar pr-4.5">
                    <div class="w-9 rounded-full">
                      <img :src="require(`../../assets/images/agents/${currentAgentChatPanel.photo}`)" />
                    </div>
                  </div>
                  <div>
                    <p class="text-base text-white font-futura-ptbook">
                      {{ this.currentAgentChatPanel.name }}
                    </p>
                    <p class="flex items-center">
                      <img src="../../assets/images/home_icon.svg" loading="lazy" role="presentation" />
                      <span class="text-sm text-leny-cyan-400 font-futura-ptbook pl-2">Property Name</span>
                    </p>
                  </div>
                </div>
                <div class="panel-body flex-1 px-8">
                  <message-item v-for="(message, index) in chatBoxMessages" :key="index" :is-agent="message.isAgent" :messageText="message.messageText" :user-name="curreentUserChatBox.name" :user-avatar="curreentUserChatBox.photo" :agent-name="currentAgentChatPanel.name" :agent-avatar="currentAgentChatPanel.photo" />
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
                <div class="mt-2">
                  <div class="flex flex-col space-y-4.5">
                    <div v-for="(property, index) in userProperties" :key="index" class="text-center cursor-pointer tooltip opacity-100 relative tooltip-leny-blue-800 z-10" :data-tip="property.title" 
                      @click="getChatByPropertiesAdnUserAndAgent(currentChatUser.id, property.id, $route.params.id)">
                      <div class="avatar">
                        <div class="w-15 rounded-full">
                          <img :src="require(`../../assets/images/${property.images[0]}`)" />
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
import MessageItem from "../../components/agency/MessageItem.vue";
export default {
  name: "AgentsPage",
  components: {
    Header,
    Footer,
    AgencyHeader,
    AgentCard,
    MessageItem,
  },
  data: () => {
    return {
      showMessagePanel: false,
      showPropertyBtn: false,
      initializeChatBox: true,
      message: "",
      usersItems: [],
      agentUsers: [],
      arrayMessages: [],
      currentChatUser: {},
      currentAgentUser: {},
      currentChatBox:{}
    };
  },
  computed: {
    messagesList() {
      return this.arrayMessages;
    },
    curreentUserChatBox() {
      return this.currentChatUser;
    },
    currentAgentChatPanel() {
      return this.currentAgentUser;
    },
    userProperties() {
      return this.getPropertiesByUser(this.currentChatUser.id);
    },
    chatBoxMessages() {
      if(this.currentChatBox && this.currentChatBox.length) {
        return this.currentChatBox[0].messagetexts
      } else {
        return [];
      }
    }
  },
  mounted() {
    this.id = this.$route.params.id;
    this.usersItems = this.getLatestAgentChatList(this.id);
    this.agentUsers = this.getUsersByAgent(this.id);
  },
  methods: {
    addMessage() {
      if (this.currentChatBox && this.currentChatBox.length) {
        this.currentChatBox[0].messagetexts.push({
          isAgent: true,
          messageText: this.message,
        });
        this.message = "";
      }
    },
    getLatestAgentChatList(agentId) {
      let agentsList = this.$store.state.agents;
      const currentAgent = agentsList.find((agent) => {
        return agent.id === agentId;
      });
      this.currentAgentUser = currentAgent;
      agentsList = agentsList.filter((agent) => {
        return agent !== currentAgent;
      });
      agentsList.unshift(currentAgent);
      return agentsList.slice(0, 3);
    },
    getUsersByAgent(agentId) {
      let usersList = this.$store.state.users;
      usersList = usersList.filter((user) => {
        return user.agentId === agentId;
      });
      return usersList;
    },
    openChatPanel(user) {
      this.currentChatUser = user;
      this.showMessagePanel = true;
      this.showPropertyBtn = false;
    },
    getPropertiesByUser(userId) {
      let properties = this.$store.state.properties;
      let userProperties = properties.filter((property) => {
        return property.users.indexOf(userId) !== -1;
      });
      if (userProperties.length && this.initializeChatBox) {
        this.currentChatBox = this.getChatByPropertiesAdnUserAndAgent(userId,userProperties[0].id, this.id );
      }
      this.initializeChatBox = false;
      return userProperties;
    },
    getChatByPropertiesAdnUserAndAgent(userId, propertyId, agentId) {
      let chatMessages = this.$store.state.messages;
      let propertyChat = chatMessages.filter((message) => {
        return message.userId === userId && message.propertyId === propertyId && message.agentId === agentId
      });
      console.warn(propertyChat,propertyId);
      if( propertyChat ) {
        this.currentChatBox = propertyChat;
      }
      return propertyChat;
    },
  },
};
</script>
<style scoped>
.tooltip:before {
  background-color: #112c61 !important;
  border-radius: 1rem !important;
  padding: 7px 22px !important;
  font-family: futura_ptlight;
  font-size: 12px;
}
.tooltip:after {
  display: none !important;
}
</style>
