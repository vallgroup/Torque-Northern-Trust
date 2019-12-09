<?php

require_once( get_template_directory() . '/api/responses/torque-api-responses-class.php');
require_once( get_template_directory() . '/includes/validation/torque-validation-class.php');

class TQNT_Icon_Grid_Controller {

	public static function get_icon_grid_args() {
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

	public function get_icon_grid() {
		try {
			$icon_grid = $this->get_icon_grid_data();

			if ( $icon_grid ) {
        return Torque_API_Responses::Success_Response( array(
					'grid' => $icon_grid
        ) );
			}

			return Torque_API_Responses::Failure_Response( array(
				'message' => 'no icon grid was found.'
			) );

		} catch (Exception $e) {
			return Torque_API_Responses::Error_Response( $e );
		}
	}

	private function get_icon_grid_data() {
		$_grids = get_posts( array(
			'numberposts' => 1,
			'post_type' => TQNT_Icon_Grid_CPT::$POST_TYPE,
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
			'tiles' => get_field( 'tiles', $_grid->ID ),
		);
	}
}
