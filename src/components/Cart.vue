<template>
  <v-container class="cart-container">
    <v-col>
      <v-data-table
        hide-default-header
        hide-default-footer
        :headers="headers"
        :items="products"
        class="elevation-1"
      >
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon small class="mr-2" @click="addItem(item)"> mdi-plus </v-icon>
          <v-icon small @click="removeItem(item)"> mdi-minus </v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn color="primary" @click="initialize"> Reset </v-btn>
        </template>
      </v-data-table>
    </v-col>
  </v-container>
</template>
<script>
export default {
  props: {
    products: Array,
  },
  data() {
    return {
      headers: [
        { text: "Producto", value: "title", sortable: false, width: "10px", align: "left" },
        { text: "Cantidad", value: "quantity", sortable: false , width: "10px",  align: "left" },
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
  },
};
</script>

<style lang="scss" scoped>

</style>