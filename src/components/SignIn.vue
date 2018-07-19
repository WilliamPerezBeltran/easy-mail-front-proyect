<template>
	<div class="container">
		<div class="row" style="display: flex; justify-content: center; align-items: center;">
			<div  class="" >
				<h2>Iniciar sesión</h2>
				<div class="form-group">
					<label for="mail">Correo:</label>
					<input id="mail" type="email" class="form-control" placeholder="Correo" v-model="user.email" required>
				</div>

				<div class="form-group" >
					<label for="pass">Password:</label>
					<input id="pass" type="password" class="form-control" placeholder="Contraseña" v-model="user.password" required>

				</div>	
				<b-button id="logIn" variant="success" @click="submit()">Ingresar</b-button>
				<div> <router-link :to="{name: 'forgotpassword'}">recuperar contraseña</router-link>			</div>	
				
			</div>
			
		</div>
	
	</div>
</template>

<script>
	export default {
		data(){
			return{
				user:{
					email: '',
					password: ''
				}
			}
		},
		methods:{
			submit(){
				// console.log(this.user)
				this.$http.post('users/sign_in', this.user)
				.then(response=>{
					console.log(response)
				}, error=>{
					console.log("Something were wrong")
					console.log(error)
				});
			}
		}
	}
</script>