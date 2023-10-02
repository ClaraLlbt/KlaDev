<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
  name : "App",
}

</script>

<template>
  <RouterView />
</template>

<style lang="scss">

//Responsive Versions 

//MOBILE
@media screen and (max-width: 767px) {
  /* Styles pour les smartphones en mode portrait */
  #app{
    height: 100%;
    .row{
      width: 100%;
      margin: auto;
    }
    .bckgd-top{
        top: 0;
        right: 0;
        z-index: -1;
        opacity: 20%;
        width: 70%;
      }
    .menu{
      display: none;
    }
    .about-me{
      height: none;
      .presentation{
        flex-direction: column-reverse;
        width: 100%;
        .presentation-txt{
          position: relative;
          .has-animation{
            p{
              text-align: justify;
            }
          }
          .networks-link{
            position: absolute;
            top: 44px;
            right: 5%;
            ul li{ font-size: 20px;}
          }
        }
        .rounded-bckgd{
          height: 300px;
          width: 300px;
          transform: scale(80%) translate(0, 75%);
          h1{
            letter-spacing: 8px;
          }
        }
        .rounded-bckgd.effect{
          animation: loaderMobile 4s forwards;
        }
      }
    }
    .skills{
      .diploma-ctr{
        .diploma {
          .infos{
            width: 100%;
          }
        }
        .mention{display: none;}
      }
      .skills-ctr{
        height: 100%;
        .cln{
          margin: 0 0 45px 0;
          height: 450px;
          .flip-card .flip-card-inner .title{
            font-size: smaller;
          }
          .flip-card .flip-card-inner span{
            font-size: 450px;
          }
          .flip-card-back span.ul{
            p{ 
              font-size: small;
              padding: 0px 20px;
            }
          }
        }
      }
    }
    .work{
      .row .cln .card{
        float: initial;
        margin: 15px auto;
        border-radius: 15px;
        min-height: 200px;
        justify-content: center;
        .card-body{
          h3, p{ margin: 0;}
          h3{ font-size: large;}
          p{ font-size: 15px;}
          .card-footer{
            padding: 0;
            .button{ font-size: large;}
          }
        }
      }
      .row .cln .card:hover::after{
        background: linear-gradient(rgba(0, 0, 0, 0.1) -9%, rgba(0, 0, 0, 0.78) 80%);
      }
    }
    .contact{
      .row{
        height: auto;
        margin: auto;
        flex-direction: column-reverse;
        .contact-card .card{
          width: 100%;
        }
        .form{
          padding: 0;
          .title-form {
            h2 {
              font-size: 20px;
              letter-spacing: 6px;
            }
          }
          form{
            border-radius: 15px;
            padding: 15px;
            border: 3px inset white;
            box-shadow: 5px 4px 4px grey;
            width: 100%;
            margin-bottom: 40px;
          }
        }
      }
      .bckgd{
        bottom: 0;
        left: 0px;
        width: 100%;
      }
    }
  }
  #app{
  .CGV{
    .row{ padding: 20px;}
    .buttons{
      position: inherit;
    }
    .title-cln{
      h1{
        letter-spacing: 8px;
      }
    }
    .cgv-cln{
      padding: 10px;
      span h2{
        font-size: medium;
        letter-spacing: 2px;
      }
    }
  }
}

}


// Mobile Animations
@keyframes loaderMobile{
    0%{
      transform: scale(80%) translate(0, 50%);
    }
    100%{
      transform: scale(50%) translate(0, 0);
    }
}

@keyframes deployeMobileNav {
  0% {
    transform: translateY(100px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
