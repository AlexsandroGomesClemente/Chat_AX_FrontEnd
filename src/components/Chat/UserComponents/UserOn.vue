<script lang="ts">
import { SocketService } from '@/socket';
import localstorage from '../../../mixins/localstorage.js'

export default {
    data() {
        return {
            userList: [],
        }
    },
    mixins: [localstorage],
    created() {
        const socketService = new SocketService();
        const socket = socketService.getSocket();
        socket.on('user-list', (users: any) => {
            this.userList = users
        });

        const countUser = localStorage.getItem('users')
        this.userList.push(...countUser?.split(','))
    }
}

</script>

<template>
    <div class="users-online">
        <div class="ball"></div>
        <p>Online: {{ userList.length }}</p>
    </div>
</template>

<style scoped>
.users-online {
    color: #FFF;
    width: 100%;
    height: 70px;
    padding-left: 25px;
    margin-top: 10px;

    font-weight: 700;

    background-color: #2eb9fa;
    display: flex;
    justify-content: start;
    align-items: center;

    font-size: 15px;
}

.ball {
    height: 10px;
    width: 10px;
    background-color: greenyellow;
    margin-right: 5px;
    border-radius: 25px;
}
</style>