<script>
export default {
    name: 'MentionsLégales', 
}
</script>

<template>
    <div class="ML container">
        
        <div class="buttons">
            <router-link to="/"><button class="btn"><i class="bi bi-arrow-left"></i></button></router-link>
            <button id="darkModeButton" type="button" role="button" class="btn item-dark-cgv" aria-label="Bouton pour basculer en mode sombre">
                <i class="bi bi-moon icon-moon" v-if="this.dark == false"></i>
                <i class="bi bi-brightness-high icon-light" v-else-if="this.dark == true"></i>
            </button>
        </div>
        <div class="row">
            <div class="col-12 title-cln">
                <h1>•  Mentions légales •</h1>
            </div>
            <div class="col-12 cgv-cln">
                <span class="span-cgv">
                    <h2>1. Informations générales</h2>
                    <p>Ce site web est édité par Kala DEV, développeur web indépendant enregistré sous le statut d'auto-entrepreneur, 
                        immatriculé sous le numéro 98003307000015,dont le siège social est situé à Boulogne-Sur-Mer. 
                        Vous pouvez me contacter par e-mail à l'adresse kaladevelops@gmail.com ou par téléphone au 0619040219.</p>

                    <h2>2. Hébergement</h2>
                    <p>Ce site web est hébergé sur la plateforme GitHub, gérée par GitHub, Inc., dont le siège social est situé 
                        à 88 Colin P Kelly Jr St, San Francisco, CA 94107, États-Unis.</p>

                    <h2>3. Propriété intellectuelle</h2>
                    <p>L'ensemble du contenu de ce site web, y compris les textes, les images, les graphiques, les logos 
                        et les éléments de design, est la propriété exclusive de Kala DEV, 
                        sauf indication contraire. Toute reproduction, distribution, ou utilisation non autorisée du contenu 
                        est strictement interdite.</p>

                    <h2>4. Données personnelles</h2>
                    <p>Nous recueillons des données personnelles uniquement dans le cadre de la fourniture de nos services 
                        et conformément à notre politique de confidentialité. Pour en savoir plus sur la collecte et le 
                        traitement de vos données personnelles, veuillez consulter notre politique de confidentialité accessible 
                        à [lien vers la politique de confidentialité].</p>

                    <h2>5. Responsabilité</h2>
                    <p>Malgré tous les efforts déployés pour garantir la précision et la fiabilité des informations fournies sur 
                        ce site web, nous ne pouvons pas garantir l'exactitude ou l'exhaustivité du contenu. En conséquence, 
                        nous déclinons toute responsabilité pour tout préjudice direct ou indirect résultant de l'utilisation ou 
                        de la confiance accordée aux informations contenues sur ce site.</p>
    
                    
                    <h2>6. Loi applicable et juridiction compétente</h2>
                    <p>Les présentes mentions légales sont régies par la loi [loi applicable] et tout litige relatif à ce site web 
                        sera soumis à la juridiction exclusive des tribunaux de [ville ou région].</p>

                    <h2>7. Modification des mentions légales</h2>
                    <p>Nous nous réservons le droit de modifier les présentes mentions légales à tout moment. Toute modification 
                        sera affichée sur cette page et prendra effet immédiatement après publication.</p>
                    <p>Dernière mise à jour : 01/10/2023</p>

                </span>
            </div>
        </div>
        
    </div>
</template>

<style lang="scss">
    .ML{
    .buttons{
        position: absolute;
        left: 0;
        top: 0;
        .btn{
            width: 130px;
            i{ font-size: 40px;}
        }
    }
    .row{
        padding: 40px;
        h1{
            text-align: center;
            letter-spacing: 15px;
            background: linear-gradient(#cfc09f -87%, #634F30 -71%, #cfc09f -3%, #ffecb3 31%, #3a2c0f 144%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .cgv-title{
            padding: 20px;
        }
        .cgv-cln{
            padding: 40px;
            border: 3px inset white;
            background: #f3f3f3;
            border-radius: 10px;
            .span-cgv{
                h2{
                    width: 100%;
                    letter-spacing: 10px;
                    font-size: x-large;
                    font-weight: 800;
                }
                h2::after{
                    display: block;
                    content: "";
                    width: 100%;
                    padding: 15px 0;
                    border-bottom: 1px black solid;
                }
            }
        }
    }
}
</style>