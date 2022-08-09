<template>
  <Header />
  <section class="mt-[5.625rem] pt-14 px-4 lg:px-0">
    <div class="container mx-auto px-4">
      <div class="section-title mb-20">
        <h1 class="text-h1xl text-leny-blue-800 font-medium text-center">
          The best real estate search engine
        </h1>
        <p class="text-leny-gray-700 text-2xl text-center">
          Browse more than 900 real estate ad platforms at once from a dashboard centralizing all your searches
        </p>
      </div>
    </div>
  </section>
  <section class="pb-14 hidden md:block">
    <div class="container bg-search2 xl:bg-search bg-no-repeat bg-contain xl:bg-cover bg-top mx-auto px-4 mb-14">
      <div class="row px-6 2xl:px-10 pt-20 2xl:pt-28">
      <div class="flex justify-between space-x-4 px-8">
        <span class="text-xs rounded-full bg-leny-gray-500 py-2 px-10 text-leny-gray-800"> &lt; 20,000 €/m² </span>
        <span class="text-xs rounded-full bg-leny-gray-500 py-2 px-10 text-leny-gray-800"> &lt; 20 m² </span>
        <span class="text-xs rounded-full bg-leny-gray-500 py-2 px-10 text-leny-gray-800"> JouÉ-lÈs-tours </span>
        <span class="text-xs rounded-full bg-leny-gray-500 py-2 px-10 text-leny-gray-800"> &lt; 20,000 €/m² </span>
        <span class="text-xs rounded-full bg-leny-gray-500 py-2 px-10 text-leny-gray-800"> &lt; 20 m² </span>
        <span class="text-xs rounded-full bg-leny-gray-500 py-2 px-10 text-leny-gray-800"> JouÉ-lÈs-tours </span>
      </div>
      </div>
      <div class="row px-6 2xl:px-10 py-8 2xl:py-14">
        <div class="grid grid-cols-1 md:grid-cols-4 grid-rows-1 gap-4">
          <SearchCard v-for="(item, index) in cardItems" :key="index" :item-type="item.type" :item-title="item.title" :address="item.address" :image="item.image" :rooms="item.rooms" :bathroom="item.bathroom" :price="item.price" />
        </div>
      </div>
    </div>
    <a href="/subscription_plan" class="py-3 px-12 block w-44 mx-auto text-center font-regular text-xs sm:text-sm text-white bg-leny-blue-800 rounded-full border border-leny-blue-800 hover:bg-transparent hover:text-leny-blue-800 shadow-md transition duration-300">Try For Free</a>
  </section>
  <section class="block md-hidden pb-14 mx-4 md:mx-0">
    <div class="container mx-auto px-4 bg-no-repeat bg-contain small:bg-cover bg-top bg-smb pt-14 small:pt-28 pb-8">
      <div class="flex justify-between space-x-4 px-8 mb-5">
        <span class="text-xs rounded-full bg-leny-gray-500 py-2 px-10 text-leny-gray-800"> &lt; 20,000 €/m² </span>
        <span class="text-xs rounded-full bg-leny-gray-500 py-2 px-10 text-leny-gray-800"> &lt; 20 m² </span>
      </div>
      <SearchCard class="w-10/12 mx-auto" :item-type="cardItems[0].type" :item-title="cardItems[0].title" :address="cardItems[0].address" :image="cardItems[0].image" :rooms="cardItems[0].rooms" :bathroom="cardItems[0].bathroom" :price="cardItems[0].price" />
    </div>
  </section>
  <Footer />
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import SearchCard from "../components/SearchCard.vue";
export default {
  name: "SearchEngine",
  components: {
    Header,
    Footer,
    SearchCard,
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
          image: "search-card.png",
        },
        {
          type: "Apartment",
          title: "Monaco - Open view",
          address: "Monaco - Open view",
          area: 120,
          rooms: 2,
          bathroom: 1,
          price: "119.000",
          image: "search-card.png",
        },
        {
          type: "Apartment",
          title: "Monaco - Open view",
          address: "Monaco - Open view",
          area: 120,
          rooms: 2,
          bathroom: 1,
          price: "119.000",
          image: "search-card.png",
        },
        {
          type: "Apartment",
          title: "Monaco - Open view",
          address: "Monaco - Open view",
          area: 120,
          rooms: 2,
          bathroom: 1,
          price: "119.000",
          image: "search-card.png",
        },
      ],
    };
  },
};
</script>
