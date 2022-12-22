<template>
    <div id="app">

      <router-view></router-view>
      <TabBar v-if="isShowNav == true"></TabBar>
    </div>
</template>

<script setup>
import { watch ,ref} from 'vue'
import {useRoute} from 'vue-router'
import TabBar from './components/TabBar.vue'

let route = useRoute();
let isShowNav = ref(false)

watch(route, newVal => {
  isShowNav.value = newVal.meta.isShowNav;
},
{immediate:true})
</script>

<style>
</style>