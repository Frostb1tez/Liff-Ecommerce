<template>
  <div>
    <div class="q-pa-md">
      <q-img
      :src = products.product_image
      :ratio="1"
      />
      <h4 style="text-align:left;">{{products.product_name}}</h4>
      <div class="text-h5" style="color:green; text-align:left;" v-if="products.product_stock !== '0'">
        {{Number(products.product_price).toLocaleString()+" THB"}}</div>
      <div class="text-h5" style="color:red; text-align:left;" v-else>Out of Stock</div>
      <p class="text-body2 text-weight-medium" style="text-align:left;">{{products.product_detail}}</p>
    </div>
    <q-btn-group spread v-if="products.product_stock !== '0'">
      <q-btn color="orange" label="ซื้อทันที" icon="timeline" />
      <q-btn color="green" @click="addtoCart()" label="เพิ่มลงตะกร้าสินค้า" icon="visibility" />
    </q-btn-group>
  </div>
</template>

<script>
export default {
  name: 'ProductDetail',
  data () {
    return {
      products: {}
    }
  },
  props: ['id'],
  template: 'ProductDetail {{id}}',
  created () {
    this.getProductDetail()
  },
  methods: {
    getProductDetail () {
      this.$axios.get('/getproduct/' + this.id)
        .then(response => {
          this.products = response.data.data.product
          console.log(this.products)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addtoCart () {
      alert('Success')
    }
  }
}
</script>

<style scoped>
</style>
