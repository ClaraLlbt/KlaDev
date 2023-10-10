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
          <h2>KALA DEVELOPS - Création de site web</h2>
          <h2>L'Excellence au coeur de l'Hexagone</h2>
        </div>
        <div class="has-animation">
          <p class="text">Bienvenue chez Kala Develops, une micro-entreprise basée à Boulogne-sur-Mer, 
            spécialisée dans le développement web et les applications front-end et back-end. Je suis dévouée 
            est passionnée par l'innovation numérique et s'engage à créer des solutions web exceptionnelles. 
            Nous combinons les dernières technologies avec des normes de qualité strictes pour offrir des sites web et 
            des applications puissants, conviviaux et adaptés à vos besoins. Que vous soyez une petite entreprise locale 
            ou une entreprise internationale, nous sommes là pour vous accompagner. Notre approche transparente et 
            notre collaboration étroite avec nos clients garantissent des résultats exceptionnels. 
            Contactez-nous pour transformer vos idées en réalité numérique et prospérer en ligne avec Kala Develops.</p>
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
          <img src="../assets/2.svg" alt="">
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
            animation: textHidden 2s 1s ease forwards;
          }
          p{
            animation: textHidden 2s 1.2s ease forwards;
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
      border: 1px solid tan;
      opacity: 0;
      img{
        width: 100%;
        transform: scale(1.5);
        opacity: 0;
        filter: drop-shadow(2px 1px 2px black);
      }
    }
    .rounded-bckgd.effect{
      opacity: 1;
      transition: opacity 1s 1.2s ease-in-out;
      img{ 
        opacity: 1;
        transition: opacity 1s 1.5s ease-in-out;
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