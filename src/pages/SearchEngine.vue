<template>
  <Header />
  <section class="mt-[5.5rem] pt-14 px-4 lg:px-0">
    <div class="container mx-auto">
      <div class="section-title mb-10">
        <h1 class="text-h2xl md:text-h1xl text-leny-blue-800 font-futura-ptmedium text-center">
          The best real estate search engine
        </h1>
        <p class="text-leny-gray-700 text-sm md:text-2xl text-center font-futura-ptbook">
          Browse more than 900 real estate ad platforms at once from a dashboard centralizing all your searches
        </p>
      </div>
    </div>
  </section>
  <section>
    <div class="container mx-auto hidden md:block">
      <div class="mockup-window shadow-[0px_0px_6px_rgba(0,0,0,0.29)] border rounded-3xl bg-leny-blue-800 w-full before:shadow-search-window before:opacity-100">
        <div class="flex justify-center pt-8 bg-white">
          <div>
            <div class="row 2xl:px-10 pt-4">
              <div class="flex justify-between space-x-4 font-futura-ptlight">
                <span class="text-xs rounded-full bg-leny-gray-300 py-2 px-6 text-leny-gray-800"> &lt; 20,000 €/m² </span>
                <span class="text-xs rounded-full bg-leny-gray-300 py-2 px-6 text-leny-gray-800"> &lt; 20 m² </span>
                <span class="text-xs rounded-full bg-leny-gray-300 py-2 px-6 text-leny-gray-800"> JouÉ-lÈs-tours </span>
                <span class="text-xs rounded-full bg-leny-gray-300 py-2 px-6 text-leny-gray-800"> &lt; 20,000 €/m² </span>
                <span class="text-xs rounded-full bg-leny-gray-300 py-2 px-6 text-leny-gray-800"> &lt; 20 m² </span>
                <span class="text-xs rounded-full bg-leny-gray-300 py-2 px-6 text-leny-gray-800"> JouÉ-lÈs-tours </span>
              </div>
            </div>
            <div class="row px-6 2xl:px-5 py-8 2xl:py-8">
              <div class="grid grid-cols-2 lg:grid-cols-4 grid-rows-1 gap-3">
                <property-card v-for="(item, index) in cardItems" :key="index" :id="`propertyCaroussel${index}`" :item-type="item.type" :item-title="item.title" :address="item.address" :images="item.images" :rooms="item.rooms" :bathroom="item.bathroom" :price="item.price" :show-exclude="false" :is-properties-page="false" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <router-link to="/subscription_plan" class="my-8 py-3 px-12 block w-44 mx-auto text-center font-futura-ptbook text-xs sm:text-sm text-white bg-leny-blue-800 rounded-full border border-leny-blue-800 hover:bg-transparent hover:text-leny-blue-800 transition duration-300">Try For Free</router-link>
    </div>
  </section>
  <section class="block md:hidden pb-14 mx-4 md:mx-0">
    <div class="container mx-auto bg-top pb-8">
      <div class="mockup-window shadow-[0px_0px_6px_rgba(0,0,0,0.29)] border rounded-3xl bg-leny-blue-800 w-full before:shadow-search-window before:opacity-100">
        <div class="flex justify-center px-4 py-8 bg-white">
          <div>
            <div class="flex justify-between space-x-4 px-8 mb-5 font-futura-ptlight">
              <span class="text-xs rounded-full bg-leny-gray-300 py-2 px-10 text-leny-gray-800"> &lt; 20,000 €/m² </span>
              <span class="text-xs rounded-full bg-leny-gray-300 py-2 px-10 text-leny-gray-800"> &lt; 20 m² </span>
            </div>
            <property-card class="w-10/12 mx-auto" :id="'propertyCaroussel100'" :item-type="cardItems[0].type" :item-title="cardItems[0].title" :address="cardItems[0].address" :images="cardItems[0].images" :rooms="cardItems[0].rooms" :bathroom="cardItems[0].bathroom" :price="cardItems[0].price" :show-exclude="false" :is-properties-page="false" />
          </div>
        </div>
      </div>
      <router-link to="/subscription_plan" class="my-8 py-3 px-12 block w-44 mx-auto text-center font-futura-ptbook text-xs sm:text-sm text-white bg-leny-blue-800 rounded-full border border-leny-blue-800 hover:bg-transparent hover:text-leny-blue-800 transition duration-300">Try For Free</router-link>
    </div>
  </section>
  <Footer />
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import PropertyCard from "../components/agency/PropertyCard.vue";
export default {
  name: "SearchEngine",
  components: {
    Header,
    Footer,
    PropertyCard,
  },
  data() {
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
          images: [
            "property-img-1.jpg",
            "property-img-2.jpg",
            "property-img-3.jpg",
          ],
        },
        {
          type: "Apartment",
          title: "Monaco - Open view",
          address: "Monaco - Open view",
          area: 120,
          rooms: 2,
          bathroom: 1,
          price: "119.000",
          images: [
            "property-img-1.jpg",
            "property-img-2.jpg",
            "property-img-3.jpg",
          ],
        },
        {
          type: "Apartment",
          title: "Monaco - Open view",
          address: "Monaco - Open view",
          area: 120,
          rooms: 2,
          bathroom: 1,
          price: "119.000",
          images: [
            "property-img-1.jpg",
            "property-img-2.jpg",
            "property-img-3.jpg",
          ],
        },
        {
          type: "Apartment",
          title: "Monaco - Open view",
          address: "Monaco - Open view",
          area: 120,
          rooms: 2,
          bathroom: 1,
          price: "119.000",
          images: [
            "property-img-1.jpg",
            "property-img-2.jpg",
            "property-img-3.jpg",
          ],
        },
      ],
    };
  },
};
</script>
