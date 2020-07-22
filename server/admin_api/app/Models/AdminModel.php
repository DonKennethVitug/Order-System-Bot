<?php

namespace Models;

use \PDO;
use \PDOException;
use Helpers\DB as DB;

require 'config.php';

class AdminModel extends DB{

    public static $data;

    public function getCurrentOrders($request){

        $res = DB::getCurrentOrders();

        self::$data = json_encode($res);

        return true;     

    }

    public function getStores($request){

        $res = DB::getStores();

        self::$data = json_encode($res);

        return true;     

    }

}