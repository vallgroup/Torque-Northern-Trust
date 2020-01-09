<?php

require_once( get_template_directory() . '/api/permissions/torque-api-permissions-class.php');

require_once( TQNT_API_ROOT . 'controllers/northern-trust-child-portrait-grid-controller-class.php');
require_once( TQNT_API_ROOT . 'controllers/northern-trust-child-icon-grid-controller-class.php');
require_once( TQNT_API_ROOT . 'controllers/northern-trust-child-events-controller-class.php');
require_once( TQNT_API_ROOT . 'controllers/northern-trust-child-nav-controller-class.php');

class TQNT_Routes {

  private $namespace;

  public function __construct( $namespace ) {
    $this->namespace = $namespace;
  }

  public function register_routes() {
    // register portrait grid
    register_rest_route(
      $this->namespace,
      '/portrait-grid/(?P<slug>[a-zA-Z0-9-_]+)', // resource
      array( // Valid methods
  	  	array(
  	  		'methods'  => 'GET',
  	  		'callback' => array( $this, 'get_portrait_grid' ),
  	  		'args'     => TQNT_Portrait_Grid_Controller::get_portrait_grid_args(),
  	  	),
  	  )
    );

    // register icon grid
    register_rest_route(
      $this->namespace,
      '/icon-grid/(?P<slug>[a-zA-Z0-9-_]+)', // resource
      array( // Valid methods
  	  	array(
  	  		'methods'  => 'GET',
  	  		'callback' => array( $this, 'get_icon_grid' ),
  	  		'args'     => TQNT_Icon_Grid_Controller::get_icon_grid_args(),
  	  	),
  	  )
    );

    // register event
    register_rest_route(
      $this->namespace,
      '/event/(?P<slug>[a-zA-Z0-9-_]+)', // resource
      array( // Valid methods
  	  	array(
  	  		'methods'  => 'GET',
  	  		'callback' => array( $this, 'get_event' ),
  	  		'args'     => TQNT_Events_Controller::get_event_args(),
  	  	),
  	  )
    );
    // get all available events
    register_rest_route(
      $this->namespace,
      '/events', // resource
      array( // Valid methods
  	  	array(
  	  		'methods'  => 'GET',
  	  		'callback' => array( $this, 'get_events' ),
  	  	),
  	  )
    );

    // register nav
    register_rest_route(
      $this->namespace,
      '/nav/(?P<slug>[a-zA-Z0-9-_]+)', // resource
      array( // Valid methods
  	  	array(
  	  		'methods'  => 'GET',
  	  		'callback' => array( $this, 'get_nav' ),
  	  		'args'     => TQNT_Nav_Controller::get_nav_args(),
  	  	),
  	  )
    );
    //
    register_rest_route(
      $this->namespace,
      '/navs-available', // resource
      array( // Valid methods
  	  	array(
  	  		'methods'  => 'GET',
  	  		'callback' => array( $this, 'get_navs_avail' ),
  	  	),
  	  )
    );
  }

  public function get_portrait_grid( $request ) {
    $page_controller = new TQNT_Portrait_Grid_Controller( $request );
    return $page_controller->get_portrait_grid();
  }

  public function get_icon_grid( $request ) {
    $page_controller = new TQNT_Icon_Grid_Controller( $request );
    return $page_controller->get_icon_grid();
  }

  public function get_event( $request ) {
    $page_controller = new TQNT_Events_Controller( $request );
    return $page_controller->get_event();
  }

  public function get_events( $request ) {
    $page_controller = new TQNT_Events_Controller( $request );
    return $page_controller->get_events();
  }

  public function get_nav( $request ) {
    $page_controller = new TQNT_Nav_Controller( $request );
    return $page_controller->get_nav();
  }

  public function get_navs_avail( $request ) {
    $page_controller = new TQNT_Nav_Controller( $request );
    return $page_controller->get_navs_avail();
  }
}

?>
