<template>
  <div id="editor"></div>
</template>
<script>

import * as ace from 'brace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';

export default {
  name: 'room',
  props: ['editorLang', 'editorContent', 'editorMounted'],
  data () {
    return {
      editor : null
    }
  },
  watch: {
    editorContent : function(content) {
      this.editor.setValue(content)
      this.editor.clearSelection()
    }
  },
  mounted () {
    const vm = this
    this.$nextTick(function () {
      const editor = ace.edit('editor')
      editor.getSession().setMode('ace/mode/javascript')
      editor.setTheme('ace/theme/monokai')
      editor.setReadOnly(true)



      vm.editor = editor
    })
  },
  methods: {
    editorHeight: function() {
      return window.outerHeight * 0.9;
      // 90vh
    }
  }
}
</script>

<style type="text/css">
  #editor {
    height: 100%;
  }
</style>