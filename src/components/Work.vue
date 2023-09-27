<script>
export default {
    name: 'Works',
    mounted(){
        this.slideEffects()
    },
    methods: {
        slideEffects(){
            const el = document.querySelector('.work')
            const h2 = document.querySelector('.h2-work')
            const cln1 = document.querySelector('.cln-l')
            const cln2 = document.querySelector('.cln-r')

            document.addEventListener('scroll', () => { 
                const { scrollTop, scrollHeight ,clientHeight} = document.documentElement;
                const topElementToTopViewport = el.getBoundingClientRect(scrollHeight).top
                if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.30){
                    
                    h2.classList.add('active')
                    cln1.classList.add('slidel')
                    cln2.classList.add('slider')

                }
            });
        }
    }
}
</script>

<template>
    <div id="work" class="work container">
        <h2 class="h2-work">•  WORK  •</h2>
        <div class="row">
            <div class="col-sm-12 col-lg-6 cln cln-l">
            <div class="card">
                <img class="" src="../assets/images/mockup-dito.png" alt="Card image cap">
                <i class="bi bi-bookmark-star-fill" data-v-3309a9c7=""></i>
                <div class="card-body">
                    <h3>DITO PRO</h3>
                    <p>Réalisation d'un site vitrine de dépannage informatique</p>
                </div>
            </div>
            <div class="card">
                <img class="" src="../assets/images/groupo.png" alt="Card image cap">
                <div class="card-body">
                    <h3>GROUPOMANIA</h3>
                    <p>Réalisation d'un réseau social d'entreprise</p>
                </div>
            </div>
            <div class="card">
                <img class="" src="../assets/images/piiquante.png" alt="Card image cap">
                <div class="card-body">
                    <h3>PIIQUANTE</h3>
                    <p>Réalisation d'un site vitrine de dépannage informatique</p>
                </div>
            </div>
        </div>
        <div class="col-sm-12 col-lg-6 cln cln-r">
            <div class="card">
                <img class="" src="../assets/images/orinoco.png" alt="Card image cap">
                <div class="card-body">
                    <h3>ORINOCO</h3>
                    <p>Réalisation d'un site vitrine de dépannage informatique</p>
                </div>
            </div>
            <div class="card">
                <img class="" src="../assets/images/OhMyFood.png" alt="Card image cap">
                <div class="card-body">
                    <h3>OH MY FOOD</h3>
                    <p>Réalisation d'un site vitrine de dépannage informatique</p>
                </div>
            </div>
            <div class="card">
                <img class="" src="../assets/images/mockup_reservia.png" alt="Card image cap">
                <div class="card-body">
                    <h3>RESERVIA</h3>
                    <p>Réalisation d'un site vitrine de dépannage informatique</p>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<style lang="scss">
    .work{
        overflow: hidden;
        margin: 50px auto;
        h2{
            text-align: center;
            margin: 50px 0;
            width: 100%;
            transform: translateX(-1000px);
            opacity: 0;
            letter-spacing: 15px;
            /* border-bottom: 1px black solid; */
        }
        h2::after{
            display: block;
            content: "";
            width: 100%;
            padding: 15px 0;
            border-bottom: 1px black solid;
        }
        h2.active{
            animation: titleSlide 1s forwards;
        }
        .card i{
            position: absolute;
            font-size: 60px;
            top: -17px;
            left: -9px;
            
        }
        .cln-l{
            transform: translateY(1000px);
            opacity: 0;
            .card{ float: right; }
        }
        .cln-l.slidel{
            animation: slideCards 1.3s 1.3s forwards;
        }
        .cln-r{
            transform: translateY(1000px);
            opacity: 0;
            float: left;
        }
        .cln-r.slider{
            animation: slideCards 1.3s 1.2s forwards;
        }
        .card{
            width: 80%;
            margin: 10px 0;
            overflow: hidden;
            .card-body{
                position: absolute;
                bottom: 0;
                color: white;
                opacity: 0;
                z-index: 2;
                transform: translateY(50px);
            }
            &:hover{
                .card-body{
                    transform: translateY(0px);
                    transition: transform 1.2s ease, opacity 1.4s ease;
                    opacity: 1;
                }
            }
            
            &:hover::after{
                content: "";
                pointer-events: none;
                position: absolute;
                z-index: 1;
                inset: 0px;
                opacity: 0.8;
                background: linear-gradient(rgba(0, 0, 0, 0.1) 10%, rgba(0, 0, 0, 0.78) 80%);
            }
        }
    }

// Animations

@keyframes slideCards {
    0%{
        transform: translateY(1000px);
        opacity: 0;
    }
    100%{
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes cardTxtHidden{
    0%{
        transform: translateY(50px);
        opacity: 0;
    }
    100%{
        transform: translateY(0px);
        opacity: 1;
    }
}
</style>