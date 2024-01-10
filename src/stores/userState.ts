import { defineStore } from 'pinia'

export const useUserStore = defineStore('user',{

// state
state(){
return {
    user:[],
}
},
// actions
actions:{
    incrementUser(value:any){
        this.user.push(value[0])
    },
   
},

//getters

getters: {
    showUser(): any{
        return this.user
    },
   
}

})