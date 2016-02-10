//функция выводит ячейки "Профилактика беременным" и "Профилактика новорожденным"
function appendMenuPVT(){
//если в стартовом окне что-то есть - очистить стартовое окно
	while(start_window.children.length){
		start_window.firstChild.remove();
		}
//вернуть размер окна к первоначальному
	start_window.style.height = "563px";	
	
	var arr = ["<b>ПРОФИЛАКТИКА БЕРЕМЕННЫМ И НОВОРОЖДЕННЫМ</b>","<b>ВЕДЕНИЕ РОДОВ</b>"];
	
	var table_Menu = document.createElement("table");
		table_Menu.id = "table_MenuPVT";
		table_Menu.style.cssText = "opacity:0";
	var tr = document.createElement("tr");
	for(var i=0;i<2;i++){
		var td= document.createElement("td");
		td.innerHTML = arr[i];
		td.addEventListener("mouseover",function(){ if(this.style.backgroundColor!="red"){this.style.background = "#FFFAF0"; }});
		td.addEventListener("mouseout",function(){ if(this.style.backgroundColor!="red"){this.style.background = ""; }});
		td.addEventListener("mousedown",function(){ if(this.style.backgroundColor!="red")this.style.border = "4px inset";});
		td.addEventListener("mouseup",function(){ if(this.style.backgroundColor!="red")this.style.border = "";});
		
		if(i==0){
			td.id = "td_Pregnant";
			td.onclick = showTabPregnant;//показать таблицу для выбора вариантов вводных данных о беременной
		}else{
			td.id = "td_Childbirth";
			td.onclick = showTabChildbirth;//показать таблицу для ведения родов
		}
		
		tr.appendChild(td);
	}
	
	table_Menu.appendChild(tr);
	
	start_window.appendChild(table_Menu);	

//плавное появление таблицы table_Menu	
	var x = setTimeout(function X(){
		if(table_Menu.style.opacity!=1){
			table_Menu.style.opacity = parseFloat(table_Menu.style.opacity)+0.05+"";
			setTimeout(X,50);
		}else{
			clearTimeout(x);		
		}
	},100);	
}
		
		
//функция выводит ячейки графы "Срок беременности"
function showTabPregnant(event){
//удалить все элементы ниже ячеек "Профилактика беременным и новорожденным" и "Ведение родов" если они есть	
	while(start_window.children.length!=1){
				start_window.lastChild.remove();
				}
	start_window.style.height = "563px";
	td_Pregnant.style.background = "red";//закрасить ячейку красным
	td_Childbirth.style.background = "linear-gradient(to top left, #CD853F , #FFDEAD)";//вернуть цвет соседней ячейки на коричневый
	//создание блока "Срок беременности"
	var divNeo = document.createElement("div");
			divNeo.id = "divNeo";
			divNeo.innerHTML = "<b>СРОК БЕРЕМЕННОСТИ</b>";
		start_window.appendChild(divNeo);
	//создание ячеек графы "Срок беременности"	
	var divNeoTab =document.createElement("table");
			divNeoTab.id = "divNeoTab";
		
		var tr = document.createElement("tr");
			
		var arr = ["<b>0 - 8 недель</b>","<b>8 - 24 недель</b>","<b>24 и больше недель</b>","<b>роды в ходу</b>"];
		
		for(var i=0;i<4;i++){
			var td = document.createElement("td");
			td.innerHTML = arr[i];
			td.onclick = flash;//функция закрашивания кликнутой ячейки и снятия закраски с остальных ячеек (находится в файле "functions for satrt ART")
			td.addEventListener("mouseover",function(){ if(this.style.backgroundColor!="red"){this.style.background = "#FFFAF0"; }});
			td.addEventListener("mouseout",function(){ if(this.style.backgroundColor!="red"){this.style.background = ""; }});
			td.addEventListener("mousedown",function(){ if(this.style.backgroundColor!="red")this.style.border = "2px inset";});
		    td.addEventListener("mouseup",function(){ if(this.style.backgroundColor!="red")this.style.border = "";});
			
			if(i<3){
				td.addEventListener("click",showART);//вызов функции создания блока "Принимает ли АРТ?" и таблицы выбора ответов на вопрос
			}else{
				td.addEventListener("click",showExtreme);//вызов функции для профилактики при ВИЧ+, установленном непосредственно в родах
			}
		    
		    tr.appendChild(td);
	    }
		
		divNeoTab.appendChild(tr);
		start_window.appendChild(divNeoTab);
};

//функция выводит ячейки графы "Принимает ли АРТ"
function showART(event){
//удалить нижележащие элементы 
	while(divNeoTab.nextSibling){
			divNeoTab.nextSibling.remove();
		}
	start_window.style.height = "563px";
//создать ячейку "Принимает ли АРТ?"
	var divART = document.createElement("div");
		divART.id = "divART";
			divART.innerHTML = "<b>ПРИНИМАЕТ ЛИ АРТ?</b>";
		start_window.appendChild(divART);
//создать таблицу вариантов ответа "да/нет"	
	var divARTTab = document.createElement("table");
			divARTTab.id = "divARTTab";
		
		var tr = document.createElement("tr");
		
		var arr = ["<b>да</b>","<b>нет</b>"];
		for(var i=0;i<2;i++){
			var td = document.createElement("td");
				td.innerHTML = arr[i];
				td.onclick = flash;//функция закрашивания кликнутой ячейки и снятия закраски с остальных ячеек (находится в файле "functions for start ART")
				td.addEventListener("mouseover",function(){ if(this.style.backgroundColor!="red"){this.style.background = "#FFFAF0"; }});
				td.addEventListener("mouseout",function(){ if(this.style.backgroundColor!="red"){this.style.background = ""; }});
				td.addEventListener("mousedown",function(){ if(this.style.backgroundColor!="red")this.style.border = "2px inset";});
				td.addEventListener("mouseup",function(){ if(this.style.backgroundColor!="red")this.style.border = "";});
				
				if(i==0){
					td.addEventListener("click",showEfavirenz);
				}else{
					td.addEventListener("click",showCD4);
					td.id = "ART_No"; //назначить отдельный идентификатор на ячейку "нет" в таблице ответов на блок "Принимает ли АРТ?"
				}
			tr.appendChild(td);
		}
		divARTTab.appendChild(tr);
		start_window.appendChild(divARTTab);
}

//функция выводит ячейки графы "Принимает ли эфавиренц"
function showEfavirenz(event){
//если есть нижележащие элементы - удалить их
	while(divARTTab.nextSibling){
		divARTTab.nextSibling.remove();
		}
//вернуть размер окна к исходному
	start_window.style.height = "563px";
//создать блок "Принимает ли эфавиренц?"
	var divEf = document.createElement("div");
		divEf.id = "divEf";
		divEf.innerHTML = "<b>ПРИНИМАЕТ ЛИ ЭФАВИРЕНЦ?</b>";
		start_window.appendChild(divEf);	
//cоздать таблицу выбора ответов "да/нет"		
	var divEfTab = document.createElement("table");
			divEfTab.id = "divEfTab";
		
		var tr = document.createElement("tr");
		
		var arr = ["<b>да</b>","<b>нет</b>"];
		
		for(var i=0;i<2;i++){
			var td = document.createElement("td");			
				td.onclick = flash;//функция закрашивания кликнутой ячейки и снятия закраски с остальных ячеек (находится в файле "functions for satrt ART")
				td.addEventListener("click",showCD4);
				td.addEventListener("mouseover",function(){ if(this.style.backgroundColor!="red"){this.style.background = "#FFFAF0"; }});
				td.addEventListener("mouseout",function(){ if(this.style.backgroundColor!="red"){this.style.background = ""; }});
				td.addEventListener("mousedown",function(){ if(this.style.backgroundColor!="red")this.style.border = "2px inset";});
				td.addEventListener("mouseup",function(){ if(this.style.backgroundColor!="red")this.style.border = "";});
				td.innerHTML = arr[i];
		tr.appendChild(td);
		}
		
		divEfTab.appendChild(tr);
		start_window.appendChild(divEfTab);	
}

//функция выводит ячейки графы "Уровень СД4-клеток"
function showCD4(event){
//создать блок "Уровень СД4-клеток"
	var divCD4 = document.createElement("div");
		divCD4.id = "divCD4";
		divCD4.innerHTML = "<b>УРОВЕНЬ СД-4 КЛЕТОК</b>";

//если клик на ячейке "нет" в графе "Принимает ли АРТ?"
	if(event.currentTarget.id == "ART_No"){
		//если есть элементы ниже divARTTab -удалить их
		while(divARTTab.nextSibling){
			divARTTab.nextSibling.remove();
		}
		// возвратить размер окна к исходному
		start_window.style.height = "563px";
				
	}else{//если клик на ячейках "да/нет" в графе "Принимает ли эфавиренц?" 
		//если есть элементы ниже divEfTab -удалить их	
			while(divEfTab.nextSibling){
				divEfTab.nextSibling.remove();
			}
		// выводить ячейку "Уровень СД4 клеток" под ячейкой "Принимает ли эфавиренц?"
			divCD4.style.top = " 280px";				
		}
		
		start_window.appendChild(divCD4);

//создать таблицу выбора уровня СД4-клеток	
	var divCD4Tab =document.createElement("table");
			divCD4Tab.id = "divCD4Tab";
		var tr = document.createElement("tr");
		
		var arr = ["<b>>350 кл</b>","<b>200-350 кл</b>","<b><200кл</b>","<b>неизвестно</b>"];
		for(var i=0;i<4;i++){
			var td = document.createElement("td");
				td.onclick = flash;//функция закрашивания кликнутой ячейки и снятия закраски с остальных ячеек (находится в файле "functions for start ART")
				td.innerHTML = arr[i];
				td.addEventListener("click",showVirusWeight);
				td.addEventListener("mouseover",function(){ if(this.style.backgroundColor!="red"){this.style.background = "#FFFAF0"; }});
				td.addEventListener("mouseout",function(){ if(this.style.backgroundColor!="red"){this.style.background = ""; }});
				td.addEventListener("mousedown",function(){ if(this.style.backgroundColor!="red")this.style.border = "2px inset";});
				td.addEventListener("mouseup",function(){ if(this.style.backgroundColor!="red")this.style.border = "";});
			tr.appendChild(td);
		}
		
		divCD4Tab.appendChild(tr);
		
		if(event.currentTarget.id != "ART_No"){//если клик на ячейке "да" в графе "Принимает ли АРТ?"
			divCD4Tab.style.top = " 267px";
			}
		
		start_window.appendChild(divCD4Tab);
}

//функция выводит ячейки графы "Вирусная нагрузка"
function showVirusWeight(event){
	var divVirus = document.createElement("div");
		divVirus.id = "divVirus";
		divVirus.innerHTML = "<b>ВИРУСНАЯ НАГРУЗКА</b>";
//если есть элементы ниже divCD4Tab - удалить их	
	while(divCD4Tab.nextSibling){
		divCD4Tab.nextSibling.remove();
		}
//если присутствует графа "Принимает ли эфавиренц" 
	if(document.getElementById("divEf")){		
		divVirus.style.cssText = "top:340px;";
	}
// возвратить размер окна к исходному	
		start_window.style.height = "563px";
		
		start_window.appendChild(divVirus);
	
	var arr = ["<b><10000 копий</b>","<b>>10000 копий или неивестно</b>"];
	
	var divVirusTab = document.createElement("table");
		divVirusTab.id = "divVirusTab";
	
	var tr = document.createElement("tr");
	
	for(var i=0;i<2;i++){
		var td = document.createElement("td");
			td.onclick = flash;//функция закрашивания кликнутой ячейки и снятия закраски с остальных ячеек (находится в файле "functions for satrt ART")
			td.addEventListener("click",showAnemia);
			td.addEventListener("mouseover",function(){ if(this.style.backgroundColor!="red"){this.style.background = "#FFFAF0"; }});
			td.addEventListener("mouseout",function(){ if(this.style.backgroundColor!="red"){this.style.background = ""; }});
			td.addEventListener("mousedown",function(){ if(this.style.backgroundColor!="red")this.style.border = "2px inset";});
		    td.addEventListener("mouseup",function(){ if(this.style.backgroundColor!="red")this.style.border = "";});
			td.innerHTML = arr[i];
		
		tr.appendChild(td);
	}	
		divVirusTab.appendChild(tr);
		
		if(document.getElementById("divEf")){//если присутствует графа "Принимает ли эфавиренц"
			divVirusTab.style.top = "327px";			
		}
		
		start_window.appendChild(divVirusTab);	
}

//функция выводит ячейки графы "Уровень гемоглобина"
function showAnemia(event){
	var divAnemia = document.createElement("div");
		divAnemia.id = "divAnemia";
		divAnemia.innerHTML = "<b>УРОВЕНЬ ГЕМОГЛОБИНА</b>";
		
	while(divVirusTab.nextSibling){
		     divVirusTab.nextSibling.remove();
			}	
		
//если присутствует графа "Принимает ли эфавиренц"
	if(document.getElementById("divEf")){
		divAnemia.style.cssText = "top:400px;";
		}
// возвратить размер окна к исходному		
		start_window.style.height = "563px";
		
		start_window.appendChild(divAnemia);
		
		var arr = ["<b>>110г/л</b>","<b><110г/л</b>"];
		
		var divAnemiaTab = document.createElement("table");
			divAnemiaTab.id = "divAnemiaTab";
		
		var tr = document.createElement("tr");
		
		for(var i=0;i<2;i++){
			var td = document.createElement("td");
				td.onclick = flash;//функция закрашивания кликнутой ячейки и снятия закраски с остальных ячеек (находится в файле "functions for start ART")
				td.addEventListener("click",showResultPregnant);
				td.addEventListener("mouseover",function(){ if(this.style.backgroundColor!="red"){this.style.background = "#FFFAF0"; }});
				td.addEventListener("mouseout",function(){ if(this.style.backgroundColor!="red"){this.style.background = ""; }});
				td.addEventListener("mousedown",function(){ if(this.style.backgroundColor!="red")this.style.border = "2px inset";});
				td.addEventListener("mouseup",function(){ if(this.style.backgroundColor!="red")this.style.border = "";});
				td.innerHTML = arr[i];
			tr.appendChild(td);
		}
	//если присутствует графа "Принимает ли эфавиренц"	
		if(document.getElementById("divEf")){
			divAnemiaTab.style.cssText ="top: 387px";
		}
		
		divAnemiaTab.appendChild(tr);
		start_window.appendChild(divAnemiaTab);

}

//функция выводит результат подбора профилактики для беременной
function showResultPregnant(event){
//если есть что-то ниже ячеек "Уровень гемоглобина"/"<110г/л"/">110г/л" - удалить 
	while(divAnemiaTab.nextSibling){
		divAnemiaTab.nextSibling.remove();
			}
//если нет окна вывода информации - создать его	
	if(!document.getElementById("divResPreg")){	
		var divResPreg = document.createElement("div");
		divResPreg.id = "divResPreg";
		divResPreg.style.cssText = "width:0px; height:3px;left:420px;";
		start_window.appendChild(divResPreg);
//растягивается в ширину		
		var x = setTimeout(function X(){
				if(divResPreg.style.width!=="740px"){
					divResPreg.style.width = parseInt(divResPreg.style.width)+74+"px";
					divResPreg.style.left = parseInt(divResPreg.style.left)-38+"px";
					setTimeout(X,20);
				}else{
					clearTimeout(x);
					}
				},50);
//растягивается в высоту 		
		var y = setTimeout (function Y(){
				if(divResPreg.style.height!=="363px"){
					divResPreg.style.height = parseInt(divResPreg.style.height)+36+"px";
					if(parseInt(start_window.style.height)<parseInt("843.7px")){//растягивается в высоту стартовое окно
						start_window.style.height=parseInt(start_window.style.height)+28.7+"px";
					}
					setTimeout(Y,20);
				}else{
					clearTimeout(y);
					}
				},450);	
	}

	var Neo; 
	var ART;
	var Ef;
	var CD4;
	var Virus;
    var	Anemia;
	
	for(var i=0;i<4;i++){
		if(divNeoTab.children[0].children[i].style.backgroundColor == "red") Neo = i;
	    if(divCD4Tab.children[0].children[i].style.backgroundColor == "red") CD4 = i;
		}
	for(var j=0;j<2;j++){
		if(divARTTab.children[0].children[j].style.backgroundColor == "red") ART = j;
		if(divVirusTab.children[0].children[j].style.backgroundColor == "red") Virus = j;
		if(divAnemiaTab.children[0].children[j].style.backgroundColor == "red") Anemia = j;
		}
	if(document.getElementById("divEf")){
		for(var k=0;k<2;k++){
			if(divEfTab.children[0].children[k].style.backgroundColor == "red") Ef = k;
			}
	}else{
	    Ef = "";
		}
		
	var p = document.createElement("p");
	var str = ""+Neo+ART+Ef+CD4+Virus+Anemia;
	var arr_PVT = document.body.querySelectorAll(".PVT");
//вызвать функцию рассчитывающую курс профилактики для беременных	
	calculatePVT(str, arr_PVT);
};

//функция рассчитывает курс профилактики для беременной
function calculatePVT(str, arr){
	var p = document.createElement("p");
	if(str[1]=="1" && str[2]=="2"  ){//если не принимает пожизненно АРТ и СД4 меньше 200 кл
		if(str[4]=="0"){//если гемоглобин не ниже 110 г/л
			p.innerHTML = arr[0].innerHTML;
		}else{//если гемоглобин  ниже 110 г/л
			p.innerHTML = arr[1].innerHTML;
		}
	}else if(str[1]=="1" && str[2]=="1" ){//если не принимает пожизненно АРТ и СД4 oт 200 до 350 кл
		if(str[4]=="0"){//если гемоглобин не ниже 110 г/л
			p.innerHTML = arr[2].innerHTML;
		}else{//если гемоглобин  ниже 110 г/л
			p.innerHTML = arr[3].innerHTML;
		}
	}else if(str[1]=="0" && str[2]=="0"){//если принимает пожизненно АРТ и в схеме есть эфавиренц
		if(str[0]=="0"){//если срок беременности до 8 недель
			if(str[5]=="0"){//если гемоглобин  не ниже 110 г/л
				p.innerHTML = arr[4].innerHTML;	
			}else{//если гемоглобин  ниже 110 г/л
				p.innerHTML = arr[5].innerHTML;	
			}
		}else{//если срок беременности больше 8 недель
			if(str[5]=="0"){//если гемоглобин  не ниже 110 г/л
				p.innerHTML = arr[6].innerHTML;
			}else{//если гемоглобин  ниже 110 г/л
				p.innerHTML = arr[7].innerHTML;
			}
		}
	}else if(str[1]=="0" && str[2]=="1"){//если принимает пожизненно АРТ и в схеме нет эфавиренца
		   if(str[5]=="0") {
			   p.innerHTML = arr[8].innerHTML;
		   }else{
			   p.innerHTML = arr[9].innerHTML;
		   }
	}else if(str[1]=="1" && str[2]=="0" && str[4]=="0"){//если не принимает пожизненно АРТ и СД-4 больше 350 клеток и гемоглобин 110 г/л и выше
		if(str[3]=="1"){//если вирусная нагрузка выше 10000 копий или неивестно 
			p.innerHTML = arr[10].innerHTML;
		}else{//если вирусная нагрузка ниже 10000 копий 
			p.innerHTML = arr[11].innerHTML;
		}
	}else if(str[1]=="1" && str[2]=="0" && str[4]=="1"){//если не принимает пожизненно АРТ и СД-4 больше 350 клеток и гемоглобин меньше 110 г/л
		if(str[3]=="1"){//если вирусная нагрузка выше 10000 копий или неизвестно
			p.innerHTML = arr[12].innerHTML;
		}else{//если вирусная нагрузка ниже 10000 копий 
			p.innerHTML = arr[13].innerHTML;
		}
	}else if(str[0]=="0" || str[0]=="1"  && str[1]=="1" && str[2]=="3"){//если срок беременности до 24 недель, не принимает пожизненно АРТ и СД 4 клетки неизвестны
			p.innerHTML = arr[14].innerHTML;
	}else if(str[0]=="2" && str[1]=="1" && str[2]=="3"){//если срок беременности больше 24 недель, не принимает пожизненно АРТ и СД-4 неизвестно
		if(str[4]=="0"){//если гемоглобин выше 110г/л
			p.innerHTML = arr[15].innerHTML;
		}else{//если гемоглобин ниже 110г/л 
			p.innerHTML = arr[16].innerHTML;7777
		}
	}
	divResPreg.appendChild(p);
}

//функция рассчитывает курс профилактики в случае установления диагноза ВИЧ непосредственно в родах
function showExtreme(event){
	
//удалить все что находится ниже графы "Срок беременности"
	while(divNeoTab.nextSibling){
		divNeoTab.nextSibling.remove();
	}
	start_window.style.height = "563px";
	var divResPreg = document.createElement("div");
		divResPreg.id = "divResPreg";
		divResPreg.style.cssText = "width:0px; height:3px; padding:5px; background:white; border: 2px solid; border-radius:10px; overflow:auto; position:absolute;top:160px;left:420px;box-shadow:10px 8px 20px -1px black; opacity:1";
		start_window.appendChild(divResPreg);
//растягивается в ширину		
		var x = setTimeout(function X(){
				if(divResPreg.style.width!=="740px"){
					divResPreg.style.width = parseInt(divResPreg.style.width)+74+"px";
					divResPreg.style.left = parseInt(divResPreg.style.left)-38+"px";
					setTimeout(X,20);
				}else{
					clearTimeout(x);
					}
				},50);
//растягивается в высоту 		
		var y = setTimeout (function Y(){
				if(divResPreg.style.height!=="363px"){
					divResPreg.style.height = parseInt(divResPreg.style.height)+36+"px";
					
					setTimeout(Y,20);
				}else{
					clearTimeout(y);
					}
				},450);
		
		var p = document.createElement("p");		
		p.innerHTML = document.body.querySelectorAll(".PVT")[17].innerHTML;
		
		divResPreg.appendChild(p);
}

//функция выводит ячейки таблицы "Ведение родов"
function showTabChildbirth(event){
	//удалить все элементы ниже ячеек "Профилактика беременным и новорожденным" и "Ведение родов" если они есть	
	while(start_window.children.length!=1){
				start_window.lastChild.remove();
				}
	start_window.style.height = "563px";//вернуть размер окна к исходному
	td_Childbirth.style.background = "red";//закрасить ячейку красным
	td_Pregnant.style.background = "";//вернуть цвет соседней ячейки на коричневый
	
	var arrText = ["<b>БЕРЕМЕННАЯ ПОЛУЧАЛА ПРОФИЛАКТИКУ И ВИРУСНАЯ НАГРУЗКА В 3 ТРИМЕСТРЕ НИЖЕ 1000 КОПИЙ</b>","<b>БЕРЕМЕННАЯ ПОЛУЧАЛА ПРОФИЛАКТИКУ И ВИРУСНАЯ НАГРУЗКА В 3 ТРИМЕСТРЕ ВЫШЕ 1000 КОПИЙ</b>","<b>БЕРЕМЕННАЯ НЕ ПОЛУЧАЛА ПРОФИЛАКТИКУ</b>","<b>ПРЕЖДЕВРЕМЕННЫЕ РОДЫ В СРОКЕ ДО 34 НЕДЕЛЬ</b>"];
	
	var table = document.createElement("table");
     table.id = "childbirthTab";
	 	
	 for(var i=0;i<2;i++){
		var tr = document.createElement("tr");
		for(var j=0;j<2;j++){
			var td = document.createElement("td");
				td.onclick = showChildbirth;//функция вывода окна информации о ведении родов
				td.addEventListener("mouseover",function(){ this.style.background = "#FFFAF0"; });
				td.addEventListener("mouseout",function(){ this.style.background = ""; });
				td.addEventListener("mousedown",function(){ this.style.border = "2px inset";});
				tr.appendChild(td);
			}
		table.appendChild(tr);
		}
	
	var arrTD = table.querySelectorAll("td");
	
	for(var k=0;k<arrTD.length;k++){
		arrTD[k].innerHTML = arrText[k];
		}	
	
	start_window.appendChild(table);
}


//функция выводит окно информации о ведении родов
function showChildbirth(event){
	
	var divShowChildbirth = document.createElement("div");
		divShowChildbirth.id = "divShowChildbirth";
		divShowChildbirth.style.cssText = "width:0px; height:3px;left:420px;";
		
 //растягивается в ширину		
		var x = setTimeout(function X(){
				if(divShowChildbirth.style.width!=="740px"){
					divShowChildbirth.style.width = parseInt(divShowChildbirth.style.width)+74+"px";
					divShowChildbirth.style.left = parseInt(divShowChildbirth.style.left)-38+"px";
					setTimeout(X,20);
				}else{
					clearTimeout(x);
					}
				},50);
//растягивается в высоту 		
		var y = setTimeout (function Y(){
				if(divShowChildbirth.style.height!=="363px"){
					divShowChildbirth.style.height = parseInt(divShowChildbirth.style.height)+36+"px";
					setTimeout(Y,20);
				}else{
					clearTimeout(y);
					}
				},450);
				
				
	
	if(event.currentTarget==childbirthTab.children[0].children[0]){
		while(start_window.children.length!=1){//удалить все ниже ячеек "Профилактика беременным и новорожденным" и "Ведение родов"
				start_window.lastChild.remove();
				}
		start_window.appendChild(divShowChildbirth);
		calculateChildbirth(0);//вызвать функцию загрузки текста информации о ведении родов в окно divShowChildbirth
	}
	if(event.currentTarget==childbirthTab.children[0].children[1]){
		while(start_window.children.length!=1){//удалить все ниже ячеек "Профилактика беременным и новорожденным" и "Ведение родов"
				start_window.lastChild.remove();
				}
		start_window.appendChild(divShowChildbirth);
		calculateChildbirth(1);//вызвать функцию загрузки текста информации о ведении родов в окно divShowChildbirth
	}
	if(event.currentTarget==childbirthTab.children[1].children[0]){
		while(start_window.children.length!=1){//удалить все ниже ячеек "Профилактика беременным и новорожденным" и "Ведение родов"
				start_window.lastChild.remove();
				}
		start_window.appendChild(divShowChildbirth);
		calculateChildbirth(2);//вызвать функцию загрузки текста информации о ведении родов в окно divShowChildbirth
	}
	if(event.currentTarget==childbirthTab.children[1].children[1]){
		while(start_window.children.length!=1){//удалить все ниже ячеек "Профилактика беременным и новорожденным" и "Ведение родов"
				start_window.lastChild.remove();
				}
		start_window.appendChild(divShowChildbirth);		
		calculateChildbirth(3);//вызвать функцию загрузки текста информации о ведении родов в окно divShowChildbirth
	}
	
	
	
	

    
}	
	
// функция загрузки текста информации о ведении родов в окно divShowChildbirth	
function calculateChildbirth(arg){
//создать кнопку "Назад"
	var input = document.createElement("input");
	input.type = "button";
	input.value = "Назад";
	input.style.cssText="cursor:pointer;opacity:0; border-radius:5px; position:absolute;top:110px;left:50px";
	input.onclick = function(){
		divShowChildbirth.remove();//удалить окно вывода информации о ведении родов
		input.remove();
		showTabChildbirth();//загрузить таблицу "Ведение родов"
		};
	
	var p = document.createElement("p");
	
	if(arg==0){
		p.innerHTML = "<big> 1) Родоразрешение через естественные родовые пути соответственно алгоритма безопасного консервативного родоразрешения;<br> <br> 2) Продолжить АРТ во время родов соответственно курса профилактики для беременной;<br><br> 3) Проведение кожного контакта ребенка с матерью или отцом; <br> <br> 4) Назначение АРТ новорожденному соответственно клинического сценария (см. раздел <b>\"<u>Профилактика  беременным и новорожденным</u>\"</b>);<br><br> 5) Искусственное вкармливание новорожденного;<br><br> </big>";
	}
	if(arg==1){
		p.innerHTML = "<big> 1) Элективное плановое кесарево сечение на 38 неделе беременности до начала родовой деятельности и излития околоплодных вод;<br> <br> 2) Продолжить АРТ во время родов соответственно курса профилактики для беременной;<br><br> 3) Проведение кожного контакта ребенка с матерью или отцом; <br> <br> 4) Назначение АРТ новорожденному соответственно клинического сценария (см. раздел <b>\"<u>Профилактика  беременным и новорожденным</u>\"</b>);<br><br> 5) Искусственное вкармливание новорожденного;<br><br> </big>";
	}
	if(arg==2){
		p.innerHTML = "<big> 1) Назначить АРТ соответственно клинического сценария (см. вкладку <i>\"Роды в ходу\"</i> в разделе <b>\"<u>Профилактика  беременным и новорожденным</u>\"</b>);<br> <br> 2) Рекомендуется родоразрешение через естественные родовые пути соответственно алгоритма безопасного консервативного родоразрешения;<br><br> 3) В случае отсутствия активной родовой деятельности и целостности плодных оболочек можно рекомендовать кесарево сечение при безводном промежутке до 4 часов; <br> <br> 4) Назначается АРТ новорожденному соответственно клинического сценария (см. вкладку <i>\"Роды в ходу\"</i> в разделе <b>\"<u>Профилактика  беременным и новорожденным</u>\"</b>);<br><br> 5) Искусственное вкармливание новорожденного;<br><br> </big>";
	}
	if(arg==3){
		p.innerHTML = "<big> 1) При условии целостности околоплодного пузыря, открытии шейки матки до 4 см, рекомендуется токолитическая терапия для профилактики респираторного дистресса плода (<b>дексаметазон</b> 24 мг по схеме);<br> <br> 2) При излитии околоплодных вод, безводном промежутке до 4 часов, сроке беременности более 28 недель - рекомендовать кесарево сечение;<br><br> 3) При длительном безводном промежутке (более 4 часов) назначить антибактериальную терапию, профилактику респираторного дистресса плода, рекомендовать родоразрешение через естественные родовые пути; <br> <br> 4) Назначается АРТ новорожденному соответственно клинического сценария (см. раздел <b>\"<u>Профилактика  беременным и новорожденным</u>\"</b>);<br><br> 5) Искусственное вкармливание новорожденного;<br><br> </big>";
	}
	start_window.appendChild(input);
//плавное появление кнопки "Назад"	
	setTimeout(function(){
		input.style.opacity = "1";
	},450);
	divShowChildbirth.appendChild(document.createElement("br"));
	divShowChildbirth.appendChild(p);
}		
	


