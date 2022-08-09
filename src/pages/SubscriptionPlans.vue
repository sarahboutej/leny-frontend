<template>
  <Header />
  <section class="mt-[5.625rem] pt:4 md:pt-14 pb-14 md:pb-24 px-4 lg:px-0">
    <div class="container mx-auto px-4">
      <div class="section-title mb-6 md:mb-20">
        <h1 class="text-h2xl md:text-h1xl text-leny-blue-800 font-medium text-center">
          A solution for every need
        </h1>
        <p class="text-leny-gray-700 text-sm md:text-2xl text-center">
          Leny is suitable for all real estate professionals
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-6">
        <SubscriptionCard v-for="(item, index) in cardItems" :key="index" :plan-name="item.planName" :plan-type="item.planType" :icon="item.icon" :plan-details="item.planDetails" :price="item.price" :is-favorite="item.isFavorite" />
      </div>
    </div>
  </section>
  <Footer />
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import SubscriptionCard from "../components/SubscriptionCard.vue";
export default {
  name: "SubscriptionPlan",
  components: {
    Header,
    Footer,
    SubscriptionCard,
  },
  data() {
    return {
      cardItems: [
        {
          planName: "Standard",
          planType: "Independent Agent",
          icon: "standard_plan_icon.svg",
          planDetails: [
            "White label aggregator",
            "Dashboard Agent",
            "Buyer Extranet",
            "Visualization of “research” leads",
          ],
          price: "89",
          isFavorite: false,
        },
        {
          planName: "Pro",
          planType: "Agency",
          icon: "pro_plan_icon.svg",
          planDetails: [
            "White label aggregator",
            "Dashboard Agent",
            "Buyer Extranet",
            "Visualization of “research” leads",
            "Account sharing up to 5 agents",
          ],
          price: "119",
          isFavorite: true,
        },
        {
          planName: "Standard",
          planType: "Premium Membership",
          icon: "bussiness_plan_icon.svg",
          planDetails: [
            "White label aggregator",
            "Dashboard Agent",
            "Buyer Extranet",
            "Visualization of “research” leads",
            "Account sharing up to 5 agents",
            "Integrated Partner Ads",
          ],
          price: "89",
          isFavorite: false,
        },
      ],
    };
  },
};
</script>
