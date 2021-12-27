<template lang="html">

    <v-data-table :items="foods" :headers="headers">
           <template v-slot:item.actions="{ item }">

      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    </v-data-table> 

</template>

<script lang="js">

  export default  {
    name: 'ProductTable',
    components: {
    },
    props: {
        foods: Array,
    },
    data() {
        return {
            headers: [
                { text: 'Título', value: 'title' },
                { text: 'Descripción', value: 'description' },
                { text: 'Descripción larga', value: 'long_description' },
                { text: 'Precio', value: 'price' },
                { text: 'Eliminar', value: 'actions', sortable: false },
            ]
        }
    },
    methods: {
        deleteItem(item) {
            this.$emit('itemDeleted', item)
        }
    }
}
</script>
