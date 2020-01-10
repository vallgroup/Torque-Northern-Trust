<?php

require_once( get_template_directory() . '/api/responses/torque-api-responses-class.php');
require_once( get_template_directory() . '/includes/validation/torque-validation-class.php');

require_once( TQNT_API_ROOT . 'controllers/northern-trust-child-object-controller-class.php');

class TQNT_Resting_State_Controller extends TQNT_Object_Controller {

	public static function get_resting_state_args() {
    return TQNT_Object_Controller::get_object_args();
	}

	function __construct( $request ) {
		parent::__construct($request);
	}

	public function get_resting_state() {
		try {
			$resting_state = $this->get_resting_state_data();

			if ( $resting_state ) {
        return Torque_API_Responses::Success_Response( array(
					'resting_state' => $resting_state
        ) );
			}

			return Torque_API_Responses::Failure_Response( array(
				'message' => 'no resting state content was found.'
			) );

		} catch (Exception $e) {
			return Torque_API_Responses::Error_Response( $e );
		}
	}

	private function get_resting_state_data() {
		
		$_resting_state = array();
		$background_images = get_field('background_images', 'option');

		if ( $background_images ) {
			$_resting_state['background_images'] = $background_images;
		}

		if ( sizeof($_resting_state) > 0 ) {
			return $_resting_state;
		} else {
			return false;
		}
	}
}
