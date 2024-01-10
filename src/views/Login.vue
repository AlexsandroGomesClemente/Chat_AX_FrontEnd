<script lang="ts">
import { RouterLink } from 'vue-router'
import Form from '../components/Login/Form.vue'
import SlideLogin from '../components/Login/SlideLogin.vue'

export default {
    components: {
        Form,
        SlideLogin
    }
}
</script>

<template>
    <main >
        <div class="container-main">
            <Form/>
            <SlideLogin/>
        </div>
    </main>
</template>


<style scoped>
    main {
        display: flex;
        justify-content: center;
        align-items: center;
        
        height: 100vh;
    }

    .container-main {
        height: 75%;
        width:  95%;
        

        border-radius: 20px;
        border: solid 2px black;

        display:flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;

    }



</style>