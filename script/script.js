// window.onscroll = function () {
//     sumirBarra();
// };

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
	let urlArq = "php/listarArq.php?filename="+fileName;
	return Promise.resolve($.ajax({
		url: "php/listarArq.php?filename="+fileName
	}));	
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
	$( "#principal" ).html( texto );
	
}

function textoFaz() {
	texto = "<section class='section-content py-5'><h2 style='color:0F371E;padding-top:50px;'> O QUE FAZ </h2> </section>";
	texto= texto + '<p class="text-muted">';
	texto= texto + '</p>';
	texto= texto + '<br><br><br><br><br><br><br><br><br><br><br><br><br>';
	$( "#principal" ).html( texto );	
}

function textoEquipeTecnica() {
	texto = "<section class='section-content py-5'><h2 style='color:0F371E;padding-top:50px;'> EQUIPE TÉCNICA </h2> </section>";
	texto= texto + '<p class="text-muted">';
	texto= texto + '</p>';
	texto= texto + '<br><br><br><br><br><br><br><br><br><br><br><br><br>';
	$( "#principal" ).html( texto );	
}




async function mudarIdioma(item) {
	//alert(item); 
	//PORTUGUES
	let  menus;
	let nomearquivo = "menus"+item+".txt";
	/*	
	console.log( nomearquivo );
	let lines = lerArquivoAjax(nomearquivo);
	
	await lines.then( (value) => {	  
		//console.log(value);  	
	  menus = JSON.parse(value);		
	  
	});
	*/
	menus = JSON.parse(await lerArquivoAjax(nomearquivo)); 
	//console.log(menus);  
	$( "#menu1" ).html( menus["menu1"]); 
	$( "#menu2" ).html( menus["menu2"]); 
	$( "#menu3" ).html( menus["menu3"]); 
	$( "#menu4" ).html( menus["menu4"]); 
	$( "#menu5" ).html( menus["menu5"]); 
	$( "#menu6" ).html( menus["menu6"]); 
	$( "#menu7" ).html( menus["menu7"]); 
	$( "#menu8" ).html( menus["menu8"]); 

	if (item == "Pt") { 
	
	  $( "#lingua_pt").attr("src", "./img/band_pt_sel.jpg");
	  $( "#lingua_es").attr("src",  "./img/band_es.jpg");
	  $( "#lingua_en").attr("src", "./img/band_en.jpg");
	  $( "#menuFundo").css("backgroundColor",  "#0F371E");
	  $( "#rodape").css("backgroundColor" , "#0F371E");
	 
	  

	
	}
	//ESPANHOL
	if (item == "Es") { 		  
	  $( "#lingua_pt").attr("src", "./img/band_pt.jpg");
	  $( "#lingua_es").attr("src", "./img/band_es_sel.jpg");
	  $( "#lingua_en").attr("src", "./img/band_en.jpg");
	  $( "#menuFundo").css ("backgroundColor",  "#61130E");
	  $( "#rodape").css ("backgroundColor", "#61130E");
	  //document.querySelector("header").style.backgroundColor = "#67130E";
	  //document.querySelector("footer").style.backgroundColor = "#67130E";
	  /*
	  $( "#menu1" ).html("Observatorio"); 
	  $( "#menu2" ).html( "Corredor Bioceánico"); 
	  $( "#menu3" ).html( "Unirila"); 
	  $( "#menu4" ).html( "Eventos"); 
	  $( "#menu5" ).html( "Espacio Científico"); 
	  $( "#menu6" ).html( "La red"); 
	  $( "#menu7" ).html( "Noticias"); 
	  $( "#menu8" ).html( "Repositorio"); 
	*/
	}
	//INGLES
	if (item == "En") { 
	  $( "#lingua_pt").attr("src", "./img/band_pt.jpg");
	  $( "#lingua_es").attr("src", "./img/band_es.jpg");
	  $( "#lingua_en").attr("src", "./img/band_en_sel.jpg");
	  $( "#menuFundo").css("backgroundColor", "#063172");
	  $( "#rodape").css("backgroundColor", "#063172");
	  //document.querySelector("header").style.backgroundColor = "#063172";
	  //document.querySelector("footer").style.backgroundColor = "#063172";
	  /*
	  $( "#menu1" ).html( "Observatory"); 
	  $( "#menu2" ).html( "Bioceanic Corridor"); 
	  $( "#menu3" ).html( "The Unirila"); 
	  $( "#menu4" ).html( "Events"); 
	  $( "#menu5" ).html( "Scientific Space"); 
	  $( "#menu6" ).html( "The Net"); 
	  $( "#menu7" ).html( "News"); 
	  $( "#menu8" ).html( "Repository"); 
	  */
	}
}
