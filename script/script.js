//variavel global para identificar menu acessado
const menusCnt = ["principal", "menu1", "menu1_1", "menu1_2", "menu1_3", "menu1_4", "menu1_5", 
                                "menu1_6", "menu1_7", "menu1_8",
                               "menu2", "menu2_1", "menu2_2","menu2_3", "menu2_4","menu2_5", 
							   "menu2_6","menu2_7", "menu2_8", "menu2_9",
"menu3", "menu3_1", "menu3_7",
"menu4", "menu4_1", "menu4_8",
"menu5", "menu5_1", "menu5_5",
"menu6", "menu6_1", "menu6_3",
"menu7", "menu7_1", "menu7_2",
"menu8", "menu8_1", "menu8_13"];

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
	console.log('passou');
	if (item == "Pt") { 
		$( "#Titulo" ).html("O QUE É (Missão)");
		$( "#P1" ).html("O Observatório Interdisciplinar UniRILA - OBSUNIRILA, visa à organização, produção e disponibilização de informações, nas áreas relacionadas ao Corredor, capazes de servir como subsídios para as esferas pública e privada, bem como para a sociedade em geral.");
		$( "#P2" ).html("A missão do Observatório consiste em favorecer as comunidades que serão impactadas ao longo do trajeto da Rota Bioceânica, por meio de estudos que oportunizem a criação de ambientes de diálogo dos quais decorram novas interações que, por conseguinte, abram possibilidades de novos entendimentos, reflexões e conhecimentos que subsidiem políticas públicas e ações de empoderamento.");
		$( "#P3" ).html("Assim sendo, tem o potencial de desempenhar um papel importante no processo de tomada de decisões, na formulação de políticas públicas e estruturação de ações privadas, e na atração de investimentos. Além disso, é importante mencionar sua aptidão para a formação do capital humano, crucial para implantação e operacionalização da Rota Bioceânica.");
		$( "#P4" ).html("");
	}
	if (item == "Es") { 
		$( "#Titulo" ).html("QUÉ ES (Misión)");
		$( "#P1" ).html("El Observatorio Interdisciplinario UniRILA - OBSUNIRILA tiene como objetivo organizar, producir y poner a disposición información en áreas relacionadas con el Corredor, capaces de servir como subsidio para el ámbito público y privado, así como para la sociedad en general.");
		$( "#P2" ).html("La misión del Observatorio es favorecer a las comunidades que serán impactadas a lo largo del recorrido de la Ruta Bioceánica, a través de estudios que brinden la oportunidad de crear ambientes de diálogo a partir de los cuales se produzcan nuevas interacciones y, por tanto, abran posibilidades a nuevos entendimientos, reflexiones y conocimientos que sustentan políticas públicas y acciones de empoderamiento.");
		$( "#P3" ).html("Por lo tanto, tiene el potencial de desempeñar un papel importante en el proceso de toma de decisiones, en la formulación de políticas públicas y estructuración de acciones privadas, y en la atracción de inversiones. Además, es importante mencionar su aptitud para la formación de capital humano, crucial para la implementación y operacionalización de la Ruta Bioceánica.");
		$( "#P4" ).html("");	}
	if (item == "En") { 
		$( "#Titulo" ).html("WHAT IS IT (Mission)");
		$( "#P1" ).html("The UniRILA Interdisciplinary Observatory - OBSUNIRILA aims to organize, produce and make available information in areas related to the Corridor, capable of serving as subsidies for the public and private spheres, as well as for society in general.");
		$( "#P2" ).html("The Observatory's mission is to favor the communities that will be impacted along the route of the Bioceanic Route, through studies that provide the opportunity to create environments for dialogue from which new interactions take place and, therefore, open up possibilities for new understandings, reflections and knowledge that supports public policies and empowerment actions.");
		$( "#P3" ).html("Therefore, it has the potential to play an important role in the decision-making process, in the formulation of public policies and structuring of private actions, and in attracting investments. Furthermore, it is important to mention its aptitude for the formation of human capital, crucial for the implementation and operationalization of the Bioceânica Route.");
		$( "#P4" ).html("");	
	}
}

function textoFaz(item) {
	$("#imgPonte").css("backgroundImage",  "");
	$("#imgPonte").css("height", "50px");	
	if (item == "Pt") { 
		$( "#Titulo" ).html("O QUE FAZ ");
		$( "#P1" ).html("O Observatório tem o potencial de desempenhar um papel importante no processo de tomada de decisões, na formulação de políticas públicas e estruturação de ações privadas, e na atração de investimentos. Além disso, é importante mencionar sua aptidão para a formação do capital humano, crucial para implantação e operacionalização da Rota Bioceânica. Neste espaço interdisciplinar de interação e integração, com base na investigação social, será realizada a sistematização de conhecimento, especialmente nas áreas educativas, culturais, políticas, jurídicas, turísticas e econômicas, visando o desenvolvimento territorial sustentável.");
		$( "#P2" ).html("As linhas de pesquisa e estratégias de atuação do Observatório estão sendo alinhadas aos eixos temáticos da UniRILA (Quadro 1), da mesma forma que tomam como base as proposições dos Objetivos do Desenvolvimento Sustentável - ODS, da Agenda 2030, diretamente os ODS: 8 - Trabalho decente e crescimento econômico; 9 - Indústria, inovação e infraestrutura; 11 - Cidades e comunidades sustentáveis; 14 - Vida na água; 15 - Vida terrestre; 16 - Paz, justiça e instituições eficazes; e, 17 - Parcerias e meios de implementação. Como o conjunto de ODS envolve metas e indicadores que contemplam de forma integrada as três dimensões do desenvolvimento sustentável (ambiental, social e econômica), todos acabam sendo tocados, de alguma forma.");
		$( "#P3" ).html("");
		$( "#P4" ).html("");
	}
	if (item == "Es") { 
		$( "#Titulo" ).html("QUÉ HACES");
		$( "#P1" ).html("El observatorio es un grupo de investigadores que recogen información sobre la ruta.");
		$( "#P2" ).html("");
		$( "#P3" ).html("");
		$( "#P4" ).html("");	}
	if (item == "En") { 
		$( "#Titulo" ).html("WHAT IT DOES");
		$( "#P1" ).html("The Observatory has the potential to play an important role in the decision-making process, in formulating public policies and structuring private actions, and in attracting investments. Furthermore, it is important to mention its aptitude for the formation of human capital, crucial for the implementation and operationalization of the Bioceânica Route. In this interdisciplinary space of interaction and integration, based on social research, the systematization of knowledge will be carried out, especially in the educational, cultural, political, legal, tourist and economic areas, aiming at sustainable territorial development.");
		$( "#P2" ).html("The Observatory's lines of research and action strategies are being aligned with the thematic axes of UniRILA (Table 1), in the same way that they are based on the propositions of the Sustainable Development Goals - SDGs, of the 2030 Agenda, directly the SDGs: 8 - Decent work and economic growth; 9 - Industry, innovation and infrastructure; 11 - Sustainable cities and communities; 14 - Life in the water; 15 - Terrestrial life; 16 - Peace, justice and effective institutions; and, 17 - Partnerships and means of implementation. As the set of SDGs involves goals and indicators that cover the three dimensions of sustainable development (environmental, social and economic) in an integrated way, they all end up being touched in some way.");
		$( "#P3" ).html("");
		$( "#P4" ).html("");	
	}	

}

function textoEquipeTecnica(item) {
	$("#imgPonte").css("backgroundImage",  "");
	$("#imgPonte").css("height", "50px");	
	if (item == "Pt") { 
		$( "#Titulo" ).html("EQUIPE TÉCNICA ");
		$( "#P1" ).html("A equipe técnica responsável pela produção do website está sob a responsabilidade dos pesquisadores da área de computação do Instituto Federal de Mato Grosso do Sul - IFMS, que também estão vinculados ao Grupo de Pesquisa OIDL.");
		$( "#P2" ).html("");
		$( "#P3" ).html("");
		$( "#P4" ).html("");
	}
	if (item == "Es") { 
		$( "#Titulo" ).html("EQUIPO TECNICO");
		$( "#P1" ).html("El observatorio es un grupo de investigadores que recogen información sobre la ruta.");
		$( "#P2" ).html("");
		$( "#P3" ).html("");
		$( "#P4" ).html("");	}
	if (item == "En") { 
		$( "#Titulo" ).html("TECHNICAL TEAM ");
		$( "#P1" ).html("The observatory is a group of researchers who collect information about the route.");
		$( "#P2" ).html("");
		$( "#P3" ).html("");
		$( "#P4" ).html("");	
	}	

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
	}
}


//	window.addEventListener("resize", function() {
//		"use strict"; window.location.reload(); 
//	});


/*MPV

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
MPV */