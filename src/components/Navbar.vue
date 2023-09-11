<script>
export default {
    name: "Navbar"
    
}
</script>

<template>
    <div class="navbar container-fluid">
        <ul class="nav justify-content-center">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">ABOUT ME</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">EXPERIENCE</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">WORKS</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" aria-disabled="true">CONTACT</a>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
.navbar{
    opacity: 0;
    animation: textHidden 2s 2.5s forwards;
    justify-content: center;
    .nav{
        font-size: x-large;
        .nav-item{
            margin: .5em 1em;
        }
        .nav-link{
            color: black;
        }
    }
    .nav * {
        box-sizing: border-box;
        transition: all .35s ease;
    }
    .nav a {
  padding: .5em .8em;
  color: rgba(255,255,255,.5);
  position: relative;
  text-decoration: none;
}

.nav a::before,
.nav a::after {
  content: '';
  height: 14px;
  width: 14px;
  position: absolute;
  transition: all .35s ease;
  opacity: 0;
}

.nav a::before {
  content: '';
  right: 0;
  top: 0;
  border-top: 2px solid black;
  border-right: 2px solid black;
  transform: translate(-100%, 50%);
}

.nav a:after {
  content: '';
  left: 0;
  bottom: 0;
  border-bottom: 2px solid black;
  border-left: 2px solid black;
  transform: translate(100%, -50%)
}

.nav a:hover:before,
.nav a:hover:after{
  transform: translate(0,0);
  opacity: 1;
}

}


@keyframes textHidden {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>