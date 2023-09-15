// utils.js

//Darkmode FUNCTION
import { useDark, useToggle } from "@vueuse/core";

export function darkMode() {
    // Fonction à partager
    const isDark = useDark();
    const toggleDark = useToggle(isDark)
   
    const btnDkMod = document.querySelectorAll('.item-dark')

    btnDkMod[0].addEventListener('click', function(){   
        toggleDark()
    })
    btnDkMod[1].addEventListener('click', function(){   
        toggleDark()
    })
    
  }

//Scroll FUNCTION
export function scrollEvent() {
    document.addEventListener('scroll', () => { 
        const { scrollTop, scrollHeight ,clientHeight} = document.documentElement;
        // const topElementToTopViewport = el.getBoundingClientRect(scrollHeight).top

        console.log(scrollTop);
        // if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.30){
            
        // }
    });
    
  }