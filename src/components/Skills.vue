<script>
export default {
    name: 'Skills',
    mounted(){ 
        // this.slideBloc() 
        this.testEffects();
    },
    methods: {
      slideBloc(){
        const el = document.querySelector('.skills')
        const h2 = document.querySelector('.h2-skills')
        
        const iconMention = document.querySelector('.mention')
        console.log(iconMention);
        const leftCardEffect = document.querySelector('.info')

        const bkd = document.querySelector('.bkd')
        const ftd = document.querySelector('.ftd')
        const db = document.querySelector('.db')

        const bkdUL = document.querySelector('.bkd ul')
        const ftdUL = document.querySelector('.ftd ul')
        const dbUL = document.querySelector('.db ul')

        console.log(bkdUL);

        document.addEventListener('scroll', () => { 
          const { scrollTop, scrollHeight ,clientHeight} = document.documentElement;
          const topElementToTopViewport = el.getBoundingClientRect().top

          if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.60){
            h2.classList.add('active')

            iconMention.classList.add('bounce-in-top')
            

            leftCardEffect.classList.add('discover')

            bkd.classList.add('ltr')
            ftd.classList.add('rtl')
            db.classList.add('ltr')

            bkdUL.classList.add('show')
            ftdUL.classList.add('show')
            dbUL.classList.add('show')
          }
      });
    },
    testEffects(){
      const el = document.querySelector('.skills')
      const h2 = document.querySelector('.h2-skills')
      //diploma-ctr
      const diploma = document.querySelector('.diploma')
      const h3 = document.getElementsByTagName('h3')
      const infos = document.querySelector('.infos')
      console.log(h3);
      //mention-ctr
      const mention = document.querySelector('mention')
      const iconMention = document.querySelector('.mention')

      //skills-ctr
      const skillsctr = document.querySelector('.skills-ctr')

      const bkd = document.querySelector('.bkd')
      const ftd = document.querySelector('.ftd')
      const db = document.querySelector('.db')

      const bkdUL = document.querySelector('.bkd ul')
      const ftdUL = document.querySelector('.ftd ul')
      const dbUL = document.querySelector('.db ul')



      document.addEventListener('scroll', () => { 
          const { scrollTop, scrollHeight ,clientHeight} = document.documentElement;
          const topElementToTopViewport = el.getBoundingClientRect().top
          
          if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.10){
            h2.classList.add('active')

            h3[0].classList.add('slide-top')
            infos.classList.add('slide-top')
            skillsctr.classList.add('slide-top')

            iconMention.classList.add('bounce-in-top')

            bkd.classList.add('ltr')
            ftd.classList.add('rtl')
            db.classList.add('ltr')

            bkdUL.classList.add('show')
            ftdUL.classList.add('show')
            dbUL.classList.add('show')
          }
      })
    }
  }
}
</script>

<template>
  <div id="skills" class="skills container">
    <h2 class="h2-skills">SKILLS</h2>
      <div class="row diploma-ctr">
        <div class="col-6 diploma">
          <h3>•  Dîplome  •</h3>
          
          <div class="infos">
            <div class="logo_oc">
              <img src="../assets/images/logo_openlassrooms.png" alt="">
            </div>
            <div class="info-txt">
              <h4>Développeur Web</h4> 
              <p>Développement Front-end/Back-end et utilisation de frameworks; Création/gestion de bases de données SQL grâce à un SGBD et utilisation d'un ORM; Déploiement et hébergement; Sécurité web</p>
            </div>
          </div>
          
        </div>
        <div class="col-6 mention">
          <img src="../assets/images/diploma.png" alt="">
          <p>BAC +2</p>
        </div>
      </div>
      
      <div class="row skills-ctr">
        <div class="col-6 info-skills">
        <div class="card info">
          <div class="card-body">
            <h4>Ce que je sais faire...</h4>
            <ul>
              <li>» Implémentation d'interfaces responsives en suivant une charte graphique et en intégrant du contenu conformément à une maquette</li>
              <li>» Utiliser de bonnes pratiques de développement pour assurer l'accessibilité d'un site</li>
              <li>» Test d'applications / Création et gestion d'événements Javascript</li>
              <li>» Création et gestion d'API sécurisée</li>
              <li>» Implémentation de modeles logiques de données conformement à la réglementation et stockage des données de manière sécurisée.</li>
              <li>» Création et intégration de bases de données CLOUD et SQL</li>
              <li>» Utilisation de plusieurs Frameworks: AngularJs, VueJs, ...</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-4 code-skills">
        <div class="col-12 backend">
          <h4>Backend</h4>
          <div class="card bkd">
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
            
          </div>
        </div>
        <div class="col-12 frontend">
          <h4>Frontend</h4>
          <div class="card ftd">
            <ul>
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
                </ul>
          </div>
        </div>
        <div class="col-12 databases">
          <h4>Databases</h4>
          <div class="card db">
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
          </div>
        </div>
      </div>
      </div>
    </div> 
</template>

<style lang="scss" scoped>
.skills{
    padding: 50px 0;
    justify-items: center;
    height: 100%;
  .diploma-ctr{
    align-items: center;
    justify-content: center;
    .diploma{
    h3{ 
      letter-spacing: 10px;
      width: 100%;
      text-align: -webkit-center;
      transform: translateY(180px);
      opacity: 0;
      &::after{
        display: block;
        content: "";
        width: 30%;
        border-bottom: 1px solid black;
        margin: 30px 0;
      }
    }
    h3.slide-top{
      transform: translateY(0);
      opacity: 1;
      transition: transform 1.5s 1s ease-in-out, opacity 1.5s 1s ease-in;
    }
    .infos{
      display: flex;
      align-items: center;
      width: 90%;
      float: right;
      transform: translateY(180px);
      opacity: 0;
      .logo_oc{
        img{
          width: 80px;
          height: 80px;
        }
      }
      .info-txt{
        margin: auto 10px;
        p{
          font-size: large;
          margin: 0;}
      }
    }
    .infos.slide-top{
      transform: translateY(0);
      opacity: 1;
      transition: transform 1.5s 1.5s ease-in-out, opacity 1.5s 1.5s ease-in;
    }
  }
    .mention{
      text-align: center;
      opacity: 0;
      img{
        width: 80px;
        height: 80px;
      }
      p{
        font-size: larger;
        margin: 0;
      }
      &:hover{
        transform: speed(1000) scale(1.1);
      }
    }
    .mention.bounce-in-top {
      animation: bounce-in-top 1.3s 1.2s both;
      opacity: 1;
    }
  }

  .skills-ctr{
    padding: 30px;
    transform: translateY(200px);
    opacity: 0;
    // LEFT COL DESIGN
    .info-skills{
      align-self: center;
      .card{
        width: 90%;
        border: none;
        height: 80%;
        margin: auto;
        .card-body{
          h4{
            padding: 10px;
          }
        }
        &::before, &::after{
        content: '';
        height: 50px;
        width: 50px;
        position: absolute;
        transition: all .35s ease;
        opacity: 0;
        }
        &::before{
          content: '';
          right: 0;
          left: 0;
          border-top: 2px solid black;
          border-left: 2px solid black;
          transform: translate(415%, 335%);
          transition: all 1s 2s ease;
        }
        &::after{
          content: '';
          right: 0;
          bottom: 0;
          border-bottom: 2px solid black;
          border-right: 2px solid black;
          transform: translate(-225px, -345%);
          transition: all 1s 2s ease;
        }
        ul{
          display: grid;
          align-items: center;
          font-size: 18px;
          li{
            margin-bottom: 15px;
            line-height: 25px;
          }
        }
      }
      .card.discover{
        margin: auto;
        ul{
            opacity: 1;
        }
        &::before, &::after{
          transform: translate(0,0);
          opacity: 1;
        }
      }
    }

  //RIGHT COL DESIGN
  .code-skills{
    align-self: flex-end;
    margin: 0 auto;
    .card{ 
      padding: 10px 0;
      border: none;
      position: relative;
      ul{
          display: flex;
          padding: 0;
          opacity: 0;
          margin: 0;
          transition: all 2s 4.2s ease;
          li{
            width: 70px;
            height: 70px;
            img{
              width: 60%;
            }
          }
      }
      ul.show{
        opacity: 1;
      }

      &::before, &::after{
      content: '';
      position: absolute;      
      top: 0;
      right: 0;
      height: 85%;
      z-index: 10;
      }
      &::before{
        background-color: #C1FF72;
      }
      &::after{
        background-color: black;
        animation-delay: .5s;
      }
    }
    .card.ltr{
      &::before{
        animation: revealLTR 1.8s 4s ease;
      }
      &::after{
        animation: revealLTR 1s 4.5s ease; 
      }
    }
    .card.rtl{
      &::before{
        animation: revealRTL 1.8s 3s ease;
      }
      &::after{
        animation: revealRTL 1s 4s ease;
      }
    }
  }
  }
  .skills-ctr.slide-top{
      transform: translateY(0);
      opacity: 1;
      transition: transform 1.5s 1.8s ease-in-out, opacity 1.5s 1.8s ease-in;
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