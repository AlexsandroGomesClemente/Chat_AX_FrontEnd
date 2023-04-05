<script lang="ts">
import axios from 'axios'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
  data(){
    return {
      name:'',
      email:'',
      password:'',
    }
  },
  methods:{
    handleSubmit: function(e:Event){
      e.preventDefault()
      let dado = {
        name: this.name,
        email: this.email,
        password: this.password
      }

      if (dado.name == '' || dado.email == '' || dado.password == '') {
        toast.error('Preencha todos os campos')
        return false
      }

    axios.post(`http://localhost:3002/register`, dado).then((res) => {
        if(res.status === 200) {
          toast.success(res.data.data)
          this.$router.push('/');
        }

      }).catch((err)=> {
        toast.error('Cadastro não realizado')
      })
      
    }
  },
}
</script>

<template>
    <div class="container-form">
        <h3>Cadastrar-se</h3>
       
        <form @submit.prevent="handleSubmit" method="POST" >
            <div class="form-group">
                <label>Nome</label>
                <input type="text" name="nome" v-model="name"/>
            </div>
            <div class="form-group">
                <label>E-mail</label>
                <input type="email" name="email" v-model="email" />
            </div>
            <div class="form-group">
                <label>Senha</label>
                <input type="password" name="password" v-model="password" />
            </div>
            <button>Registrar</button>
        </form>
        <span> Já possui uma conta?  <RouterLink to="/" class="link">Logar!</RouterLink>
        </span>
   </div>
</template>

<style scoped>
.container-form{
    background-color:white;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    height: 100%;
    width: 50%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.container-form h3 {
    color: rgb(8, 8, 8);

    letter-spacing: 1px;
    font-size: 25px;

    margin-bottom: 15px; 
}

.form-group{
  display: flex;
  flex-direction: column;

  width: 350px;
  height: 50px;
  margin: 6px 0px;
}

.form-group label{
   color: rgb(80, 77, 77);

   font-size: 15px;
   font-weight: 400;

   margin: 6px 0 6px ;
  }

.form-group input{
    width: 100%;
    padding: 5px 0px;

    border: none;
    border-bottom: 2px solid  rgb(80, 77, 77);
    outline: none;
  }

  .form-group input:focus{
    transition: 1;
    border-bottom: 2px solid #00BEF9;;
    transition: all 0.3s ease;
  }

.container-form button {
   width: 100%;
   height: 35px;
   margin: 15px 0px;

   font-size: 15px;
   font-weight: 400px;
   letter-spacing: 2px;

   border: none;
   border-radius: 25px;

   background-color: #00BEF9;
   color: white;
}

.container-form button:hover {
   cursor: pointer;
   opacity: 0.6;
 }

 .container-form span {
    color:rgb(80, 77, 77);
    margin: 15px;
  }

  .container-form .link {
    color:rgb(76, 31, 238);
    text-decoration: none;
  }

</style>