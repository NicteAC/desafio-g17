<template>
  <div id="app">
    <h2 class="my-4 title">Agrega un producto a la lista</h2>

    <div>
      <form @submit.prevent="addProductToProductList">
        <div class="form-options py-2">
          <div class="form-text">
            <div class="row align-items-center">
              <div class="col-6 text-right pr-3">
                <label>Nombre:</label>
              </div>
              <div class="col-6 text-left pl-0">
                <input
                  type="text"
                  v-model="form.name"
                  required
                  placeholder="Escriba un nombre"
                />
              </div>
            </div>
          </div>
          <div class="form-filter mt-2">
            <div class="row">
              <div class="col-6 text-right pr-3">
                <label>Descripción:</label>
              </div>
              <div class="col-6 text-left pl-0">
                <input
                  type="text"
                  v-model="form.description"
                  required
                  placeholder="Escriba una descripción"
                />
              </div>
            </div>
          </div>
          <div class="form-filter mt-2">
            <div class="row">
              <div class="col-6 text-right pr-3">
                <label>Categoría:</label>
              </div>
              <div class="col-6 text-left pl-0">
                <select v-model="form.category" required>
                  <option disabled selected value="">
                    Elige una categoría
                  </option>
                  <option value="Figuras">Figuras</option>
                  <option value="Accesorios">Accesorios</option>
                  <option value="Populares">Populares</option>
                </select>
              </div>
            </div>
          </div>
          <div class="form-size mt-2">
            <div class="row justify">
              <div class="col-6 text-right pr-3">
                <label>Precio:</label>
              </div>
              <div class="col-6 text-left pl-0">
                <input
                  type="number"
                  step="100"
                  v-model.number="form.price"
                  required
                  placeholder="Ingrese el precio"
                />
              </div>
            </div>
          </div>

          <div class="form-filter mt-2">
            <div class="row">
              <div class="col-6 text-right pr-3">
                <label>Oferta:</label>
              </div>
              <div class="col-6 text-left pl-0">
                <select v-model="form.clearance" required>
                  <option disabled selected value="">
                    Producto con descuento
                  </option>
                  <option value="true">Sí</option>
                  <option value="false">No</option>
                </select>
              </div>
            </div>
          </div>

          <div class="form-filter mt-2" v-if="form.clearance">
            <div class="row">
              <div class="col-6 text-right pr-3">
                <label>Descuento (%):</label>
              </div>
              <div class="col-6 text-left pl-0">
                <input
                  type="number"
                  min="0"
                  max="100"
                  step="1"
                  v-model.number="form.discount"
                  v-if="form.clearance"
                  required
                  placeholder="Ingrese el descuento"
                />
              </div>
            </div>
          </div>

          <div class="form-filter mt-2">
            <div class="row">
              <div class="col-6 text-right pr-3">
                <label>URL Imagen:</label>
              </div>
              <div class="col-6 text-left pl-0">
                <input
                  type="text"
                  v-model="form.src"
                  required
                  placeholder="Pega la URL de imagen"
                />
              </div>
            </div>
          </div>
        </div>

        <button class="mt-3 btn btn-outline-primary" type="submit">
          Añadir Producto
        </button>
      </form>
      <!-- Revisar si está leyendo los datos ingresados -->
      <!-- {{ form.name }} {{ form.description }} {{ form.category }}
      {{ form.color }} {{ form.clearance }} {{ form.discount }}
      {{ form.price }} {{ form.src }} -->
    </div>
  </div>
</template>

<script>
export default {
  name: "AddProducts",
  data: () => ({
    form: {
      name: "",
      description: "",
      category: "",
      clearance: false,
      discount: null,
      price: null,
      src: "",
    },
  }),
  methods: {
    addProductToProductList() {
      console.log("submit");
      console.log(this.form);
      this.$store.dispatch("addProductToProductList", this.form);
      alert(
        `¡Genial! el producto ${this.form.name} ha sido agregado exitosamente`
      );
      this.form = "";
      /**
       * Podría utilizar this.$router para llevar a la página de productos
       */
      // this.$router.push('/products')
    },
  },
};
</script>

<style scoped>
/* html {
  background: #add9e6;
}

.form-options {
  background: #f0807f;
} */

.form-color select {
  display: flex;
  vertical-align: middle;
  height: 30px;
  display: grid;
}

.circle {
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
#app {
  font-family: Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 150px;
  /* background: #add9e6; */
}

input {
  width: 300px;
  border: 1px solid #d454c3;
}

select {
  width: 300px;
  border: 1px solid #d454c3;
}
</style>
