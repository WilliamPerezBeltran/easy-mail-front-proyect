<template>
  <div class="container">
    <div class="row" style="display: flex;justify-content: center;align-items: center;">
		<form id="app" @submit="" method="post">
			<h2>Ingrese los datos para el nuevo cliente</h2>
			<div class="form-group">
				<label for="name">Nombre: </label>
				<input id="name" type="text" class="form-control" placeholder="Nombre" required="true">
			</div>
			<div class="form-group">
				<label for="origen">Apellido: </label>
				<input id="origen" type="text" class="form-control" placeholder="Apellido" required="true">
			</div>
			<div class="form-group">
				<label for="cc">Cedula: </label>
				<input id="cc" type="number" class="form-control" placeholder="Cedula" required="true">
			</div>
			<div class="form-group">
				<label for="email">Email: </label>
				<input id="email" type="email" class="form-control" placeholder="Email" required="true">
			</div>
			<div class="form-group">
				<label for="password">Password: </label>
				<input id="password" type="password" class="form-control" placeholder="Password" required="true">
			</div>
			<div class="form-group">
				<label for="nit">Nit: </label>
				<input id="nit" type="text" class="form-control" placeholder="Nit" required="true">
			</div>
			<div class="form-group">
				<label for="business_name">Nombre de la empresa : </label>
				<input id="business_name" type="text" class="form-control" placeholder="Nombre de la empresa " required="true">
			</div>
			<div class="">
	        	<input class="btn btn-primary" type="submit" value="Crear cliente"></input>
	        </div>
		</form>
    </div>
  </div>
    
       
</template>
