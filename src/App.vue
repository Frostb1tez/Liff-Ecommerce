<template>
  <div id='app'>
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<script>

export default {
  async beforeCreate () {
    if (!this.$liff.isLoggedIn()) {
      this.$liff.login()
    }
    const profile = await this.$liff.getProfile()
    const tokenId = profile.userId
    this.$store.commit('getToken', tokenId)
    this.$store.dispatch('getinfoActions')
    this.$store.dispatch('getcartActions')
  }
}
</script>

<style>
#app{
  text-align: center;
  font-family: 'RSU';
}
</style>
