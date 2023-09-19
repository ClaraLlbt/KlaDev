<script>
//import darkMod
import { darkMode } from '../utils';
import { useDark } from "@vueuse/core";

//import components
import AboutMe from '../components/AboutMe.vue';
import Navbar from '../components/Navbar.vue';
import Skills from '../components/Skills.vue';
import Work from '../components/Work.vue';
import Contact from '../components/Contact.vue';

export default {
  name : "home",
  components : { AboutMe, Navbar, Skills, Work, Contact },
  data(){
      return {
        dark: useDark(),
      }
    },
  mounted(){
    darkMode()
    this.navbarLeft()
  },
  methods: {
    navbarLeft(){
      const el = document.querySelector('nav')

      document.addEventListener('scroll', () => { 
        const { scrollTop, scrollHeight ,clientHeight} = document.documentElement;
        const topElementToTopViewport = el.getBoundingClientRect(scrollHeight).top
        if(scrollTop > 260){
          el.classList.add('active')
        }
        else if(scrollTop == 0){
          el.classList.remove('active')
        }
      });
    }
  }
}
</script>

<template>
  
  <nav>
    <ul class="nav justify-content-center">
            <li class="nav-item">
                <a class="" aria-current="page" href="#"><i class="bi bi-house-door-fill"></i></a>
            </li>
            <li class="nav-item">
                <a class="" href="#skills"><i class="bi bi-gear"></i></a>
            </li>
            <li class="nav-item">
                <a class="" href="#work"><i class="bi bi-code-slash"></i></a>
            </li>
            <li class="nav-item">
                <a class="" href="#contact"><i class="bi bi-envelope-at-fill"></i></a>
            </li>

            <li class="nav-item item-dark">
                <button id="darkModeButton" type="button" role="button" class="btn" aria-label="Bouton pour basculer en mode sombre">
                    <i class="bi bi-moon icon-moon" v-if="this.dark == false"></i>
                    <i class="bi bi-brightness-high icon-light" v-else-if="this.dark == true"></i>
                </button>
            </li>
        </ul>
  </nav>


  <Navbar />

  
  <AboutMe />

  <Skills />

  <Work />

  <Contact />

  <footer id="footer" class="container-fluid">
          <p>Copyright©2023 KALADEV - <i class="bi bi-geo-alt-fill"></i> Boulogne-sur-Mer</p>
      
  </footer>
</template>

<style lang="scss" scoped>
nav{
  position: fixed;
  z-index: 1;
  left: 5%;
  top: 25%;
  opacity: 0;
  transition: all 1s ease;
    ul{
      display: grid;
      height: 500px;
      align-content: center;
      li{
        height: 50px;
        width: 50px;
        display: grid;
        align-items: center;
        justify-content: center;
        margin: 10px 3px;
        a i{
          font-size: 25px;
          color: #E8E8E8;
          &:hover{
            color: grey;
          }
        }
      }
      li.item-dark{
        button i{ color: grey;}
      }
    }   
}
nav.active{
  opacity: 1;
  transition: opacity 3s ease;
}

footer{
  text-align: center;
}
</style>
