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

	function __construct( $request ) {
		$this->request = $request;
		$this->params = $this->request->get_params();
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

	private function get_nav_data() {
		$_nav_items = wp_get_nav_menu_items( $this->params['slug'] );

		if ( $_nav_items ) {
			$_keep_params = array(
				'ID' => 'id',
				'post_title' => 'title',
				'post_name' => 'slug',
				'menu_order' => 'order',
				'object_id' => 'page_id',
			);

			$_formatted_nav_items = [];

			foreach (	$_nav_items as $nav_item ) {
				$_params_to_keep = [];
				foreach ($_keep_params as $key => $param ) {
					$_params_to_keep[$param] = $nav_item->{$key};
				}
				$_formatted_nav_items[] = $_params_to_keep;
			}

			return $_formatted_nav_items;
		} else {
			return false;
		}
	}
}
