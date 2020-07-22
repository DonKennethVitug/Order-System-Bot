<?php

namespace Helpers;

use \PDO;

require_once "config.php";

class DB {

  protected $pdo = null;

  public function __construct(){$this->instantiate();}

  private function instantiate()
  {
      $this->pdo = new PDO(DB_DSN, DB_USERNAME, DB_PASSWORD);
  }

  public function getCurrentOrders() {
    $query = "SELECT * FROM v_current_orders";
    $result = $this->pdo->query($query);
    $result = $result->fetchAll(PDO::FETCH_ASSOC);
    $result = json_decode(json_encode($result), true);
    $orders = [];
    foreach ($result as $key => $res) {
      $found = [
        'id' => 0,
        'status' => false
      ];
      foreach ($orders as $key => $order) {
        if($order['transactionnum'] == $res['transactionnum']) {
          $found = [
            'id' => $key,
            'status' => true
          ];
        }
      }
      if(!$found['status']) {
        array_push($orders, [
          'store_id' => $res['store_id'],
          'first_name' => $res['first_name'],
          'last_name' => $res['last_name'],
          'phone' => $res['phone'],
          'customer_location' => $res['customer_location'],
          'cust_long_lat' => $res['cust_long_lat'],
          'transactionnum' => $res['transactionnum'],
          'category_name' => $res['category_name'],
          'menu' => [
            0 => [
              'name' => $res['menu_name'],
              'size' => $res['menu_size'],
              'type' => $res['menu_type'],
              'quantity' => $res['quantity'],
              'price' => $res['price'],
              'datetime' => $res['datetime']
            ]
          ],
          'total_price' => $res['price']
        ]);
      } else {
        array_push($orders[$found['id']]['menu'], [
          'name' => $res['menu_name'],
          'size' => $res['menu_size'],
          'type' => $res['menu_type'],
          'quantity' => $res['quantity'],
          'price' => $res['price'],
          'datetime' => $res['datetime']
        ]);
        $orders[$found['id']]['total_price'] += $res['price'];
      }
    }
    return $orders;
  }

  public function getStores() {
    $query = "SELECT * FROM tbl_stores";
    $result = $this->pdo->query($query);
    var_dump($result);
    $result = $result->fetchAll(PDO::FETCH_ASSOC);
    $result = json_decode(json_encode($result), true);
    return $result;
  }
}
?>