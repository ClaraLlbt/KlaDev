<script>
export default {
    name: 'AboutMe'
    
}
</script>

<template>
  
        <div class="about-me justify-content-start">
        <div class="has-animation animation-ltr animate-in">
            <h1>WELCOME USERS</h1>
        </div>
        <div class="has-animation animation-rtl animate-in">
            <p class="text">Je m'appelle Clara Laliberté et je suis un développeur web junior basé à Boulogne-sur-Mer. Passionné par la création de sites web dynamiques et conviviaux, j'ai acquis des compétences solides en HTML, CSS et JavaScript. Mon objectif est de contribuer à des projets innovants et d'apprendre continuellement pour évoluer dans ce domaine passionnant. Mon dévouement et ma créativité font de moi un atout précieux pour toute équipe de développement web.</p>
        </div>
    </div>
    <div class="">
      <img src="../assets/Copie de Sans titre.png" alt="">
    </div>
      
</template>

<style lang="scss">
.about-me{
    .has-animation{
        position: relative;
        margin: 10px;
        h1, p{
            color: black;
            opacity: 0;
        } 
        p{ 
            font-size: larger;
        }
        &.animate-in{
            h1, p{
                animation: textHidden 0.1s 2.5s forwards;
            }
            p{
                animation: textHidden 0.1s 2.8s forwards;
            }
            &:before, &:after {
                content: '';
                position: absolute;
                top: 0;
                right: 0;
                height: 100%;
                z-index: 10;
            }
            &:before {
                background-color: #C1FF72;
            }
            &:after {
                background-color: black;
                animation-delay: .5s;
            }
        }
        &.animation-ltr.animate-in {
            &:before {
                animation: revealLTR 1.8s 1.5s ease;
            }
            &:after {
                animation: revealLTR 1s 2s ease;
            }
        }
        &.animation-rtl.animate-in {
            &:before {
                animation: revealRTL 1.8s 1.5s ease;
            }
            &:after {
                animation: revealRTL 1s 2s ease;
            }
        }
        
    }
}


//ANIMATIONS KEYFRAMES
@keyframes revealRTL {
  0%{
    width: 0;
    right: 0;
  }
  65%{
    width: 100%;
    right: 0;
  }
  100% {
    width: 0;
    right: 100%;
  }
}

@keyframes revealLTR {
  0%{
    width: 0;
    left: 0;
  }
  65%{
    width: 100%;
    left: 0;
  }
  100% {
    width: 0;
    left: 100%;
  }
}

@keyframes textHidden {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>