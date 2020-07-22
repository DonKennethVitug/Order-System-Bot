<?php

date_default_timezone_set("Asia/Manila");

require 'vendor/autoload.php';

use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Message\ResponseInterface;
use Middleware\EnsureAuthenticated;

$app = new \Slim\App([
    'settings' => [
        'displayErrorDetails' => true
    ]
]);

$app->post('/getCurrentOrders', "Controllers\AdminController:getCurrentOrders");
$app->post('/getStores', "Controllers\AdminController:getStores");

$app->run();