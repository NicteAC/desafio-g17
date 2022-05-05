<template>
  <div>
    <div class="container text-right search-bar mb-3">
      <!-- <input
        type="text"
        placeholder="Escriba el nombre del producto / Descripción / Categoría (NBA; MLB; Populares / Color"
        style="width: 500px"
        class="search-product my-4"
        :value="$store.state.search"
        @input="$store.dispatch('setSearch', $event.target.value)"
      /> -->

      <form>
        <input
          class="form-control"
          type="search"
          placeholder="Buscar por producto / descripción / categoría"
          aria-label="Search"
          :value="$store.state.search"
          @input="$store.dispatch('setSearch', $event.target.value)"
        />
      </form>
    </div>
    <!-- <button :value="$store.state.search">Ofertas</button> -->
    <div>
      <div v-if="$store.getters.searchedProducts.length > 0">
        <ProductList
          v-if="$store.getters.searchedProducts.length > 0"
          :products="$store.getters.searchedProducts"
        ></ProductList>
      </div>
      <div v-else>
        <div class="product-not-found my-5">Ups! Nada por aquí</div>
        <div>
          <img
            src="../assets/pulp-fiction-john-travolta.gif"
            alt=""
            class="img-fluid"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductList from "../components/ProductList.vue";
export default {
  name: "Products",
  components: { ProductList },
};
</script>

<style scoped>
.container {
  margin-top: 75px;
}

.search-bar {
  margin-top: 100px;
}

form {
  margin-top: 100px;
}

input {
  border: 1px solid #d454c3;
}

.product-not-found {
  font-size: 24px;
  font-weight: bold;
}
</style>
