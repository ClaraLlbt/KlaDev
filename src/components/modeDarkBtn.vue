<script>
//Import Darkmode
import { useDark, useToggle } from "@vueuse/core";

export default {
    name: 'btnDarkMode',
    data(){
      return {
        dark : '',
      }
    },
    methods: {
        darkMode(){
            const isDark = useDark();
            const toggleDark = useToggle(isDark)

            this.dark = isDark

            if(this.dark == true){
                toggleDark(false)
            } else if(this.dark == false){
                toggleDark(true)
            }
        
        }
        
    }   
}
</script>


<template>
        <button @click="darkMode()" type="button" role="button" class="btn" aria-label="Bouton pour basculer en mode sombre">
            <i  v-if="this.dark == false" class="bi bi-moon icon-moon"></i>
            <i  v-else-if="this.dark == true" class="bi bi-brightness-high icon-light"></i>
        </button>

</template>
