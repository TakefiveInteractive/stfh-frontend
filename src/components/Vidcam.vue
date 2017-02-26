<template>
  {{roomId}}
  <video autoplay="true"></video>
</template>

<script>
export default {
  name: 'vidcam',
  props: ['roomId'],
  data () {
    return {}
  },
  mounted () {
    const roomId = this.roomId;
    this.$nextTick(function () {
      var peer = new Peer({ host: 'stfh.rocks', path: '/peer', port: '80', debug: 3 })
      var video = document.querySelector('video')

      peer.on('connection', function (conn) {
        console.log('On connection', conn)
      })

      peer.on('open', function (id) {
        console.log('My ID ', id)

        var peerId = roomId
        console.log('peerID', peerId)
        var conn = peer.connect(peerId)
      })

      peer.on('call', function (call) {
        console.log('on call', call)

        call.answer()

        call.on('stream', function (stream) {
          video.src = URL.createObjectURL(stream)
        })

      })
    })
  }
}

</script>

<style lang="scss" scoped>

</style>
