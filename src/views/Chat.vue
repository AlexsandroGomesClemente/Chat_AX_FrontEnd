<script lang="ts">
import { RouterLink } from 'vue-router'
import User from '../components/Chat/User.vue'
import Display from '../components/Chat/Display.vue'

export default {
    components: {
        User,
        Display
    },
    data() {
        return {
            larguraDaTela: window.innerWidth,
            larguraDeCorte: 450,
        };
    },
    mounted() {
        window.addEventListener('resize', this.verificarLarguraDaTela);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.verificarLarguraDaTela);
    },
    methods: {
        verificarLarguraDaTela() {
            this.larguraDaTela = window.innerWidth;
        },
    },
}
</script>

<template>
    <main>
        <div class="container-main">
            <User v-if="larguraDaTela > larguraDeCorte" />
            <Display />
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
    width: 100%;

    border: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

}
</style>