
<template lang="html">
  <div class="container">
    <div class="row" style="display: flex;justify-content: center;align-items: center;">
      <div>
        <form id="app" @submit="" method="post">
      <h2>Solicitud del servicio</h2>
      <div class="form-group">
        <label for="origen">Origen del servicio: </label>
        <input
          id="origen"
          type="text"
          class="form-control"
          placeholder="Origen"
          required="true"
        >
      </div>
      <div class="form-group">
        <label for="destiny">Destino del servicio: </label>
        <input
          id="destiny"
          type="text"
          class="form-control"
          placeholder="Destino"
          required="true"
        >
      </div>
      <div class="form-group">
        <label for="date">Fecha actual: </label>
        <input
          id="date"
          type="date"
          class="form-control"
          placeholder="Fecha"
          required="true"
        >
      </div>
      <div class="form-group">
        <label for="time">Hora actual: </label>
        <input
          id="time"
          type="time"
          class="form-control"
          placeholder="Hora"
          required="true"
        >
      </div>
      <div class="form-group">
        <label for="city">Ciudades: </label>
        <input
          id="city"
          type="text"
          class="form-control"
          placeholder="Ciudades"
          required="true"
        >
      </div>
      
      <div class="">
        <input type="checkbox" id="checkbox"  required="true">
        <label for="checkbox">Acepto los términos y condiciones</label>
      </div>
      <div class="">
        <input class="btn btn-primary" type="submit" value="Registarme"></input>
      </div>
    </form>
        
      </div>
    </div>
  </div>
    
       
</template>
