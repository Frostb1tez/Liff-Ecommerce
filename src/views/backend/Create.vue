<template>
  <div class="q-pa-md">
    <h4>Add Products</h4>
    <q-card>
      <q-card-section>
        <q-form
        @submit.prevent="onSubmit"
        class="q-gutter-md"
        >
        <div class="row">
          <div class="col-xs-6 col-sm-6 col-md-1">
            <q-input
            filled
            v-model="product_id"
            label="ID *"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
            />
          </div>
          <div class="col-xs-6 col-sm-6 col-md-4">
            <q-input
            filled
            v-model="product_name"
            label="NAME *"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
            />
          </div>
          <div class="col-xs-6 col-sm-6 col-md-3">
            <q-select
            filled
            v-model="product_type"
            :options="options"
            label="TYPE " />
          </div>
          <div class="col-xs-6 col-sm-6 col-md-2">
            <q-input
            filled
            v-model="product_price"
            label="PRICE *"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
            />
          </div>
          <div class="col-xs-12 col-sm-12 col-md-2">
            <q-input
            filled
            v-model="product_stock"
            label="AMOUNT *"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
            />
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6">
            <q-input
            filled
            type="textarea"
            v-model="product_detail"
            label="ITEM DETAILS *"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
            />
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6">
            <q-input
            filled
            type="textarea"
            v-model="product_image"
            label="IMAGE *"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
            />
          </div>
          <div class="col-xs-12 col-sm-12 col-md-12">
            <q-btn label="Submit" type="submit" color="primary"/>
          </div>
        </div>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
import db from '@/config/index'
export default {
  name: 'Index',
  data () {
    return {
      product_id: '',
      product_name: '',
      product_price: '',
      product_type: '',
      product_image: '',
      product_stock: '',
      product_detail: '',
      options: [
        'Hoegaarden', 'Stella Artois'
      ]
    }
  },
  methods: {
    onSubmit () {
      db.collection('product').doc(this.product_id).set({
        product_id: this.product_id,
        product_name: this.product_name,
        product_type: this.product_type,
        product_price: this.product_price,
        product_image: this.product_image,
        product_detail: this.product_detail,
        product_stock: this.product_stock
      })
        .then(response => {
          this.$q.dialog({
            title: 'Success',
            message: 'Create Item Success'
          }).onOk(() => {
            this.$router.push('/index/index')
          }).onCancel(() => {
            this.$router.push('/index/index')
          }).onDismiss(() => {
            console.log('I am triggered on both OK and Cancel')
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
<style>
.q-field--filled .q-field__control{
  margin-right: 10px
}
.q-card__section {
  margin-bottom: 3%;
}
</style>
