<template>
  <div class="q-pa-md">
    <Header title="สมัครใช้งาน"></Header>
    <p class="text">กรุณาใส่รหัส OTP ที่ได้จาก SMS (เลขอ้างอิง ABCDEF)</p>
    <q-input rounded outlined v-model="text" label="4512"/>
    <div class="col-12 col-md-8">
    <q-btn class="glossy" rounded color="primary" label="ส่งรหัสใหม่"/>
    <p class="text2">OTP จะถูกส่งไปยังโทรศัพท์ท่าน (รหัสมีอายุ5นาที)</p>
    <q-btn unelevated rounded color="primary" label="ยืนยัน OTP" />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  components: {
    Header
  }
}
</script>
<style scoped>
.text{
  font-size: 15px;
  color: #606161;
  font-family: RSU;
  padding: 30px;
}
.glossy{
  padding: 15px,0,0,0;
}
.text2{
  padding: 20px;
}
</style>
