
<template>
  <Header :is-agency-page="true" />
  <AgencyHeader 
    :action-Button-text="'Add New Property'" 
    :second-action-button="true" 
    :second-button-text="'Exclude Properties'" 
    :isModalAction="false" 
    :page="'property'"
    @display-exclude="showAction()" />
  <section class="pb-16">
    <div class="container mx-auto">
      <h1 class="text-h2xl text-leny-blue-800 mb-6 font-futura-ptmedium">Properties List</h1>
      <div class="grid grid-cols-1 md:grid-cols-4 grid-rows-1 gap-6">
          <property-card 
            v-for="(item, index) in cardItems" 
            :key="index" 
            :id="`propertyCaroussel${index}`"
            :item-type="item.type" 
            :item-title="item.title" 
            :address="item.address" 
            :images="item.images" 
            :rooms="item.rooms" 
            :bathroom="item.bathroom" 
            :price="item.price" 
            :rest-time="item.time"
            :show-exclude="showExclude" />
      </div>
      <div v-if="showExclude" class="flex justify-center mx-auto mt-8 space-x-6">
        <button class="
              font-futura-ptbook
              flex items-center justify-center h-10
              w-40
              px-8
              text-center
              font-regular
              text-sm text-white
              bg-leny-blue-800
              rounded-full
              border border-leny-blue-800
              hover:bg-transparent hover:text-leny-blue-800
              transition
              duration-300"
            @click="hideAction">Cancel</button>
        <label for="assign-agent" class="
              font-futura-ptbook
              flex items-center justify-center h-10
              w-40
              px-8
              text-center
              font-regular
              text-sm text-white
              bg-leny-cyan-400
              rounded-full
              border border-leny-cyan-400
              hover:bg-transparent hover:text-leny-cyan-400
              transition
              duration-300"
            @click="hideAction">Done</label>
      </div>
    </div>
  </section>
  <Footer />
</template>
<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import AgencyHeader from "../../components/agency/AgencyHeader.vue";
import PropertyCard from "../../components/agency/PropertyCard.vue";
export default {
  name: "AgencyProperties",
  components: {
    Header,
    Footer,
    AgencyHeader,
    PropertyCard,
  },
  data: () => {
    return {
      cardItems: [
        {
          type: "Apartment",
          title: "Monaco - Open view",
          address: "Monaco - Open view",
          area: 120,
          rooms: 2,
          bathroom: 1,
          price: "119.000",
          images: ["property-img-1.jpg", "property-img-2.jpg","property-img-3.jpg"],
          time: "48"
        },
        {
          type: "Apartment",
          title: "Monaco - Open view",
          address: "Monaco - Open view",
          area: 120,
          rooms: 2,
          bathroom: 1,
          price: "119.000",
           images: ["property-img-1.jpg", "property-img-2.jpg","property-img-3.jpg"],
          time: "48"
        },
        {
          type: "Apartment",
          title: "Monaco - Open view",
          address: "Monaco - Open view",
          area: 120,
          rooms: 2,
          bathroom: 1,
          price: "119.000",
          images: ["property-img-1.jpg", "property-img-2.jpg","property-img-3.jpg"],
          time: "48"
        },
        {
          type: "Apartment",
          title: "Monaco - Open view",
          address: "Monaco - Open view",
          area: 120,
          rooms: 2,
          bathroom: 1,
          price: "119.000",
           images: ["property-img-1.jpg", "property-img-2.jpg","property-img-3.jpg"],
          time: "48"
        },
        {
          type: "Apartment",
          title: "Monaco - Open view",
          address: "Monaco - Open view",
          area: 120,
          rooms: 2,
          bathroom: 1,
          price: "119.000",
           images: ["property-img-1.jpg", "property-img-2.jpg","property-img-3.jpg"],
          time: "48"
        },
        {
          type: "Apartment",
          title: "Monaco - Open view",
          address: "Monaco - Open view",
          area: 120,
          rooms: 2,
          bathroom: 1,
          price: "119.000",
          images: ["property-img-1.jpg", "property-img-2.jpg","property-img-3.jpg"],
          time: "48"
        },
        {
          type: "Apartment",
          title: "Monaco - Open view",
          address: "Monaco - Open view",
          area: 120,
          rooms: 2,
          bathroom: 1,
          price: "119.000",
          images: ["property-img-1.jpg", "property-img-2.jpg","property-img-3.jpg"],
          time: "48"
        },
        {
          type: "Apartment",
          title: "Monaco - Open view",
          address: "Monaco - Open view",
          area: 120,
          rooms: 2,
          bathroom: 1,
          price: "119.000",
          images: ["property-img-1.jpg", "property-img-2.jpg","property-img-3.jpg"],
          time: "48"
        },
      ],
      excludePropertyProperties: false
    };
  },
  computed: {
    showExclude() {
      return this.excludePropertyProperties;
    }
  },
  methods: {
    showAction() {
      this.excludePropertyProperties = true
    },
    hideAction() {
      this.excludePropertyProperties = false
    }
  }
};
</script>
