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
        .presentation-txt{
          position: relative;
          .has-animation{
            p{
              text-align: justify;
            }
          }
          .networks-link{
            position: absolute;
            top: 0;
            right: 5%;
          }
        }
        .rounded-bckgd{
          transform: scale(80%) translate(0, 245px);
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
        }
      }
    }
    .work{
      .row .cln .card{
        float: initial;
        margin: 15px auto;
        border-radius: 15px;
      }
    }
    .contact{
      .row{
        height: auto;
        margin: auto;
        flex-direction: column-reverse;
        .contact-card .card{
          width: 80%;
        }
        .form{
          .title-form {
            h2 {
              letter-spacing: 10px;
            }
          }
          form{
            width: 100%;
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
