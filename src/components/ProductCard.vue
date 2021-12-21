<template>
  <v-container>
    <v-card class="product-card" max-width="344">
      <v-img :src="product.image" height="200px"></v-img>

      <v-card-title>
        {{ product.title }}
      </v-card-title>

      <v-card-subtitle>
        {{ product.description }}
      </v-card-subtitle>

      <v-card-text> ${{ product.price }} </v-card-text>
      <v-card-actions>
        <v-btn
          @click="$router.push(`/product/${product.id}`)"
          color="primary"
          text
        >
          Ver
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn v-if="quantity === 0" @click="addToCart" color="accent">
          Agregar al carrito
          <v-icon right dark> mdi-cart-plus </v-icon>
        </v-btn>
        <div v-else>
          {{ quantity }}
          <v-btn class="button" @click="addToCart" color="accent">+</v-btn>
          <v-btn class="button" @click="removeFromCart" color="accent">-</v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  data() {
    return {
      quantity: 0,
    };
  },
  methods: {
    addToCart: function () {
      this.quantity += 1;
      this.$emit("productAdded", this.product.id);
    },
    removeFromCart: function () {
      this.quantity -= 1;
      this.$emit("productRemoved", this.product.id);
    },
  },
};
</script>

<style scoped>
.button {
  margin-left: 0.5em;
  margin-right: 0.5em;
}
</style>