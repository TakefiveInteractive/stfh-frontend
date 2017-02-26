<template>
  <div class="col-md-offset-7 col-md-4 get-a-room"
       v-if="$route.params.id == 'undefined'">
    <h1>
      Go get a room
      &nbsp;
      <i class="glyphicon glyphicon-menu-up"></i>
    </h1>
  </div>
    <div class="col-sm-12 left-big" v-else>
      <section class="big">
        
      </section>
      <section>
        
      </section>
      <section>
        
      </section>
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

<style lang="scss" scoped>
.get-a-room {
  h1 {
    text-align: right;
  }
  .glyphicon {
    animation: upw 2s ease-out infinite;
  }
  @keyframes upw {
      from {
        transform: translateY(30px);
        opacity: .3;
      }
      to {
        transform: translateY(-10px);
      }
  }
}

div.left-big {
  section {
    width: 47.5%;
    margin-left: 5%;
    margin-bottom: 5%;
    height: 42.5vh;

    background: #111;
    border-radius: 10px;

    float: left;

    &.big {
      margin-left: 0;

      clear: left;
      height: 90vh;
      background: #222;
    }
  }

  margin-bottom: 10vh;
}
</style>
