<template>
  <div class="container shopping-cart">
    <table class="table table-bordered">
      <tbody>
        <tr v-for="(item, $index) in cartItems" :key="$index">
          <td class="td-item-img align-middle">
            <img :src="item.src" alt="" class="img-fluid" />
          </td>
          <td class="td-item-name align-middle">
            <h3>
              {{ item.name }}
            </h3>
            <p>{{ item.description }}</p>
            <div>
              <div v-if="item.clearance === true">
                <p class="card-text product-price">
                  <img
                    src="../assets/coupon.png"
                    class="img-fluid image-discount mr-2"
                    alt="..."
                  />
                  ${{
                    parseInt(
                      item.price * (1 - item.discount / 100)
                    ).toLocaleString("de-DE")
                  }}
                </p>
                <p class="card-text product-price-without-clearance pb-3">
                  Precio Original: ${{ item.price.toLocaleString("de-DE") }} |
                  {{ item.discount }}% Off
                </p>
              </div>
              <div v-else>
                <p class="card-text product-price">
                  ${{ item.price.toLocaleString("de-DE") }}
                </p>
              </div>
            </div>
          </td>
          <td class="td-item-quantity align-middle">
            <button
              class="btn change-quantity-button mr-2"
              @click="reduceItemQuantity($index)"
            >
              -</button
            >{{ item.quantity
            }}<button
              class="btn change-quantity-button ml-2"
              @click="increaseItemQuantity(item)"
            >
              +
            </button>
            <hr />
            <button class="btn-delete" @click="removeFromShoppingCart($index)">
              Eliminar
            </button>
          </td>
          <td class="td-item-price align-middle">
            <h5>Total Producto</h5>
            <h4 class="total-shopping-cart">
              ${{
                parseInt(
                  item.price * (1 - item.discount / 100) * item.quantity
                ).toLocaleString("de-DE")
              }}
            </h4>
          </td>
        </tr>
      </tbody>
    </table>

    <div>
      <div class="mt-5 text-right" v-if="$store.state.shoppingCart.length > 0">
        <h4 class="total">
          El total a pagar es: ${{
            parseInt($store.getters["totalAmountShoppingCart"]).toLocaleString(
              "de-DE"
            )
          }}
        </h4>
        <div v-if="$store.getters['totalDiscountShoppingCart'] > 0">
          <p class="product-quantity">
            Tienes
            {{ $store.getters.totalQuantityInShoppingCart }} productos en tu
            carro de compras
            <br />
            Estarías ahorrando ${{
              parseInt(
                $store.getters["totalDiscountShoppingCart"]
              ).toLocaleString("de-DE")
            }}
            en esta compra 😉
          </p>
        </div>
        <div v-else>
          <p class="product-quantity">
            Tienes
            {{ $store.getters.totalQuantityInShoppingCart }} productos en tu
            carro de compras
          </p>
        </div>
        <div class="container text-right">
          <button class="btn btn-outline-primary mt-3" @click="clickOnCheckout">
            Comprar 😃
          </button>
        </div>
      </div>

      <h4 class="mt-5" v-else>
        No tienes productos en tu carrito de compras actualmente
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingCartComponent",
  computed: {
    cartItems() {
      return this.$store.getters.productsOnShoppingCart;
    },
  },
  methods: {
    increaseItemQuantity(item) {
      console.log("submit increaseItemQuantity");
      this.$store.dispatch("addProductToShoppingCart", item);
    },

    reduceItemQuantity(index) {
      console.log("submit reduceItemQuantity");
      this.$store.dispatch("reduceProductQuantity", index);
    },

    removeFromShoppingCart(index) {
      this.$store.dispatch("removeProductFromShoppingCart", index);
    },

    async clickOnCheckout() {
      await this.$store.dispatch("clickOnCheckout");
      this.$router.push("/checkout");
    },
  },
};
</script>

<style>
.td-item-img {
  width: 20%;
}

.td-item-name {
  width: 30%;
}

.td-item-quantity {
  width: 25%;
  font-size: 20px;
}

.td-item-price {
  width: 25%;
}

.btn:hover {
  color: #ffbd59;
}

.change-quantity-button {
  border-radius: 25%;
  background-color: #1fa2ff;
  color: #ffffff;
  border-color: #d454c3;
  font-size: 16px;
}

.btn-delete {
  background-color: transparent;
  border-color: transparent;
  font-size: 14px;
  color: #5a5a5a;
  text-decoration: underline;
}

.btn-delete:hover {
  color: #d454c3;
}

.image-discount {
  height: 30px;
}

.product-price {
  font-weight: bold;
  font-size: 20px;
}

.total-shopping-cart {
  font-weight: bold;
}

.total {
  font-weight: bold;
}

.product-quantity {
  font-size: 14px;
  font-weight: normal;
}
</style>
