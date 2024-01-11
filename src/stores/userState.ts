import { defineStore } from 'pinia'

export const useUserStore = defineStore('user',{

// state
state(){
return {
    user:[],
    users:[],
}
},
// actions
actions:{
    incrementUser(value:any){
        this.user.push(value[0])
    },
    incrementUsers(value:any){
        this.users.push(value)
    }
   
},

//getters

getters: {
    showUser(): any{
        return this.user
    },
    showUsers(): any {
        return this.users
    }
   
}
})