<script>
export default {
    name: "PC",
}
</script>

<template>
    <div class="CGV container">
        
        <div class="buttons">
            <router-link to="/"><button class="btn"><i class="bi bi-arrow-left"></i></button></router-link>
            <button id="darkModeButton" type="button" role="button" class="btn item-dark-cgv" aria-label="Bouton pour basculer en mode sombre">
                <i class="bi bi-moon icon-moon" v-if="this.dark == false"></i>
                <i class="bi bi-brightness-high icon-light" v-else-if="this.dark == true"></i>
            </button>
        </div>
        <div class="row">
            <div class="col-12 title-cln">
                <h1>•  Politique de Confidentialité •</h1>
            </div>
            <div class="col-12 cgv-cln">
                <span class="span-cgv">
                    <h2>1. Introduction</h2>
                    <p>La présente Politique de Confidentialité a pour objectif de vous informer sur la manière dont 
                        Kala DEV (ci-après dénommé "Le Développeur") collecte, 
                        utilise, stocke et protège les données personnelles que vous nous fournissez via notre site web.</p>

                    <h2>2. Données Personnelles Collectées</h2>
                    <p>2.1. Informations de Contact : Lorsque vous nous contactez via notre formulaire de contact ou par e-mail, 
                        nous pouvons collecter des informations telles que votre nom, votre adresse e-mail, 
                        votre numéro de téléphone et toute autre information que vous choisissez de nous fournir.</p>
                    <p>2.2. Cookies : Notre site web peut utiliser des cookies pour améliorer l'expérience de navigation. 
                        Les cookies sont de petits fichiers texte stockés sur votre ordinateur qui nous permettent de suivre 
                        des informations telles que votre comportement de navigation, le type de navigateur 
                        que vous utilisez, et d'autres données similaires.</p>

                    <h2>3. Utilisation des Données Personnelles</h2>
                    <p>Nous utilisons les données personnelles collectées uniquement dans les buts suivants :</p>
                    <p>3.1. Pour répondre à vos demandes de renseignements et aux messages que vous nous adressez.</p>
                    

                    <h2>4. Protection des Données Personnelles</h2>
                    <p>Nous prenons des mesures de sécurité raisonnables pour protéger vos données personnelles contre la perte, 
                        l'accès non autorisé, la divulgation, l'altération ou la destruction. Toutefois, veuillez noter qu'aucune 
                        méthode de transmission sur Internet ou de stockage électronique n'est totalement sécurisée, et nous ne 
                        pouvons garantir la sécurité absolue de vos données.</p>

                    <h2>5. Partage de Données Personnelles</h2>
                    <p>Nous ne vendons pas, ne louons pas et ne partageons pas vos données personnelles avec des tiers, sauf dans les cas suivants </p>
                    <p>5.1. Lorsque cela est nécessaire pour répondre à une demande que vous avez formulée (par exemple, si vous demandez un devis).</p>
                    <p>5.2. Lorsque cela est requis par la loi ou une autorité compétente.</p>
                    
                    <h2>6. Vos Droits</h2>
                    <p>Vous avez le droit de demander l'accès à vos données personnelles que nous détenons, de demander leur rectification ou leur 
                        suppression, de vous opposer à leur traitement, ou de retirer votre consentement. Pour exercer ces droits, 
                        veuillez nous contacter à kaladevelops@gmail.com</p>

                    <h2>7. Modification de cette Politique de Confidentialité</h2>
                    <p>Nous nous réservons le droit de mettre à jour cette Politique de Confidentialité à tout moment. 
                       Les modifications seront publiées sur cette page et prendront effet immédiatement</p>

                    <h2>8. Contact</h2>
                    <p>Si vous avez des questions concernant cette Politique de Confidentialité, veuillez nous contacter
                        à kaladevelops@gmail.com</p>
                    <p>Dernière mise à jour : 01/10/2023.</p>


                </span>
            </div>
        </div>
        
    </div>
</template>

<style lang="scss">
    .CGV{
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