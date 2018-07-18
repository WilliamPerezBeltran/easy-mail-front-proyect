<template>

  <div>
  	<h1>Solicitud del servicio</h1>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">

    	<b-form-group id="origen"
                    label="Origen del servicio"
                    label-for="origen">
	        <b-form-input id="origen"
	                      type="text"
	                      v-model="form.origen"
	                      required
	                      placeholder="Origen">
	        </b-form-input>
	    </b-form-group>

	    <b-form-group id="destiny"
                    label="Destino del servicio"
                    label-for="destiny">
	        <b-form-input id="destiny"
	                      type="text"
	                      v-model="form.destiny"
	                      required
	                      placeholder="Destino">
	        </b-form-input>
	    </b-form-group>

      <b-form-group id="date"
                    label="Fecha actual"
                    label-for="date">
          <b-form-input id="date"
                        type="date"
                        v-model="form.date"
                        required
                        placeholder="Fecha actual">
          </b-form-input>
      </b-form-group>

      <b-form-group id="time"
                    label="hora "
                    label-for="time">
          <b-form-input id="time"
                        type="time"
                        v-model="form.time"
                        required
                        placeholder="Hora actual">
          </b-form-input>
      </b-form-group>

      <b-form-group id="city"
                    label="Ciudad:"
                    label-for="city">
        <b-form-select id="city"
                      :options="cities"
                      required
                      v-model="form.city">
        </b-form-select>
      </b-form-group>



      
     

   

      <b-button type="submit" variant="primary">Solicitar servicio</b-button>

      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>

  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        name: '',
        city: null,
        checked: []
      },
      cities: [
        { text: 'Select One', value: null },
        'Bogotá', 'Barranquilla', 'Medellin', 'Cali'
      ],
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.origen = '';
      this.form.destiny = '';
      this.form.date = '';
      this.form.time = '';
      this.form.city = null;
      this.form.checked = [];
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}
</script>

<!-- b-form-1.vue -->