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
    },
    
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
        <div class="col-sm-12 col-lg-4 cln cln-hexa">
          
          <div class="flip-card hexagon bkd-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <span class="material-symbols-outlined hexa-bckgd">hexagon</span>
                <span class="material-symbols-outlined hexa-shadow">hexagon</span>
                <p class="title">• Back-end •</p>
                <span class="ul">
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
            
              </div>
              <div class="flip-card-back">
                <span class="material-symbols-outlined hexa-bckgd">hexagon</span>
                <span class="material-symbols-outlined hexa-shadow">hexagon</span>
                <span class="ul">
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
          <div class="flip-card hexagon db-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <span class="material-symbols-outlined hexa-bckgd">hexagon</span>
                <span class="material-symbols-outlined hexa-shadow">hexagon</span>

                <p class="title">• Databases •</p>
                <span class="ul">
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
                
              </div>
              <div class="flip-card-back">
                <span class="material-symbols-outlined hexa-bckgd">hexagon</span>
                <span class="material-symbols-outlined hexa-shadow">hexagon</span>
                <span class="ul">
                  <p>» Maîtrise du langage SQL</p>
                  <p>» Implémentation d'un stockage de données sécurisé</p>
                  <p>» Gestion des bases données</p>
                  <p>» Migration de données</p>
                  <p>» Authentifier un utilisateur et maintenir une session </p>
                  <p>» Utilisation de services cloud MongoDB</p>
                  
                </span>
              </div>
            </div>
          </div>
        </div>
        <!-- FRONTEND COLUMN -->
        <div class="col-sm-12 col-lg-4 cln">

          <div class="flip-card hexagon ftd-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <span class="material-symbols-outlined hexa-bckgd">hexagon</span>
                <span class="material-symbols-outlined hexa-shadow">hexagon</span>
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
              </div>
              <div class="flip-card-back">
                <span class="material-symbols-outlined hexa-bckgd">hexagon</span>
                <span class="material-symbols-outlined hexa-shadow">hexagon</span>
                <span class="ul">
                  <p>» Intégration de maquettes : convertir des maquettes de conception (conçues par des graphistes) en code HTML/CSS</p>
                  <p>» Accessibilité : Compréhension des normes d'accessibilité web</p>
                  <p>» Interaction avec des API RESTful pour récupérer des données à afficher dans l'interface utilisateur.</p>
                  <p>» Test et débogage</p>
                  <p>» Gestion de projet et documentation</p>
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
    .cln{
      height: 530px;
      display: flex;
      align-items: flex-end;
      .flip-card.hexagon{
        background-color: transparent;
        width: 100%;
        height: 0%;
        perspective: 1000px;
        -webkit-backface-visibility: hidden;
        -moz-backface-visibility: hidden;
        -ms-backface-visibility: hidden;
        transition:transform 0.5s;
        overflow: hidden;
        .flip-card-inner{
          height: 100%;
          transition: transform 0.8s; 
          transform-style: preserve-3d;
          .flip-card-front, .flip-card-back{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: absolute;
            height: 100%;
            width: 100%;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            .hexa-bckgd{
              position: absolute;
              top: 0%;
              font-size: 530px;
              transform: rotateZ(90deg);
              z-index: -1;
            }
            .hexa-shadow{
              color: transparent;
              z-index: -2;
              font-size: 530px;
              position: absolute;
              transform: rotateZ(90deg);
              text-shadow: 3px -3px 7px grey;
              opacity: 0;
            }
          }
          .flip-card-front{
            .hexa-bckgd{
              background: linear-gradient(132deg, rgba(226,226,226,1) 0%, rgba(248,248,248,1) 52%, rgba(226,226,226,1) 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
            .title, span.ul{ opacity: 0;}
            .title{
              font-size: 1.5em;
              font-weight: 900;
              text-align: center;
              letter-spacing: 10px;
            }
            span.ul{
              width: 100%;
              ul{
                width: 80%;
                margin: auto;
                padding: 0;
                justify-content: center;
                span{
                  display: flex;
                }
                li{
                  margin: auto;
                  width: 80px;
                  height: 80px;
                  text-align: center;
                  img{ width: 60%;}
                }
                
              }
            }
          }
          .flip-card-back{
            transform: rotateY(180deg);
            .hexa-bckgd{
              background: linear-gradient(120deg,#cfc09f -87%, #634F30 -71%, #cfc09f -3%, #ffecb3 31%, #3a2c0f 144%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
            span.ul{
              width: 75%;
              p{
                margin-bottom: 0px;
                text-align: justify;
              }
            }
          }
        }
      }
      .flip-card.hexagon:hover .flip-card-inner{
          transform: rotateY(180deg);
        }
      .flip-card.hexagon.active{
        height: 100%;
        transition: all 1.3s ease-in-out;
        .flip-card-inner{
          .hexa-shadow{
            opacity: 1;
            transition: opacity 0.5s 1.2s;
          }
          .title, span.ul{
            opacity: 1;
            transition: opacity 1s 2s;
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