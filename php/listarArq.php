<?php
   $filename = 'menus.txt';
   if (isset($_GET["filename"])) {
     $filename = $_GET["filename"];
   }  

   $arquivo = fopen ($filename, 'r');
   $result = array();
   $dividir = array();
   while(!feof($arquivo)){
       $linha = fgets($arquivo);
       //verifica se é o arquivo com os nomes de menus
       if (strripos($filename, "menu") != false) {
        if (trim($linha[0]) != ''){
          $dividir = explode("=", $linha);        
          $result[$dividir[0]] = trim(preg_replace('/\s\s+/', ' ', $dividir[1]));            
        }   

       } else {
        //arquivo com paragrafos de menus
        if (trim($linha[0]) != ''){
          $dividir = explode("=", $linha);        
          $result[$dividir[0]] = trim(preg_replace('/\s\s+/', ' ', $dividir[1]));            
        }   
       }
   }
   
   fclose($arquivo);
   //print_r($result); 

   echo json_encode($result);
?>