<script>
export default {
    name: 'aboutthebee',
    mounted(){ 
      this.skillsAnimations();
      
    },
    methods: {
    skillsAnimations(){
      const el = document.querySelector('.about')

      const h2 = document.getElementsByTagName('h2')

      const aboutTxt = document.querySelector('.about-txt')

    
      document.addEventListener('scroll', () => { 
        const { scrollTop, scrollHeight ,clientHeight} = document.documentElement;
        const topElementToTopViewport = el.getBoundingClientRect().top
          
        if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.30){
      
          h2[2].classList.add('slide-top')
          aboutTxt.classList.add('slide-top')

        }
      })
    },
    
  }
}
</script>

<template>

  <!-- ABOUT CONTAINER -->
  <div id="aboutthebee" class="about-ctr container">
    <div class="row about-row">
      <div class="col-sm-12 col-lg-12 about">
        <h2>• C'est qui ? ... L'Abeille •</h2>
        <div class="about-txt">
          <p class="text col-12 col-lg-6">Bienvenue chez <b>Kala Develops</b>, <span>une abeille codeuse</span> <b> basée à Boulogne-sur-Mer </b>.

            Dans l'effervescente ruche numérique du monde digital, une abeille développeuse web <span> butine tous les jours l'information 
            dans l'immense jardin en ligne,</span> récoltant de <b>nouvelles compétences, idées et tendances.</b> 

            Sa mission est de <b>vous aider à prospérer</b> dans cette <span>ruche numérique en constante évolution.</span> À travers son expérience 
            et son dévouement, elle transforme <b>vos besoins en réalité digitale</b>, créant des espaces en ligne qui captivent et engagent votre public.
          </p>
        </div>   
    </div>
  </div>

  </div> 

  <!-- SKILLS CONTAINER -->
  <div class="skills-ctr container">
    <div class="row skills-row">
      
      <!-- BACKEND CLN -->
      <div class="col-12 col-md-3 cln border-left wh">
        <div class="bckd-gr"></div>
        <div class="icon">
          <i class="bi bi-file-earmark-code-fill"></i>
          <i class="bi bi-file-earmark-code-fill i-shadow"></i>
        </div>
        <p class="title">• Back-End •</p>
        <i class="bi bi-caret-down-fill arrow"></i>
        <span class="text">
          Création d'API et de services web sécurisés. Performance et optimisation. Serveur sécurisé et déploiement. Documentation
        </span>
      </div>
      <!-- DATABASES CLN -->
      <div class="col-12 col-md-3 cln gr">
        <div class="bckd-dgr"></div>
        <div class="icon">
          <i class="bi bi-database-fill-gear"></i>
          <i class="bi bi-database-fill-gear i-shadow"></i>
        </div>
        <p class="title">• Databases •</p>
        <i class="bi bi-caret-down-fill arrow"></i>        
        <span class="text">
          Maîtrise du langage SQL. Implémentation et gestion d'un stockage de données sécurisé. Utilisation de services Cloud MongoDB.
        </span>
      </div>
      <!-- FRONTEND CLN -->
      <div class="col-12 col-md-3 cln wh">
        <div class="bckd-gr"></div>
        <div class="icon">
          <i class="bi bi-window-stack"></i>
          <i class="bi bi-window-stack i-shadow"></i>
        </div>
        <p class="title">• Front-End •</p>
        <i class="bi bi-caret-down-fill arrow"></i>
        <span class="text">
          Intégration de maquette. Interaction avec des API RESTFULL. Accéssibilité web. Utilisation de différents frameworks. Gestion de projet et documentation.
        </span>
      </div>
      <!-- SEO CLN -->
      <div class="col-12 col-md-3 cln border-right gr">
        <div class="bckd-dgr"></div>
        <div class="icon">
          <i class="bi bi-search-heart"></i>
          <i class="bi bi-search-heart i-shadow"></i>
        </div>
        <p class="title">• SEO •</p>
        <i class="bi bi-caret-down-fill arrow"></i>
        <span class="text">
          Contenu de qualité. Optimisation on-page. Mobile friendliness. Sécurité HTTPS. Evaluation de la concurrence. Analyse et suivi
        </span>
      </div>

      


    </div>
  </div>

</template>

<style lang="scss">

.about-ctr{
  justify-items: center;
  padding-top: 80px;
  .about-row{
    align-items: center;
    justify-content: center;
    .about{
      h2{ 
        letter-spacing: 10px;
        width: 100%;
        text-align: center;
        transform: translateY(295px);
        opacity: 0;
        margin: 20px auto;
        &::after{
          display: block;
          content: "";
          width: 30%;
          border-bottom: 1px solid black;
          margin: 30px auto;
        }
      }
      h2.slide-top{
        transform: translateY(0);
        opacity: 1;
        transition: transform 1.3s ease-in-out, opacity 1s ease-in;
      }
      .about-txt{
        display: grid;
        width: 80%;
        justify-items: center;
        transform: translateY(180px);
        opacity: 0;
        margin: 35px auto;
        p{
          font-size: 20px;
          width: 100%;
          text-align: center;
          margin: 0;
        }
        p span{
          font-size: 16px;
          letter-spacing: 3px;
        }  
      }
      .about-txt.slide-top{
        transform: translateY(0);
        opacity: 1;
        transition: transform 1.1s 1.3s ease-in-out, opacity 1.3s 1.3s ease-in;
      }
    }
  }
}
.skills-ctr{
  padding: 60px 0;
  .skills-row{
    align-items: flex-end;
    justify-content: center;
    h2{ 
        letter-spacing: 10px;
        width: 100%;
        text-align: center;
        margin: 20px auto;
        &::after{
          display: block;
          content: "";
          width: 30%;
          border-bottom: 1px solid black;
          margin: 30px auto;
        }
    }
    .cln{
      padding-top: 15px;
      height: 400px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-direction: column;
      position: relative;
      .bckd-dgr, .bckd-gr{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 60%;
        z-index: -1;
      }
      .bckd-gr{ background: linear-gradient(132deg, rgba(226,226,226,1) 0%, rgba(248,248,248,1) 52%, rgba(226,226,226,1) 100%); }
      .bckd-dgr {background:  linear-gradient(132deg, #BAB9C4 0%, #D6D6D6 52%, #BAB9C4 100%);}
      .icon{
        position: relative;
        i{font-size: xxx-large;}
        .i-shadow{
          position: absolute;
          left: 0;
          text-shadow: 1px 2px 0px lightgray;
          z-index: -1;
        }
      }
      i.arrow{ font-size: large; }
      p.title { 
        font-size: 20px;
        font-weight: bold;
      }
      span{
        font-size: large;
      }
    }
    // .cln.gr{color: white;}
    .cln.border-left .bckd-gr{
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
    .cln.border-right .bckd-dgr{
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
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