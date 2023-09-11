<script>
import AboutMe from '../components/AboutMe.vue';
import Navbar from '../components/Navbar.vue';
export default {
  name : "home",
  components : { AboutMe, Navbar }
}
</script>

<template>
  <Navbar />
  
  <main>
    <AboutMe />
  </main>
</template>

<style>

</style>
