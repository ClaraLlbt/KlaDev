<script>
//import darkMode
import { useDark, useToggle } from "@vueuse/core";

export default {
    name: "Navbar",
    data(){
      return {
        dark: useDark(),
        mobileFormat : false,
      }
    },
    created(){
      if (window.matchMedia("(max-width: 768px)").matches) {
                /* La largeur minimum de l'affichage est 600 px inclus */
                console.log("format mobile detecté")
                this.mobileFormat = true
                this.navHidden();
            } else {
                console.log("format mobile non detecté")
                /* L'affichage est inférieur à 600px de large */
            }
    },
    methods: {
      navHidden(){
        const el = document.querySelector('.contact')
        const mobileNav =  document.getElementsByClassName('navbar-mobile')
        document.addEventListener('scroll', () => { 
            const { scrollTop, scrollHeight ,clientHeight} = document.documentElement;
            const topElementToTopViewport = el.getBoundingClientRect().top

            if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.10){
              mobileNav[0].classList.add('hiden')
            
            }
             if (scrollTop > (scrollTop - topElementToTopViewport).toFixed() - clientHeight * 0.10){
              mobileNav[0].classList.remove('hiden')
            
            }
            });
        }
    }
}
</script>

<template>
  <!-- IF MOBILE FORMAT IS NOT DETECTED, SHOW THIS NAV -->
    <div v-if="mobileFormat == false" class="container navbar">
        <ul class="nav justify-content-center">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">HOME</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#skills">SKILLS</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#work">WORK</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#contact">CONTACT</a>
            </li>

            <li class="nav-item item-dark">
                <button id="darkModeButton" type="button" role="button" class="btn btn-effect" aria-label="Bouton pour basculer en mode sombre">
                    <i class="bi bi-moon icon-moon" v-if="this.dark == false"></i>
                    <i class="bi bi-brightness-high icon-light" v-else-if="this.dark == true"></i>
                </button>
            </li>
        </ul>
    </div>

    <!-- IF MOBILE FORMAT IS DETECTED, SHOW THIS MOBILE NAV -->
    <div id="navbar-mobile" v-else-if="mobileFormat == true" class="container navbar navbar-mobile">
      <ul class="nav justify-content-center">
            <li class="nav-item mobile-item">
                <a class="nav-link active" aria-current="page" href="#"><i class="bi bi-house-door-fill"></i></a>
            </li>
            <li class="nav-item mobile-item">
                <a class="nav-link" href="#skills"><i class="bi bi-gear"></i></a>
            </li>
            <li class="nav-item mobile-item">
                <a class="nav-link" href="#work"><i class="bi bi-code-slash"></i></a>
            </li>
            <li class="nav-item mobile-item">
                <a class="nav-link" href="#contact"><i class="bi bi-envelope-at-fill"></i></a>
            </li>

            <li class="nav-item item-dark mobile-item">
              <button id="dkMobile" type="button" role="button" class="btn btn-effect" aria-label="Bouton pour basculer en mode sombre">
                <i class="bi bi-moon icon-moon" v-if="this.dark == false"></i>
                <i class="bi bi-brightness-high icon-light" v-else-if="this.darl == true"></i>
              </button>
            </li>
        </ul></div>
</template>

<style lang="scss">
.navbar{
  transform: translateY(-100px);
  animation: deployeNav 1s 0.5s forwards;
  justify-content: center;
  .nav{
    font-size: x-large;
    width: 100%;
    .nav-item{
      margin: .5em 1em;
    }
    .item-dark{
      align-self: center;
      .btn i{
        font-size: x-large;
      }
    }
  }
  
}
@media screen and (max-width: 767px) {
.navbar-mobile{
  position: fixed;
  bottom: 0;
  z-index: 1;
  transform: translateY(100px);
  animation: deployeMobileNav 1.5s 1s forwards;
  box-shadow: inset -1px -4px 20px lightgray;
  background-color: white;
  .nav .nav-item.mobile-item{ 
    margin: auto;
    a{
      padding: 0;
    }
  }
  
}
.navbar-mobile.hiden{
  transform: translateY(0);
  animation: hideMobileNav 1.5s 1s forwards;
  
}
}
//ANIMATIONS KEYFRAMES

@keyframes deployeNav {
  0% {
    transform: translateY(-100px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes hideMobileNav {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100px);
  }
}

</style>