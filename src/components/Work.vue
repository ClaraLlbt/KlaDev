<script>
export default {
    name: 'Works'
}
</script>

<template>
    <div id="work" class="work row">
        <h2>WORK</h2>
        <div class="col-6 column-1">
            <div class="card">
                <img class="" src="../assets/images/mockup-dito.png" alt="Card image cap">
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
        <div class="col-6 column-2">
            <div class="card">
                <img class="" src="../assets/images/orinoco.png" alt="Card image cap">
                <div class="card-body">
                    <h3>PIIQUANTE</h3>
                    <p>Réalisation d'un site vitrine de dépannage informatique</p>
                </div>
            </div>
            <div class="card">
                <img class="" src="../assets/images/OhMyFood.png" alt="Card image cap">
                <div class="card-body">
                    <h3>PIIQUANTE</h3>
                    <p>Réalisation d'un site vitrine de dépannage informatique</p>
                </div>
            </div>
            <div class="card">
                <img class="" src="../assets/images/mockup_reservia.png" alt="Card image cap">
                <div class="card-body">
                    <h3>PIIQUANTE</h3>
                    <p>Réalisation d'un site vitrine de dépannage informatique</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .work{
        height: 100vh;
        h2{
            text-align: center;
            margin: 50px;
            width: 100%;
            border-bottom: 1px black solid;
        }
        .column-1{
            .card{ float: right; }
            
        }
        .column-2{
            float: left;
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