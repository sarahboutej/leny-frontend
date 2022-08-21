
<template>
  <Header :is-agency-page="true" />
  <AgencyHeader :action-Button-text="'Create Ads'" :page="'ads'" />
  <section class="pb-16 px-4 lg:px-0">
    <div class="container mx-auto">
      <h1 class="text-h2xl text-leny-blue-800 mb-6 font-futura-ptmedium">Ads List</h1>
      <div class="grid grid-cols-2 grid-rows-1 gap-6">
        <ads-card 
          v-for="(ads, index) in adsItems" 
          :key="index" 
          :ads-title="ads.title" 
          :ads-description="ads.description"
          :ads-photo="ads.photo"
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
import AdsCard from "../../components/agency/AdsCard.vue";
export default {
  name: "AgentsPage",
  components: {
    Header,
    Footer,
    AgencyHeader,
    AdsCard,
  },
  data: () => {
    return {
      adsItems: [
        {
          title: "Monaco - Open view",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard",
          photo: "ads_image.jpg",
        },
        {
          title: "Monaco - Open view",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard",
          photo: "ads_image.jpg",
        },
        {
          title: "Monaco - Open view",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard",
          photo: "ads_image.jpg",
        },
        {
          title: "Monaco - Open view",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard",
          photo: "ads_image.jpg",
        },
        {
          title: "Monaco - Open view",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard",
          photo: "ads_image.jpg",
        },
        {
          title: "Monaco - Open view",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard",
          photo: "ads_image.jpg",
        },
        {
          title: "Monaco - Open view",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard",
          photo: "ads_image.jpg",
        },
        {
          title: "Monaco - Open view",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard",
          photo: "ads_image.jpg",
        },
      ],
    };
  },
};
</script>
