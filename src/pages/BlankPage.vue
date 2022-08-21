
<template>
  <Header />
    <AgencyHeader />
  <Footer />
</template>
<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "BlankPage",
  components: {
    Header,
    Footer,
  },
};
</script>
