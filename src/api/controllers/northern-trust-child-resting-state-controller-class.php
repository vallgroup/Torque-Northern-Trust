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

			do_action( 'tqnt_update_twitter_feed' );

			if ( $resting_state ) {
        return Torque_API_Responses::Success_Response( array(
					'resting_state' => $resting_state
        ) );
			}

		} catch (Exception $e) {
			return Torque_API_Responses::Error_Response( $e );
		}
	}

	private function get_resting_state_data() {

		$_resting_state = array();

		$_resting_state['background_images'] = get_field('background_images', 'option');

		$_resting_state['content'] = get_field('content', 'option');

		$_resting_state['weather'] = get_field('weather', 'option');

		$_resting_state['feed'] = get_field('feed', 'option');

		return $_resting_state;
	}

	private function get_background_images() {
		$background_images = get_field('background_images', 'option');

		if ( $background_images ) {
			return $background_images;
		} else {
			return false;
		}
	}

	private function get_Content() {
		$content = get_field('content', 'option');

		if ( $content ) {
			return $content;
		} else {
			return false;
		}
	}
}
