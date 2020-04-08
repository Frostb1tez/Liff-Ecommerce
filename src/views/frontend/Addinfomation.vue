<template>
  <div>
    <div class="q-pa-md">
      <Header title = "รายละเอียดการจัดส่ง"></Header>
      <form @submit.prevent="saveAddress">
        <div class="row">
          <div class="col-xs-6">
            <q-input outlined rounded v-model="name.firstname" label="ชื่อ" :rules="firstnameRule"/>
          </div>
          <div class="col-xs-6">
            <q-input outlined rounded v-model="name.lastname" label="นามสกุล" :rules="lastnameRule" />
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12">
            <q-input outlined rounded v-model="address" label="ที่อยู่" type="textarea" :rules="addressRule"/>
          </div>
        </div>
        <q-btn rounded type="submit" color="primary" style="width:50%;margin-top:7%">บันทึก</q-btn>
      </form>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  data () {
    return {
      name: {
        firstname: '',
        lastname: ''
      },
      address: '',
      firstnameRule: [
        v => !!v || 'กรุณากรอกชื่อ'
      ],
      lastnameRule: [
        v => !!v || 'กรุณากรอกนามสกุล'
      ],
      addressRule: [
        v => !!v || 'กรุณากรอกที่อยู่'
      ]
    }
  },
  components: {
    Header
  },
  methods: {
    saveAddress () {
      this.$q.loading.show()
      this.$axios.post('/addinfo', {
        userid: this.$store.state.userId,
        name: this.name,
        address: this.address
      })
        .then((response) => {
          if (response.data.status === 200) {
            this.$q.loading.hide()
            this.$router.push('/product')
          }
        })
        .catch(err => {
          console.log(err)
          alert('Network Error')
          this.$q.loading.hide()
        })
    }
  }
}
</script>

<style scoped>
.q-field--outlined {
    padding: 0 5px;
}
.row {
  margin-top: 5%;
}
</style>
