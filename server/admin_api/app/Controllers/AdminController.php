<?php

namespace Controllers;

use Models\AdminModel as Model;

class AdminController {

	public function getCurrentOrders($request, $response){
		$model = new Model();
		$output = $model->getCurrentOrders($request);
		if($output){
			return $response->withStatus(200)
							->withHeader('Content-Type', 'application/json')
							->write(Model::$data);
		}
		else{
			return $response->withStatus(400);
		}
	}

  public function getStores($request, $response){
    $model = new Model();
    $output = $model->getStores($request);
    if($output){
      return $response->withStatus(200)
              ->withHeader('Content-Type', 'application/json')
              ->write(Model::$data);
    }
    else{
      return $response->withStatus(400);
    }
  }
  
}