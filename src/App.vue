<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">Vegan vibes</div>

      <v-spacer></v-spacer>

      <v-btn text>
        <span class="mr-2">Login</span>
        <v-icon>mdi-key</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-tabs>
        <v-tab href="#login"> LOGIN </v-tab>
        <v-tab-item value="login">
          <Login />
        </v-tab-item>

        <v-tab href="#register"> REGISTRO </v-tab>
        <v-tab-item value="register">
          <Register />
        </v-tab-item>

        <v-tab href="#product-list"> LISTA DE PRODUCTOS </v-tab>
        <v-tab-item value="product-list">
          <ProductList :products="products" />
        </v-tab-item>

        <v-tab href="#product-detail"> DETALLE DE PRODUCTO </v-tab>
        <v-tab-item value="product-detail">
          <ProductDetail :product="products[0]" />
        </v-tab-item>

        <v-tab href="#cart"> CARRITO </v-tab>
        <v-tab-item value="cart">
          <Cart :products="cartProducts" />
        </v-tab-item>
      </v-tabs>
    </v-main>
  </v-app>
</template>

<script>
import Login from "./components/Login";
import Register from "./components/Register";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import mockData from "@/assets/mock_products.json";
import mockCart from "@/assets/mock_cart.json";

export default {
  name: "App",
  components: {
    Login,
    Register,
    ProductList,
    ProductDetail,
    Cart,
  },

  data: () => ({
    tab: null,
    products: mockData,
    cartProducts: mockCart,
  }),
};
</script>
