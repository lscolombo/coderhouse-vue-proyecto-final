<template>
  <v-app>
    <div id="app">
      <v-app-bar>
        <router-link to="/list">Productos</router-link>
        <v-spacer></v-spacer>
        <router-link to="/cart">
          <!-- TODO Usar la cantidad de productos en el badge con Vuex -->
          <v-badge content="6" color="accent">
            <v-btn small>
              <v-icon> mdi-cart </v-icon>
            </v-btn>
          </v-badge>
        </router-link>
        <router-link to="/login">Iniciar sesión</router-link>
        <router-link to="/register">Registrarse</router-link>
      </v-app-bar>
      <router-view />
    </div>
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding-left: inherit !important;
}
</style>
