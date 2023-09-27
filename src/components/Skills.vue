<script>
export default {
    name: 'Skills',
    mounted(){ 
      this.skillsAnimations();
    },
    methods: {
    skillsAnimations(){
      const el = document.querySelector('.skills')

      const h2 = document.getElementsByTagName('h2')

      const infos = document.querySelector('.infos')

      const iconMention = document.querySelector('.logo-mention')

      const bkdCard = document.querySelector('.bkd-card')
      const dbCard = document.querySelector('.db-card')
      const ftdCard = document.querySelector('.ftd-card')
      console.log(h2[0]);
      document.addEventListener('scroll', () => { 
        const { scrollTop, scrollHeight ,clientHeight} = document.documentElement;
        const topElementToTopViewport = el.getBoundingClientRect().top
          
        if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.30){
      
          h2[2].classList.add('slide-top')
          infos.classList.add('slide-top')

          iconMention.classList.add('bounce-in-top')

          bkdCard.classList.add('active')
          dbCard.classList.add('active')
          ftdCard.classList.add('active')
        }
      })
    }
  }
}
</script>

<template>
  <div id="skills" class="skills container">
      <div class="row diploma-ctr">
        <div class="col-sm-12 col-lg-12 diploma">
          <h2>•  Dîplome  •</h2>
          <div class="mention">
            <img class="logo-mention" src="../assets/images/diploma.svg" alt="">
          </div>
          <div class="infos">
            <h4>Développeur Web</h4> 
            <p>Développement Front-end/Back-end et utilisation de frameworks; Création/gestion de bases de données SQL grâce à un SGBD et utilisation d'un ORM; Déploiement et hébergement; Sécurité web</p>
          </div>
          
        </div>
      </div>
      
      <div class="row skills-ctr">
        <!-- BACKEND COLUMN -->
        <div class="col-sm-12 col-lg-4 cln">
          <div class="flip-card bkd-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <p class="title">• Back-end •</p>
                <span>
                  <ul>
                    <li>
                      <img src="../assets/images/nodejs.png" alt="">
                      <p>Node JS</p>
                    </li>
                    <li>
                      <img src="../assets/images/exjs.png" alt="">
                      <p>Express JS</p>
                    </li>
                  </ul>
                </span>
                
                <p>Hover Me</p>
              </div>
              <div class="flip-card-back">
                <div class="bckgd-back"></div>
                <span>
                  <p>» API et Services web sécurisés: Autorisation/Authentification</p>
                  <p>» Test d'applications / Création et gestion d'événements Javascript</p>
                  <p>» Performance et optimisation</p>
                  <p>» Serveurs et déploiement: connaissance de la plate-forme d'hébergement OVH</p>
                  <p>» Documentation: documenter le code, les API et les processus pour faciliter la collaboration et la maintenance à long terme.</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <!-- DATABASES COLUMN -->
        <div class="col-sm-12 col-lg-4 cln">
          <div class="flip-card db-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <p class="title">• Databases •</p>
                <span>
                  <ul>
                    <li>
                      <img src="../assets/images/mysql.png" alt="">
                      <p>MySQL</p>
                    </li>
                    <li>
                      <img src="../assets/images/mongodb.png" alt="">
                      <p>MongoDB</p>
                    </li>
                  </ul>
                </span>
                
                <p>Hover Me</p>
              </div>
              <div class="flip-card-back">
                <div class="bckgd-back"></div>
                <span>
                  <p>» Création et intégration de bases de données CLOUD et SQL</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <!-- FRONTEND COLUMN -->
        <div class="col-sm-12 col-lg-4 cln"> 
          <div class="flip-card ftd-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <p class="title">• Front-end •</p>
                <span class="ul">
                  <ul>
                    <span class="list">
                      <li>
                        <img src="../assets/images/vuejs.png" alt="">
                        <p>VueJS</p>
                      </li>
                      <li>
                        <img src="../assets/images/angular.png" alt="">
                        <p>Angular</p>
                      </li>
                      <li>
                        <img src="../assets/images/js.png" alt="">
                        <p>JavaScript</p>
                      </li>
                    </span>
                    <span class="list">
                      <li>
                        <img src="../assets/images/bootstrap.png" alt="">
                        <p>Bootstrap</p>
                      </li>
                      <li>
                        <img src="../assets/images/html.png" alt="">
                        <p>HTML</p>
                      </li>
                      <li>
                        <img src="../assets/images/css.png" alt="">
                        <p>CSS</p>
                      </li>
                    </span>
                  </ul>
                </span>
                <p>Hover Me</p>
              </div>
              <div class="flip-card-back">
                <div class="bckgd-back"></div>
                <span class="ul">
                  <p>» Implémentation d'interfaces responsives en suivant une charte graphique et en intégrant du contenu conformément à une maquette</p>
                  <p>» Utiliser de bonnes pratiques de développement pour assurer l'accessibilité d'un site</p>
                  <p>» Utilisation de plusieurs Frameworks: AngularJs, VueJs, ...</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div> 
</template>

<style lang="scss">
.skills{
  justify-items: center;
  .diploma-ctr{
    align-items: center;
    justify-content: center;
    .diploma{
      h2{ 
        letter-spacing: 10px;
        width: 100%;
        text-align: -webkit-center;
        transform: translateY(295px);
        opacity: 0;
        margin: 20px auto;
        &::after{
          display: block;
          content: "";
          width: 30%;
          border-bottom: 1px solid black;
          margin: 30px 0;
        }
      }
      h2.slide-top{
        transform: translateY(0);
        opacity: 1;
        transition: transform 1.3s ease-in-out, opacity 1s ease-in;
      }
      .mention{
        text-align: center;
        width: 50%;
        margin: auto;
        .logo-mention{
          width: 25%;
          opacity: 0;
        }
        .logo-mention.bounce-in-top {
          animation: bounce-in-top 1.3s 1.8s both;
          opacity: 1;
        }
       }
      .infos{
        display: grid;
        width: 80%;
        justify-items: center;
        transform: translateY(180px);
        opacity: 0;
        margin: 35px auto;
        p{
          font-size: large;
          text-align: center;
          margin: 0;
        }  
      }
      .infos.slide-top{
        transform: translateY(0);
        opacity: 1;
        transition: transform 1.1s 1.3s ease-in-out, opacity 1.3s 1.3s ease-in;
      }
    }
  }
  
  .skills-ctr{
    align-items: flex-end;
    height: 450px;
    .cln{
      .flip-card {
        background-color: transparent;
        width: 75%;
        height: 0px;
        perspective: 1000px;
        margin: auto;
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.8s;
          transform-style: preserve-3d;
          .title {
            font-size: 1.5em;
            font-weight: 900;
            text-align: center;
            margin: 15px auto;
            letter-spacing: 10px;
          }
        }
      }
      .flip-card.active{
        height: 400px;
        transition: all 1.3s ease-in-out;
        .flip-card-inner .title, span, p{
          opacity: 1;
          transition: opacity 1s 2s;
        }
      }
      .flip-card:hover .flip-card-inner {
        transform: rotateY(180deg);
      }
      .flip-card-front, .flip-card-back {
        box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2);
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        border: 3px inset white;
        border-radius: 1rem;
      }
      .flip-card-front {
        background: linear-gradient(120deg, #F3F3F3 60%, rgba(202, 191, 188, 0.13) 88%,
        #cfc09f -87%, #634F30 -71%, #cfc09f -3%, #ffecb3 31%, #3a2c0f 144%);
        .title, span, p{
          opacity: 0;
        }
        span{
          height: 80%;
          display: grid;
          ul{
            height: 100%;
            display: flex;
            text-align: center;
            align-items: center;
            justify-content: center;
            padding: 0;
            li{
              img{ width: 50%;}
            }
          }
        }
      }
      .flip-card-back {
        text-shadow: 1px 1px 4px grey;
        transform: rotateY(180deg);
        .bckgd-back{
          height: 100%;
          width: 100%;
          position: absolute;
          top: 0;
          background: linear-gradient(120deg, #cfc09f -80%, #634F30 -22%, #cfc09f -13%, #ffecb3 38%,#bcac7ac9 74%, #aa9975c2 88%,#E8E8E8 44%);
          opacity: 50%;
          z-index: -1;
        }
        span{
          text-align: start;
          padding: 0 30px;
          p{
            margin-bottom: 5px;
            text-align: justify;
          }
        }
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

@keyframes bounce-in-top {
  0% {
    transform: translateY(-500px);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    transform: translateY(0);
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    transform: translateY(-65px);
    animation-timing-function: ease-in;
  }
  72% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  81% {
    transform: translateY(-28px);
    animation-timing-function: ease-in;
  }
  90% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  95% {
    transform: translateY(-8px);
    animation-timing-function: ease-in;
  }
  100% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
}

</style>