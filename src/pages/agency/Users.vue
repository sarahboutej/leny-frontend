
<template>
  <Header :is-agency-page="true" />
  <AgencyHeader :actionButton="false" :page="'users'" />
  <section class="pb-14 md:pb-24">
    <div class="container mx-auto">
      <h1 class="text-h2xl text-leny-blue-800 mb-6 font-futura-ptmedium">Users List</h1>
      <div class="grid grid-cols-3 grid-rows-1 gap-6">
        <agent-card 
          v-for="(agent, index) in usersItems" 
          :key="index" 
          :user-name="agent.name" 
          :user-email="agent.email" 
          :user-phone="agent.phone" 
          :user-photo="agent.photo"
          :isAgent="false"
          :displayAction="false"
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
  data: () => {
    return {
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
        {
          name: "User Name",
          email: "agent-email@gmail.com",
          phone: "+33216897123",
          photo: "face_4.jpg",
        },
        {
          name: "User Name",
          email: "agent-email@gmail.com",
          phone: "+33216897123",
          photo: "face_5.jpg",
        },
        {
          name: "User Name",
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
