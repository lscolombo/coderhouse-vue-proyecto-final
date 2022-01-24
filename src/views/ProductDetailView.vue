<template>
<v-container>

    <div v-if="product == null">
      <p>Producto no encontrado.</p>
      <v-btn @click="$router.push('/')">Volver a productos</v-btn>
    </div>
    <div v-else>

    <ProductDetail :product="product" />
    </div>
</v-container>
</template>

<script>
import ProductDetail from "../components/ProductDetail";
import axios from "axios";

export default {
  components: {
    ProductDetail,
  },
  data() {
    return {
      product: null,
      message: "",
      snackbar: false,
      timeout: 10000,
      snackbarColor: "error",
    };
  },
  methods: {
    toggleSnackbar() {
      this.snackbar = !this.snackbar;
    },
    getProductById(id) {
      axios
        .get("https://61b79ac764e4a10017d18bc1.mockapi.io/api/products/" + id)
        .then((response) => (this.product = response.data))
        .catch((err) => {
          this.message = err;
          this.snackbarColor = "error";
          this.toggleSnackbar();
        });
    },
  },
  mounted() {
    this.getProductById(this.$route.params.id);
  },
};
</script>

<style lang="scss" scoped>
</style>