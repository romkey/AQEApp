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
function renderMsg( e ) {
    switch( e.data.cmd ) {
    case 'render':
	var status = 'ok';
	var result;
	var template = e.data.template;

	if( typeof e.data.template_id == 'undefined' ) {
	    status = 'error';
	    result = 'No template or template ID given';
	} else {
	    try {
		result = _.template( $( e.data.template_id ), e.data.context );
	    } catch( e ) {
		status = 'error';
		result = e.message;
	    }
	}

        e.source.postMessage( {
	    cmd: 'render-results',
            id: e.data.id,
	    status: status,
            result: result
        } );
    }
};

// catch the message
$( window ).on( 'render', function( e ) { renderMsg( e ); } );
