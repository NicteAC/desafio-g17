import Vue from "vue";
import Vuex from "vuex";
import products from "./products.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    search: "",
    shoppingCart: [],
    products,
  },
  getters: {
    searchedProducts(state) {
      if (state.search === "") {
        return state.products;
      } else {
        return state.products.filter(
          (product) =>
            product.name.toLowerCase().includes(state.search.toLowerCase()) ||
            product.description
              .toLowerCase()
              .includes(state.search.toLowerCase()) ||
            product.color.toLowerCase().includes(state.search.toLowerCase()) ||
            product.category.toLowerCase().includes(state.search.toLowerCase())
        );
      }
    },

    searchProductByClearance(state) {
      return state.products.filter((product) => product.clearance === true);
    },

    productsOnShoppingCart(state) {
      return state.shoppingCart.map((item) => {
        const product = state.products.find(
          (product) => product.name === item.name
        );
        return {
          name: product.name,
          description: product.description,
          price: product.price,
          discount: product.discount,
          clearance: product.clearance,
          src: product.src,
          quantity: item.quantity,
        };
      });
    },

    totalAmountShoppingCart(state) {
      return state.shoppingCart.reduce((accumulator, item) => {
        accumulator =
          accumulator + item.price * (1 - item.discount / 100) * item.quantity;
        return accumulator;
      }, 0);
    },

    totalQuantityInShoppingCart(state) {
      return state.shoppingCart.reduce((accumulator, item) => {
        accumulator = accumulator + item.quantity;
        return accumulator;
      }, 0);
    },

    totalDiscountShoppingCart(state) {
      return state.shoppingCart.reduce((accumulator, item) => {
        accumulator =
          accumulator +
          (item.price * item.quantity -
            item.price * (1 - item.discount / 100) * item.quantity);
        return accumulator;
      }, 0);
    },
  },
  mutations: {
    SET_SEARCH(state, newSearch) {
      state.search = newSearch;
    },

    ADD_PRODUCT_TO_PRODUCT_LIST(state, newProduct) {
      state.products.push(newProduct);
    },

    ADD_PRODUCT_TO_SHOPPING_CART(state, product) {
      state.shoppingCart.push({ ...product, quantity: 1 });
    },

    INCREMENT_PRODUCT_QUANTITY(state, productAlreadyInShoppinCart) {
      productAlreadyInShoppinCart.quantity++;
    },

    REDUCE_PRODUCT_QUANTITY(state, index) {
      state.shoppingCart[index].quantity--;
    },

    REMOVE_PRODUCT_FROM_SHOPPING_CART(state, index) {
      state.shoppingCart.splice(index, 1);
    },
    CLEAR_SHOPPING_CART(state) {
      state.shoppingCart = [];
    },
  },
  actions: {
    setSearch(context, newSearch) {
      context.commit("SET_SEARCH", newSearch);
    },

    addProductToProductList(context, newProduct) {
      context.commit("ADD_PRODUCT_TO_PRODUCT_LIST", { ...newProduct });
    },

    addProductToShoppingCart(context, product) {
      const productAlreadyInShoppinCart = context.state.shoppingCart.find(
        (productAlreadyInShoppinCart) =>
          (product.name && product.description) ===
          (productAlreadyInShoppinCart.name &&
            productAlreadyInShoppinCart.description)
      );

      if (productAlreadyInShoppinCart) {
        context.commit(
          "INCREMENT_PRODUCT_QUANTITY",
          productAlreadyInShoppinCart
        );
      } else {
        context.commit("ADD_PRODUCT_TO_SHOPPING_CART", product);
      }
    },

    reduceProductQuantity(context, index) {
      if (context.state.shoppingCart[index].quantity > 1) {
        context.commit("REDUCE_PRODUCT_QUANTITY", index);
      } else {
        context.commit("REMOVE_PRODUCT_FROM_SHOPPING_CART", index);
      }
    },
    removeProductFromShoppingCart(context, index) {
      const productIndex = context.state.shoppingCart[index];
      context.commit("REMOVE_PRODUCT_FROM_SHOPPING_CART", productIndex);
    },

    clickOnCheckout(context) {
      return new Promise((resolve) => {
        setTimeout(() => {
          context.commit("CLEAR_SHOPPING_CART");
          resolve();
        }, 1000);
      });
    },
  },
  modules: {},
});
