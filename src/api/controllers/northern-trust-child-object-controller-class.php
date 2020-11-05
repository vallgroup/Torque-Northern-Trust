<?php

require_once( get_template_directory() . '/api/responses/torque-api-responses-class.php');
require_once( get_template_directory() . '/includes/validation/torque-validation-class.php');

class TQNT_Object_Controller {

	public static function get_object_args() {
		return array(
			'slug' => array(
        'validate_callback' => array( 'Torque_Validation', 'string' ),
      ),
		);
	}

	protected $request = null;

	protected $params = array();

	function __construct( $request ) {
		$this->request = $request;
		$this->params = $this->request->get_params();
	}

	public function get_object( $post_type = '' ) {
    if ( '' === $post_type ) {
      return false;
    }

    $object = $this->get_object_data( $post_type );

    if ( $object ) {
      return $object;
    }

    return false;
	}

	protected function get_object_data( $post_type = '' ) {

    $_args = array(
			'numberposts' => 1,
			'post_type' => $post_type,
		);

    if ( is_numeric( $this->params['slug'] ) ) {
      // search by id if numeric
      $_args['include'] = [intval( $this->params['slug'] )];
    } else {
      // otherwise, use the slug
      $_args['name'] = strip_tags( $this->params['slug'] );
    }

		$_objects = get_posts( $_args );

		if ( $_objects ) {
			$_object = $_objects[0];
		} else {
			return false;
		}

		return array(
			'id' => $_object->ID,
			'title' => $_object->post_title,
		);
	}

	public function get_objects( $post_type = '' ) {
    if ( '' === $post_type ) {
      return false;
    }

    $objects = $this->get_objects_data( $post_type );

    if ( $objects ) {
      return $objects;
    }

    return false;
	}

	protected function get_objects_data( $post_type = '' ) {

    $_args = array(
			'post_type' => $post_type,
		);

		$_objects_query = get_posts( $_args );

		if ( $_objects_query ) {

			foreach ( $_objects_query as $_object ) {
				$_objects[] = array(
					'id' => $_object->ID,
					'title' => $_object->post_title,
				);
			}
		} else {
			return false;
		}

		return $_objects;
	}
}
