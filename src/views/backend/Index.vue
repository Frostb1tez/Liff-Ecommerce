<template>
  <div class="q-mt-md">
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-left">ID</th>
          <th class="text-right">Name</th>
          <th class="text-right">Type</th>
          <th class="text-right">Price</th>
          <th class="text-right">Stock</th>
          <th class="text-right">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td class="text-left">{{product.id}}</td>
          <td class="text-right">{{product.product_name}}</td>
          <td class="text-right">{{product.product_type}}</td>
          <td class="text-right">{{product.product_price}}</td>
          <td class="text-right">{{product.product_stock}}</td>
          <td class="text-right">
            <a href="#" >
              <i @click="onEdit(product)" class="material-icons">edit</i>
            </a>
            <a href="#">
              <i @click="onDelete(product.id)" class="material-icons">delete</i>
            </a>
            <!-- <router-link
              :to="{
              name:'ProductPage',
              params:{id: product.id}
              }"
            >
            <i class="material-icons">visibility</i>
            </router-link> -->
          </td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<script>
import db from '@/config/index'
export default {
  name: 'Index',
  data () {
    return {
      products: []
    }
  },
  created () {
    this.getProduct()
  },
  methods: {
    getProduct () {
      db.collection('product').get().then(querySnapshot => {
        const products = []
        const productsArray = []
        let i = 0
        querySnapshot.forEach(doc => {
          productsArray.push(doc.data())
          productsArray[i].id = doc.id
          products.push(productsArray[i])
          i++
        })
        this.products = products
      })
    },
    onDelete (id) {
      db.collection('product').doc(id).delete()
        .then(response => {
          this.getProduct()
        })
    }
  }
}
</script>

<style scoped>

</style>
