<template>
  <ul class="footer">
      <li><router-link :to="{ path: '/'}">{{footer1}}</router-link></li>
      <li><router-link :to="{ path: '/classify'}">{{footer2}}</router-link></li>
      <li><router-link :to="{ path: '/special'}">{{footer3}}</router-link></li>
  </ul>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
      footer1: 'home',
      footer2: 'classify',
      footer3: 'special',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.footer{
  float:left;
}
</style>
