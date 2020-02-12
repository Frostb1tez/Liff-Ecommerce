<template>
  <div class="q-pa-md">

    <q-card class="my-card" v-for="product in products" :key="product.product_id">
      <div @click="$router.push({ path: `/productdetail/${product.product_id}` })">
        <q-img :src = product.product_image
        :ratio = "1"
        />
        <q-card-section>
          <div class="text-h6">{{product.product_name}}</div>
          <div class="text-subtitle2" style="color:green;" v-if="product.product_stock !== '0'">{{Number(product.product_price).toLocaleString()+" THB"}}</div>
          <div class="text-subtitle2" style="color:red;" v-else>Out of Stock</div>
        </q-card-section>
      </div>
    </q-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      products: []
    }
  },
  mounted () {
    this.getProduct()
  },
  methods: {
    getProduct () {
      this.$axios.get('/getproduct')
        .then((response) => {
          this.products = response.data.data.product
          console.log(this.products)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
