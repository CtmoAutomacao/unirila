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
       //echo $linha;
       if (trim($linha[0]) != ''){
        $dividir = explode("=", $linha);
        //$cad = "'".$dividir[0]. "'";
        $result[$dividir[0]] = trim(preg_replace('/\s\s+/', ' ', $dividir[1]));
        
       } /* else {
        echo "vazio";
        }
        echo "<br><br>";       
        */
   }
   
   fclose($arquivo);
   //print_r($result); 

   echo json_encode($result);
?>