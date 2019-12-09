<?php

require_once( get_template_directory() . '/api/responses/torque-api-responses-class.php');
require_once( get_template_directory() . '/includes/validation/torque-validation-class.php');

class TQNT_Portrait_Grid_Controller {

	public static function get_portrait_grid_args() {
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

	public function get_portrait_grid() {
		try {
			$portrait_grid = $this->get_portrait_grid_data();

			if ( $portrait_grid ) {
        return Torque_API_Responses::Success_Response( array(
					'grid' => $portrait_grid
        ) );
			}

			return Torque_API_Responses::Failure_Response( array(
				'message' => 'no portrait grid was found.'
			) );

		} catch (Exception $e) {
			return Torque_API_Responses::Error_Response( $e );
		}
	}

	private function get_portrait_grid_data() {
		$_grids = get_posts( array(
			'numberposts' => 1,
			'post_type' => TQNT_Portrait_Grid_CPT::$POST_TYPE,
			'name' => strip_tags( $this->params['slug'] ),
		) );

		if ( $_grids ) {
			$_grid = $_grids[0];
		} else {
			return false;
		}

		return array(
			'id' => $_grid->ID,
			'title' => $_grid->post_title,
			'portraits' => get_field( 'portraits', $_grid->ID ),
		);
	}
}
