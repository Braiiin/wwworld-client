$(document).ready(function() {

	/*
	 * Tabs controls and listeners
	 */

	/*
	 * Windows controls and listeners
	 */

	// Initialize existing window with synchronization
	function init_window_sync(selector, language) {
		var firepadRef = new Firebase('wwworld.firebaseio.com');  // New Firebase connection
		var codeMirror = CodeMirror($(selector).get()[0], {  // Create CodeMirror (with line numbers and the JavaScript mode).
			lineNumbers: true,
			mode: language
		});
		var firepad = Firepad.fromCodeMirror(firepadRef, codeMirror, {  // Create Firepad.
			defaultText: '// JavaScript Editing with Firepad!\nfunction go() {\n  var message = "Hello, world.";\n  console.log(message);\n}'
		});
	}

	init_window_sync('#sync', 'javascript');

	/*
	 * Modal controls and listeners
	 */

	// Initialize existing modal
	function init_modal(selector) {
		$(selector).draggable({
			addClasses:false
		});
	}

	init_modal('#modal-container');
});