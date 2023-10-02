<script>
export default {
  name: 'AboutMe',
  data() {
    return {};
  },
  mounted() {
    const roundedBckgd = document.querySelector('.rounded-bckgd')
    const hasAnimation = document.querySelectorAll('.has-animation')
    const networksLink = document.querySelector('.networks-link')
    setTimeout(() => {
      if(document.readyState != 200 ){
        roundedBckgd.classList.add('effect') 
        hasAnimation[0].classList.add('animate-in')
        hasAnimation[1].classList.add('animate-in')
        networksLink.classList.add('animate')
      }
    }, 1300);
  },
}
</script>

<template>
  <div class="about-me container">
    <div class="row presentation">
      <div class="col-12 col-lg-6 presentation-txt justify-content-start">
        <div class="has-animation">
          <h2>APPELLEZ-MOI KALA</h2>
          <h2>Développeur Web</h2>
        </div>
        <div class="has-animation">
          <p class="text">Développeur web Junior basée à Boulogne-sur-Mer. Passionnée par la création de sites web dynamiques et conviviaux, j'ai acquis des compétences solides en HTML, CSS et JavaScript. Mon objectif est de contribuer à des projets innovants et d'apprendre continuellement pour évoluer dans ce domaine passionnant. Mon dévouement et ma créativité font de moi un atout précieux pour toute équipe de développement web.</p>
        </div>
        <div class="networks-link">
          <ul>
            <li><a href="https://linkedin.com/in/cllbt"><i class="bi bi-linkedin"></i></a></li>
            <li><a href="https://www.facebook.com/profile.php?id=100069904156077"><i class="bi bi-facebook"></i></a></li>
            <li><a href="https://www.instagram.com/kala__dev/"><i class="bi bi-instagram"></i></a></li>
          </ul>
        </div>
      </div>
      <div class="col-sm-12 col-lg-6">
        <div class="rounded-bckgd">
            <h1>•  Bienvenue   •</h1>
        </div>
      </div>
    </div>
  </div>    
</template>

<style lang="scss">
.about-me{
  position: relative;
  display: flex;
  align-items: center;
  height: 80%;
  .presentation{
    align-items: center;
    .presentation-txt{
      .has-animation{
        position: relative;
        margin: 10px;
        h2, p{
          opacity: 0;
        } 
        p{ 
          font-size: larger;
        }
        &.animate-in{
          h2{
            animation: textHidden 2s 1.3s ease forwards;
          }
          p{
            animation: textHidden 2s 1.5s ease forwards;
          }
        }
      }
      .networks-link{
        opacity: 0;
        &.animate{
          animation: textHidden 2.3s 1.8s ease forwards;
        }
        ul{
          padding: 0;
          list-style: none;
          display: inline-flex;
          width: 30%;
          justify-content: space-between;
          li{
            margin: 0 5px;
            font-size: xx-large;
          }
        }
      }
    }
    .rounded-bckgd{
      position: relative;
      background: linear-gradient(#cfc09f -87%, #634F30 -71%, #cfc09f -3%, #ffecb3 31%, #3a2c0f 144%);
      border-radius: 50%;
      width: 450px;
      height: 450px;
      margin: auto;
      transform: scale(1.5) translate(-50%, 0);
      h1{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        letter-spacing: 10px;
        width: 100%;
        text-align: center;
        opacity : 1;
      }
    }
    .rounded-bckgd.effect{
      animation: loader 1.5s forwards;
      h1{
        transition: opacity 1s 0.5s ease-in-out;
        opacity: 0;
      }
    }
  }
}


//ANIMATIONS KEYFRAMES
@keyframes loader{
  0%{
    transform: scale(1.5) translate(-50%, 0);
  }
  100%{
    transform: scale(1) translate(0, 0);
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