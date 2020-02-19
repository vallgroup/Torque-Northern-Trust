<?php

require_once( get_stylesheet_directory() . '/api/northern-trust-child-rest-controller-class.php');
require_once( get_stylesheet_directory() . '/includes/northern-trust-child-nav-menus-class.php');
require_once( get_stylesheet_directory() . '/includes/widgets/northern-trust-child-widgets-class.php');
require_once( get_stylesheet_directory() . '/includes/customizer/northern-trust-child-customizer-class.php');
require_once( get_stylesheet_directory() . '/includes/acf/northern-trust-child-acf-class.php');

require_once( get_stylesheet_directory() . '/includes/cpt/portrait-grid/northern-trust-child-portrait-grid-cpt-class.php');
require_once( get_stylesheet_directory() . '/includes/cpt/icon-grid/northern-trust-child-icon-grid-cpt-class.php');
require_once( get_stylesheet_directory() . '/includes/cpt/events/northern-trust-child-events-cpt-class.php');

/**
* Child Theme Nav Menus
*/

if ( class_exists( 'TQNT_Nav_Menus' ) ) {
 new TQNT_Nav_Menus();
}

/**
* Child Theme Widgets
*/

if ( class_exists( 'TQNT_Widgets' ) ) {
new TQNT_Widgets();
}

/**
* Child Theme Customizer
*/

if ( class_exists( 'TQNT_Customizer' ) ) {
new TQNT_Customizer();
}

/**
* Child Theme ACF
*/

if ( class_exists( 'TQNT_ACF' ) ) {
 new TQNT_ACF();
}


/**
* Instantiate our CPT classes
*/

if ( class_exists( 'TQNT_Portrait_Grid_CPT' ) ) {
  new TQNT_Portrait_Grid_CPT();
}

if ( class_exists( 'TQNT_Icon_Grid_CPT' ) ) {
  new TQNT_Icon_Grid_CPT();
}

if ( class_exists( 'TQNT_Events_CPT' ) ) {
  new TQNT_Events_CPT();
}

/**
* Instantiate our REST Class
*/

if ( class_exists( 'TQNT_REST_Controller' ) ) {
  new TQNT_REST_Controller();
}

if ( class_exists( 'Torque_Map_CPT' ) ) {
  // add POIs to the map CPT
  add_filter( 'torque_map_api_key', function($n) {
    return $n = 'AIzaSyBtJClII3bXTZjSDnHoIrnawoQgqg9kx0Q';
  });
  add_filter( Torque_Map_CPT::$POIS_ALLOWED_FILTER, function( $n ) {
    return $n = 5;
  } );
  add_filter( Torque_Map_CPT::$POIS_MANUAL_FILTER, function( $n ) {
    return $n = true;
  } );
}


/**
 * Admin settings
 */

 // remove menu items
 function torque_remove_menus(){
   /*
   This backend is meant to be used to manage the TV app only,
   therefore, we will remove all unrelated menu items. MV
   */
   //remove_menu_page( 'index.php' );                  //Dashboard
   remove_menu_page( 'edit.php' );                   //Posts
   //remove_menu_page( 'upload.php' );                 //Media
   //remove_menu_page( 'edit.php?post_type=page' );    //Pages
   remove_menu_page( 'edit-comments.php' );          //Comments
   // remove_menu_page( 'themes.php' );                 //Appearance
   //remove_menu_page( 'plugins.php' );                //Plugins
   // remove_menu_page( 'users.php' );                  //Users
   remove_menu_page( 'tools.php' );                  //Tools
   // remove_menu_page( 'options-general.php' );        //Settings

 }
 add_action( 'admin_menu', 'torque_remove_menus' );

 add_filter('register_post_type_args', 'app_map_cpt_to_menus', 10, 2);

 function app_map_cpt_to_menus($args, $post_type){

     if ($post_type == 'torque_map'
      || $post_type == 'portrait_grid'
      || $post_type == 'icon_grid'){
         $args['show_in_nav_menus'] = true;
     }

     return $args;
 }


/**
 * Enqueues
 */

// enqueue child styles after parent styles, both style.css and main.css
// so child styles always get priority
add_action( 'wp_enqueue_scripts', 'torque_enqueue_child_styles' );
function torque_enqueue_child_styles() {

    $parent_style = 'parent-styles';
    $parent_main_style = 'torque-theme-styles';

    // make sure parent styles enqueued first
    wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( $parent_main_style, get_template_directory_uri() . '/bundles/main.css' );

    // enqueue child style
    wp_enqueue_style( 'northern-trust-child-styles',
        get_stylesheet_directory_uri() . '/bundles/main.css',
        array( $parent_style, $parent_main_style ),
        wp_get_theme()->get('Version')
    );
}

// enqueue child scripts after parent script
add_action( 'wp_enqueue_scripts', 'torque_enqueue_child_scripts');
function torque_enqueue_child_scripts() {

    wp_enqueue_script( 'northern-trust-child-script',
        get_stylesheet_directory_uri() . '/bundles/bundle.js',
        array( 'torque-theme-scripts' ), // depends on parent script
        wp_get_theme()->get('Version'),
        true       // put it in the footer
    );
}

?>
