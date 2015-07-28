var firepadRef = new Firebase('wwworld.firebaseio.com');
var codeMirror = CodeMirror($('.sync').get(), { lineWrapping: false });
var firepad = Firepad.fromCodeMirror(firepadRef, codeMirror,
      { richTextShortcuts: false, richTextToolbar: false, defaultText: 'Hello, World!' });