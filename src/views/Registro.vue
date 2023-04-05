<script lang="ts">
import { RouterLink } from 'vue-router'
import Form from '../components/Register/Form.vue'
import SlideRegister from '../components/Register/SlideRegister.vue'

export default {
    components: {
        Form,
        SlideRegister
    }
}
</script>

<template>
    <main >
        <div class="container-main">
            <SlideRegister/>
            <Form/>
           
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
        border: solid 5px black;

        display:flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;

    }

</style>