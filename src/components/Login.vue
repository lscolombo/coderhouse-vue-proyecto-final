<template>
  <v-container>
    <v-form lazy-validation v-model="valid">
      <v-text-field
        v-model="email"
        label="Email"
        :rules="emailRules"
        required
      ></v-text-field>

      <v-text-field
        type="password"
        v-model="password"
        label="Contraseña"
        :rules="passwordRules"
        required
      ></v-text-field>

      <v-btn color="accent" class="mr-4" @click="login" :disabled="!valid">
        Iniciar sesión
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      email: null,
      password: null,
      emailRules: [
        (v) => !!v || "El email es requerido",
        (v) => /.+@.+/.test(v) || "El email no es válido",
      ],
      passwordRules: [(v) => !!v || "La contraseña es requerida"],
    };
  },
  methods: {
    login: function () {
      console.log(`LOGIN: EMAIL ${this.email}, PASSWORD: ${this.password}`);
    },
    validate() {
      this.$refs.form.validate();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>