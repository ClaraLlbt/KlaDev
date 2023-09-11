<script>
export default {
    name: 'Works'
}
</script>

<template>
    <div class="work row">
        <div class="col">
            <div class="card">
                <img class="" src="../assets/images/Dito.png" alt="Card image cap">
                <div class="card-body">
                    <h3>DITO PRO</h3>
                    <p>Réalisation d'un site vitrine de dépannage informatique</p>
                </div>
            </div>
            <div class="card">
                
            </div>
            <div class="card">
                
            </div>
        </div>
        <div class="col">
            <div class="card">

</div>
<div class="card">
    
</div>
<div class="card">
    
</div>
        </div>
    </div>
</template>

<style lang="scss">
    .work{
        height: 100vh;
        background-color: lightgray;
        .card{
            width: 70%;
            margin: 15px auto;
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