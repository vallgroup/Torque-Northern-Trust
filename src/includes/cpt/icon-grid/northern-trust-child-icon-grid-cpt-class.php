<?php
/**
* the icon grid cpt
 */
class TQNT_Icon_Grid_CPT {

  public static $POST_TYPE = 'icon_grid';

  protected $args = array(
    'supports' => array( 'title', ),
    'menu_icon'           => 'dashicons-screenoptions',
    'show_in_rest'        => true,
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
    	'key' => 'group_5ded780be16f4',
    	'title' => 'Icon Grid',
    	'fields' => array(
    		array(
    			'key' => 'field_5ded780be32b7',
    			'label' => 'Tiles',
    			'name' => 'tiles',
    			'type' => 'repeater',
    			'instructions' => 'Add the tiles that you would like to appear on this grid.',
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
    			'button_label' => 'Add Tile',
    			'sub_fields' => array(
    				array(
    					'key' => 'field_5ded780be480a',
    					'label' => 'Title',
    					'name' => 'title',
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
    					'placeholder' => '',
    					'prepend' => '',
    					'append' => '',
    					'maxlength' => '',
    				),
    				array(
    					'key' => 'field_5ded780be4990',
    					'label' => 'Icon',
    					'name' => 'icon',
    					'type' => 'image',
    					'instructions' => '',
    					'required' => 0,
    					'conditional_logic' => 0,
    					'wrapper' => array(
    						'width' => '33',
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
    					'key' => 'field_5ded79645ca39',
    					'label' => 'Background Image',
    					'name' => 'background_image',
    					'type' => 'image',
    					'instructions' => '',
    					'required' => 0,
    					'conditional_logic' => 0,
    					'wrapper' => array(
    						'width' => '33',
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
    					'key' => 'field_5ded780be4a11',
    					'label' => 'Background Color',
    					'name' => 'background_color',
    					'type' => 'select',
    					'instructions' => '',
    					'required' => 0,
    					'conditional_logic' => 0,
    					'wrapper' => array(
    						'width' => '33',
    						'class' => '',
    						'id' => '',
    					),
    					'choices' => array(
    						'green' => 'Green',
    						'turquoise' => 'Turquoise',
    						'gold' => 'Gold',
    						'orange' => 'Orange',
    						'blue' => 'Blue',
    					),
    					'default_value' => array(
    						0 => 'green',
    					),
    					'allow_null' => 0,
    					'multiple' => 0,
    					'ui' => 0,
    					'return_format' => 'value',
    					'ajax' => 0,
    					'placeholder' => '',
    				),
    				array(
    					'key' => 'field_5ded79905ca3a',
    					'label' => 'Content',
    					'name' => 'content',
    					'type' => 'wysiwyg',
    					'instructions' => 'Enter the content that you would like to appear when this tile is active.',
    					'required' => 0,
    					'conditional_logic' => 0,
    					'wrapper' => array(
    						'width' => '',
    						'class' => '',
    						'id' => '',
    					),
    					'default_value' => '',
    					'tabs' => 'all',
    					'toolbar' => 'full',
    					'media_upload' => 1,
    					'delay' => 0,
    				),
    			),
    		),
    	),
    	'location' => array(
    		array(
    			array(
    				'param' => 'post_type',
    				'operator' => '==',
    				'value' => 'icon_grid',
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
