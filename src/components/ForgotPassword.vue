<template>
	<div class="container">
		<div class="row" style="display: flex; justify-content: center; align-items: center;">
			<div  class="" >
				<h2>Olvidé contraseña</h2>
				<div class="form-group">
					<label for="mail">Correo:</label>
					<input id="mail" type="email" class="form-control" placeholder="Correo" required>
				</div>
				<p class="text-muted">
					Se le enviará un correo para recuperar la contraseña en el email registrado
				</p>

				
				<b-button id="logIn" variant="success" @click="submit()">Ingresar</b-button>				
			</div>
			
		</div>
	
	</div>
</template>