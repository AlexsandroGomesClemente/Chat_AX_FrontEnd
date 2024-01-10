<script lang="ts">
import { useUserStore } from "@/stores/userState"

export default {
    data(){
        return {
            user: useUserStore()
        }
    },
}
</script>

<template>
    <div class="user-profile">
        <spam>
            <img src="../../../assets/avatar-removebg-preview.png" />
        </spam>
        
        <p>{{
            user.user[0].name
        }}</p>
    </div>
</template>

<style scoped>
.user-profile{
    color: #FFF;
    width: 100%;
    height: 8%;
    padding:25px;
    margin-top: 30px;
    margin-left: 25px;


    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;

}

.user-profile spam{
 display: flex;
 justify-content: center;
 align-items: center;
 margin-right: 10px;

border: 2px solid black;
border-radius: 50%;
background-color: rgb(255, 255, 255);

height: 60px;
width: 60px;
}

.user-profile p {
    color:#FFF;
    font-weight: 700;
    font-size: 16px;
   }

   img {
    height: 55px;
    width: 55px;
   }
</style>