<?php

define( 'TQNT_API_ROOT', dirname(__FILE__) . '/' );

require_once( TQNT_API_ROOT . 'routes/northern-trust-child-routes-class.php');

/**
* The plugin API class
*/
class TQNT_REST_Controller {

  private $namespace;

  public function __construct() {
    $this->namespace = 'northern-trust/v1/';

    // add API endpoints
		add_action( 'rest_api_init', array( $this, 'register_routes' ) );
  }

  // Register our routes.
  public function register_routes() {

    $routes = new TQNT_Routes( $this->namespace );
    $routes->register_routes();
  }
}

?>
