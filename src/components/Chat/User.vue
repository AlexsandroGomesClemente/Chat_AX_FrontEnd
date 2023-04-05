<script lang="ts">
import UserProfile from './UserComponents/UserProfile.vue'
import UserOn from './UserComponents/UserOn.vue'
import UserList from './UserComponents/UserList.vue'

export default {
    components:{
        UserProfile,
        UserOn,
        UserList
    }
}
</script>

<template>

    <div class="container-list-user">
        
        <UserProfile/>

        <UserOn/>

        <UserList/>
      
   </div>
</template>

<style scoped>
.container-list-user{
    background-color:#2C3E50;
    height: 100%;
    width: 32%;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
}

</style>