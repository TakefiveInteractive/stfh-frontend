<template>
  <div>
    <h1 v-if="$route.params.id == 'undefined'">Go get a room</h1>
  </div>
</template>

<script>
export default {
  name: 'room',
  data () {
    return {}
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
