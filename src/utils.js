
//Darkmode FUNCTION
import { useDark, useToggle } from "@vueuse/core";

export function darkMode() {
    // Fonction à partager
    const isDark = useDark();
    const toggleDark = useToggle(isDark)
   
    const btnDkMod = document.querySelectorAll('.item-dark')
    
    console.log(btnDkMod);
    
    btnDkMod[0].addEventListener('click', function(){   
        toggleDark()
    })
    btnDkMod[1].addEventListener('click', function(){   
        toggleDark()
    })
}


export function darkModeCgv() {
    // Fonction à partager
    const isDark = useDark();
    const toggleDark = useToggle(isDark)
   
    const btnDkModCgv = document.querySelector('.item-dark-cgv')
    
    btnDkModCgv.addEventListener('click', function(){   
        toggleDark()
    })
    
}

 