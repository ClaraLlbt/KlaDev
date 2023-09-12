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
            const bkd = document.querySelector('.bkd')
            const ftd = document.querySelector('.ftd')
            const db = document.querySelector('.db')
            console.log(bkd);
            console.log(el);

            document.addEventListener('scroll', () => { 
                const { scrollTop, scrollHeight ,clientHeight} = document.documentElement;
                console.log(scrollTop)
                const topElementToTopViewport = el.getBoundingClientRect().top
                console.log(topElementToTopViewport);
                if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.60){
                  h2.classList.add('active')
                  bkd.classList.add('animate-bkd')
                  ftd.classList.add('animate-ftd')
                  db.classList.add('animate-db')

                  
                }
            });
        }
    }
}
</script>

<template>
    <div id="skills" class="skills row">
      <h2 class="h2-skills">SKILLS</h2>
        <div class="col bkend">
            <div class="card bkd">
              <h3>Backend
                <!-- <i class="bi bi-code"></i> -->
              </h3>
              <div class="card-body">
                <ul>
                  <li>
                    <img src="../assets/images/nodejs.png" alt="">
                    Node JS
                  </li>
                  <li>
                    <img src="../assets/images/exjs.png" alt="">
                    Express JS
                  </li>
                </ul>
              </div>
            </div>
        </div>
        <div class="col ftend">
          <div class="card ftd">
            <h3>Fronted
              <!-- <i class="bi bi-palette2"></i> -->
            </h3>
            <div class="card-body">
                <ul>
                  <li>
                    <img src="../assets/images/vuejs.png" alt="">
                    VueJS
                  </li>
                  <li>
                    <img src="../assets/images/angular.png" alt="">
                    Angular
                  </li>
                  <li>
                    <img src="../assets/images/js.png" alt="">
                    JavaScript
                  </li>
                  <li>
                    <img src="../assets/images/bootstrap.png" alt="">
                    Bootstrap
                  </li>
                  <li>
                    <img src="../assets/images/html.png" alt="">
                    HTML
                  </li>
                  <li>
                    <img src="../assets/images/css.png" alt="">
                    CSS
                  </li>
                </ul>
              </div>
          </div>
        </div>
        <div class="col databases">
          <div class="card db">
            <h3>Databases
              <!-- <i class="bi bi-pc-display"></i> -->
            </h3>
            <div class="card-body">
                <ul>
                  <li>
                    <img src="../assets/images/mysql.png" alt="">
                    MySQL
                  </li>
                  <li>
                    <img src="../assets/images/mongodb.png" alt="">
                    MongoDB
                  </li>
                </ul>
              </div>
          </div>
        </div>
    </div>
</template>

<style lang="scss">
.skills{
    padding: 50px;
    justify-items: center;
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
  .ftend, .bkend, .databases{
    margin: 50px auto;
    .card{
    width: 100%;
    box-shadow: 1px 1px 4px 0px lightgray;
    border-radius: 10px;
    height: 500px;
    border: none;
    transform: rotateY(270deg);
    opacity: 0;
    h3{
      text-align: center;
      margin: 20px;
    }
    .card-body{
      ul{
        list-style: none;
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: center;
        padding: 0;
        li{
          background: #32475B;
          color: white;
          border-radius: 15px;
          margin: 10px;
          padding: 10px;
          width: 50%;
          text-align: center;
          img{
            width: 80%;
          }
          
        }
      }
    }
  }
  }
  .bkd.animate-bkd{
    animation: RotateCards 1s 2s forwards;
  }
  .ftd.animate-ftd{
    animation: RotateCards 1s 3s forwards;
  }
  .db.animate-db{
    animation: RotateCards 1s 4s forwards;
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

@keyframes RotateCards {
  0%{
    transform: rotateY(270deg);
    opacity: 0;
  }
  100%{
    transform: rotateY(358deg);
    opacity: 1;
  }
}

</style>