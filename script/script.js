window.onscroll = function () {
    sumirBarra();
};

function sumirBarra() {
    const header = document.querySelector(".fundoHeader");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        header.style.top = "0";
    } else {
        header.style.top = "-100px";
    }
}

function readFile(fileName) {
  //let file = input.files[0];
  console.log(fileName);
  let reader = new FileReader();

  reader.readAsText(new Blob([fileName],{type:"text/plain"}));

  reader.onload = function() {
    //console.log(reader.result);
    console.log('leu');
	var lines = reader.result.split('\n');
	console.log(lines);
	return lines;
  };

  reader.onerror = function() {
    console.log(reader.error);
	return reader.error;
  };
  return null;
}

function exibirArq(data) {
    console.log(data);
}

function erroArq() {

}

function lerArquivoAjax(fileName) {
	jQuery.ajax ({
		type: "GET",
		datatype: "json",
		url: "php/listarArq.php",
		success: exibirArq, 
		//beforeSend: ,
		erros: erroArq 
	});	
}

function textoQue() {
	/*texto = "<div class='destaque' style='";
	texto = texto + "background-image:url('../img/ponte_rota.jpg');"
	texto = texto + ">'" + "<h2> </h2> 	</div>"; 
	texto = texto +"<section class='section-content py-5'><h2 style='color:0F371E'> O QUE É </h2> </section>";*/
	texto = "<section class='section-content py-5'><h2 style='color:0F371E;padding-top:50px;'> O QUE É </h2> </section>";
	texto= texto + '<p class="text-muted">';
	texto= texto + 'O observatório é um grupo de pesquisadores que fazem um levantamento de informações sobre a rota.</p>';
	texto= texto + '<br><br><br><br><br><br><br><br><br><br><br><br><br><br>';
	document.getElementById("principal").innerHTML = texto;
	
}

function textoFaz() {
	texto = "<section class='section-content py-5'><h2 style='color:0F371E;padding-top:50px;'> O QUE FAZ </h2> </section>";
	texto= texto + '<p class="text-muted">';
	texto= texto + '</p>';
	texto= texto + '<br><br><br><br><br><br><br><br><br><br><br><br><br>';
	document.getElementById("principal").innerHTML = texto;	
}

function textoEquipeTecnica() {
	texto = "<section class='section-content py-5'><h2 style='color:0F371E;padding-top:50px;'> EQUIPE TÉCNICA </h2> </section>";
	texto= texto + '<p class="text-muted">';
	texto= texto + '</p>';
	texto= texto + '<br><br><br><br><br><br><br><br><br><br><br><br><br>';
	document.getElementById("principal").innerHTML = texto;	
}


function menuTexto(item) {
	//alert(item);
	//PORTUGUES
	if (item == 1) { 
	
	  document.getElementById("lingua_pt").setAttribute("src", "./img/band_pt_sel.jpg");
	  document.getElementById("lingua_es").setAttribute("src", "./img/band_es.jpg");
	  document.getElementById("lingua_en").setAttribute("src", "./img/band_en.jpg");
	  document.getElementById("menuFundo").style.backgroundColor = "#0F371E";
	  document.getElementById("rodape").style.backgroundColor = "#0F371E";
	  lerArquivoAjax("menus.txt");
	  //console.log(lines[0]);
	  document.getElementById("menu1").innerHTML = "Observátorio"; 
	  document.getElementById("menu2").innerHTML = "Corredor Bioceânico"; 
	  document.getElementById("menu3").innerHTML = "A Unirila"; 
	  document.getElementById("menu4").innerHTML = "Eventos"; 
	  document.getElementById("menu5").innerHTML = "Espaço Científico"; 
	  document.getElementById("menu6").innerHTML = "A Rede"; 
	  document.getElementById("menu7").innerHTML = "Notícias"; 
	  document.getElementById("menu8").innerHTML = "Repositório"; 
	
	}
	//ESPANHOL
	if (item == 2) { 		  
	  document.getElementById("lingua_pt").setAttribute("src", "./img/band_pt.jpg");
	  document.getElementById("lingua_es").setAttribute("src", "./img/band_es_sel.jpg");
	  document.getElementById("lingua_en").setAttribute("src", "./img/band_en.jpg");
	  document.getElementById("menuFundo").style.backgroundColor = "#61130E";
	  document.getElementById("rodape").style.backgroundColor = "#61130E";
	  //document.querySelector("header").style.backgroundColor = "#67130E";
	  //document.querySelector("footer").style.backgroundColor = "#67130E";
	  document.getElementById("menu1").innerHTML = "Observatorio"; 
	  document.getElementById("menu2").innerHTML = "Corredor Bioceánico"; 
	  document.getElementById("menu3").innerHTML = "Unirila"; 
	  document.getElementById("menu4").innerHTML = "Eventos"; 
	  document.getElementById("menu5").innerHTML = "Espacio Científico"; 
	  document.getElementById("menu6").innerHTML = "La red"; 
	  document.getElementById("menu7").innerHTML = "Noticias"; 
	  document.getElementById("menu8").innerHTML = "Repositorio"; 
	
	}
	//INGLES
	if (item == 3) { 
	  document.getElementById("lingua_pt").setAttribute("src", "./img/band_pt.jpg");
	  document.getElementById("lingua_es").setAttribute("src", "./img/band_es.jpg");
	  document.getElementById("lingua_en").setAttribute("src", "./img/band_en_sel.jpg");
	  document.getElementById("menuFundo").style.backgroundColor = "#063172";
	  document.getElementById("rodape").style.backgroundColor = "#063172";
	  //document.querySelector("header").style.backgroundColor = "#063172";
	  //document.querySelector("footer").style.backgroundColor = "#063172";
	  
	  document.getElementById("menu1").innerHTML = "Observatory"; 
	  document.getElementById("menu2").innerHTML = "Bioceanic Corridor"; 
	  document.getElementById("menu3").innerHTML = "The Unirila"; 
	  document.getElementById("menu4").innerHTML = "Events"; 
	  document.getElementById("menu5").innerHTML = "Scientific Space"; 
	  document.getElementById("menu6").innerHTML = "The Net"; 
	  document.getElementById("menu7").innerHTML = "News"; 
	  document.getElementById("menu8").innerHTML = "Repository"; 
	  
	}
}
