<?php
/**
* the portrait grid cpt
 */
class TQNT_Portrait_Grid_CPT {

  public static $POST_TYPE = 'portrait_grid';

  protected $args = array(
    'supports' => array( 'title', ),
    'menu_icon'           => 'dashicons-screenoptions',
    'public' => true,
    'show_ui' => true,
    'show_in_nav_menus' => true,
    // 'show_in_rest'        => true,
    // more args here
  );

  private $cpt = null;

  function __construct() {
    if ( class_exists( 'PremiseCPT' ) ) {
      $this->cpt = new PremiseCPT( self::$POST_TYPE, $this->args );
      // add metaboxes needed from ACF
      add_action('acf/init', array( $this, 'add_acf_metaboxes' ) );
    }
  }


  public function add_acf_metaboxes() {
    //
    if( function_exists('acf_add_local_field_group') ):

    acf_add_local_field_group(array(
    	'key' => 'group_5dec53d368a39',
    	'title' => 'Portrait Grid',
    	'fields' => array(
    		array(
    			'key' => 'field_5dec53ddef517',
    			'label' => 'Portraits',
    			'name' => 'portraits',
    			'type' => 'repeater',
    			'instructions' => 'Add the portraits that you would like to appear on this grid.',
    			'required' => 0,
    			'conditional_logic' => 0,
    			'wrapper' => array(
    				'width' => '',
    				'class' => '',
    				'id' => '',
    			),
    			'collapsed' => '',
    			'min' => 0,
    			'max' => 23,
    			'layout' => 'block',
    			'button_label' => 'Add Portrait',
    			'sub_fields' => array(
    				array(
    					'key' => 'field_5dec5453c7ab1',
    					'label' => 'Name',
    					'name' => 'name',
    					'type' => 'text',
    					'instructions' => '',
    					'required' => 0,
    					'conditional_logic' => 0,
    					'wrapper' => array(
    						'width' => '',
    						'class' => '',
    						'id' => '',
    					),
    					'default_value' => '',
    					'placeholder' => 'Kim Navarro',
    					'prepend' => '',
    					'append' => '',
    					'maxlength' => '',
    				),
    				array(
    					'key' => 'field_5dec54c5c7ab3',
    					'label' => 'Date Started',
    					'name' => 'date_started',
    					'type' => 'date_picker',
    					'instructions' => '',
    					'required' => 0,
    					'conditional_logic' => 0,
    					'wrapper' => array(
    						'width' => '50',
    						'class' => '',
    						'id' => '',
    					),
    					'display_format' => 'd/m/Y',
    					'return_format' => 'd/m/Y',
    					'first_day' => 1,
    				),
    				array(
    					'key' => 'field_5dec550cc7ab4',
    					'label' => 'Department',
    					'name' => 'department',
    					'type' => 'text',
    					'instructions' => '',
    					'required' => 0,
    					'conditional_logic' => 0,
    					'wrapper' => array(
    						'width' => '50',
    						'class' => '',
    						'id' => '',
    					),
    					'default_value' => '',
    					'placeholder' => 'Accounts',
    					'prepend' => '',
    					'append' => '',
    					'maxlength' => '',
    				),
    				array(
    					'key' => 'field_5dec548bc7ab2',
    					'label' => 'Photo',
    					'name' => 'photo',
    					'type' => 'image',
    					'instructions' => '',
    					'required' => 0,
    					'conditional_logic' => 0,
    					'wrapper' => array(
    						'width' => '50',
    						'class' => '',
    						'id' => '',
    					),
    					'return_format' => 'array',
    					'preview_size' => 'thumbnail',
    					'library' => 'all',
    					'min_width' => 1024,
    					'min_height' => '',
    					'min_size' => '',
    					'max_width' => '',
    					'max_height' => '',
    					'max_size' => '',
    					'mime_types' => '',
    				),
    				array(
    					'key' => 'field_5dec5527c7ab5',
    					'label' => 'Tagline',
    					'name' => 'tagline',
    					'type' => 'textarea',
    					'instructions' => '',
    					'required' => 0,
    					'conditional_logic' => 0,
    					'wrapper' => array(
    						'width' => '50',
    						'class' => '',
    						'id' => '',
    					),
    					'default_value' => '',
    					'placeholder' => '',
    					'maxlength' => '',
    					'rows' => '',
    					'new_lines' => '',
    				),
    			),
    		),
    	),
    	'location' => array(
    		array(
    			array(
    				'param' => 'post_type',
    				'operator' => '==',
    				'value' => 'portrait_grid',
    			),
    		),
    	),
    	'menu_order' => 0,
    	'position' => 'normal',
    	'style' => 'default',
    	'label_placement' => 'top',
    	'instruction_placement' => 'label',
    	'hide_on_screen' => '',
    	'active' => 1,
    	'description' => '',
    ));

    endif;
    //
	}
}


?>
