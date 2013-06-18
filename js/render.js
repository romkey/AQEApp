/*
 * call the sandboxed rendering engine
 *
 * options:
 *    id            id associated with this 
 *    template_id   DOM ID of template
 *    template      template string
 *    settings      options for rendering engine
 *    context       context for rendering
 *    success       callback( id, results )
 *    failure       callback( id, message )
 *
 */
var Renderer = {
    callbacks: {},

    init: function() {
	window.addEventListener( "message", Renderer.response, false );
    },

    render: function( options ) {
	var renderer = $( '#renderer' );
	var msg = {
	    cmd: 'render',
	
	};

	renderer.contentWindow.postMessage( msg, '*' );
    },

    response: function( e ) {
	if( e.data.cmd == 'render-results' ) {
	    
	}
    }
};

