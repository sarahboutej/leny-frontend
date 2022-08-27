
<template>
  <Header :is-agency-page="true" />
  <AgencyHeader :action-Button-text="'Create Agent'" :page="'agent'" />
  <section class="pb-16">
    <div class="container mx-auto">
      <h1 class="text-h2xl text-leny-blue-800 mb-6 font-futura-ptmedium">Agents List</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-1 gap-6">
        <user-card 
          v-for="(agent, index) in $store.state.agents" 
          :key="index" 
          :user-name="agent.name" 
          :user-email="agent.email" 
          :user-phone="agent.phone" 
          :user-photo="agent.photo"
          :buttonlabel="'Assign to user'"
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
import UserCard from "../../components/agency/UserCard.vue";
export default {
  name: "AgentsPage",
  components: {
    Header,
    Footer,
    AgencyHeader,
    UserCard,
  },
  data: () => {
    return {
      agentsItems: [
        {
          name: "Agent Name",
          email: "agent-email@gmail.com",
          phone: "+33216897123",
          photo: "face_1.jpg",
        },
        {
          name: "Agent Name",
          email: "agent-email@gmail.com",
          phone: "+33216897123",
          photo: "face_2.jpg",
        },
        {
          name: "Agent Name",
          email: "agent-email@gmail.com",
          phone: "+33216897123",
          photo: "face_3.jpg",
        },
        {
          name: "Agent Name",
          email: "agent-email@gmail.com",
          phone: "+33216897123",
          photo: "face_4.jpg",
        },
        {
          name: "Agent Name",
          email: "agent-email@gmail.com",
          phone: "+33216897123",
          photo: "face_5.jpg",
        },
        {
          name: "Agent Name",
          email: "agent-email@gmail.com",
          phone: "+33216897123",
          photo: "face_6.jpg",
        },
        {
          name: "Agent Name",
          email: "agent-email@gmail.com",
          phone: "+33216897123",
          photo: "face_7.jpg",
        },
        {
          name: "Agent Name",
          email: "agent-email@gmail.com",
          phone: "+33216897123",
          photo: "face_8.jpg",
        },
      ],
    };
  },
};
</script>
