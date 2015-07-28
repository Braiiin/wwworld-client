$(document).ready(function() {

	function init(selector) {
		// New Firebase connection
		var firepadRef = new Firebase('wwworld.firebaseio.com');
		
		// Create CodeMirror (with line numbers and the JavaScript mode).
		var codeMirror = CodeMirror(document.getElementById(selector), {
			lineNumbers: true,
			mode: 'javascript'
		});

		// Create Firepad.
		var firepad = Firepad.fromCodeMirror(firepadRef, codeMirror, {
			defaultText: '// JavaScript Editing with Firepad!\nfunction go() {\n  var message = "Hello, world.";\n  console.log(message);\n}'
		});
	}

	init('sync');
});