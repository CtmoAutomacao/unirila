//variavel global para identificar menu acessado
const menusCnt = ["principal", "menu1", "menu2", "menu3", "menu4", "menu5", "menu6", "menu7", "menu8"];
var menuAcessado = menusCnt[0];
var linguagemAtual = "Pt";

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


function lerArquivoAjax(fileName) {	
	let urlArq = "php/listarArq.php?filename="+fileName;
	return Promise.resolve($.ajax({
		url: "php/listarArq.php?filename="+fileName
	}));	
  }

  /*
function textoQue(item) {
	alert(item);
	menuAcessado = menusCnt[1];
	texto = "<div class='destaque' style='";
	texto = texto + "background-image:url('../img/ponte_rota.jpg');"
	texto = texto + ">'" + "<h2> </h2> 	</div>"; 
	texto = texto +"<section class='section-content py-5'><h2 style='color:0F371E'> O QUE É </h2> </section>";

	texto = "<section class='section-content py-5'><h2 style='color:0F371E;padding-top:50px;'> O QUE É </h2> </section>";
	texto= texto + '<p class="text-muted">';
	texto= texto + 'O observatório é um grupo de pesquisadores que fazem um levantamento de informações sobre a rota.</p>';
	texto= texto + '<br><br><br><br><br><br><br><br><br><br><br><br><br><br>';
	$( "#principal" ).html( texto );
	
	
	//$("#imgPonte").remove();
	if (item == "Pt") { 
		$( "#Titulo" ).html("O QUE É ");
		$( "#P1" ).html("O observatório é um grupo de pesquisadores que fazem um levantamento de informações sobre a rota.");
		$( "#P2" ).html("");
		$( "#P3" ).html("");
		$( "#P4" ).html("");
	}
	if (item == "Es") { 
		$( "#Titulo" ).html("QUÉ ES ");
		$( "#P1" ).html("El observatorio es un grupo de investigadores que recogen información sobre la ruta.");
		$( "#P2" ).html("");
		$( "#P3" ).html("");
		$( "#P4" ).html("");	}
	if (item == "En") { 
		$( "#Titulo" ).html("WHAT IS IT ");
		$( "#P1" ).html("The observatory is a group of researchers who collect information about the route.");
		$( "#P2" ).html("");
		$( "#P3" ).html("");
		$( "#P4" ).html("");	
	}
}*/

function ativarOnClick() {
	$('.aaf').on("click",function(){
		var usersid =  $(this).data("id");
		var username = $(this).data("username");
	})
}

function textoOQue(item) {
	console.log(item);
	menuAcessado = menusCnt[1];
	console.log(menuAcessado);
	$("#imgPonte").css("backgroundImage",  "");
	$("#imgPonte").css("height", "50px");
	//$("#imgPonte").remove();
	if (item == "Pt") { 
		$( "#Titulo" ).html("O QUE É ");
		$( "#P1" ).html("O observatório é um grupo de pesquisadores que fazem um levantamento de informações sobre a rota.");
		$( "#P2" ).html("");
		$( "#P3" ).html("");
		$( "#P4" ).html("");
	}
	if (item == "Es") { 
		$( "#Titulo" ).html("QUÉ ES ");
		$( "#P1" ).html("El observatorio es un grupo de investigadores que recogen información sobre la ruta.");
		$( "#P2" ).html("");
		$( "#P3" ).html("");
		$( "#P4" ).html("");	}
	if (item == "En") { 
		$( "#Titulo" ).html("WHAT IS IT ");
		$( "#P1" ).html("The observatory is a group of researchers who collect information about the route.");
		$( "#P2" ).html("");
		$( "#P3" ).html("");
		$( "#P4" ).html("");	
	}
}

function textoFaz(item) {
	texto = "<section class='section-content py-5'><h2 style='color:0F371E;padding-top:50px;'> O QUE FAZ </h2> </section>";
	texto= texto + '<p class="text-muted">';
	texto= texto + '</p>';
	texto= texto + '<br><br><br><br><br><br><br><br><br><br><br><br><br>';
	$( "#principal" ).html( texto );	
}

function textoEquipeTecnica(item) {
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
	//console.log("menusAcessado:");
	//console.log(menuAcessado);
	/*	
	console.log( nomearquivo );
	let lines = lerArquivoAjax(nomearquivo);
	
	await lines.then( (value) => {	  
		//console.log(value);  	
	  menus = JSON.parse(value);		
	  
	});
	*/
	linguagemAtual = item;
	if (menuAcessado="menu1") {
		textoOQue(item);
	}
	menus = JSON.parse(await lerArquivoAjax(nomearquivo)); 
	//console.log(Object.keys(menus));
	$( "#menu1" ).html(   menus["menu1"]  ); 
	$( "#menu1_1" ).html( menus["menu1_1"]); 
	$( "#menu1_2" ).html( menus["menu1_2"]); 
	$( "#menu1_3" ).html( menus["menu1_3"]); 
	$( "#menu1_4" ).html( menus["menu1_4"]); 
	$( "#menu1_5" ).html( menus["menu1_5"]); 
	$( "#menu1_6" ).html( menus["menu1_6"]); 
	$( "#menu1_7" ).html( menus["menu1_7"]); 
	$( "#menu1_8" ).html( menus["menu1_8"]); 

	$( "#menu2" ).html( menus["menu2"]); 
	$( "#menu2_1" ).html( menus["menu2_1"]); 
	$( "#menu2_2" ).html( menus["menu2_2"]); 
	$( "#menu2_3" ).html( menus["menu2_3"]); 
	$( "#menu2_4" ).html( menus["menu2_4"]); 
	$( "#menu2_5" ).html( menus["menu2_5"]); 
	$( "#menu2_6" ).html( menus["menu2_6"]); 
	$( "#menu2_7" ).html( menus["menu2_7"]); 
	$( "#menu2_8" ).html( menus["menu2_8"]); 
	$( "#menu2_9" ).html( menus["menu2_9"]); 

	$( "#menu3" ).html( menus["menu3"]); 
	$( "#menu3_1" ).html( menus["menu3_1"]); 
	$( "#menu3_2" ).html( menus["menu3_2"]); 
	$( "#menu3_3" ).html( menus["menu3_3"]); 
	$( "#menu3_4" ).html( menus["menu3_4"]); 
	$( "#menu3_5" ).html( menus["menu3_5"]); 
	$( "#menu3_6" ).html( menus["menu3_6"]); 
	$( "#menu3_7" ).html( menus["menu3_7"]); 

	$( "#menu4" ).html( menus["menu4"]); 
	$( "#menu4_1" ).html( menus["menu4_1"]); 
	$( "#menu4_2" ).html( menus["menu4_2"]); 
	$( "#menu4_3" ).html( menus["menu4_3"]); 
	
	$( "#menu5" ).html( menus["menu5"]); 
	$( "#menu5_1" ).html( menus["menu5_1"]); 
	$( "#menu5_2" ).html( menus["menu5_2"]); 
	$( "#menu5_3" ).html( menus["menu5_3"]); 
	$( "#menu5_4" ).html( menus["menu5_4"]); 
	$( "#menu5_5" ).html( menus["menu5_5"]); 

	$( "#menu6" ).html( menus["menu6"]); 
	$( "#menu6_1" ).html( menus["menu6_1"]); 
	$( "#menu6_2" ).html( menus["menu6_2"]); 
	$( "#menu6_3" ).html( menus["menu6_3"]); 

	$( "#menu7" ).html( menus["menu7"]); 
	$( "#menu7_1" ).html( menus["menu7_1"]); 
	$( "#menu7_2" ).html( menus["menu7_2"]); 

	$( "#menu8" ).html( menus["menu8"]); 
	$( "#menu8_1" ).html( menus["menu8_1"]); 
	$( "#menu8_2" ).html( menus["menu8_2"]); 
	$( "#menu8_3" ).html( menus["menu8_3"]); 
	$( "#menu8_4" ).html( menus["menu8_4"]); 
	$( "#menu8_5" ).html( menus["menu8_5"]); 
	$( "#menu8_6" ).html( menus["menu8_6"]); 
	$( "#menu8_7" ).html( menus["menu8_7"]); 
	$( "#menu8_8" ).html( menus["menu8_8"]); 
	$( "#menu8_9" ).html( menus["menu8_9"]); 
	$( "#menu8_10" ).html( menus["menu8_6"]); 
	$( "#menu8_11" ).html( menus["menu8_7"]); 
	$( "#menu8_12" ).html( menus["menu8_8"]); 
	$( "#menu8_13" ).html( menus["menu8_9"]); 

	
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


//	window.addEventListener("resize", function() {
//		"use strict"; window.location.reload(); 
//	});


document.addEventListener("DOMContentLoaded", function(){
        

	/////// Prevent closing from click inside dropdown
	document.querySelectorAll('.dropdown-menu').forEach(function(element){
		element.addEventListener('click', function (e) {
		  e.stopPropagation();
		});
	})



	// make it as accordion for smaller screens
	if (window.innerWidth < 992) {

		// close all inner dropdowns when parent is closed
		document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
			everydropdown.addEventListener('hidden.bs.dropdown', function () {
				// after dropdown is hidden, then find all submenus
				  this.querySelectorAll('.submenu').forEach(function(everysubmenu){
					  // hide every submenu as well
					  everysubmenu.style.display = 'none';
				  });
			})
		});
		
		document.querySelectorAll('.dropdown-menu a').forEach(function(element){
			element.addEventListener('click', function (e) {
	
				  let nextEl = this.nextElementSibling;
				  if(nextEl && nextEl.classList.contains('submenu')) {	
					  // prevent opening link if link needs to open dropdown
					  e.preventDefault();
					  console.log(nextEl);
					  if(nextEl.style.display == 'block'){
						  nextEl.style.display = 'none';
					  } else {
						  nextEl.style.display = 'block';
					  }

				  }
			});
		})
	}
	// end if innerWidth

}); 
// DOMContentLoaded  end
