<?php

$my_data = [
'phone' => $_POST['phone'],
'name' => $_POST['name'],
'ip' => $_SERVER["HTTP_CF_CONNECTING_IP"]? $_SERVER["HTTP_CF_CONNECTING_IP"] :
$_SERVER["REMOTE_ADDR"],
'host' => $_SERVER['HTTP_HOST']
];
$my_reqest = file_get_contents('http://krisargz.beget.tech/api/add_lead?'.http_build_query($my_data)); 
$my_reqest = json_decode($my_reqest);
$my_id = $my_reqest->id;
$pixel = @$_POST['pixel'];
$order = array (
  'campaign_id' => 'ИД ПОТОКА',
  'ip' => $_SERVER["HTTP_CF_CONNECTING_IP"],
  'name' => $_POST['name'],
  'phone' => $_POST['phone'],
  'sid1' => $_SERVER["HTTP_HOST"],
  'sid2' => $my_id,
);


$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://tracker.everad.com/conversion/new" );
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1 );
curl_setopt($ch, CURLOPT_POST,           1 );
curl_setopt($ch, CURLOPT_POSTFIELDS,     http_build_query($order) );
curl_setopt($ch, CURLOPT_HTTPHEADER,     array('Content-Type: application/x-www-form-urlencoded'));

$result=curl_exec ($ch);

$upd = ['id' => $my_id, 'response_api' => $result];
file_get_contents('http://krisargz.beget.tech/api/update_lead?'.http_build_query($upd));

if ($result === 0) {
  echo "Timeout! Everad CPA 2 API didn't respond within default period!";
} else {
  $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
  if ($httpCode === 200) {
    require_once('_thankyou/ok.php');
  } else if ($httpCode === 400) {
    echo "Order data is invalid! Order is not accepted!";
  } else {
    echo
    "Unknown error happened! Order is not accepted! Check campaign_id, probably no landing exists for your campaign!";
  }
}
