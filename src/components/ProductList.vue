<template>
  <div class="product-list">
    <div class="container">
      <div class="row">
        <div
          class="col-md-6 col-lg-4 my-3"
          v-for="product in products"
          :key="product.id"
        >
          <div class="card h-100 card-box">
            <div class="images-container">
              <img
                :src="product.src"
                class="card-img-top image-product"
                alt="..."
              />
            </div>
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">
                {{ product.description }}
              </p>
              <div>
                <div v-if="product.clearance === true">
                  <p class="card-text product-price">
                    <img
                      src="../assets/coupon.png"
                      class="img-fluid image-discount mr-2"
                      alt="..."
                    />
                    ${{
                      parseInt(
                        product.price * (1 - product.discount / 100)
                      ).toLocaleString("de-DE")
                    }}
                  </p>
                  <p class="card-text product-price-without-clearance pb-3">
                    Precio Original: ${{
                      product.price.toLocaleString("de-DE")
                    }}
                    | {{ product.discount }}% Off
                  </p>
                </div>
                <div v-else>
                  <p class="card-text product-price">
                    ${{ product.price.toLocaleString("de-DE") }}
                  </p>
                </div>
              </div>
              <button
                type="button"
                class="align-self-end btn btn-lg btn-block btn-grad"
                style="margin-top: auto"
                @click="addToShoppingCart(product)"
              >
                Añadir al Carro
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  props: {
    products: { type: Array, require: true },
  },
  methods: {
    addToShoppingCart(product) {
      console.log("submit addToShoppingCart");
      this.$store.dispatch("addProductToShoppingCart", product);
    },
  },
};
</script>

<style scoped>
.images-container {
  display: flex;
  text-align: center;
  justify-content: center;
}

.image-product {
  width: 90%;
}

.product-price {
  font-weight: bold;
  font-size: 26px;
}

.card-box {
  transition: box-shadow 0.3s;
  border-radius: 10px;
  border: 1px solid #ccc;
  background: #fff;
  float: left;
  border-color: #d454c3;
}
.card-box:hover {
  box-shadow: 0 0 10px rgba(8, 59, 158, 0.5);
}

.btn-grad {
  background-image: linear-gradient(
    to right,
    #1fa2ff 0%,
    #12d8fa 51%,
    #1fa2ff 100%
  );
}
.btn-grad {
  text-align: center;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
}

.btn-grad:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
  background-image: linear-gradient(
    to right,
    #d454c3 0%,
    #f391e6 51%,
    #d454c3 100%
  );
}

.image-discount {
  height: 40px;
}
</style>
