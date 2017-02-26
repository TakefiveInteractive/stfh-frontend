<template>
<div class="wrap">
  <ul>
    <tree
      v-for="d in data"
      class="item"
      :model="d"
      :selected="false">
    </tree>
  </ul>
</div>
</template>

<script>
import Tree from './tree.vue'

export default {
  name: 'fileTree',
  props: ['data'],
  components : { Tree },
  data () {
    return {}
  },
  methods: {

  }
}
</script>
<style type="text/css">
.wrap {
  padding: 20px 10px;
  height: 100%;
  overflow-y: scroll;
}
</style>