<script lang="ts">
import { SocketService } from '@/socket';
import { useMenssageStore } from '@/stores/menssageStore'
import { useUserStore } from '@/stores/userState';

export default {
    data() {
        return {
            storeMsg: useMenssageStore(),
            storeUser: useUserStore(),
            showButton: true,
            hasHistory: JSON.parse(localStorage.getItem("hasHistory"))

        }
    },
    created() {
        const socketService = new SocketService();
        const socket = socketService.getSocket();
        socket.on('show-msg', (obj: any) => {

            if (this.storeUser.user[0].name !== obj.username) {
                this.storeMsg.incrementOutherMessage(obj.message, obj.username)
            }

        });

    },
    methods: {
        loadHistory() {
            const history = JSON.parse(localStorage.getItem('history'))
            history.map((item, index) => {
                this.storeMsg.incrementOutherMessage(item.mensagem, item.user)
            })
            this.showButton = false;
        }
    },

}


</script>

<template>
    <div class="display">
        <button v-if="showButton && hasHistory" class="historico" @click="loadHistory">Carregar
            historico</button>
        <div class="msg">

            <div v-for="mss in storeMsg.allMenssage" :key='mss' :class="mss.type === 1 ? 'users-msg ' : 'my-msg'">
                <p>
                    <strong>{{ mss.nome }}:</strong>
                    {{ mss.msg }}
                </p>
            </div>
        </div>

    </div>
</template>


<style scoped>
.historico {
    position: fixed;
    left: 60%;
    top: 20%;

    border: none;
    border-radius: 5px;
    cursor: pointer;

    width: 150px;
    height: 40px;
    font-size: 15px;
    font-weight: 600;
    color: white;
    background-color: #4bc2fa;
}

.historico:hover {
    opacity: 0.8;
}

.display {
    height: 80%;
    background-color: #ebefef;
}

.msg {
    height: 100%;
    overflow-y: scroll;

    display: flex;
    flex-direction: column-reverse;
    justify-content: end;


}


.msg::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    background-color: #ebefef;
}

.msg::-webkit-scrollbar-thumb {
    background-color: #A1A4A4;
    border-radius: 5px;
}

.users-msg {
    align-self: flex-start;
    padding-left: 20px;
    padding-bottom: 10px;
    color: black;

}

.users-msg p {
    background-color: #ffffff;
    border: 2px solid #ffffff;
    border-top-left-radius: 45px;
    border-top-right-radius: 45px;
    border-bottom-right-radius: 45px;
    color: #080a10;

    padding: 10px 15px;
    width: auto;
    height: auto;
}

.my-msg {
    align-self: flex-end;
    padding-right: 20px;
    padding-bottom: 10px;
    color: black;
}

.my-msg p {
    background-color: #4bc2fa;
    border: 2px solid #4bc2fa;

    border-top-left-radius: 45px;
    border-top-right-radius: 45px;
    border-bottom-left-radius: 45px;
    color: white;


    padding: 10px 15px;
    width: auto;
    height: auto;
}
</style>
