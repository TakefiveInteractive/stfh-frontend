<template>
  <MonacoEditor
    :height="editorHeight()"
    :language="editorLang"
    :code="editorCode"
    :options="{
      readOnly : true,
      fontSize : 18,
      automaticLayout : true
    }"
    @mounted="editorMounted"
    @codeChange="() => {}"
    >
  </MonacoEditor>
</template>
<script>
import MonacoEditor from 'vue-monaco-editor'

export default {
  name: 'room',
  props: ['editorLang', 'editorCode', 'editorMounted'],
  data () {
    return { }
  },
  components: {
    MonacoEditor
  },
  methods: {
    editorHeight: function() {
      return window.outerHeight * 0.9;
      // 90vh
    }
  }
}
</script>