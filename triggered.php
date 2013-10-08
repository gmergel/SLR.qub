<?php
    if ($db = new SQLiteDatabase('metrics')) {

        $ip = $_SERVER['REMOTE_ADDR'];
        echo $ip;

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


    //$.getJSON("http://qub.herokuapp.com/triggered.php?jsoncallback=?", null, function(e){ console.log(e); });
?>