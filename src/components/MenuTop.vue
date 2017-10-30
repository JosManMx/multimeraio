<template>
  <nav class="menu-top">
    <a href="/">Dashboard</a>
    <a href="/">Register</a>
    <a href="/hello">{{mnj}} World</a>
  </nav>
</template>

<script>
export default {
  name: 'menu',
  data() {
    return {
      mnj: 'Hello',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu-top {
  padding: 0.5rem;
  background-color: lightgrey;
  text-align: right;
}
</style>
