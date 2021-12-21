<template>
  <div>
    <v-overlay :absolute="absolute" :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>

    <v-container>
      <ProductList :products="products" />
      <v-snackbar v-model="snackbar" :timeout="timeout" color="error">
        {{ error }}

        <template v-slot:action="{ attrs }">
          <v-btn text v-bind="attrs" @click="toggleSnackbar"> Cerrar </v-btn>
        </template>
      </v-snackbar>
    </v-container>
  </div>
</template>

<script>
import ProductList from "../components/ProductList.vue";
import axios from "axios";

export default {
  name: "ProductListView",
  components: {
    ProductList,
  },
  data() {
    return {
      overlay: true,
      products: [],
      snackbar: false,
      timeout: 5000,
      error: "",
    };
  },
  methods: {
    toggleSnackbar: function () {
      this.snackbar = !this.snackbar;
    },
    getProducts: function () {
      axios
        .get("https://61b79ac764e4a10017d18bc1.mockapi.io/api/products")
        .then((response) => {
          this.products = response.data;
          this.overlay = !this.overlay;
        })
        .catch((err) => {
          this.error = err;
          this.toggleSnackbar();
        });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
