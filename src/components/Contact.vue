<script>
import emailjs from "emailjs-com"
export default {
    name: "Contact",
    data(){
        return{
            email: '',
            message: '',
        }
    },
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
                    //  h2[1].classList.add('active')
                     cardScale.classList.add('scale-in-center')
                }
            });
        },
        sendEmail() {
            const btn = document.querySelector('#sendBtn');
            const messArea = document.querySelector('#message');
            const emailArea = document.querySelector('#reply_to');
            const form = document.getElementById('form').addEventListener('submit', function(event) {
            event.preventDefault();
                    
            btn.innerText = "En cours..."
            const serviceID = 'service_696tmpa';
            const templateID = 'template_bhiwqld';
            const userId = 'OkYb3_3x2XbgyN8aT';
   
            emailjs.sendForm(serviceID, templateID, this ,userId, {
                    email: this.email,
                    message: this.message
                }) .then((res) => {
                    btn.innerText = 'Email Envoyé';
                    document.location.href = "/";
                })
                .catch ((err) => {
                    btn.innerText = 'Une erreur est survenue';
                })
            }); 
        }
    }
}
</script>

<template>
    <div id="contact" class="contact container-fluid">
        
        <div class="row">
            <div class="col-lg-4 col-sm-12 contact-card">
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
                <div>
                    <a href="/Clarallbt/lib/web/CV_LALIBERTE_CLARA.pdf" download="">
                        <button type="button" class="btn cv-btn"><i class="bi bi-file-pdf"></i> Télécharger mon CV</button>
                    </a>
                </div>
                    
                </div>
            </div>
            <div class="col-lg-6 col-sm-12 form">
                <div class="title-form">
                    <h2>•   KEEP IN TOUCH   •</h2>
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
                        <input type="checkbox" name="acceptance-41" value="1" aria-invalid="false" required>
                        <p>En soumettant ce formulaire, j'accepte que mes données personnelles soient utilisées pour me recontacter. Aucun autre traitement ne sera effectué avec mes informations. Pour connaître et exercer vos droits, veuillez consultez la Politique de confidentialité.</p>
                    </div>

                    <div class="button" >
                        <button id="sendBtn" @click="sendEmail()" type="submit" value="Send Email" class="btn">Envoyer</button>
                    </div>
                </form>
            </div>
        </div>
        <img class="bckgd" src="../assets/images/white-hewagone-form.png" alt="">
    </div>
</template>

<style lang="scss" scoped>
.contact{
    position: relative;
    .row{
        height: 700px;
        position: relative;
        margin: 60px;
        padding: 10px;
        align-items: center;
        justify-content: center;

        .contact-card{
            .card{
                width: 60%;
                height: 400px;
                padding: 30px;
                margin: auto;
                opacity: 0;
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
                box-shadow: 5px 4px 12px 0px white;

                .icons-contact{
                    place-self: center;
                    .icon{
                        text-align: center;
                        i{
                        font-size: 35px;                    }
                    }
                }
                p{
                    font-size: 20px;
                    color: grey;
                }
            }
            .card.scale-in-center {
	            animation: scale-in-center 0.5s 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
                &:hover{
                    transform: translateY(-5px);
                    transition: all .5s ease-in-out;
                }
            }
        }
        .form{
            align-self: center;
            .title-form{
                h2{    
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
                    margin: 15px auto;
                    input{
                        margin-right: 10px;
                    }
                    p{
                        font-size: small;
                    }
                }
                .button{
                    margin-top: 30px;
                    text-align: center;
                }
                .button:active{
                    border: none;
                }
            }
        }
    }
    .bckgd{
        position: absolute;
        bottom: -80px;
        left: -50px;
        width: 50%;
        opacity: 40%;
        z-index: -1;
}
}
//KEYFRAMES
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