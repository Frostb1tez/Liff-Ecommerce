<template>
  <div class="q-pa-md">
    <Header title="สมัครใช้งาน"></Header>
      <div v-if="inputphone">
        <q-form
        @submit.prevent="sendSMS"
        class="q-gutter-md"
        >
        <q-input
        filled
        v-model="phone"
        label="กรุณากรอกเบอร์โทรศัพท์"
        mask="(###) ### - ####"
        unmasked-value
        lazy-rules
        />
        <div>
        <q-btn :disable="disabled" id="sign-in-button" type="submit" color="primary">{{getSignInCodeButton.text}}</q-btn>
        </div>
        </q-form>
      </div>
      <div id="recaptcha-container"></div>
      <div v-if="inputOTP">
        <q-form
        @submit.prevent="verifyOtp"
        class="q-gutter-md"
        >
        <p class="text">กรุณาใส่รหัส OTP ที่ได้จาก SMS</p>
        <q-input
        filled
        v-model="otp"
        label="กรุณายืนยัน OTP"
        mask="######"
        />
        <div>
        <q-btn id="sign-in-button" type="submit" color="primary">{{getSignInCodeButton.text}}</q-btn>
        </div>
        </q-form>
      </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import firebase from 'firebase'
export default {
  components: {
    Header
  },
  data () {
    return {
      phone: '',
      disabled: false,
      inputphone: true,
      inputOTP: false,
      otp: '',
      getSignInCodeButton: {
        text: 'รับรหัส OTP'
      }
    }
  },
  methods: {
    onSubmit () {
      // this.$router.push('/confirmotp')
      console.log(this.phone)
    },
    sendSMS () {
      this.disabled = true
      this.getSignInCodeButton = {
        text: 'กำลังส่ง SMS ..'
      }
      let countryCode = '+66'
      let phoneNumber = countryCode + this.phone
      let appVerifier = this.appVerifier
      firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
          console.log(confirmationResult)
          window.confirmationResult = confirmationResult
          this.inputOTP = true
          this.inputphone = false
          this.getSignInCodeButton = {
            text: 'ยืนยัน OTP'
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    initReCaptcha () {
      setTimeout(() => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
          'size': 'invisible',
          'callback': function (response) {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            // ...
          },
          'expired-callback': function () {
            // Response expired. Ask user to solve reCAPTCHA again.
            // ...
          }
        })
        //
        this.appVerifier = window.recaptchaVerifier
      }, 1000)
    },
    verifyOtp () {
      let code = this.otp
      console.log(code)
      window.confirmationResult.confirm(code)
        .then((result) => {
          console.log(result)
          this.$router.push('/productlist')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.initReCaptcha()
  }
}
</script>
<style scoped>
</style>
