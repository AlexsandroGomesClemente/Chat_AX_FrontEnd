<script lang="ts">
import { SocketService } from '@/socket';

export default {
    data(){
        return {
            userList: []
        }
    },
    created() {
    const socketService = new SocketService();
    const socket = socketService.getSocket();
    socket.on('user-list', (users: any) => {
        this.userList = users
    });
}
}

</script>

<template>
    <div class="users-online">
        <div class="ball"></div>
        <p>Online: {{userList.length}}</p>
    </div>
</template>

<style scoped>
.users-online{
    color: #FFF;
    width: 100%;
    height:  70px;
    padding-left:25px;
    margin-top: 50px ;

    font-weight: 700;
    
    background-color: #32465A;
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