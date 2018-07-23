<template>
 <div class="container">
    <div class="row" style="display: flex;justify-content: center;align-items: center;">
      <div>
        <h2>Pedidos realizados </h2>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Cedula</th>
              <th>email</th>
              <th>nit</th>
              <th>Nombre de la empresa </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Camilo</td>
              <td>Ordoñez</td>
              <td>42578415</td>
              <td>camilo@gmail.com</td>
              <td>afaf234234</td>
              <td>cocala </td>
              <td><b-button id="logIn" variant="success" @click="submit()">Ver detalle</b-button></td>
              <td><b-button id="logIn" variant="danger" @click="submit()">Eliminar cliente</b-button></td>
            </tr>
            
          </tbody>
        </table>
        
      </div>
    </div>
  </div>
</template>
