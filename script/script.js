//variavel global para identificar menu acessado
const menusCnt = "principal";
/*
const menusCnt1 = ["menu1", "menu1_1", "menu1_2", "menu1_3", "menu1_4", "menu1_5", 
								"menu1_6", "menu1_7", "menu1_8"];
const menusCnt2 = ["menu2", "menu2_1", "menu2_2","menu2_3", "menu2_4","menu2_5", "menu2_6","menu2_7", "menu2_8", "menu2_9"];
const menusCnt3 = ["menu3", "menu3_1", "menu3_7"];
const menusCnt4 = ["menu4", "menu4_1", "menu4_8"];
const menusCnt5 = ["menu5", "menu5_1", "menu5_5"];
const menusCnt6 = ["menu6", "menu6_1", "menu6_3"];
const menusCnt7 = ["menu7", "menu7_1", "menu7_2"];
const menusCnt8 = ["menu8", "menu8_1", "menu8_13"];
*/
var menuAcessado = menusCnt; //inicia com o menu principal 
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

	reader.readAsText(new Blob([fileName], { type: "text/plain" }));

	reader.onload = function () {
		//console.log(reader.result);
		console.log('leu');
		var lines = reader.result.split('\n');
		console.log(lines);
		return lines;
	};

	reader.onerror = function () {
		console.log(reader.error);
		return reader.error;
	};
	return null;
}


function lerArquivoAjax(fileName) {
	let urlArq = "php/listarArq.php?filename=" + fileName;
	return Promise.resolve($.ajax({
		url: "php/listarArq.php?filename=" + fileName
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

function configPagSecundarias() {
	$("#imgPonte").css("backgroundImage", "");
	$("#imgPonte").css("height", "50px");
	$("#logo_lateral").css("display", "none");
	//$("#imgPonte").remove();
}

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
	$("#Titulo").html(paragrafos["principal"]);
	$("#P1").html(paragrafos["principal_P1"]);
	$("#P2").html(paragrafos["principal_P2"]);
	$("#P3").html(paragrafos["principal_P3"]);
	$("#P4").html(paragrafos["principal_P4"]);
}

async function textoOQue(item) {
	console.log(item);
	//menuAcessado = menusCnt1[1];
	//console.log(menuAcessado);
	configPagSecundarias();
	let nomearquivo = "parag_portugues.txt";
	if (item == "Es") {
		nomearquivo = "parag_espanhol.txt";
	}
	if (item == "En") {
		nomearquivo = "parag_ingles.txt";
	}
	paragrafos = JSON.parse(await lerArquivoAjax(nomearquivo));
	console.log(paragrafos);
	$("#Titulo").html(paragrafos["menu1_1"]);
	$("#P1").html(paragrafos["menu1_1_P1"]);
	$("#P2").html(paragrafos["menu1_1_P2"]);
	$("#P3").html(paragrafos["menu1_1_P3"]);
	$("#P4").html(paragrafos["menu1_1_P4"]);

}

async function textoFaz(item) {
	//menuAcessado = menusCnt1[2];
	//console.log(menuAcessado);
	configPagSecundarias();
	let nomearquivo = "parag_portugues.txt";
	if (item == "Es") {
		nomearquivo = "parag_espanhol.txt";
	}
	if (item == "En") {
		nomearquivo = "parag_ingles.txt";
	}
	paragrafos = JSON.parse(await lerArquivoAjax(nomearquivo));
	console.log(paragrafos);
	$("#Titulo").html(paragrafos["menu1_2"]);
	$("#P1").html(paragrafos["menu1_2_P1"]);
	$("#P2").html(paragrafos["menu1_2_P2"]);
	$("#P3").html(paragrafos["menu1_2_P3"]);
	$("#P4").html(paragrafos["menu1_2_P4"]);

}

async function textoEquipeTecnica(item) {
	//menuAcessado = menusCnt1[3];
	//console.log(menuAcessado);
	configPagSecundarias();
	let nomearquivo = "parag_portugues.txt";
	if (item == "Es") {
		nomearquivo = "parag_espanhol.txt";
	}
	if (item == "En") {
		nomearquivo = "parag_ingles.txt";
	}
	paragrafos = JSON.parse(await lerArquivoAjax(nomearquivo));
	console.log(paragrafos);
	$("#Titulo").html(paragrafos["menu1_3"]);
	$("#P1").html(paragrafos["menu1_3_P1"]);
	$("#P2").html(paragrafos["menu1_3_P2"]);
	$("#P3").html(paragrafos["menu1_3_P3"]);
	$("#P4").html(paragrafos["menu1_3_P4"]);
}

async function textoMenu(menu) {
	menuAcessado = menu;
	console.log(menuAcessado);
	//console.log(menu);	
	let nomearquivo = "parag_portugues.txt";
	if (linguagemAtual == "Es") {
		nomearquivo = "parag_espanhol.txt";
	}
	if (linguagemAtual == "En") {
		nomearquivo = "parag_ingles.txt";
	}
	paragrafos = JSON.parse(await lerArquivoAjax(nomearquivo));
	console.log(paragrafos);
	if (menuAcessado != "principal") {
		//EXCLUIR TODOS O CONTEUDO DA DIV E CRIAR NOVAMENTE
		configPagSecundarias();
		$(".section-content").html("");
		$(".section-content").append('<h2 id="Titulo" style="color:0F371E">  </h2>');
		$(".section-content").append('<p id="P1" class="text-muted"> </p>');
		$(".section-content").append('<p id="P2" class="text-muted"> </p>');
		$(".section-content").append('<p id="P3" class="text-muted"> </p>');
		$(".section-content").append('<p id="P4" class="text-muted"> </p>');
	}
	$("#Titulo").html(paragrafos[menu]);
	$("#P1").html(paragrafos[menu + "_P1"]);
	$("#P1").css("textAlign", "justify");
	$("#P2").html(paragrafos[menu + "_P2"]);
	$("#P2").css("textAlign", "justify");
	$("#P3").html(paragrafos[menu + "_P3"]);
	$("#P3").css("textAlign", "justify");
	$("#P4").html(paragrafos[menu + "_P4"]);
	$("#P4").css("textAlign", "justify");
	//EQUIPE TECNICA
	if (menuAcessado == "menu1_3") {
		$(".section-content").append('		<div class="container">	' +
			'			<div class="row" style="border-bottom:dashed  black 1px; ">' +
			'			  <div class="col" >' +
			'				<img id="menu1_3_tab_img_1" alt="foto" src="" />' +
			'			  </div>' +
			'			  <div id="menu1_3_tab_txt_1" class="col" >' +
			'			  </div>' +
			'			</div>' +
			'			<div class="row" style="border-bottom:dashed  black 1px; padding-top: 10px;">' +
			'			  <div class="col">' +
			'				<img id="menu1_3_tab_img_2" alt="foto" src="" />' +
			'			  </div>' +
			'			  <div id="menu1_3_tab_txt_2" class="col">' +
			'			  </div>' +
			'			</div>' +
			'			<div class="row" style="border-bottom:dashed black 1px; padding-top: 10px;">' +
			'			  <div class="col">' +
			'				<img id="menu1_3_tab_img_3" alt="foto" src="" />' +
			'			  </div>' +
			'			  <div id="menu1_3_tab_txt_3" class="col">' +
			'			  </div>' +
			'			</div>' +
			'		</div>');
		$("#menu1_3_tab_img_1").attr('src', paragrafos['menu1_3_tab_img_1']);

		$("#menu1_3_tab_txt_1").html(paragrafos['menu1_3_tab_txt_1']);
		//acrescentado esta linha porque o texto da tag <a> dava erro na funcao html e append
		$("#menu1_3_tab_txt_1").append("<a href='" + paragrafos['menu1_3_tab_link_1'] + "'> " + paragrafos['menu1_3_tab_link_1'] + " </a>");

		$("#menu1_3_tab_img_2").attr('src', paragrafos['menu1_3_tab_img_2']);
		$("#menu1_3_tab_txt_2").html(paragrafos['menu1_3_tab_txt_2']);
		//acrescentado esta linha porque o texto da tag <a> dava erro na funcao html e append
		$("#menu1_3_tab_txt_2").append("<a href='" + paragrafos['menu1_3_tab_link_2'] + "'> " + paragrafos['menu1_3_tab_link_2'] + " </a>");

		$("#menu1_3_tab_img_3").attr('src', paragrafos['menu1_3_tab_img_3']);
		$("#menu1_3_tab_txt_3").html(paragrafos['menu1_3_tab_txt_3']);
		//acrescentado esta linha porque o texto da tag <a> dava erro na funcao html e append
		$("#menu1_3_tab_txt_3").append("<a href='" + paragrafos['menu1_3_tab_link_3'] + "'> " + paragrafos['menu1_3_tab_link_3'] + " </a>");

	}

}



async function mudarIdioma(item) {
	//alert(item); 
	//PORTUGUES
	linguagemAtual = item;
	let menus;
	let nomearquivo = "menus" + item + ".txt";
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

	menus = JSON.parse(await lerArquivoAjax(nomearquivo));
	//console.log(Object.keys(menus));
	$("#menu1").html(menus["menu1"]);
	$("#menu1_1").html(menus["menu1_1"]);
	$("#menu1_2").html(menus["menu1_2"]);
	$("#menu1_3").html(menus["menu1_3"]);
	$("#menu1_4").html(menus["menu1_4"]);
	$("#menu1_5").html(menus["menu1_5"]);
	$("#menu1_6").html(menus["menu1_6"]);
	$("#menu1_7").html(menus["menu1_7"]);
	$("#menu1_8").html(menus["menu1_8"]);

	$("#menu2").html(menus["menu2"]);
	$("#menu2_1").html(menus["menu2_1"]);
	$("#menu2_2").html(menus["menu2_2"]);
	$("#menu2_3").html(menus["menu2_3"]);
	$("#menu2_4").html(menus["menu2_4"]);
	$("#menu2_5").html(menus["menu2_5"]);
	$("#menu2_6").html(menus["menu2_6"]);
	$("#menu2_7").html(menus["menu2_7"]);
	$("#menu2_8").html(menus["menu2_8"]);
	$("#menu2_9").html(menus["menu2_9"]);

	$("#menu3").html(menus["menu3"]);
	$("#menu3_1").html(menus["menu3_1"]);
	$("#menu3_2").html(menus["menu3_2"]);
	$("#menu3_3").html(menus["menu3_3"]);
	$("#menu3_4").html(menus["menu3_4"]);
	$("#menu3_5").html(menus["menu3_5"]);
	$("#menu3_6").html(menus["menu3_6"]);
	$("#menu3_7").html(menus["menu3_7"]);

	$("#menu4").html(menus["menu4"]);
	$("#menu4_1").html(menus["menu4_1"]);
	$("#menu4_2").html(menus["menu4_2"]);
	$("#menu4_3").html(menus["menu4_3"]);

	$("#menu5").html(menus["menu5"]);
	$("#menu5_1").html(menus["menu5_1"]);
	$("#menu5_2").html(menus["menu5_2"]);
	$("#menu5_3").html(menus["menu5_3"]);
	$("#menu5_4").html(menus["menu5_4"]);
	$("#menu5_5").html(menus["menu5_5"]);

	$("#menu6").html(menus["menu6"]);
	$("#menu6_1").html(menus["menu6_1"]);
	$("#menu6_2").html(menus["menu6_2"]);
	$("#menu6_3").html(menus["menu6_3"]);

	$("#menu7").html(menus["menu7"]);
	$("#menu7_1").html(menus["menu7_1"]);
	$("#menu7_2").html(menus["menu7_2"]);

	$("#menu8").html(menus["menu8"]);
	$("#menu8_1").html(menus["menu8_1"]);
	$("#menu8_2").html(menus["menu8_2"]);
	$("#menu8_3").html(menus["menu8_3"]);
	$("#menu8_4").html(menus["menu8_4"]);
	$("#menu8_5").html(menus["menu8_5"]);
	$("#menu8_6").html(menus["menu8_6"]);
	$("#menu8_7").html(menus["menu8_7"]);
	$("#menu8_8").html(menus["menu8_8"]);
	$("#menu8_9").html(menus["menu8_9"]);
	$("#menu8_10").html(menus["menu8_6"]);
	$("#menu8_11").html(menus["menu8_7"]);
	$("#menu8_12").html(menus["menu8_8"]);
	$("#menu8_13").html(menus["menu8_9"]);

	//TODO MUDAR O RODAPÉ DE ACORDO COM A LINGUA
	//	PORTUGUES	
	if (item == "Pt") {
		//console.log(document.documentElement.lang);
		$("html").attr("lang", "pt-BR");
		$("#lingua_pt").attr("src", "./img/band_pt_sel.jpg");
		$("#lingua_es").attr("src", "./img/band_es.jpg");
		$("#lingua_en").attr("src", "./img/band_en.jpg");
		$("#menuFundo").css("backgroundColor", "#63a84a");
		$("#rodape").css("backgroundColor", "#63a84a");
	}
	//ESPANHOL
	if (item == "Es") {
		$("html").attr("lang", "es-ES");
		$("#lingua_pt").attr("src", "./img/band_pt.jpg");
		$("#lingua_es").attr("src", "./img/band_es_sel.jpg");
		$("#lingua_en").attr("src", "./img/band_en.jpg");
		$("#menuFundo").css("backgroundColor", "#61130E");
		$("#rodape").css("backgroundColor", "#61130E");
		//document.querySelector("header").style.backgroundColor = "#67130E";
		//document.querySelector("footer").style.backgroundColor = "#67130E";	  
	}
	//INGLES
	if (item == "En") {
		$("html").attr("lang", "en-US");
		$("#lingua_pt").attr("src", "./img/band_pt.jpg");
		$("#lingua_es").attr("src", "./img/band_es.jpg");
		$("#lingua_en").attr("src", "./img/band_en_sel.jpg");
		$("#menuFundo").css("backgroundColor", "#063172");
		$("#rodape").css("backgroundColor", "#063172");
		//document.querySelector("header").style.backgroundColor = "#063172";
		//document.querySelector("footer").style.backgroundColor = "#063172";	  
	}
	textoMenu(menuAcessado);
	/*
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
	*/
}

