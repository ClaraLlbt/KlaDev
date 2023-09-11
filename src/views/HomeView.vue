<script>
import AboutMe from '../components/AboutMe.vue';
import Navbar from '../components/Navbar.vue';
import Skills from '../components/Skills.vue';
import Work from '../components/Work.vue';
export default {
  name : "home",
  components : { AboutMe, Navbar, Skills, Work }
}
</script>

<template>
  <Navbar />

  
  <AboutMe />
  <Work />
</template>

<style>

</style>
