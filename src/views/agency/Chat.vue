
<template>
  <Header :is-agency-page="true" />
  <AgencyHeader :actionButton="false" :page="'chat'" />
  <section class="pb-16">
    <div class="container mx-auto">
      <h1 class="text-h2xl text-leny-blue-800 mb-6 font-futura-ptmedium">Chat</h1>
      <div class="grid grid-cols-3 grid-rows-1 gap-6">
        <agent-card 
          v-for="agent in $store.state.agents" 
          :key="agent.id" 
          :id="agent.id"
          :user-name="agent.name" 
          :user-email="agent.email" 
          :user-phone="agent.phone" 
          :user-photo="agent.photo"
          :isAgent="false"
          :buttonlabel="'Messages'"
          :isChatCard="true"
        />
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
export default {
  name: "AgentsPage",
  components: {
    Header,
    Footer,
    AgencyHeader,
    AgentCard,
  },
};
</script>
