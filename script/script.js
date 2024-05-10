//variavel global para identificar menu acessado
const menusCnt = "principal";
const menusCnt1 = ["menu1", "menu1_1", "menu1_2", "menu1_3", "menu1_4", "menu1_5", 
                                "menu1_6", "menu1_7", "menu1_8"];
const menusCnt2 = ["menu2", "menu2_1", "menu2_2","menu2_3", "menu2_4","menu2_5", "menu2_6","menu2_7", "menu2_8", "menu2_9"];
const menusCnt3 = ["menu3", "menu3_1", "menu3_7"];
const menusCnt4 = ["menu4", "menu4_1", "menu4_8"];
const menusCnt5 = ["menu5", "menu5_1", "menu5_5"];
const menusCnt6 = ["menu6", "menu6_1", "menu6_3"];
const menusCnt7 = ["menu7", "menu7_1", "menu7_2"];
const menusCnt8 = ["menu8", "menu8_1", "menu8_13"];

var menuAcessado = menusCnt;
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
function ativarOnClick() {
	$('.aaf').on("click",function(){
		var usersid =  $(this).data("id");
		var username = $(this).data("username");
	})
}
*/

async function textoPrincipal(item) {
	menuAcessado = menusCnt;
	let nomearquivo = "parag_portugues.txt";
	if (item == "Es") { 
		nomearquivo = "parag_espanhol.txt";
	}
	if (item == "En") { 
		nomearquivo = "parag_ingles.txt";
	}
	paragrafos = JSON.parse(await lerArquivoAjax(nomearquivo)); 
	console.log(paragrafos);
	$( "#Titulo" ).html(paragrafos["principal"]);
	$( "#P1" ).html(paragrafos["principal_P1"]);
	$( "#P2" ).html(paragrafos["principal_P2"]);
	$( "#P3" ).html(paragrafos["principal_P3"]);
	$( "#P4" ).html(paragrafos["principal_P4"]);
	/*
	if (item == "Pt") { 		
		$( "#Titulo" ).html("O Observatório Interdisciplinar para a Rota Bioceânica.");
		$( "#P1" ).html("A criação do Observatório Interdisciplinar para a Rota Bioceânica objetiva a organização de informações e indicadores, capazes de servirem de subsídios para as esferas públicas e privadas, bem como a sociedade em geral na promoção de transferência de conhecimentos com a produção de informações. Estas podem servir para tomada de decisões assim como contribuição para atração de investimentos, norteio de políticas públicas municipais e ações privadas voltadas ao conhecimento efetivo de leis, normas, pesquisas realizadas e, também, a redução de desigualdades com incremento de ofertas de trabalho, formações do capital humano, tão necessários em prol da implantação da Rota Bioceânica.");
		$( "#P2" ).html("Somos um grupo que acolhe as diversidades e reúne pesquisadores em diferentes níveis de formação, desde jovens relacionados à iniciação cientifica (PIBIC e PIBIC-Jr) como também a pesquisadores da pós-graduação ou relacionados a órgãos de fomento à pesquisa.");
		$( "#P3" ).html("O conceito de 'Observatório' passa pela concepção de núcleo de pesquisa que pode vir a ser um espaço de cooperação entre organizações da sociedade civil, instituições acadêmicas e agências públicas, nacionais e internacionais.");
		$( "#P4" ).html("Este projeto em seu segundo ciclo, está interligado a uma proposta da Rede Universitária Latino-Americana – UniRILA e possui articulação com o GT dos países da Rota Bioceânica. Constitui-se por uma equipe de pesquisadores vinculados a três Instituições de Ensino Superior.");
	}
	if (item == "Es") { 
		$( "#Titulo" ).html("El Observatorio Interdisciplinario de la Ruta Bioceánica.");
		$( "#P1" ).html("La creación del Observatorio Interdisciplinario de la Ruta Bioceánica tiene como objetivo organizar información e indicadores, capaces de servir como subsidios al ámbito público y privado, así como a la sociedad en general, en la promoción de la transferencia de conocimiento a través de la producción de información. Éstos pueden servir para la toma de decisiones además de contribuir a la atracción de inversiones, orientando políticas públicas municipales y acciones privadas encaminadas al conocimiento efectivo de las leyes, normas, investigaciones realizadas y, también, la reducción de las desigualdades con un aumento de las ofertas de empleo, formación de capital humano, tan necesario para la implementación de la Ruta Bioceánica.");
		$( "#P2" ).html("Somos un grupo que acoge la diversidad y reúne a investigadores de diferentes niveles de formación, desde jóvenes relacionados con la iniciación científica (PIBIC y PIBIC-Jr) hasta investigadores de posgrado o relacionados con entidades de financiación de la investigación.");
		$( "#P3" ).html("El concepto de 'Observatorio' implica la concepción de un centro de investigación que pueda convertirse en un espacio de cooperación entre organizaciones de la sociedad civil, instituciones académicas y agencias públicas, nacionales e internacionales.");
		$( "#P4" ).html("Este proyecto, en su segundo ciclo, está vinculado a una propuesta de la Red Universitaria Latinoamericana – UniRILA y está vinculado a los GT de los países de la Ruta Bioceánica. Está formado por un equipo de investigadores vinculados a tres Instituciones de Educación Superior.");	
	}
	if (item == "En") { 
		$( "#Titulo" ).html("The Interdisciplinary Observatory for the Bioceanic Route.");
		$( "#P1" ).html("The creation of the Interdisciplinary Observatory for the Bioceanic Route aims to organize information and indicators, capable of serving as subsidies for public and private spheres, as well as society in general in promoting the transfer of knowledge through the production of information. These can serve for decision-making as well as contributing to attracting investments, guiding municipal public policies and private actions aimed at effective knowledge of laws, standards, research carried out and, also, the reduction of inequalities with an increase in job offers, training of human capital, so necessary for the implementation of the Bioceanic Route.");
		$( "#P2" ).html("We are a group that welcomes diversity and brings together researchers at different levels of training, from young people related to scientific initiation (PIBIC and PIBIC-Jr) as well as postgraduate researchers or those related to research funding bodies.");
		$( "#P3" ).html("The concept of 'Observatory' involves the conception of a research center that could become a space for cooperation between civil society organizations, academic institutions and public agencies, national and international.");
		$( "#P4" ).html("This project, in its second cycle, is linked to a proposal from the Latin American University Network – UniRILA and is linked to the GT of the Bioceanic Route countries. It consists of a team of researchers linked to three Higher Education Institutions.");	
	}	*/
}

async function textoOQue(item) {
	console.log(item);
	menuAcessado = menusCnt1[1];
	//console.log(menuAcessado);
	$("#imgPonte").css("backgroundImage",  "");
	$("#imgPonte").css("height", "50px");
	$("#logo_lateral").css("display", "none");
	//$("#imgPonte").remove();
	let nomearquivo = "parag_portugues.txt";
	if (item == "Es") { 
		nomearquivo = "parag_espanhol.txt";
	}
	if (item == "En") { 
		nomearquivo = "parag_ingles.txt";
	}
	paragrafos = JSON.parse(await lerArquivoAjax(nomearquivo)); 
	console.log(paragrafos);
	$( "#Titulo" ).html(paragrafos["menu1_1"]);
	$( "#P1" ).html(paragrafos["menu1_1_P1"]);
	$( "#P2" ).html(paragrafos["menu1_1_P2"]);
	$( "#P3" ).html(paragrafos["menu1_1_P3"]);
	$( "#P4" ).html(paragrafos["menu1_1_P4"]);
	
	/*if (item == "Pt") { 
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
	}*/
}

async function textoFaz(item) {
	menuAcessado = menusCnt1[2];
	console.log(menuAcessado);
	$("#imgPonte").css("backgroundImage",  "");
	$("#imgPonte").css("height", "50px");	

	let nomearquivo = "parag_portugues.txt";
	if (item == "Es") { 
		nomearquivo = "parag_espanhol.txt";
	}
	if (item == "En") { 
		nomearquivo = "parag_ingles.txt";
	}
	paragrafos = JSON.parse(await lerArquivoAjax(nomearquivo)); 
	console.log(paragrafos);
	$( "#Titulo" ).html(paragrafos["menu1_2"]);
	$( "#P1" ).html(paragrafos["menu1_2_P1"]);
	$( "#P2" ).html(paragrafos["menu1_2_P2"]);
	$( "#P3" ).html(paragrafos["menu1_2_P3"]);
	$( "#P4" ).html(paragrafos["menu1_2_P4"]);

	/*if (item == "Pt") { 
		$( "#Titulo" ).html("O QUE FAZ (Competências)");
		$( "#P1" ).html("O Observatório tem o potencial de desempenhar um papel importante no processo de tomada de decisões, na formulação de políticas públicas e estruturação de ações privadas, e na atração de investimentos. Além disso, é importante mencionar sua aptidão para a formação do capital humano, crucial para implantação e operacionalização da Rota Bioceânica. Neste espaço interdisciplinar de interação e integração, com base na investigação social, será realizada a sistematização de conhecimento, especialmente nas áreas educativas, culturais, políticas, jurídicas, turísticas e econômicas, visando o desenvolvimento territorial sustentável.");
		$( "#P2" ).html("As linhas de pesquisa e estratégias de atuação do Observatório estão sendo alinhadas aos eixos temáticos da UniRILA (Quadro 1), da mesma forma que tomam como base as proposições dos Objetivos do Desenvolvimento Sustentável - ODS, da Agenda 2030, diretamente os ODS: 8 - Trabalho decente e crescimento econômico; 9 - Indústria, inovação e infraestrutura; 11 - Cidades e comunidades sustentáveis; 14 - Vida na água; 15 - Vida terrestre; 16 - Paz, justiça e instituições eficazes; e, 17 - Parcerias e meios de implementação. Como o conjunto de ODS envolve metas e indicadores que contemplam de forma integrada as três dimensões do desenvolvimento sustentável (ambiental, social e econômica), todos acabam sendo tocados, de alguma forma.");
		$( "#P3" ).html("");
		$( "#P4" ).html("");
	}
	if (item == "Es") { 
		$( "#Titulo" ).html("QUÉ HACES (Habilidades)");
		$( "#P1" ).html("El Observatorio tiene el potencial de desempeñar un papel importante en el proceso de toma de decisiones, en la formulación de políticas públicas y estructuración de acciones privadas, y en la atracción de inversiones. Además, es importante mencionar su aptitud para la formación de capital humano, crucial para la implementación y operacionalización de la Ruta Bioceánica. En este espacio interdisciplinario de interacción e integración, basado en la investigación social, se realizará la sistematización de conocimientos, especialmente en los ámbitos educativo, cultural, político, jurídico, turístico y económico, apuntando al desarrollo territorial sostenible.");
		$( "#P2" ).html("Las líneas de investigación y estrategias de acción del Observatorio se están alineando con los ejes temáticos de UniRILA (Tabla 1), de la misma manera que se basan en las propuestas de los Objetivos de Desarrollo Sostenible - ODS, de la Agenda 2030, directamente los ODS: 8 - Trabajo decente y crecimiento económico; 9 - Industria, innovación e infraestructura; 11 - Ciudades y comunidades sostenibles; 14 - Vida en el agua; 15 - Vida terrestre; 16 - Paz, justicia e instituciones eficaces; y, 17 - Asociaciones y medios de implementación. Como el conjunto de ODS involucra metas e indicadores que cubren las tres dimensiones del desarrollo sostenible (ambiental, social y económica) de manera integrada, todos terminan siendo tocados de alguna manera.");
		$( "#P3" ).html("");
		$( "#P4" ).html("");	}
	if (item == "En") { 
		$( "#Titulo" ).html("WHAT IT DOES (Skills)");
		$( "#P1" ).html("The Observatory has the potential to play an important role in the decision-making process, in formulating public policies and structuring private actions, and in attracting investments. Furthermore, it is important to mention its aptitude for the formation of human capital, crucial for the implementation and operationalization of the Bioceânica Route. In this interdisciplinary space of interaction and integration, based on social research, the systematization of knowledge will be carried out, especially in the educational, cultural, political, legal, tourist and economic areas, aiming at sustainable territorial development.");
		$( "#P2" ).html("The Observatory's lines of research and action strategies are being aligned with the thematic axes of UniRILA (Table 1), in the same way that they are based on the propositions of the Sustainable Development Goals - SDGs, of the 2030 Agenda, directly the SDGs: 8 - Decent work and economic growth; 9 - Industry, innovation and infrastructure; 11 - Sustainable cities and communities; 14 - Life in the water; 15 - Terrestrial life; 16 - Peace, justice and effective institutions; and, 17 - Partnerships and means of implementation. As the set of SDGs involves goals and indicators that cover the three dimensions of sustainable development (environmental, social and economic) in an integrated way, they all end up being touched in some way.");
		$( "#P3" ).html("");
		$( "#P4" ).html("");	
	}*/
}

async function textoEquipeTecnica(item) {
	menuAcessado = menusCnt1[3];
	console.log(menuAcessado);
	$("#imgPonte").css("backgroundImage",  "");
	$("#imgPonte").css("height", "50px");	

	let nomearquivo = "parag_portugues.txt";
	if (item == "Es") { 
		nomearquivo = "parag_espanhol.txt";
	}
	if (item == "En") { 
		nomearquivo = "parag_ingles.txt";
	}
	paragrafos = JSON.parse(await lerArquivoAjax(nomearquivo)); 
	console.log(paragrafos);
	$( "#Titulo" ).html(paragrafos["menu1_3"]);
	$( "#P1" ).html(paragrafos["menu1_3_P1"]);
	$( "#P2" ).html(paragrafos["menu1_3_P2"]);
	$( "#P3" ).html(paragrafos["menu1_3_P3"]);
	$( "#P4" ).html(paragrafos["menu1_3_P4"]);

	/*if (item == "Pt") { 
		$( "#Titulo" ).html("EQUIPE TÉCNICA ");
		$( "#P1" ).html("A equipe técnica responsável pela produção do website está sob a responsabilidade dos pesquisadores da área de computação do Instituto Federal de Mato Grosso do Sul - IFMS, que também estão vinculados ao Grupo de Pesquisa OIDL.");
		$( "#P2" ).html("");
		$( "#P3" ).html("");
		$( "#P4" ).html("");
	}
	if (item == "Es") { 
		$( "#Titulo" ).html("EQUIPO TECNICO");
		$( "#P1" ).html("El equipo técnico responsable de la realización del sitio web está bajo la responsabilidad de investigadores informáticos del Instituto Federal de Mato Grosso do Sul - IFMS, que también están vinculados al Grupo de Investigación OIDL.");
		$( "#P2" ).html("");
		$( "#P3" ).html("");
		$( "#P4" ).html("");	}
	if (item == "En") { 
		$( "#Titulo" ).html("TECHNICAL TEAM ");
		$( "#P1" ).html("The technical team responsible for producing the website is under the responsibility of computer researchers from the Federal Institute of Mato Grosso do Sul - IFMS, who are also linked to the OIDL Research Group.");
		$( "#P2" ).html("");
		$( "#P3" ).html("");
		$( "#P4" ).html("");	
	}	*/

}




async function mudarIdioma(item) {
	//alert(item); 
	//PORTUGUES
	let  menus;
	let nomearquivo = "menus"+item+".txt";	
	console.log("menusAcessado:");
	console.log(menuAcessado);
	/*	
	console.log( nomearquivo );
	let lines = lerArquivoAjax(nomearquivo);
	
	await lines.then( (value) => {	  
		//console.log(value);  	
	  menus = JSON.parse(value);		
	  
	});
	*/
	linguagemAtual = item;
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

	//TODO MUDAR O RODAPÉ DE ACORDO COM A LINGUA
	//	PORTUGUES	
	if (item == "Pt") { 
		//console.log(document.documentElement.lang);
		$("html").attr("lang", "pt-BR");		
	    $( "#lingua_pt").attr("src", "./img/band_pt_sel.jpg");
	    $( "#lingua_es").attr("src",  "./img/band_es.jpg");
	    $( "#lingua_en").attr("src", "./img/band_en.jpg");
		$( "#menuFundo").css("backgroundColor",  "#0F371E");
	  	$( "#rodape").css("backgroundColor" , "#0F371E");
	}
	//ESPANHOL
	if (item == "Es") { 		  
		$("html").attr("lang", "es-ES");
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
		$("html").attr("lang", "en-US");	
		$( "#lingua_pt").attr("src", "./img/band_pt.jpg");
		$( "#lingua_es").attr("src", "./img/band_es.jpg");
		$( "#lingua_en").attr("src", "./img/band_en_sel.jpg");
		$( "#menuFundo").css("backgroundColor", "#063172");
		$( "#rodape").css("backgroundColor", "#063172");
		//document.querySelector("header").style.backgroundColor = "#063172";
		//document.querySelector("footer").style.backgroundColor = "#063172";	  
	}
	if (menuAcessado == "principal") {
		textoPrincipal(item);	
	}	
	if (menuAcessado == "menu1_1") {
		textoOQue(item);
	}
	if (menuAcessado == "menu1_2") {
		textoFaz(item);
	}
	if (menuAcessado == "menu1_3") {
		textoEquipeTecnica(item);
	}

}

