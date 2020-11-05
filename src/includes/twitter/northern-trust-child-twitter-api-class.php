<?php

/**
 * Handle Twitter API integration
 */
class TQNT_Twitter_API_Controller {

  protected $api_url = "https://api.twitter.com/1.1/statuses/user_timeline.json";

  protected $screen_name = "NorthernTrust";

  private $token = "AAAAAAAAAAAAAAAAAAAAAIhaCwEAAAAAWZnqUtHBivYWscKCwy1PgGfPcP0%3Dg9xXYSNpdNR6cPTmmdvFnnLMJ7ti9di4FYlJ1dXh0U4JBp6H8b";

  public static $inst = null;

  public static function get_inst() {
    self::$inst === null && self::$inst = new self();
    return self::$inst;
  }

  function __construct() {}

  public function query_tweets() {
    $curl = curl_init();

    curl_setopt_array($curl, array(
      CURLOPT_URL => "$this->api_url?screen_name=$this->screen_name&count=1",
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_ENCODING => "",
      CURLOPT_MAXREDIRS => 10,
      CURLOPT_TIMEOUT => 0,
      CURLOPT_FOLLOWLOCATION => true,
      CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
      CURLOPT_CUSTOMREQUEST => "GET",
      CURLOPT_HTTPHEADER => array(
        "Authorization: Bearer $this->token"
      ),
    ));

    $response = curl_exec($curl);
    curl_close($curl);
    if ( $response ) {
      $_json = json_decode( $response );
      // var_dump($_json);
      $_tweet = $_json[0];
      update_field( 'feed', $_tweet->text, 'options' );
    }
  }
}


?>
