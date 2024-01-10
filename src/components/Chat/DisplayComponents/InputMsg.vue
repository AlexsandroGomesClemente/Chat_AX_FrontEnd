<script lang="ts">
import { useMenssageStore } from '@/stores/menssageStore'
import { useUserStore } from '@/stores/userState';
import { SocketService } from '@/socket';
import axios from 'axios'

export default {
    data() {
        return {
            mensagem: "",
            storeMsg: useMenssageStore(),
            storeUser: useUserStore(),
            modalOpen: false,
            emojis: []
        }
    },
    methods: {
        sendMessage() {
            const socketService = new SocketService();
            const socket = socketService.getSocket();
            const historyMessage = localStorage.getItem("history")


            //@ts-ignore
            const talkHistory = {
                user: this.storeUser.user[0].name,
                mensagem: this.mensagem
            }


            if (this.modalOpen) this.openEmojis()

            if (this.mensagem !== "") {
                //@ts-ignore
                localStorage.setItem('history', [historyMessage, JSON.stringify(talkHistory)])
                socket.emit('message', { text: this.mensagem, name: this.storeUser.user[0].name });
                this.storeMsg.incrementMyMessage(this.mensagem, this.storeUser.user[0].name)
                this.mensagem = '';
            }

        },

        openEmojis() {
            this.modalOpen = !this.modalOpen
        },

        async getEmojis(group = 'smileys_emotion') {
            const response: any = await axios.get(`https://api.api-ninjas.com/v1/emoji?group=${group}`, {
                headers: {
                    'X-Api-Key': 'sqF23IUk5uq2HU0x7AjX8Q==DO3125CB2xC7S3T8'
                }
            })

            if (response.status === 200) {
                this.emojis = response.data
            }
        },

        selectEmoji(emoji: any) {
            this.mensagem += emoji.character
        }
    },
    mounted() {
        this.getEmojis()
    }
}

</script>

<template>
    <div class="send-msg">
        <input type="text" placeholder="Escreva uma mensagem ..." v-model="mensagem" @keyup.enter="sendMessage" />
        <button v-on:click="openEmojis" class="send-button-emoji"><img src="@/assets/sorrir.png" alt="emoji"
                title="Emoji"></button>
        <button class="send-button" v-on:click="sendMessage"> <img src="@/assets/send.png" alt="enviar"
                title="Enviar"></button>

        <div v-if="modalOpen" :class="{ 'modal-emoji': modalOpen }">
            <nav>
                <ul>
                    <li @click="getEmojis()">
                        Smiles
                    </li>
                    <li @click="getEmojis('people_body')">
                        Mãos
                    </li>
                    <li @click="getEmojis('animals_nature')">
                        Animais
                    </li>
                    <li @click="getEmojis('food_drink')">
                        Comida
                    </li>
                    <li @click="getEmojis('objects')">
                        Roupas
                    </li>
                    <li @click="getEmojis('activities')">
                        Atividades </li>
                </ul>
            </nav>
            <div class="painel-emoji">
                <ul v-if="emojis.length > 0">
                    <li @click="selectEmoji(item)" v-for="(item, index) in emojis " :key="index">
                        <p class="list-emojis">
                            {{ item.character }}
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
.send-msg {
    width: 100%;
    height: 30px;
}

.send-msg input {
    width: 93%;
    height: 100%;
    padding: 10px;
    border: none;
    outline: none;
}

.send-msg input::placeholder {
    padding-left: 10px;
}

.send-button {
    border: none;
    background-color: white;
    cursor: pointer;
    width: 40px;
    height: 10px;
    font-size: 16px;
}

.send-button-emoji {
    border: none;
    background-color: white;
    cursor: pointer;
    font-size: 16px;
    margin-right: 10px;
}

.send-button img {
    width: 20px;
    height: 20px;
}

.send-button-emoji img {
    width: 20px;
    height: 20px;
}

.modal-emoji {
    background-color: white;

    animation: fadeIn 0.3s ease-out;

    border-radius: 2%;
    height: 200px;
    width: 350px;
    position: absolute;
    bottom: 10%;
    right: 1%;

}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

nav ul {
    list-style: none;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    border-bottom: 1px solid rgba(145, 145, 145, 0.867);
    height: 3rem;
}

nav ul li {
    cursor: pointer;
    padding: 10px;
    margin-top: 10px;
    font-size: 10px;
}

.painel-emoji {
    height: 72%;
}

.painel-emoji ul {
    padding: 10px 12px;
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
}


.painel-emoji ul li {
    cursor: pointer;
    margin: 3.5px;
}

.painel-emoji ul li:hover {
    background-color: rgba(149, 149, 234, 0.697);
    border-radius: 5px;
}

.list-emojis {
    font-size: 20px;
    margin: 5px -1px;
}
</style>