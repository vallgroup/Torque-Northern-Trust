<?php
/**
* the events  grid cpt
 */
class TQNT_Events_CPT {

  public static $POST_TYPE = 'event';

  protected $args = array(
    'supports' => array( 'title', ),
    'menu_icon'           => 'dashicons-calendar-alt',
    'show_in_rest'        => true,
    // more args here
    'show_in_nav_menus' => true,
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

    //
	}
}


?>
