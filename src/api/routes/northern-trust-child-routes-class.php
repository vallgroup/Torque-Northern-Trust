<?php

require_once( get_template_directory() . '/api/permissions/torque-api-permissions-class.php');
require_once( TQNT_API_ROOT . 'controllers/northern-trust-child-portrait-grid-controller-class.php');

class TQNT_Routes {

  private $namespace;

  public function __construct( $namespace ) {
    $this->namespace = $namespace;
  }

  public function register_routes() {

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
  }

  public function get_portrait_grid( $request ) {
    $page_controller = new TQNT_Portrait_Grid_Controller( $request );
    return $page_controller->get_portrait_grid();
  }
}

?>
