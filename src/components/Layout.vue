<template>
  <div>
    <q-layout view="lHh Lpr lFf">
        <q-header elevated class="glossy">
        <q-toolbar>
            <q-btn
            flat
            dense
            round
            @click="leftDrawerOpen = !leftDrawerOpen"
            aria-label="Menu"
            icon="menu"
            />

            <q-toolbar-title>
            Backend Mode
            </q-toolbar-title>

        </q-toolbar>
        </q-header>

        <q-drawer
        v-model="leftDrawerOpen"
        bordered
        content-class="bg-grey-2"
        >
        <q-list>
            <q-item-label header>Menu</q-item-label>
            <q-item clickable tag="a" target="_blank" @click="$router.push({ path: `/index/index` })">
            <q-item-section avatar>
                <q-icon name="school" />
            </q-item-section>
            <q-item-section>
                <q-item-label>Index</q-item-label>
                <q-item-label caption>Data Table</q-item-label>
            </q-item-section>
            </q-item>
            <q-item clickable tag="a" target="_blank" @click="$router.push({ path: `/index/create` })">
            <q-item-section avatar>
                <q-icon name="forum" />
            </q-item-section>
            <q-item-section>
                <q-item-label>Create</q-item-label>
                <q-item-label caption>Create Product</q-item-label>
            </q-item-section>
            </q-item>
        </q-list>
        </q-drawer>

        <q-page-container>
          <router-view />
        </q-page-container>
    </q-layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  }
}
</script>

<style scoped>
</style>
