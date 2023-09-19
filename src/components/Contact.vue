<script>
export default {
    name: "Contact",
    mounted(){
        this.cssEffects()
    },
    methods:{
        cssEffects(){
            document.addEventListener('scroll', () => { 
                const el = document.querySelector('.contact')
                const h2 = document.getElementsByTagName('h2')

                const cardScale = document.querySelector('.contact .card')
                
                const { scrollTop, scrollHeight ,clientHeight} = document.documentElement;
                const topElementToTopViewport = el.getBoundingClientRect(scrollHeight).top
                
                if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.30){
                     h2[2].classList.add('active')
                     cardScale.classList.add('scale-in-center')
                }
            });
        }
    }
}
</script>

<template>
    <div id="contact" class="contact container-fluid">
        <h2>CONTACT</h2>
        <div class="row">
            <div class="col-lg-4 col-sm-12 contact">
                <div class="card">
                    <!-- <p class="goodbye">AUREVOIR !</p> -->
                    <div class="icons-contact">
                        <div class="col-12 icon">
                            <i class="bi bi-geo-alt-fill"></i>
                            <p>Boulogne-Sur-Mer</p>
                        </div>
                        <div class="col-12 icon">
                            <i class="bi bi-phone-fill"></i>
                            <p>06 19 04 06 19</p>
                        </div>
                    </div>

                <!--     <div>
                        <a href="/Clarallbt/lib/web/CV_LALIBERTE_CLARA.pdf" download="">
                            <button type="button" class="btn cv-btn"><i class="bi bi-file-pdf"></i> Télécharger mon CV</button>
                        </a>
                    </div> -->
                    
                </div>
            </div>
            <div class="col-lg-6 col-sm-6 form">
                <div class="title-form">
                    <h3>•   KEEP IN TOUCH   •</h3>
                    <div class="mess-icon">
                        <img src="../assets/images/paperplane.png" alt="">
                    </div>
                </div>
                <form id="form" method="POST">
                    <span>
                        <p>Vous avez le projet de développer un site web ? vous souhaitez un devis ? Je serai ravie d'en discuter avec vous</p>
                    </span>
                    <div>
                        <label for="reply_to" class="form-label">Email:</label>
                        <input  v-model="email" type="email" class="form-control" id="reply_to" name="reply_to" placeholder="Laissez moi votre Email" aria-describedby="emailHelp" required>
                    </div>
                    <div>
                        <label for="message" class="form-label">Votre message:</label>
                        <textarea v-model="message" class="form-control" id="message" name="message" rows="3" placeholder="Ecrivez votre demande..." required></textarea>
                    </div>
                    <div class="checkbox">
                        <input type="checkbox" name="acceptance-41" value="1" aria-invalid="false">
                        <p>En soumettant ce formulaire, j'accepte que mes données personnelles soient utilisées pour me recontacter. Aucun autre traitement ne sera effectué avec mes informations. Pour connaître et exercer vos droits, veuillez consultez la Politique de confidentialité.</p>
                    </div>

                    <div class="button" >
                        <button id="sendBtn" @click="sendEmail()" type="submit" value="Send Email" class="btn">Envoyer</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.contact{
    .row{
        height: 700px;
        position: relative;
        margin: 60px;
        padding: 10px;
        align-items: center;
        justify-content: center;

        .contact{
            .card{
                width: 60%;
                height: 400px;
                padding: 30px;
                margin: auto;
                opacity: 0;
                background: lightgrey;
                border: 3px inset white;
                background: #e8e8e8;
                box-shadow: inset 20px 20px 60px #c5c5c5, inset -20px -20px 60px #ffffff; 
                transition: transform .5s ease-in-out;
                border-radius: 1.5rem;
                display: flex; 
                justify-content: center;
                align-items: center;
                font-weight: bolder; 
                color: #8a8989;
                .goodbye{
                    width: 100%;
                    text-align: center;
                    color: #C1FF72;
                }
                .icons-contact{
                    place-self: center;
                    .icon{
                        text-align: center;
                        i{
                        font-size: 35px;
                        color: #C1FF72;
                        text-shadow: -1px 0 1px #c6bb9f, 0 1px 1px #c6bb9f, 2px 3px 5px rgba(0, 0, 0, 0.4), 0px -1px 5px rgba(0, 0, 0, 0.4);
                    }
                }
                }
                p{
                    font-size: 20px;
                    color: white;
                    text-shadow: 1px 1px 4px grey;
                }
            }
            .card.scale-in-center {
	            animation: scale-in-center 0.5s 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
                &:hover{
                    transform: translateY(-5px);
                    transition: all .5s ease-in-out;
                }
            }
        }
        .form{
            align-self: center;
            .title-form{
                h3{    
                    letter-spacing: 15px;
                    text-align: center;
                    &::after{
                        content: "";
                        border-bottom: 1px solid black;
                        width: 20%;
                        display: block;
                        margin: auto;
                        padding: 15px;
                    }
                }
                .mess-icon{
                    text-align-last: center;
                }
            }
            form{
                width: 80%;
                margin: auto;
                text-align: left;
                span p{
                    font-size: larger;
                }
                .checkbox{
                    display: flex;
                    align-items: baseline;
                    input{
                        margin-right: 10px;
                    }
                }
                .button{
                    margin-top: 30px;
                }
            }
        }
    }
    }

    @keyframes scale-in-center {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

</style>