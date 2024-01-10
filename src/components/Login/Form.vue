<script lang="ts">
import axios from 'axios'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { useUserStore } from '@/stores/userState'
import { SocketService } from '@/socket';

export default {
  data() {
    return {
      email: '',
      name: '',
      password: '',
      backend: false,
      user: useUserStore()
    }
  },
  methods: {
    authUser: function (e: Event) {
      e.preventDefault()


      let dado = {
        email: this.email,
        password: this.password
      }

      if (dado.email == '' || dado.password == '') {
        toast.error('Preencha todos os campos')
        return false
      }

      axios.post(`https://chat-ax-backend.onrender.com/login`, dado).then((res) => {
        const socketService = new SocketService();
        const socket = socketService.getSocket();
        if (res.status === 200) {
          toast.success(res.data.data)
          this.user.incrementUser(res.data.user)
          socket.emit('user-join', res.data.user[0].name);

          this.$router.push('/chat');
        }
      }).catch((err) => {
        console.log(err)
        toast.error('Usuario nao encontrado')
      })

    },

    authUserNoBack: function (e: Event) {
      e.preventDefault()

      let dado = [{
        id: Math.floor(Math.random() * 100),
        name: this.name,
        email: "teste@teste.com"
      }]
      const users = localStorage.getItem("users")
      localStorage.setItem("users", [users, this.name])
      this.user.incrementUser(dado)
      this.$router.push('/chat');
    }
  },
}
</script>


<template>
  <div v-if="backend" class="container-form">
    <h3>Login</h3>
    <form method="post" @submit.prevent="authUser">
      <div class="form-group">
        <label>E-mail</label>
        <input type="email" name="email" v-model="email" />
      </div>
      <div class="form-group">
        <label>Senha</label>
        <input type="password" name="password" v-model="password" />
      </div>
      <button>Entrar</button>
    </form>
    <span> Ainda não tem conta ? <RouterLink to="/registro" class="link">Crie sua conta!</RouterLink>
    </span>
  </div>

  <div v-if="!backend" class="container-form">
    <h3>Entrar no chat</h3>
    <form method="post" @submit.prevent="authUserNoBack">
      <div class="form-group">
        <label>Nome</label>
        <input type="text" name="text" v-model="name" />
      </div>

      <button>Entrar</button>
    </form>
  </div>
</template>


<style scoped>
.container-form {
  background-color: white;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
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

.form-group {
  display: flex;
  flex-direction: column;

  width: 350px;
  height: 50px;
  margin: 6px 0px;
}

.form-group label {
  color: rgb(80, 77, 77);

  font-size: 15px;
  font-weight: 400;

  margin: 6px 0 6px;
}

.form-group input {
  width: 100%;
  padding: 5px 0px;

  border: none;
  border-bottom: 2px solid rgb(80, 77, 77);
  outline: none;
}

.form-group input:focus {
  transition: 1;
  border-bottom: 2px solid #00374C;
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

  background-color: #1E1842;


  color: white;
}

.container-form button:hover {
  cursor: pointer;
  opacity: 0.9;
}

.container-form span {
  color: rgb(80, 77, 77);
  margin: 15px;
}

.container-form .link {
  color: rgb(76, 31, 238);
  text-decoration: none;
}
</style>