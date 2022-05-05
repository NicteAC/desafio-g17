<template>
  <div id="shopping-cart">
    <ShoppingCartComponent></ShoppingCartComponent>
  </div>
</template>

<script>
import ShoppingCartComponent from "../components/ShoppingCart.vue";
export default {
  name: "ShoppingCartView",
  components: { ShoppingCartComponent },
};
</script>

<style>
#shopping-cart {
  margin-top: 100px;
}
</style>
