<script>
import { useDark, useToggle } from "@vueuse/core";
export default {
    name: "Navbar",
    data(){
      return {
        dark: '',
      }
    },
    mounted(){
      this.darkMod();
    },
    methods: {
      // Darkmod function 
      darkMod(){
        const isDark = useDark();
        const toggleDark = useToggle(isDark)
        this.dark = isDark

        console.log(this.dark);

        const btnDkMod = document.querySelector('.item-dark')
        btnDkMod.addEventListener('click', function(){   
         toggleDark()
        })
      },
    }
    
}
</script>

<template>
    <div class="navbar container">
      
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
                <a class="nav-link" aria-disabled="true">CONTACT</a>
            </li>

            <li class="nav-item item-dark">
                <button id="darkModeButton" type="button" role="button" class="btn" aria-label="Bouton pour basculer en mode sombre">
                    <i class="bi bi-moon icon-moon" v-if="this.dark == false"></i>
                    <i class="bi bi-brightness-high icon-light" v-else-if="this.dark == true"></i>
                </button>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
.navbar{
  opacity: 0;
  animation: textHidden 2s 2.5s forwards;
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
  .nav * {
    box-sizing: border-box;
    transition: all .35s ease;
  }
  .nav a {
    padding: .5em .8em;
    color: black;
    position: relative;
    text-decoration: none;
  }

  .nav a::before,.nav a::after {
    content: '';
    height: 14px;
    width: 14px;
    position: absolute;
    transition: all .35s ease;
    opacity: 0;
  }
  .nav a::before {
    content: '';
    right: 0;
    top: 0;
    border-top: 2px solid black;
    border-right: 2px solid black;
    transform: translate(-100%, 50%);
  }
  .nav a:after {
    content: '';
    left: 0;
    bottom: 0;
    border-bottom: 2px solid black;
    border-left: 2px solid black;
    transform: translate(100%, -50%)
  }

  .nav a:hover:before,.nav a:hover:after{
    transform: translate(0,0);
    opacity: 1;
  }
}


//ANIMATIONS KEYFRAMES

@keyframes textHidden {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

</style>