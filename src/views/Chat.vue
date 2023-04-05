<script lang="ts">
import { RouterLink } from 'vue-router'
import User from '../components/Chat/User.vue'
import Display from '../components/Chat/Display.vue'

export default {
    components: {
        User,
        Display
    }
}
</script>

<template>
    <main >
        <div class="container-main">
            
            <User/>

            <Display/>

        </div>
    </main>
</template>


<style scoped>
    main {
        display: flex;
        justify-content: center;
        align-items: center;
        
        height: 100vh;
        overflow: hidden;
    }

    .container-main {
        height: 100%;
        width:  100%;
        
        border: none;
        display:flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;

    }


  

</style>