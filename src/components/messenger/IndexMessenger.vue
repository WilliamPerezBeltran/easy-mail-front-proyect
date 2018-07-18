<template>
  <div class="container">
    <div class="row" style="display: flex;justify-content: center;align-items: center;">
      <div>
        <h2>Panel del mensajero</h2>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Estado</th>
              <th>Origen</th>
              <th>Destino</th>
              <th>Codigo</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>En proceso</td>
              <td>calle 88 # 22 -45</td>
              <td>Prado calle 34 -76-23</td>
              <td>Codigo</td>
              <td><b-button id="logIn" variant="success" @click="submit()">Ver detalle</b-button></td>
            </tr>
            
          </tbody>
        </table>
        
      </div>
    </div>
  </div>
</template>

