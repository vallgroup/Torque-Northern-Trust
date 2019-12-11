<?php

require_once( get_template_directory() . '/api/responses/torque-api-responses-class.php');
require_once( get_template_directory() . '/includes/validation/torque-validation-class.php');

require_once( TQNT_API_ROOT . 'controllers/northern-trust-child-object-controller-class.php');

class TQNT_Nav_Controller {

	public static function get_nav_args() {
		return array(
			'slug' => array(
        'validate_callback' => array( 'Torque_Validation', 'string' ),
      )
		);
	}

	protected $request = null;

	protected $params = array();

	// holds menu objects for menus created
	protected $nav_menus = array();

	// holds params to keep
	protected $keep_params = array(
		'ID' => 'id',
		'post_title' => 'title',
		'post_name' => 'slug',
		'post_status' => 'status',
		'post_type' => 'post_type',
	);

	function __construct( $request ) {
		$this->request = $request;
		$this->params = $this->request->get_params();

		$this->nav_menus = wp_get_nav_menus();
	}

	public function get_nav() {
		try {
			$nav = $this->get_nav_data();

			if ( $nav ) {
        return Torque_API_Responses::Success_Response( array(
					'nav' => $nav
        ) );
			}

			return Torque_API_Responses::Failure_Response( array(
				'message' => 'no nav was found.'
			) );

		} catch (Exception $e) {
			return Torque_API_Responses::Error_Response( $e );
		}
	}

	public function get_navs_avail() {
		return Torque_API_Responses::Success_Response( array(
			'navs' => $this->nav_menus
		) );
	}

	private function get_nav_data() {
		// get nav items based on slug provided
		$_nav_items = wp_get_nav_menu_items( $this->params['slug'] );
// var_dump($_nav_items);
		// if false, bail early
		if ( ! $_nav_items ) {
			return false;
		}

		$_formatted_nav_items = $this->build_nav_items( $_nav_items );

		return $_formatted_nav_items;
	}

	private function build_nav_items( $items = array() ) {
		$__items = [];
		foreach (	$items as $nav_item ) {
			$_item = get_post( $nav_item->object_id, 'object', 'db' );
			// var_dump($_item);
			$__items[] = $this->get_formatted_items( $_item );
		}
		return $__items;
	}

	private function get_formatted_items( $item = null ) {
		if ( ! $item ) return array();

		$formatted = [];
		foreach ( $this->keep_params as $key => $param ) {
			$formatted[ $param ] = $item->{$key};
		}
		return $formatted;
	}
}
