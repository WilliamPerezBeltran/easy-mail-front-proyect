<template>
	<div class="container">
		<div class="row" style="display: flex;justify-content: center;align-items: center;">
			<div class="col-md 6">
				<div>
				  <b-card title="Card Title"
				          img-src="https://picsum.photos/600/300/?image=25"
				          img-alt="Image"
				          img-top
				          tag="article"
				          style="max-width: 20rem;"
				          class="mb-2">
				    <p class="card-text">
				      Some quick example text to build on the card title and make up the bulk of the card's content.
				    </p>
				    <b-button href="#" variant="primary">Go somewhere</b-button>
				  </b-card>
				</div>
								
			</div>
			<div class="col-md 6">
				<h3> Nombre:</h3>
				<h3> Celular:</h3>
				<h3> Codigo del servicio:</h3>
				
			</div>
		</div>


		<div class="row" style="display: flex;justify-content: center;align-items: center;">
			<div class="col-md 6">
				<b-card class="text-center">
				  Estado del servicio:
				</b-card>
			</div>
		</div>

		<div class="row" style="display: flex;justify-content: center;align-items: center;">
			<div class="col-md 6">
				<b-card class="text-center">
				  <b-button id="logIn" variant="success" @click="submit()">What sapp</b-button>
				</b-card>
			</div>
		</div>



	</div>
</template>