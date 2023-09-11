<script>
export default {
    name: 'Skills',
    mounted(){ 
        this.slideBloc() 
    },
    methods: {
        slideBloc(){
            const el = document.querySelector('.skills')
            const card1 = document.querySelector('.card-1')
            console.log(el);
            document.addEventListener('scroll', () => { 
                const { scrollTop, scrollHeight ,clientHeight} = document.documentElement;
                console.log(scrollTop)
                const topElementToTopViewport = el.getBoundingClientRect().top
                console.log(topElementToTopViewport);
                if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.60){
                  card1.classList.add('active')
                }
            });
        }
    }
}
</script>

<template>
    <div id="skills" class="skills">
        <div class="card card-1">
            <h2><i class="bi bi-code"></i></h2>
        </div>
        <div class="card">
          <h2><i class="bi bi-palette2"></i></h2>
        </div>
        <div class="card">
          <h2><i class="bi bi-pc-display"></i></h2>
        </div>
    </div>
</template>

<style lang="scss">
.skills{
    display: grid;
    padding: 15px;
    margin: 20px auto;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    height: 100vh;
    overflow: hidden;
    .card{
        width: 80%;
        box-shadow: 1px 1px 20px 0px lightgray;
        border-radius: 65px;
        height: 500px;
        border: none;
        align-self: center;
        // transform: translateY(725px);
        h2{
          text-align: center;
          font-size: 70px;
          margin: 40px;
        }
    }
    .card:hover::before, div:hover::after {
        display: block;
        content: '';
        position: absolute;
        width: 100%;
        height: 470px;
        background: #FDA8CF;
        border-radius: 65px;
        z-index: -1;
        animation: 1s clockwise infinite;
    }
    .card:hover:after {
        background: #C1FF72;
        animation: 2s counterclockwise infinite;
    }
}

//ANIMATIONS KEYFRAMES
@keyframes Translate {
  0%{
    transform: translateY(725px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}

@keyframes clockwise {
  0% {
    top: -5px;
    left: 0;
  }
  12% {
    top: -2px;
    left: 2px;
  }
  25% {
    top: 0;
    left: 5px;    
  }
  37% {
    top: 2px;
    left: 2px;
  }
  50% {
    top: 5px;
    left: 0;    
  }
  62% {
    top: 2px;
    left: -2px;
  }
  75% {
    top: 0;
    left: -5px;
  }
  87% {
    top: -2px;
    left: -2px;
  }
  100% {
    top: -5px;
    left: 0;    
  }
}

@keyframes counterclockwise {
  0% {
    top: -5px;
    right: 0;
  }
  12% {
    top: -2px;
    right: 2px;
  }
  25% {
    top: 0;
    right: 5px;    
  }
  37% {
    top: 2px;
    right: 2px;
  }
  50% {
    top: 5px;
    right: 0;    
  }
  62% {
    top: 2px;
    right: -2px;
  }
  75% {
    top: 0;
    right: -5px;
  }
  87% {
    top: -2px;
    right: -2px;
  }
  100% {
    top: -5px;
    right: 0;    
  }
}
</style>