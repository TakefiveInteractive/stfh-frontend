<template>
  <div id="app" class="col-md-10 col-md-offset-1">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#/about">
            STFH &nbsp;&nbsp;
            <i>Stream the Fucking Hack</i>
          </a>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <li :class="{'active' : isRoute('get')}">
              <a href="#/get">
                Get
              </a>
            </li>
            <li :class="{'active' : isRoute('about')}">
              <a href="#/about">
                About
              </a>
            </li>
            <li :class="{'active' : isRoute('room')}">
              <a :href="`#/room/${lastRoom}`">
                Room&nbsp;&nbsp;
                <code v-if="isRoute('room') || lastRoom.length">
                  {{ lastRoom }}
                </code>
              </a>
            </li>
            <form class="navbar-form navbar-left" v-on:submit="handleGotoSubmit">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="goto" v-model="idInput">
              </div>
            </form>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
    <div class="body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  created : function () {
    if (this.$route.name == 'room')
      this.lastRoom = this.$route.path.replace('/room/', '')
  },
  methods : {
    'handleGotoSubmit' : function (e) {
      this.$router.push({ name: 'room', params: {
        'id': this.idInput
      }})
      this.lastRoom = this.idInput
      this.idInput = ''
    }, 
    'isRoute' : function (name) {
      return this.$route.name == name
    },
  },
  data : function () {
    return {
      idInput : '' ,
      lastRoom : ''
    }
  }
}
</script>

<style lang="scss">
body {
  background: #333;
}
#app {
  color: #ccc;

  margin-top: 30px;
  & > .body {
    font-size: 1.6em;
    padding-top: 30px;
  }
}
nav {
  .navbar-brand > i {
    color: #ddd;
    font-size: .8em;
  }
  code {
    background: #444;
    color: #eee;
  }
  form input[type=text] {
    max-width: 10em;

    background-color: #1a242f;
    color: #fff;
    border-color: transparent;
    &:hover {
      border-color: #fff;
    }
  }
}
</style>
