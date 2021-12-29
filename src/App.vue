<template>
  <v-app>
    <div id="app">
      <v-app-bar>
        <router-link v-if="currentUser && currentUser.role !== 'admin'" to="/list">Productos</router-link>
        <router-link v-if="currentUser && currentUser.role === 'admin'" to="/admin">Administración</router-link>
        <v-spacer></v-spacer>
        <router-link to="/cart">
          <!-- TODO Usar la cantidad de productos en el badge con Vuex -->
          <v-badge :content="totalItems" color="accent">
            <v-btn small>
              <v-icon> mdi-cart </v-icon>
            </v-btn>
          </v-badge>
        </router-link>
        <router-link v-if="!currentUser" to="/login">Iniciar sesión</router-link>
        <router-link v-if="!currentUser" to="/register">Registrarse</router-link>
        <router-link to="/login" v-if="currentUser">
          <span @click="logout">
          Cerrar sesión
          </span>
        </router-link>
      </v-app-bar>
      <router-view />
    </div>
  </v-app>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  },
    computed: {
    ...mapGetters(["totalItems", "currentUser"])
  }
}
</script>

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
