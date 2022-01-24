<template>
  <div>
    <div>
      <Login @loggedIn="loginUser" />
      <p>
        Si el usuario es administrador será redirigido al ABM de productos, de
        lo contrario, al listado de productos.
        Funciona cualquier contraseña.
      </p>
      <b> Usuario administrador: email: admin@mail.com</b>
      <br />
      <b> Usuario común: email: user@mail.com</b>
    </div>
    <v-snackbar v-model="snackbar" :timeout="timeout" :color="snackbarColor">
      {{ message }}

      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="toggleSnackbar"> Cerrar </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import Login from "../components/Login";
import axios from "axios";

export default {
  name: "LoginView",
  components: {
    Login,
  },
  data() {
    return {
      products: [],
      snackbar: false,
      timeout: 5000,
      message: "",
      snackbarColor: "error",
    };
  },
  methods: {
    toggleSnackbar: function () {
      this.snackbar = !this.snackbar;
    },
    loginUser: function (user) {
      axios
        .get("https://61b79ac764e4a10017d18bc1.mockapi.io/api/users", {
          params: user,
        })
        .then((response) => {
          if (response.data.length > 0) {
            this.message = "Éxito";
            this.snackbarColor = "success";
            this.$store.dispatch("login", response.data[0]);
            this.toggleSnackbar();

            let userRole = response.data[0].role;
            if (userRole == "admin") {
              this.$router.push("/admin");
            } else {
              this.$router.push("/");
            }
          } else {
            this.message = "Email o contraseña incorrectos.";
            this.snackbarColor = "error";
            this.toggleSnackbar();
          }
        })
        .catch((err) => {
          this.message = err;
          this.snackbarColor = "error";
          this.toggleSnackbar();
        });
    },
  },
};
</script>
