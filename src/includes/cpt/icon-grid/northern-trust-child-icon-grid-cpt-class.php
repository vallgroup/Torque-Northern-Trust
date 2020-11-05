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
      // add_action('acf/init', array( $this, 'add_acf_metaboxes' ) );
    }
  }


  public function add_acf_metaboxes() {
    //

    //
	}
}


?>
