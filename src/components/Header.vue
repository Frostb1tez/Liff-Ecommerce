<template>
  <div class="q-pa-md">
    <div class="header">
      <h3 class="fontheader">{{title}}</h3>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  props: {
    title: String
  }
}
</script>
<style scoped>
.header{
  padding-bottom: 0%;
  border-bottom: 2px solid gray;
}
.fontheader{
    font-size: 22px;
    font-weight: bold;
    text-align: left;
    margin: 0px;
}
</style>>
