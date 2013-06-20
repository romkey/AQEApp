/*
 * Google's docs at http://developer.chrome.com/trunk/extensions/sandboxingEval.html
 * the parent (enclosing) page sends a 'render' message which we catch; we do the render
 * with the supplied context and then send the results back in another message
 *
 * underscore: http://underscorejs.org/#template
 */

/*
 * handle the message
 *
 * the enclosing page sends us a message with an object with the following attributes:
 *    cmd        must be 'render'
 *    context    any variables to be interpolated into the template
 *    template_id DOM ID for a template - either this or just
 *    template   string to use as a template
 *    settings   optional, template settings passed to underscore.js
 *    request_id render request ID - we just pass this back with the response
 *
 * we respond with a message with an object with the following attributes:
 *    request_id render ID from the request
 *    status     either 'ok' or 'error'
 *    result     either the result of the render or an error message
 *
 */
var RenderServer = {
    init: function() {
	$( window ).on( 'message', function( e ) { RenderServer.renderMsg( e ); } );
	$( 'body' ).append( 'init done' );
    },

    renderMsg: function( e ) {
	$( 'body' ).append( 'got msg' );

	console.log( e );

	var data = e.originalEvent.data;
	console.log( 'render data' );
	console.log( data.context );

	switch( data.cmd ) {
	case 'render':
	    var status = 'ok';
	    var result;
	    var template = data.template;

	    if( typeof data.template_id == 'undefined' && typeof data.template == 'undefined' ) {
		status = 'error';
		result = 'No template or template ID given';
	    } else {
		try {
		    $( 'body' ).append( '<pre>template is ' + $( '#' + data.template_id ).html() + '</pre>' );
		    $( 'body' ).append( 'template_id is ' + data.template_id );
		    $( 'body' ).append( JSON.stringify( data.context ) );
//		    result = _.template( $( '#' + data.template_id ).html(), data.context );
		    result = _.template( $( '#' + data.template_id ).html(), { name: 'foo', description: 'bar' } );
		    $( 'body' ).append( '<pre>render result ' + result + '</pre>' );
		} catch( e ) {
		    status = 'error';
		    result = 'render exception: ' + e.message;
		}
	    }

            e.originalEvent.source.postMessage( {
		cmd: 'render-results',
		id: data.id,
		status: status,
		result: result
            }, '*' );
	}
    }
}

// catch the message
$( document ).ready( function() { RenderServer.init(); } );


