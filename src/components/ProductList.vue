<template>
  <div class="product-list">
    <v-flex
      cols="12"
      sm="3"
      md="4"
      v-for="product in products"
      :key="product.id"
    >
      <ProductCard :product="product" @productAdded="addProductToCart" @productRemoved="removeProductFromCart"/>
    </v-flex>
  </div>
</template>

<script>
import ProductCard from "./ProductCard";

export default {
  components: {
    ProductCard,
  },
  props: {
    products: Array
  },
  data() {
    return {
      cart: {}
    };
  },
  methods: {
      addProductToCart: function(productId) {
          this.cart[productId] = this.cart[productId] ? this.cart[productId]+=1 : 1
          console.log("Added product. CART: ", this.cart)
      },
      removeProductFromCart: function(productId) {
          this.cart[productId] = this.cart[productId] ? this.cart[productId]-=1 : 0
          console.log("Removed product. CART: ", this.cart)
      }
  },
};
</script>

<style lang="scss" scoped>
.product-list{
    display: flex;
    flex-direction: row;
    column-count: 3;
    flex-wrap: wrap;
}
</style>