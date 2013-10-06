<?php
    if ($db = new SQLiteDatabase('metrics')) {

        echo "consegui!";

    }
    //     $q = @$db->query('SELECT requests FROM tablename WHERE id = 1');
    //     if ($q === false) {
    //         $db->queryExec('CREATE TABLE tablename (id int, requests int, PRIMARY KEY (id)); INSERT INTO tablename VALUES (1,1)');
    //         $hits = 1;
    //     } else {
    //         $result = $q->fetchSingle();
    //         $hits = $result+1;
    //     }
    //     $db->queryExec("UPDATE tablename SET requests = '$hits' WHERE id = 1");
    // } else {
    //     die($err);
    // }
?>