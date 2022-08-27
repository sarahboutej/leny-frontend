<template>
  <Header />
  <Hero />
  <VideoSection />
  <NewProperties />
  <Advantages />
  <Footer />
</template>

<script>
import Header from "../components/Header.vue";
import Hero from "../components/Hero.vue";
import VideoSection from "../components/VideoSection.vue";
import NewProperties from "../components/NewProperties.vue";
import Advantages from "../components/Advantages.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "HomePage",
  components: {
    Header,
    Hero,
    VideoSection,
    NewProperties,
    Advantages,
    Footer,
  },
};
</script>
