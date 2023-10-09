<script>
//import darkMode

import darkMode from "../components/modeDarkBtn.vue"
export default {
    name: "Navbar",
    components: { darkMode },
    data(){
      return {
        mobileFormat : false,
      }
    },
    mounted(){

      this.navHidden()
      if (window.matchMedia("(max-width: 768px)").matches) {
                /* La largeur minimum de l'affichage est 600 px inclus */
                this.mobileFormat = true
                this.navHidden();
            }
    },
    methods: {
      navHidden(){
        const el = document.querySelector('.contact')
        const mobileNav =  document.getElementsByClassName('navbar-mobile')
        document.addEventListener('scroll', () => { 
            const { scrollTop, scrollHeight ,clientHeight} = document.documentElement;
            const topElementToTopViewport = el.getBoundingClientRect(scrollHeight).top


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
    <div v-if="mobileFormat == false" class="container-fluid navbar">
      <a class="navbar-brand" href="#">
        <img src="../assets/queenbee-logo.svg" width="200" height="200" alt="">
      </a>
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
                <darkMode class="top-menu" />
            </li>
        </ul>
    </div>

    <!-- IF MOBILE FORMAT IS DETECTED, SHOW THIS MOBILE NAV -->
    <div id="navbar-mobile" v-else-if="mobileFormat == true" class="container-fluid navbar navbar-mobile">
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

            <li class="nav-item item-dark">
              <darkMode />
            </li>
        </ul></div>
</template>

<style lang="scss">
.navbar{
  transform: translateY(-195px);
  animation: deployeNav 1s 0.5s forwards;
  .navbar-brand{
    position: fixed;
    top: 0;
    left: 0;
  }
  .nav{
    font-size: x-large;
    margin: auto;
    .nav-item{
      margin: .5em 1em;
    }
    .item-dark{
      align-self: center;
      margin: 0;
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
  .nav{
    width: 100%;
     .nav-item.mobile-item{ 
    margin: auto;
    a{
      padding: 0;
    }
  }
}
  .nav .nav-item.mobile-item::after,  .nav .nav-item.mobile-item::before{ 
    content: none;
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
    transform: translateY(-195px);
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