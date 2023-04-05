import { defineStore } from 'pinia'

export const useMenssageStore = defineStore('mensagem',{

// state
state(){
return {
    myMenssage:[],
    outherMenssage:[],
    allMenssage: [],
}
},
// actions
actions:{
    incrementMyMessage(value1:any, name:any){
        this.myMenssage.push(value1)
        this.incrementAllMenssage(value1,name, 2)
    },
    incrementOutherMessage(value:any, name: any){
        this.outherMenssage.push(value)
        this.incrementAllMenssage(value, name, 1)
       
    },
    incrementAllMenssage(valueMsg:any,name:any, type:any){
        this.allMenssage.unshift({
            nome:name,
            msg:valueMsg,
            type
        })
    }
},

//getters

getters: {
    showMyMensage(): any{
        return this.myMenssage
    },
    showOutherMensage(): any{
        return this.outherMenssage
    },
    showAllMessage(): any{
        return this.allMenssage
    },

}



})