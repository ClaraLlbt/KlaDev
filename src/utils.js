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

 