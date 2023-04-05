<script lang="ts">
import { useMenssageStore } from '@/stores/menssageStore'
import { useUserStore } from '@/stores/userState';
import { SocketService } from '@/socket';

export default {
    data(){
        return{
            mensagem:"",
            storeMsg:useMenssageStore(),
            storeUser: useUserStore()
        }
    },
    methods: {
    sendMessage() {
      const socketService = new SocketService();
      const socket = socketService.getSocket();

      if (this.mensagem !== ""){
      socket.emit('message', {text: this.mensagem, name: this.storeUser.user[0].name});
      this.storeMsg.incrementMyMessage(this.mensagem, this.storeUser.user[0].name)
      this.mensagem = '';
      }
      
    },

}
}

</script>

<template>
    <div class="send-msg">
        <input type="text" placeholder="Escreva uma mensagem ..." v-model="mensagem" @keyup.enter="sendMessage"/>
    </div>
</template>

<style scoped>
.send-msg  {
    width: 100%;
    height: 30px;
}

.send-msg input {
    width: 95%;
    height: 100%;
    padding: 10px;
    border:none;
    outline: none;
}

.send-msg input::placeholder {
   padding-left: 10px;
}
</style>