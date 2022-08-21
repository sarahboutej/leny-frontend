
<template>
  <Header :is-agency-page="true" />
  <AgencyHeader :actionButton="false" :page="'estimation'" />
  <section class="pb-16">
    <div class="container mx-auto">
      <h1 class="text-h2xl text-leny-blue-800 mb-6 font-futura-ptmedium">Estimation</h1>
      <div class="overflow-x-auto shadow-xl rounded-3xl">
        <table class="table table-zebra w-full text-center">
          <!-- head -->
          <thead class="bg-leny-blue-900 text-white py-3">
            <tr>
              <th class="bg-transparent capitalize font-futura-ptbook font-normal text-base">Estimation</th>
              <th class="bg-transparent capitalize font-futura-ptbook font-normal text-base">Contact</th>
              <th class="bg-transparent capitalize font-futura-ptbook font-normal text-base">Status</th>
              <th class="bg-transparent capitalize font-futura-ptbook font-normal text-base">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in estimations" :key="index" class="hover cursor-pointer even:bg-white odd:bg-leny-light-gray">
              <td class="text-leny-gray-700 text-sm font-futura-ptlight bg-white"> <router-link to="/agency/estimation/details">{{item.estimation}}</router-link></td>
              <td class="text-leny-gray-700 text-sm font-futura-ptlight bg-white"><router-link to="/agency/estimation/details"> {{item.contact}} </router-link></td>
              <td class="bg-white"> 
                <button class="rounded-full px-4 h-6 w-22 text-xs  font-futura-ptlight" 
                  :class="(item.status === 'Validated') &&  'bg-leny-cyan-400 border border-leny-cyan-400 text-white' ||  
                  'bg-leny-blue-800 border border-leny-blue-800 text-white'">
                  <router-link to="/agency/estimation/details">{{ item.status }}</router-link>
                </button>
              </td>
              <td class="text-leny-gray-700 text-sm font-futura-ptlight bg-white"><router-link to="/agency/estimation/details"> {{item.date}} </router-link></td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </section>
  <Footer />
</template>
<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import AgencyHeader from "../../components/agency/AgencyHeader.vue";
export default {
  name: "EstimationPage",
  components: {
    Header,
    Footer,
    AgencyHeader,
  },
  data: () => {
    return {
      estimations: [
        {
          estimation: "167900 € - 197000 €",
          contact: "Emma Amar",
          status: "Validated",
          date: "29-02-2022 12:00:00",
        },
        {
          estimation: "167900 € - 197000 €",
          contact: "Emma Amar",
          status: "Archived",
          date: "29-02-2022 12:00:00",
        },
        {
          estimation: "167900 € - 197000 €",
          contact: "Emma Amar",
          status: "Validated",
          date: "29-02-2022 12:00:00",
        },
        {
          estimation: "167900 € - 197000 €",
          contact: "Emma Amar",
          status: "Archived",
          date: "29-02-2022 12:00:00",
        },
         {
          estimation: "167900 € - 197000 €",
          contact: "Emma Amar",
          status: "Validated",
          date: "29-02-2022 12:00:00",
        },
        {
          estimation: "167900 € - 197000 €",
          contact: "Emma Amar",
          status: "Archived",
          date: "29-02-2022 12:00:00",
        },
        {
          estimation: "167900 € - 197000 €",
          contact: "Emma Amar",
          status: "Validated",
          date: "29-02-2022 12:00:00",
        },
        {
          estimation: "167900 € - 197000 €",
          contact: "Emma Amar",
          status: "Archived",
          date: "29-02-2022 12:00:00",
        },
      ],
    };
  },
};
</script>
