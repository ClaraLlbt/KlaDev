<script>

//import components
import AboutMe from '../components/AboutMe.vue';
import Navbar from '../components/Navbar.vue';
import Skills from '../components/skills.vue';
import Work from '../components/Work.vue';
import Contact from '../components/Contact.vue';
import modeDarkBtn from '../components/modeDarkBtn.vue';


export default {
  name : "home",
  components : { AboutMe, Navbar, Skills, Work, Contact, modeDarkBtn },
  data(){
      return {
        isLoading: true,
        loadedElement : false,
      }
    },
  mounted(){
    this.navbarLeft()

    setTimeout(() => {
      if(this.isLoading == true){
          this.loadedElement = true
        } else if(document.location = "#skills"){
          this.loadedElement = true
        }
      }, 1300);

    
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
    },
  }
}
</script>

<template>
  
  <img class="bckgd-top" src="../assets/images/white-hewagone-form.png" alt="">

  <nav class="menu">
    <ul class="nav justify-content-center">
            <li class="nav-item">
                <a aria-current="page" href="#" aria-label="Home"><i class="bi bi-house-door-fill"></i><i class="bi bi-house-door-fill" id="icon-shadow"></i></a>
            </li>
            <li class="nav-item">
                <a href="#skills" aria-label="Skills"><i class="bi bi-gear"></i><i class="bi bi-gear" id="icon-shadow"></i></a>
            </li>
            <li class="nav-item">
                <a href="#work" aria-label="Works"><i class="bi bi-code-slash"></i><i class="bi bi-code-slash" id="icon-shadow"></i></a>
            </li>
            <li class="nav-item">
                <a href="#contact" aria-label="Contact"><i class="bi bi-envelope-at-fill"></i><i class="bi bi-envelope-at-fill" id="icon-shadow"></i></a>
            </li>

            <li class="nav-item item-dark" aria-label="Mode sombre">
                <modeDarkBtn />
            </li>
        </ul>
  </nav>


  <Navbar />

  
  <AboutMe v-model="isLoading"/>

  <div v-show="this.loadedElement" ref="isLoading">
  
    <Skills/>

    <Work/>

  <Contact/>
  
  
  <footer  id="footer" class="container-fluid">
    <p>Copyright©2023 KALADEV - <i class="bi bi-geo-alt-fill"></i> Boulogne-sur-Mer - <router-link to="/CGV">CGV</router-link> - <router-link to="/MentionsLégales">Mentions légales</router-link></p> 
  </footer>
  
  </div>

  
</template>

<style lang="scss" scoped>
.bckgd-top{
  position: absolute;
  transform: rotate(180deg);
  top: 0;
  right: 0;
  z-index: -1;
  opacity: 20%;
  width: 50%;
}

nav{
  position: fixed;
  z-index: 1;
  left: 2%;
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
        a{ position: relative; 
        }
        a i{
          font-size: 25px;
          &:hover{
            color: lightgray;
          }
        }
        i#icon-shadow{
          -webkit-text-fill-color: transparent;
          background: none;
          text-shadow: 0.5px 0.4px #6f6f6f;
          position: absolute;
          top: 0;
          left: 0;
          z-index: -1;
        }
        a:hover::before, .i-area:hover::before{
          content: attr(aria-label);
          position: absolute;
          white-space: nowrap;
          z-index: 1;
          transform: translate(75%, 100%);
          padding: 1px 5px;
          background: linear-gradient(#cfc09f -87%, #634F30 -71%, #cfc09f -3%, #ffecb3 31%, #3a2c0f 144%);
          color: white;
          text-shadow: 1px 1px 4px grey;
          letter-spacing: 1px;
          opacity: 60%;
          border: none;
          border-radius: 2px;
        }
        .i-area:hover::before{
          transform: translate(40%, 40%);
        }
      }
      li.item-dark{
        button {
          .i-area{
            position: relative;
          }
          i{ 
          color: grey;
        }
      }
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
