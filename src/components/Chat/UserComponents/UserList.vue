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
    },
}

</script>

<template>
    <div class="user-list">
        <nav>
            <ul>
                <li v-for=" user in userList">
                    <spam>
                        <img src="../../../assets/avatar-removebg-preview.png" />
                    </spam>
                    <p>{{ user }}</p>
                </li>
            </ul>
        </nav>

    </div>
</template>

<style scoped>
.user-list {
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    width: 100%;
}

.user-list li {
    list-style: none;

    color: #FFF;
    width: 100%;
    padding-left: 20px;
    padding-top: 5px;
    margin: 15px 0;

    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;



}

.user-list li:hover {
    background-color: #2f95bda4;
    cursor: pointer;
    opacity: 0.3;
}

.user-list li spam {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;

    border: 2px solid black;
    border-radius: 50%;
    background-color: rgb(252, 250, 250);

    height: 50px;
    width: 50px;

}

.user-list li p {
    color: #FFF;
    font-weight: 700;
}

img {
    width: 55px;
    height: 55px;
}
</style>