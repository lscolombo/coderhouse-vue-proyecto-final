<template>
  <v-container>
    <v-row>
      <v-btn depressed color="white" @click="$router.push('/list')">
        <v-icon left dark> mdi-arrow-left </v-icon>
      </v-btn>
    </v-row>
    <v-row>
      <v-col>
        <v-img :src="product.image">
          <template v-slot:placeholder>
            <v-row
              class="placeholder fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular
                indeterminate
                color="grey darken-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
      <v-col>
        <h1>{{ product.title }}</h1>
        <p>{{ product.long_description }}</p>
        <b>${{ product.price }}</b>

        <v-container>
          <v-btn
            dark
            v-if="cart.indexOf(product)"
            @click="addToCart"
            color="accent"
          >
            Agregar al carrito
            <v-icon right dark> mdi-cart-plus </v-icon>
          </v-btn>
          <v-btn @click="removeFromCart" v-else>
            Eliminar del carrito
            <v-icon right dark> mdi-cart-minus </v-icon>
          </v-btn>
        </v-container>
      </v-col>
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