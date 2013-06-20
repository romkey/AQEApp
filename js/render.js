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
    iframe: {},

    init: function() {
	window.addEventListener( "message", Renderer.response, false );

	Renderer.iframe = document.getElementById('templates');
    },

    render: function( options ) {
	var renderer = $( '#renderer' );
	var msg = {
	    cmd: 'render',
	    id: options.id,
	    settings: options.settings,
	    context: options.context
	};

	if( options.template ) {
	    msg.template = options.template;
	}

	if( options.template_id ) {
	    msg.template_id = options.template_id;
	}

	Renderer.callbacks[ options.id ] = {};
	Renderer.callbacks[ options.id ].success = options.success;
	Renderer.callbacks[ options.id ].failure = options.failure;

	Renderer.iframe.contentWindow.postMessage( msg, '*' );
    },

    response: function( e ) {
	if( e.data.cmd == 'render-results' ) {
	    if( e.data.status == 'ok' ) {
		Renderer.callbacks[ e.data.id ].success( e.data.result );
	    } else {
		Renderer.callbacks[ e.data.id ].failure( e.data.result );
	    }

	    // get rid of the callback
	    delete Renderer.callbacks[ e.data.id ];
	}
    }
};

$( document).ready( function() { Renderer.init(); } );

