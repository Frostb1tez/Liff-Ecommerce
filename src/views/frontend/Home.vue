<template>
  <div class="q-pa-md">
    <Header title="สมัครใช้งาน"></Header>
      <q-form
      @submit="onSubmit"
      class="q-gutter-md"
    >
       <q-input
        filled
        v-model="phone"
        label="กรุณากรอกเบอร์โทรศัพท์"
        mask="(###) ### - ####"
        unmasked-value
        lazy-rules
        :rules="[
          val => val && val.length > 0 || 'กรอกสะไอหนู',
          val => val && val.length >= 9 || 'โปรดกรอกให้ครบถ้วน',
        ]"
      />
        <div>
        <q-btn label="ส่งเบอร์โทรศัพท์" type="ส่งเบอร์โทรศัพท์" color="primary"/>
      </div>
    </q-form>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  components: {
    Header
  },
  data () {
    return {
      phone: null,
      accept: false
    }
  },
  methods: {
    onSubmit () {
      this.$router.push('/confirmotp')
      console.log(this.phone)
    }
  }
}

</script>
<style scoped>
</style>
