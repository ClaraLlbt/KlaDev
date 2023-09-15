<script>
//import darkMod
import { useDark } from "@vueuse/core";

export default {
    name: "Navbar",
    data(){
      return {
        dark: useDark(),
      }
    },
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