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

      <v-text-field
        type="password"
        v-model="passwordConfirmation"
        label="Repetir contraseña"
        :rules="[...passwordRules, ...passwordConfirmationRules]"
        required
      ></v-text-field>

      <v-btn color="accent" class="mr-4" @click="register" :disabled="!valid">
        Registrarse
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
      emailRules: [
        (v) => !!v || "El email es requerido",
        (v) => /.+@.+/.test(v) || "El email no es válido",
      ],
      password: null,
      passwordRules: [(v) => !!v || "La contraseña es requerida"],
      passwordConfirmation: null,
      passwordConfirmationRules: [
        (v) => !!v || "La contraseña es requerida",
        (v) => v === this.password || "Las contraseñas no coinciden",
      ],
    };
  },
  methods: {
    register: function () {
      console.log(`REGISTER: EMAIL ${this.email}, PASSWORD: ${this.password}`);
    },
    validate() {
      this.$refs.form.validate();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>