<template>
  <div id="app">
    <MenuTop/>
    <router-view/>
  </div>
</template>

<script>
import MenuTop from '@/components/MenuTop';

export default {
  name: 'app',
  components: {
    MenuTop,
  },
};
</script>

<style>
body {
  margin: 0;
}
</style>
