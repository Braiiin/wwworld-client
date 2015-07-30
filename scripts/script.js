$(document).ready(function() {

	/*
	 * Tabs controls and listeners
	 */

	/*
	 * Windows controls and listeners
	 */

	// Initialize existing window with synchronization
	function init_window_sync(id, selector, language) {
		var firepadRef = new Firebase('wwworld.firebaseio.com/firepads/'+id);  // New Firebase connection
		var codeMirror = CodeMirror($(selector).get()[0], {  // Create CodeMirror (with line numbers and the designated mode).
			lineNumbers: true,
			mode: language
		});
		var firepad = Firepad.fromCodeMirror(firepadRef, codeMirror, {  // Create Firepad.
			defaultText: '// JavaScript Editing with Firepad!\nfunction go() {\n  var message = "Hello, world.";\n  console.log(message);\n}'
		});
	}

	init_window_sync('instructor-html', '#instr-html', 'javascript');
	init_window_sync('student-html', '#stud-html', 'javascript');

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

	/*
	 * Code Editor manager
	 */

	// initialize existing element as code editor
	
});