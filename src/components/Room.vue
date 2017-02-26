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
      <tt>
        {{path || 'no file is loaded'}}
      </tt>
      <editor
        :editorContent="editorContent"
        :editorLang="editorLang"></editor>
    </section>
    <section>
      <file-tree :data="treeData"></file-tree>
    </section>
    <section>

    </section>
  </div>
</template>

<script>
import Editor from './Editor.vue'
import FileTree from './FileTree.vue'
import io from 'socket.io-client'


const s = io('http://stfh.rocks')
const socketActionCallbacks = {
  'file:content:refresh' : function ({content}) {
    this.editorContent = content
  },
  'editor:insert' : function ({}) {

  },
  'editor:delete' : function ({selection}) {

  },
}
const socketHandlers = {
  'file:switch' : function ({path}) {
    console.log(`got file switch ${path}`)
    this.path = path
    this.fire('file:content:refresh', {path, roomId : this.roomId})
  }
}


export default {
  name: 'room',
  data () {
    return {
      socketActionCallbacks,
      uid : null,
      path : null,
      treeData : [{
        name: 'build',
        children: [{}]
      },{
        name: 'config',
        children: [{}]
      },{
        name: 'node_modules',
        children: [{}]
      }, {
        name: 'src',
        children: [
          { name: 'hello.js' },
          { name: 'wat.ts' },
          { name: 'wat2.ts' },
          { name: 'wat3.ts' },
          { name: 'wat3.css' },
          {
            name: 'child folder',
            children: [
              {
                name: 'child folder',
                children: [
                  { name: 'hello' },
                  { name: 'wat' }
                ]
              },
              { name: 'hello' },
              { name: 'wat' },
              {
                name: 'child folder',
                children: [
                  { name: 'hello' },
                  { name: 'wat' }
                ]
              }
            ]
          }
        ]
      }],
      editorContent : '',
      editorLang : '',
    }
  },
  components: {
    Editor, FileTree
  },
  computed : {
    roomId : function () {
      return this.$route.path.replace('/room/', '')
    }
  },
  mounted () {
    const vm = this
    this.$nextTick(function () {
      this.ready()
    })
  },
  watch: {
    '$route': 'ready'
  },
  methods: {
    fire: function(actionName, payload) {
      console.log(`fire ${actionName}`)
      const cb = this.socketActionCallbacks[actionName]
      if (!cb)
        return
      s.emit(actionName, payload, cb.bind(this))
    },
    ready: function() {
      console.log('loading')
      const roomId = this.roomId,
            nickname = 'wobaba',
            vm = this
      Object.keys(socketHandlers).forEach(k =>
        s.on(k, socketHandlers[k].bind(vm)))
      s.emit('viewer:connect', {
        roomId, nickname
      }, function(data) {
        this.uid = data.userId
      })
    }
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
  font-size: 20px;

  section {
    width: 47.5%;
    margin-left: 5%;
    margin-bottom: 5%;
    height: 42.5vh;

    background: rgb(33, 37, 43);
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
