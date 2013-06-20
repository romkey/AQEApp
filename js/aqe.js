/*
 * depends on backbone.js
 */

$( function() {

var api_key = 'moWTPkq024jsxQGV0l9hCIFPQtsN3qFaMy5yxC86zgaOz3nx';


/***********************************************************************
 ***********************************************************************
 *
 * AQESensor
 *    represents an individual sensor on a specific egg
 *
 * attributes
 *    id
 *    value
 *    type
 *    firmware_version
 *    units
 */
var AQESensor = Backbone.Model.extend( {
    url: function() { return ''; },
} );

/***********************************************************************
 ***********************************************************************
 *
 * AQESensorList
 *    collection of all sensors on one egg
 *
 */
var AQESensorList = Backbone.Collection.extend( { 
    model: AQESensor,
    chromeStorage: new Backbone.ChromeStorage( "AirQualityEggList", "sync"),

    url: function() { return ''; },
} );

/***********************************************************************
 ***********************************************************************
 *
 * AQE
 *    one Air Quality Egg
 *
 * attributes:
 *    id
 *    location
 *    title
 *    description
 *    lastUpdated
 *    sensors
 *
 */
var AQE = Backbone.Model.extend( {
    chromeStorage: new Backbone.ChromeStorage( "AirQualityEgg", "sync"),

    url: function() { return ''; },

    initialize: function() {
	this.set( { url: 'https://api.xively.com/v2/feeds/' + this.get( 'id' ) + '.json',
		   sensors: new AQESensorList
		 } );
	console.log( 'init url ' + this.get( 'url' ) );
    },

    /*
     * update the current readings for this egg
     *
     * calls callback with AQEStatus object
     */
    update: function( callback ) {
	var egg = this;

	console.log( 'url ' + egg.get( 'url' ) );

	$.ajax( {
	    url: egg.get( 'url' ),
	    cache: false,
	    headers: { 'X-ApiKey': api_key },
	    dataType: 'json',
	    error: function( jqXHR, textStatus, errorThrown ) {
		console.log( 'error ' + textStatus + ' - ' + errorThrown );
	    },

	    success: function( data, textStatus, jqXHR ) {
		console.log( data );
		egg.set( { title: data.title,
			   description: data.description
			 } );
		egg.save();
	    }
	} );
    }    
} );

/***********************************************************************
 ***********************************************************************
 *
 * AQELIst
 *
 * list of all the eggs we monitor
 *
 */
var AQEList = Backbone.Collection.extend( {
    model: AQE
} );


/***********************************************************************
 ***********************************************************************
 *
 * 
 *
 *
 */
var AQEAppModel = Backbone.Model.extend( {
    chromeStorage: new Backbone.ChromeStorage( "AirQualityEggApp", "sync" ),

    initialize: function() {
	this.set( { eggs: new AQEList } );

	// bubble up changes from this.eggs
//	this.listenTo( this.eggs, 'change', function() { this.trigger( 'change' ); } );
    }
} );

var AQEAppView = Backbone.View.extend( {
    el: $( '#AQEApp' ),

    model: new AQEAppModel,

//    template: _.template( '#app_template' ),

    events: {
	'click #plus': 'show_create_form',
	'submit #egg_id_form': 'add_egg'
    },

    initialize: function() {
	$( '#egg_id_form' ).hide();
	this.listenTo( this.model, 'change', this.render );
    },

    render: function() {
	console.log( 'render' );
	$( '#egg-count' ).html( this.model.get( 'eggs' ).size() );
	console.log( 'attemping render' );
	console.log( this.model.get( 'eggs' ).first().attributes );
	Renderer.render( { id: 'egg',
			   template_id: 'egg',
//			   context: this.model.get( 'eggs' ).first().attributes,
			   context: { name: 'foo', description: 'bar' },
			   success: function( result ) { console.log( 'success ' + result ); },
			   failure: function( result ) { console.log( 'failure ' + result ); }
			 } );
    },


    show_create_form: function( e ) {
	e.preventDefault();
	$( '#egg_id_form' ).show();
	$( '#egg_id_form' ).on( 'submit', function( e ) { App.add_egg( e ); } );
	$( 'input[name="sensor_id"]' ).focus();
    },

    // given an ID, add an egg to the app
    add_egg: function( e ) {
	e.preventDefault();

	// don't really need this anymore
	$( '#egg_id_form' ).hide();

	// don't bother to validate the ID since we required it to be a number on the INPUT element
	var egg = new AQE( { id: $( 'input[name="sensor_id"]' ).val() } );
	this.model.get( 'eggs' ).add( [ egg ] );

	// go fetch
	egg.update();

	this.model.trigger( 'change' );
    }

} );

var App = new AQEAppView();

} );
