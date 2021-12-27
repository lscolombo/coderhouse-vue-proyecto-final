<template>
  <v-container class="cart-container">
    <v-col>
      <v-data-table
        hide-default-footer
        :headers="headers"
        :items="products"
        class="elevation-1"
      >
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon small class="mr-2" @click="addItem(item)"> mdi-plus </v-icon>
          <v-icon small @click="removeItem(item)"> mdi-minus </v-icon>
        </template>
        <template v-slot:[`item.subtotal`]="{ item }">
          <div>
            {{item.price * item.quantity}}
          </div>
        </template>
        <template v-slot:no-data>
          No tienes productos en el carrito.
        </template>
      </v-data-table>
    </v-col>
    <p>
      Total: ${{products.map((product) => product.price * product.quantity).reduce((a, b) => a + b, 0)}}
    </p>
    <v-btn @click="createOrder" :disabled="products.length === 0">Comprar</v-btn>

     <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5">
          ¡Orden recibida!
        </v-card-title>
        <v-card-text>Su orden se ha creado con ID <b>#{{orderId}}</b> </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Cerrar
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="$router.push('/list')"
          >
            Ver productos
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
  </v-container>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      dialog: false,
      orderId: null,
      products: [
        {title: "Fideos con manteca", quantity: 1, price: 20.0},
        {title: "Ravioles con manteca", quantity: 2, price: 30.0},
      ],
      headers: [
        { text: "Producto", value: "title", sortable: false, width: "10px", align: "left" },
        { text: "Cantidad", value: "quantity", sortable: false , width: "10px",  align: "left" },
        { text: "Precio", value: "price", sortable: false , width: "10px",  align: "left" },
        { text: "Subtotal", value: "subtotal", sortable: false , width: "10px",  align: "left" },
        { text: "", value: "actions", sortable: false, width: "10px",  align: "left"  },
      ],
    };
  },
  methods: {
    addItem: function (item) {
      item.quantity += 1;
    },
    removeItem: function (item) {
      if (item.quantity === 1) {
        let index = this.products.indexOf(item);
        this.products.splice(index, 1);
      } else {
        item.quantity -= 1;
      }
    },
    createOrder: function() {
      let body = {
        products: this.products,
        user: "user@mail.com",
      }
        axios.post("https://61b79ac764e4a10017d18bc1.mockapi.io/api/orders", body)
      .then((response) => {
        this.orderId = response.data.id;
        this.dialog = true;
        this.products = []
      })
      .catch((err) => {
        this.error = err;
        this.toggleSnackbar();
        })
    }
  },
};
</script>

<style lang="scss" scoped>

</style>