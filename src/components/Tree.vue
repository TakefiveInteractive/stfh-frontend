<template>
  <li :class="{
    'file-icon' : !isFolder,
    'folder-icon' : isFolder,
    'open' : isFolder && open,
    'selected' : model.selected
  }">
    <span
      @click="toggle">
      {{model.name}}
    </span>
    <ul v-show="open"
        v-if="isFolder">
      <tree
        class="item"
        v-for="model in model.children"
        :model="model">
      </tree>
    </ul>
  </li>
</template>

<script>

export default {
  name: 'tree',
  props: {
    model: Object,
    selected: Boolean,
  },
  data: function () {
    return {
      open: false
    }
  },
  computed: {
    isFolder: function () {
      return this.model.children &&
        this.model.children.length
    }
  },
  methods: {
    toggle: function () {
      if (this.isFolder) {
        this.open = !this.open
      }
    },
    changeType: function () {
      if (!this.isFolder) {
        Vue.set(this.model, 'children', [])
        this.addChild()
        this.open = true
      }
    },
  }
}
</script>

<style scoped>
.item {
  cursor: pointer;
}
ul {
  padding-left: 1em;
  line-height: 1.5em;
}
li {
  margin-top: .05em;
}
* {
  color: white;
  user-select: none;
  font-family: 'BlinkMacSystemFont', 'Lucida Grande', 'Segoe UI', Ubuntu, Cantarell, sans-serif;
  font-size: 15px;
}
/*
  http://fa2png.io/

  feather folder
*/
.folder-icon {
  list-style-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAMAAAAMCGV4AAAAPFBMVEUAAAD////////////////////////////////////////////////////////////////////////////YSWgTAAAAE3RSTlMAAQIDBggXKTVVY21wosHV6fP9JPU10QAAAElJREFUCJmtxzcSgDAQBMHRnvCe/f9fSYSogpTOGt76bd/XVKuza9tllCQBZAPNYds+h3KSJKlxlBfOvz8cteGAyY8ZIPIt+LgAwU4DyxamXE4AAAAASUVORK5CYII=);
}
.open {
  list-style-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAMAAAAMCGV4AAAAUVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////8IN+deAAAAGnRSTlMAAQQHCA8TJyguM0RVV1xvfoyvtNHV3OTv8/CtrikAAABVSURBVAgdhcFJAoIwEEXBFwJEQWUSG//9D0ovmmyp4k4xyQqVZchGJdwmZwUnLtlwohJO8NwV/m/EsGZC+0P9tyGkraC94zK/wEZC+izAwxSOKXHrBE/kBTveDyshAAAAAElFTkSuQmCC);
}
/*
  fa-file-text-o
*/
.file-icon {
  list-style-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAMAAAAMCGV4AAAAP1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////9Du/pqAAAAFHRSTlMAAQIGISdPWFtdXnh5hYyovMDr89ce2e8AAABNSURBVAhbpck3DoBAFMRQ/yHnNPc/K8UCKyQ63D0ZFqf2BgBcSJLmehuSBcBUxjy+DF2b3dv2nk1IhZMjIiJAlw/bdvX477/79Orcygm1LQYWRLnbOgAAAABJRU5ErkJggg==);
}
</style>