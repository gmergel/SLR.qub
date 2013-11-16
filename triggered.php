<?php

    $handle = new SQLite3('metrics.sqlite');
    $ip = $_SERVER['REMOTE_ADDR'];
    $result = $handle->query('insert into session (ip) values ("'.$ip.'")');



    $action = $_GET['action'];
    $handle->query('insert into history (ip,action) values ("'.$ip.'","'.$action.'")');

    $histid = $handle->lastInsertRowID();
    $varids = Array();

    foreach($_GET['vars'] as $var){
        $handle->query('insert into var (description) values ("'.$var.'")');    
        array_push($varids,$handle->lastInsertRowID());    
    }

    foreach($varids as $varid){
        $handle->query('insert into varset (history_id, var_id) values ('.$histid.','.$varid.')');
    }
    

?>