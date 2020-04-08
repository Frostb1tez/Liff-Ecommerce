<template>
  <div>
    <Topbar></Topbar>
    <div class="q-pa-md" v-if="this.$store.state.cart.product.length == 0">
      <Header title="ตะกร้าสินค้า"></Header>
      <p class="header">
          ไม่มีสินค้าในตะกร้า
      </p>
    </div>
    <div v-else>
      <div class="q-pa-md">
        <Header title="ตะกร้าสินค้า"></Header>
        <div class="row">
          <q-btn rounded color="red" icon="delete_forever" label="ลบสินค้า" @click="delcart"/>
        </div>
        <q-card>
          <div class="row" v-for="(product, index) in this.$store.state.cart.product" :key="index">
          <div class="col-xs-4">
            <q-img :src = product.product_image
              :ratio = "1"
            />
          </div>
          <div class="col-xs-4">
            <p class="fontheader">{{product.product_name}}</p>
            <div class="quantity">
              <button @click="decrement(index)">&mdash;</button>
              <q-input outlined v-model="product.product_amount" type="number" readonly>
              </q-input>
              <button @click="increment(index)">&#xff0b;</button>
            </div>
          </div>
          <div class="col-xs-4">
            <p class="fontheader">Total:</p>
            <p class="fontheader">{{Number(product.product_price*product.product_amount).toLocaleString()+" THB"}} </p>
            <p>{{"( "+ Number(product.product_price).toLocaleString() + " THB per Unit )"}}</p>
          </div>
          <q-separator inset style="margin-top:5%; margin-bottom:5%" />
        </div>
        <div class="row">
          <div class="col">
            <p class="fontheader">Total Price</p>
          </div>
          <div class="col">
            <p class="fontheader" style="color:green;">{{ Number(this.$store.state.cart.totalPrice).toLocaleString()+" THB" }}</p>
          </div>
        </div>
        </q-card>
      </div>
      <q-btn-group spread>
        <q-btn color="green" @click='confirmcart' label="ยืนยันตะกร้าสินค้า" icon="shopping_cart" />
      </q-btn-group>
    </div>
  </div>
</template>

<script>
import Topbar from '@/components/Topbar.vue'
import Header from '@/components/Header.vue'
export default {
  data () {
    return {
      // product: this.$store.state.cart.product
    }
  },
  components: {
    Topbar, Header
  },
  methods: {
    delcart () {
      this.$q.loading.show()
      this.$axios.post('/clearcart', {
        userid: this.$store.state.userId
      })
        .then((response) => {
          this.$store.dispatch('getcartActions')
          this.$q.loading.hide()
        })
        .catch(err => {
          console.log(err)
          alert('Network Error')
        })
    },
    increment (index) {
      this.$store.commit('increment', index)
    },
    decrement (index) {
      if (this.$store.state.cart.product[index].product_amount === 1) {
        alert('สินค้าต้องไม่น้อยกว่า 1')
      } else {
        this.$store.commit('decrement', index)
      }
    },
    confirmcart () {
      this.$q.loading.show()
      this.$axios.post('/confirmcart', {
        userid: this.$store.state.userId,
        cart: this.$store.state.cart
      })
        .then((res) => {
          this.$q.loading.hide()
          this.$router.push({ path: `/confirmcart` })
          // this.
        })
        .catch(e => {
          console.log(e)
        })
    }
  }
}
</script>

<style scoped>
.header{
    margin-top: 50%;
    font-size: 50px;
    text-align: center;
    font-weight: normal;
}
button.q-btn {
  float: right;
}
button {
    padding: .5rem;
    background: #f5f5f5;
    color: #888;
    font-size: 1rem;
    cursor: pointer;
}
.quantity{
    display: flex;
}
.q-field {
    font-size: 20px;
}
.q-card {
    margin-top: 5%;
    box-shadow: 0 4px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(50,50,50,.14), 0 1px 15px 2px rgba(0,0,0,0.12);
    padding-top: 10%;
}
</style>
