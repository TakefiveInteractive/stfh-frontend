<template>
  <video class="video" autoplay>
    <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4">
  </video>
</template>

<script>
export default {
  name: 'videoPlayer',
  components : {  },
  data () {
    return {}
  },
  methods: {

  }
}
</script>

<style scoped>
video {
  user-select: none;
  width: 100%;
  height: 100%;
}
</style>
