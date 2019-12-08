<?php

class TQNT_Controller_Helpers {
  public static function get_pages_data( array $page_ids ): array {
		return array_map( function( $page_id ) {
			$page = get_post( $page_id, ARRAY_A, 'display' );
      if (!$page) return false;
			// just keep the fields we want - reduces response size
			$keep_keys = array (
				'ID',
				'post_title',
				'post_name',
			);
			$filtered_page = self::keep_keys( $keep_keys, $page );
      // add init meta fields
			// $filtered_page['colors'] = get_field('colors', $filtered_page['ID']);
			// $filtered_page['icons'] = get_field('icons', $filtered_page['ID']);
			return $filtered_page;
		}, $page_ids );
	}

  public static function keep_keys( array $keep_keys, array $array_a ): array {
    $filtered_arr = array();
    foreach ($keep_keys as $key) {
      $filtered_arr[$key] = $array_a[$key];
    }
    return $filtered_arr;
  }
}


?>
