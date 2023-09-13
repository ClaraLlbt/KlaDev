<script>
export default {
    name: 'Skills',
    mounted(){ 
        this.slideBloc() 
    },
    methods: {
      slideBloc(){
        const el = document.querySelector('.skills')
        const h2 = document.querySelector('.h2-skills')

        const leftCardEffect = document.querySelector('.info')

        const bkd = document.querySelector('.bkd')
        const ftd = document.querySelector('.ftd')
        const db = document.querySelector('.db')

        const bkdUL = document.querySelector('.bkd ul')
        const ftdUL = document.querySelector('.ftd ul')
        const dbUL = document.querySelector('.db ul')

        document.addEventListener('scroll', () => { 
          const { scrollTop, scrollHeight ,clientHeight} = document.documentElement;
          const topElementToTopViewport = el.getBoundingClientRect().top

          if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.60){
            h2.classList.add('active')

            leftCardEffect.classList.add('discover')

            bkd.classList.add('ltr')
            ftd.classList.add('rtl')
            db.classList.add('ltr')

            bkdUL.classList.add('show')
            ftdUL.classList.add('show')
            dbUL.classList.add('show')
          }
      });
    }
  }
}
</script>

<template>
    <div id="skills" class="skills container">
      <h2 class="h2-skills">SKILLS</h2>
      <div class="row">
        <div class="col-6 info-skills">
        <div class="card info">
          <div class="card-body">
            <h3>Ce que je sais faire...</h3>
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
      <div class="col-6 code-skills">
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

<style lang="scss">
.skills{
    padding: 50px 0;
    justify-items: center;
    height: 100%;
  h2{
    text-align: center;
    margin: 50px 0;
    width: 100%;
    transform: translateX(-1000px);
    opacity: 0;
    // border-bottom: 1px black solid;
    &::after{
      content: "";
      width: 90%;
      position: absolute;
      bottom: -20px;
      left: 5%;
      border-bottom: 1px black solid;
      right: 0;
    }
  }
  h2.active{
     animation: titleSlide 2s forwards;
  }
  .row{
    height: 80%;
  }
  // LEFT COL DESIGN
  .info-skills{
    align-self: center;
    .card{
      width: 85%;
      border: none;
      height: 80%;
      .card-body{
        h3{
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
        opacity: 0;
        transition: all 0.8s 2.5s ease-in-out;
      }
    }
    .card.discover{
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
    display: grid;
    align-content: center;
    .card{ 
      padding: 1rem 0;
      border: none;
      position: relative;
      ul{
          display: flex;
          padding: 0;
          opacity: 0;
          transition: all 2s 2.5s ease;
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
      height: 70%;
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
        animation: revealLTR 1.8s 2s ease;
      }
      &::after{
        animation: revealLTR 1s 2.5s ease; 
      }
    }
    .card.rtl{
      &::before{
        animation: revealRTL 1.8s 1.5s ease;
      }
      &::after{
        animation: revealRTL 1s 2s ease;
      }
    }
  }
    
}

//ANIMATIONS KEYFRAMES
@keyframes titleSlide{
    0%{
        transform: translateX(-1000px);
        opacity: 0;
    }
    100%{
        transform: translateX(0);
        opacity: 1;
    }
}

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