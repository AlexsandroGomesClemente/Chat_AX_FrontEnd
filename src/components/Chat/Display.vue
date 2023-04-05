<script lang="ts">
import AreaLogo from './DisplayComponents/AreaLogo.vue'
import AreaDisplay from './DisplayComponents/AreaDisplay.vue'
import InputMsg from './DisplayComponents/InputMsg.vue'

export default {
    components: {
        AreaLogo,
        AreaDisplay,
        InputMsg
    }
}
</script>


<template>
    <div class="container-slide">
       <AreaLogo/>
       <AreaDisplay/>
       <InputMsg/>
       
       </div>
</template>

<style scoped>
.container-slide {
    background-color: #FFF;


    height: 100%;
    width: 75%;
}
.container-slide{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

</style>