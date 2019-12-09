<?php

require_once( get_template_directory() . '/api/responses/torque-api-responses-class.php');
require_once( get_template_directory() . '/includes/validation/torque-validation-class.php');

require_once( TQNT_API_ROOT . 'controllers/northern-trust-child-object-controller-class.php');

class TQNT_Events_Controller extends TQNT_Object_Controller {

	public static function get_event_args() {
    return TQNT_Object_Controller::get_object_args();
	}

	function __construct( $request ) {
		parent::__construct($request);
	}

	public function get_event() {
		try {
			$event = $this->get_event_data();

			if ( $event ) {
        return Torque_API_Responses::Success_Response( array(
					'event' => $event
        ) );
			}

			return Torque_API_Responses::Failure_Response( array(
				'message' => 'no event was found.'
			) );

		} catch (Exception $e) {
			return Torque_API_Responses::Error_Response( $e );
		}
	}

	private function get_event_data() {
		$_event = $this->get_object( TQNT_Events_CPT::$POST_TYPE );

		if ( $_event ) {
      $_event['start_date'] = get_field( 'start_date', $_event['id'] );
      $_event['presentation'] = get_field( 'presentation', $_event['id'] );
      $_event['agenda'] = get_field( 'agenda', $_event['id'] );
		} else {
			return false;
		}

		return $_event;
	}
}
