<template>
  <v-app>
    <div id="app">
      <v-app-bar
        prominent
        shrink-on-scroll
        src="@/assets/app-bar-image.jpg"
        fade-img-on-scroll
        color="primary"
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(0, 88, 111, 0.7), rgba(0,0,0,.7)"
          ></v-img>
        </template>
        <v-app-bar-title>
          <router-link class="router" to="/list">Productos</router-link>
        </v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn class="router-btn" text>
          <router-link class="router" to="/cart">
            <!-- TODO Usar la cantidad de productos en el badge con Vuex -->
            <v-badge content="6" color="accent">
              <v-icon> mdi-cart </v-icon>
            </v-badge>
          </router-link>
        </v-btn>
        <v-btn class="router-btn" text>
          <router-link class="router" to="/login">Iniciar sesión</router-link>
        </v-btn>
        <v-btn class="router-btn" text>
          <router-link class="router" to="/register">Registrarse</router-link>
        </v-btn>
      </v-app-bar>
      <v-sheet
        class="overflow-y-auto"
        max-height="600"
      >
        <router-view />
      </v-sheet>
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
html {
  overflow: hidden !important;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.router {
  color: white !important;
}
.router-btn {
  margin-top: 0.8em;
}
</style>
