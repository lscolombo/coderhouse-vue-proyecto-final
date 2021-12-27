<template>
  <v-container>
    <v-row>
      <v-btn depressed color="white" @click="$router.push('/list')">
        <v-icon left dark> mdi-arrow-left </v-icon>
      </v-btn>
    </v-row>
    <v-row>
      <v-col>
        <img :src="product.image" />
      </v-col>
      <v-col>
        <h3>{{ product.title }}</h3>
        <p>{{ product.long_description }}</p>
        <p>{{ product.price }}</p>
      </v-col>
    </v-row>

    <v-row>
      <v-btn
        v-if="cart.indexOf(product)"
        @click="addToCart"
        color="accent"
        text
      >
        Agregar al carrito
        <v-icon right dark> mdi-cart-plus </v-icon>
      </v-btn>
      <v-btn @click="removeFromCart" v-else>
        Eliminar del carrito
        <v-icon right dark> mdi-cart-minus </v-icon>
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  data() {
    return {
      cart: [],
    };
  },
  methods: {
    addToCart: function () {
      this.cart.push(this.product);
      console.log("Producto agregado al carrito. Carrito: ", this.cart);
    },
    removeFromCart: function () {
      this.cart.pop();
      console.log("Producto eliminado del carrito. Carrito: ", this.cart);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>