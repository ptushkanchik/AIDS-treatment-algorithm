//функция выводит ячейки "Профилактика беременным" и "Профилактика новорожденным"
function appendMenuPVT(){
//если в стартовом окне что-то есть - очистить стартовое окно
	while(start_window.children.length){
		start_window.removeChild(start_window.firstChild);
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
				start_window.removeChild(start_window.lastChild);
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
			divNeoTab.style.cssText= "";
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
	while(divARTTab.nextSibling){
		divARTTab.nextSibling.remove();
		}
	start_window.style.height = "563px";
	var divEf = document.createElement("div");
		divEf.id = "divEf";
			divEf.style.cssText = "width:200px; height:40px; border:2px solid black; border-radius:10px; text-align:center; background:linear-gradient(to top left, #CD853F , #FFDEAD); box-shadow:10px 8px 20px -1px black; position:absolute;top:220px;left:30px;";
			divEf.innerHTML = "<b>ПРИНИМАЕТ ЛИ ЭФАВИРЕНЦ?</b>";
		start_window.appendChild(divEf);	
		
	var divEfTab = document.createElement("table");
			divEfTab.id = "divEfTab";
		var tr = document.createElement("tr");
		var td1, td2;
		td1 = document.createElement("td");
			td1.style.cssText = "width:220px; height:36px;border:2px outset;border-radius:10px; line-height:40px;text-align:center; background:linear-gradient(to top left, #CD853F , #FFDEAD); box-shadow:10px 8px 20px -1px black; position:absolute;top:220px;left:330px;cursor:pointer";
			td1.onclick = flash;//функция закрашивания кликнутой ячейки и снятия закраски с остальных ячеек (находится в файле "functions for satrt ART")
			td1.addEventListener("click",showCD4);
			td1.addEventListener("mouseover",function(){ if(this.style.backgroundColor!="red"){this.style.background = "#FFFAF0"; }});
			td1.addEventListener("mouseout",function(){ if(this.style.backgroundColor!="red"){this.style.background = "linear-gradient(to top left, #CD853F , #FFDEAD)"; }});
			td1.addEventListener("mousedown",function(){ if(this.style.backgroundColor!="red")this.style.border = "2px inset";});
		    td1.addEventListener("mouseup",function(){ if(this.style.backgroundColor!="red")this.style.border = "2px outset";});
			td1.innerHTML = "<b>да</b>";
		tr.appendChild(td1);
		
		td2 = document.createElement("td");
			td2.style.cssText = "width:220px; height:36px;border:2px outset;border-radius:10px; line-height:40px;text-align:center; background:linear-gradient(to top left, #CD853F , #FFDEAD); box-shadow:10px 8px 20px -1px black; position:absolute;top:220px;left:570px;cursor:pointer";
			td2.innerHTML = "<b>нет</b>";
			td2.onclick = flash;//функция закрашивания кликнутой ячейки и снятия закраски с остальных ячеек (находится в файле "functions for satrt ART")
			td2.addEventListener("click",showCD4);
			td2.addEventListener("mouseover",function(){ if(this.style.backgroundColor!="red"){this.style.background = "#FFFAF0"; }});
			td2.addEventListener("mouseout",function(){ if(this.style.backgroundColor!="red"){this.style.background = "linear-gradient(to top left, #CD853F , #FFDEAD)"; }});
			td2.addEventListener("mousedown",function(){ if(this.style.backgroundColor!="red")this.style.border = "2px inset";});
		    td2.addEventListener("mouseup",function(){ if(this.style.backgroundColor!="red")this.style.border = "2px outset";});
		tr.appendChild(td2);
		
		divEfTab.appendChild(tr);
		start_window.appendChild(divEfTab);	
		
		
}

//функция выводит ячейки графы "Уровень СД4-клеток"
function showCD4(event){
//если клик на ячейке "нет" в графе "Принимает ли АРТ?" - выводить ячейку "Уровень СД4 клеток" под ячейкой "Принимает ли АРТ?"
	if(event.currentTarget.id == "ART_No"){
		while(divARTTab.nextSibling){
		divARTTab.nextSibling.remove();
		}
		start_window.style.height = "563px";
		var divCD4 = document.createElement("div");
		divCD4.id = "divCD4";
			divCD4.style.cssText = "position:absolute;top:220px;left:30px;";
			divCD4.innerHTML = "<b>УРОВЕНЬ СД-4 КЛЕТОК</b>";
		}else{//если клик на ячейках "да/нет" в графе "Принимает ли эфавиренц?" - выводить ячейку "Уровень СД4 клеток" под ячейкой "Принимает ли эфавиренц?"
			while(divEfTab.nextSibling){
				divEfTab.nextSibling.remove();
			}
			var divCD4 = document.createElement("div");
				divCD4.id = "divCD4";
				divCD4.style.cssText = " position:absolute;top:280px;left:30px;";
				divCD4.innerHTML = "<b>УРОВЕНЬ СД-4 КЛЕТОК</b>";
		}
		
		divCD4.style.cssText += "width:200px; height:40px; border:2px solid black; border-radius:10px;line-height:40px; text-align:center; background:linear-gradient(to top left, #CD853F , #FFDEAD); box-shadow:10px 8px 20px -1px black;";
		start_window.appendChild(divCD4);
		
	var divCD4Tab =document.createElement("table");
			divCD4Tab.id = "divCD4Tab";
		var tr = document.createElement("tr");
		
		var td1, td2, td3, td4;
		td1 = document.createElement("td");
			td1.style.cssText = "width:100px; height:36px;border:2px outset;border-radius:10px; line-height:40px;text-align:center; background:linear-gradient(to top left, #CD853F , #FFDEAD); box-shadow:10px 8px 20px -1px black; position:absolute;left:330px;cursor:pointer";
			
			td1.onclick = flash;//функция закрашивания кликнутой ячейки и снятия закраски с остальных ячеек (находится в файле "functions for satrt ART")
			td1.innerHTML = "<b>>350 кл</b>";
			td1.addEventListener("click",showVirusWeight);
			td1.addEventListener("mouseover",function(){ if(this.style.backgroundColor!="red"){this.style.background = "#FFFAF0"; }});
			td1.addEventListener("mouseout",function(){ if(this.style.backgroundColor!="red"){this.style.background = "linear-gradient(to top left, #CD853F , #FFDEAD)"; }});
			td1.addEventListener("mousedown",function(){ if(this.style.backgroundColor!="red")this.style.border = "2px inset";});
		    td1.addEventListener("mouseup",function(){ if(this.style.backgroundColor!="red")this.style.border = "2px outset";});
		tr.appendChild(td1);
		
		td2 = document.createElement("td");
			td2.style.cssText = "width:100px; height:36px;border:2px outset;border-radius:10px; line-height:40px;text-align:center; background:linear-gradient(to top left, #CD853F , #FFDEAD); box-shadow:10px 8px 20px -1px black; position:absolute;left:450px;cursor:pointer";
			td2.innerHTML = "<b>200-350 кл</b>";
			td2.onclick = flash;//функция закрашивания кликнутой ячейки и снятия закраски с остальных ячеек (находится в файле "functions for start ART")
			td2.addEventListener("click",showVirusWeight);
			td2.addEventListener("mouseover",function(){ if(this.style.backgroundColor!="red"){this.style.background = "#FFFAF0"; }});
			td2.addEventListener("mouseout",function(){ if(this.style.backgroundColor!="red"){this.style.background = "linear-gradient(to top left, #CD853F , #FFDEAD)"; }});
			td2.addEventListener("mousedown",function(){ if(this.style.backgroundColor!="red")this.style.border = "2px inset";});
		    td2.addEventListener("mouseup",function(){ if(this.style.backgroundColor!="red")this.style.border = "2px outset";});
		tr.appendChild(td2);
		
		td3 = document.createElement("td");
			td3.style.cssText = "width:100px; height:36px;border:2px outset;border-radius:10px; text-align:center;line-height:40px; background:linear-gradient(to top left, #CD853F , #FFDEAD); box-shadow:10px 8px 20px -1px black; position:absolute;left:570px;cursor:pointer";
			td3.innerHTML = "<b><200кл</b>";
			td3.onclick = flash;//функция закрашивания кликнутой ячейки и снятия закраски с остальных ячеек (находится в файле "functions for start ART")
			td3.addEventListener("click",showVirusWeight);
			td3.addEventListener("mouseover",function(){ if(this.style.backgroundColor!="red"){this.style.background = "#FFFAF0"; }});
			td3.addEventListener("mouseout",function(){ if(this.style.backgroundColor!="red"){this.style.background = "linear-gradient(to top left, #CD853F , #FFDEAD)"; }});
			td3.addEventListener("mousedown",function(){ if(this.style.backgroundColor!="red")this.style.border = "2px inset";});
		    td3.addEventListener("mouseup",function(){ if(this.style.backgroundColor!="red")this.style.border = "2px outset";});
		tr.appendChild(td3);
		
		td4 = document.createElement("td");
			td4.style.cssText = "width:100px; height:36px;border:2px outset;border-radius:10px; line-height:40px;text-align:center; background:linear-gradient(to top left, #CD853F , #FFDEAD); box-shadow:10px 8px 20px -1px black; position:absolute;left:690px;cursor:pointer";
			td4.innerHTML = "<b>неизвестно</b>";
			td4.onclick = flash;//функция закрашивания кликнутой ячейки и снятия закраски с остальных ячеек (находится в файле "functions for satrt ART")
			td4.addEventListener("click",showVirusWeight);
			td4.addEventListener("mouseover",function(){ if(this.style.backgroundColor!="red"){this.style.background = "#FFFAF0"; }});
			td4.addEventListener("mouseout",function(){ if(this.style.backgroundColor!="red"){this.style.background = "linear-gradient(to top left, #CD853F , #FFDEAD)"; }});
			td4.addEventListener("mousedown",function(){ if(this.style.backgroundColor!="red")this.style.border = "2px inset";});
		    td4.addEventListener("mouseup",function(){ if(this.style.backgroundColor!="red")this.style.border = "2px outset";});
		tr.appendChild(td4);
		
		if(event.currentTarget.id == "ART_No"){//если клик на ячейке "нет" в графе "Принимает ли АРТ?"
			td1.style.cssText +="top: 220px";
			td2.style.cssText +="top: 220px";
			td3.style.cssText +="top: 220px";
			td4.style.cssText +="top: 220px";
		}else{//если клик на ячейках "да/нет" в графе "Принимает ли эфавиренц?"
			td1.style.cssText +="top: 280px";
			td2.style.cssText +="top: 280px";
			td3.style.cssText +="top: 280px";
			td4.style.cssText +="top: 280px";
			}
		divCD4Tab.appendChild(tr);
		start_window.appendChild(divCD4Tab);
}

//функция выводит ячейки графы "Вирусная нагрузка"
function showVirusWeight(event){
//если присутствует графа "Принимает ли эфавиренц"
	if(document.getElementById("divEf")){
		while(divCD4Tab.nextSibling){
		divCD4Tab.nextSibling.remove();
			}
	
		var divVirus = document.createElement("div");
		divVirus.id = "divVirus";
			divVirus.style.cssText = "position:absolute;top:340px;left:30px;";
			divVirus.innerHTML = "<b>ВИРУСНАЯ НАГРУЗКА</b>";
		}else{//если отсутствует графа "Принимает ли эфавиренц"
			while(divCD4Tab.nextSibling){
				divCD4Tab.nextSibling.remove();
				}
			var divVirus = document.createElement("div");
				divVirus.id = "divCD4";
				divVirus.style.cssText = " position:absolute;top:280px;left:30px;";
				divVirus.innerHTML = "<b>ВИРУСНАЯ НАГРУЗКА</b>";
		}
		start_window.style.height = "563px";
		divVirus.style.cssText += "width:200px; height:40px; border:2px solid black; border-radius:10px;line-height:40px; text-align:center; background:linear-gradient(to top left, #CD853F , #FFDEAD); box-shadow:10px 8px 20px -1px black;";
		start_window.appendChild(divVirus);
		
		var divVirusTab = document.createElement("table");
			divVirusTab.id = "divVirusTab";
		var tr = document.createElement("tr");
		var td1, td2;
		td1 = document.createElement("td");
			td1.style.cssText = "width:220px; height:36px;border:2px outset;border-radius:10px; line-height:40px;text-align:center; background:linear-gradient(to top left, #CD853F , #FFDEAD); box-shadow:10px 8px 20px -1px black; position:absolute;left:330px;cursor:pointer";
			td1.onclick = flash;//функция закрашивания кликнутой ячейки и снятия закраски с остальных ячеек (находится в файле "functions for satrt ART")
			td1.addEventListener("click",showAnemia);
			td1.addEventListener("mouseover",function(){ if(this.style.backgroundColor!="red"){this.style.background = "#FFFAF0"; }});
			td1.addEventListener("mouseout",function(){ if(this.style.backgroundColor!="red"){this.style.background = "linear-gradient(to top left, #CD853F , #FFDEAD)"; }});
			td1.addEventListener("mousedown",function(){ if(this.style.backgroundColor!="red")this.style.border = "2px inset";});
		    td1.addEventListener("mouseup",function(){ if(this.style.backgroundColor!="red")this.style.border = "2px outset";});
			td1.innerHTML = "<b><10000 копий</b>";
		tr.appendChild(td1);
		
		td2 = document.createElement("td");
			td2.style.cssText = "width:220px; height:36px;border:2px outset;border-radius:10px; line-height:40px;text-align:center; background:linear-gradient(to top left, #CD853F , #FFDEAD); box-shadow:10px 8px 20px -1px black; position:absolute;left:570px;cursor:pointer";
			td2.innerHTML = "<b>>10000 копий или неивестно</b>";
			td2.onclick = flash;//функция закрашивания кликнутой ячейки и снятия закраски с остальных ячеек (находится в файле "functions for satrt ART")
			td2.addEventListener("click",showAnemia);
			td2.addEventListener("mouseover",function(){ if(this.style.backgroundColor!="red"){this.style.background = "#FFFAF0"; }});
			td2.addEventListener("mouseout",function(){ if(this.style.backgroundColor!="red"){this.style.background = "linear-gradient(to top left, #CD853F , #FFDEAD)"; }});
			td2.addEventListener("mousedown",function(){ if(this.style.backgroundColor!="red")this.style.border = "2px inset";});
		    td2.addEventListener("mouseup",function(){ if(this.style.backgroundColor!="red")this.style.border = "2px outset";});
		tr.appendChild(td2);
		
		if(document.getElementById("divEf")){//если присутствует графа "Принимает ли эфавиренц"
			td1.style.cssText +="top: 340px";
			td2.style.cssText +="top: 340px";
		}else{//если отсутствует графа "Принимает ли эфавиренц"
			td1.style.cssText +="top: 280px";
			td2.style.cssText +="top: 280px";
		}
		
		divVirusTab.appendChild(tr);
		start_window.appendChild(divVirusTab);	
}

//функция выводит ячейки графы "Уровень гемоглобина"
function showAnemia(event){
//если присутствует графа "Принимает ли эфавиренц"
	if(document.getElementById("divEf")){
		while(divVirusTab.nextSibling){
		divVirusTab.nextSibling.remove();
			}
		var divAnemia = document.createElement("div");
		divAnemia.id = "divAnemia";
			divAnemia.style.cssText = "position:absolute;top:400px;left:30px;";
			divAnemia.innerHTML = "<b>УРОВЕНЬ ГЕМОГЛОБИНА</b>";
		}else{//если отсутствует графа "Принимает ли эфавиренц"
			while(divVirusTab.nextSibling){
				divVirusTab.nextSibling.remove();
				
				}
			var divAnemia = document.createElement("div");
				divAnemia.id = "divAnemia";
				divAnemia.style.cssText = " position:absolute;top:340px;left:30px;";
				divAnemia.innerHTML = "<b>УРОВЕНЬ ГЕМОГЛОБИНА</b>";
		}
		start_window.style.height = "563px";
		divAnemia.style.cssText += "width:200px; height:40px; border:2px solid black; border-radius:10px; text-align:center; background:linear-gradient(to top left, #CD853F , #FFDEAD); box-shadow:10px 8px 20px -1px black;";
		start_window.appendChild(divAnemia);
		
		var divAnemiaTab = document.createElement("table");
			divAnemiaTab.id = "divAnemiaTab";
		var tr = document.createElement("tr");
		var td1, td2;
		td1 = document.createElement("td");
			td1.style.cssText = "width:220px; height:36px;border:2px outset;border-radius:10px; line-height:40px;text-align:center; background:linear-gradient(to top left, #CD853F , #FFDEAD); box-shadow:10px 8px 20px -1px black; position:absolute;left:330px;cursor:pointer";
			td1.onclick = flash;//функция закрашивания кликнутой ячейки и снятия закраски с остальных ячеек (находится в файле "functions for satrt ART")
			td1.addEventListener("click",showResultPregnant);
			td1.addEventListener("mouseover",function(){ if(this.style.backgroundColor!="red"){this.style.background = "#FFFAF0"; }});
			td1.addEventListener("mouseout",function(){ if(this.style.backgroundColor!="red"){this.style.background = "linear-gradient(to top left, #CD853F , #FFDEAD)"; }});
			td1.addEventListener("mousedown",function(){ if(this.style.backgroundColor!="red")this.style.border = "2px inset";});
		    td1.addEventListener("mouseup",function(){ if(this.style.backgroundColor!="red")this.style.border = "2px outset";});
			td1.innerHTML = "<b>>110г/л</b>";
		tr.appendChild(td1);
		
		td2 = document.createElement("td");
			td2.style.cssText = "width:220px; height:36px;border:2px outset;border-radius:10px; line-height:40px;text-align:center; background:linear-gradient(to top left, #CD853F , #FFDEAD); box-shadow:10px 8px 20px -1px black; position:absolute;left:570px;cursor:pointer";
			td2.innerHTML = "<b><110г/л</b>";
			td2.onclick = flash;//функция закрашивания кликнутой ячейки и снятия закраски с остальных ячеек (находится в файле "functions for satrt ART")
			td2.addEventListener("click",showResultPregnant);
			td2.addEventListener("mouseover",function(){ if(this.style.backgroundColor!="red"){this.style.background = "#FFFAF0"; }});
			td2.addEventListener("mouseout",function(){ if(this.style.backgroundColor!="red"){this.style.background = "linear-gradient(to top left, #CD853F , #FFDEAD)"; }});
			td2.addEventListener("mousedown",function(){ if(this.style.backgroundColor!="red")this.style.border = "2px inset";});
		    td2.addEventListener("mouseup",function(){ if(this.style.backgroundColor!="red")this.style.border = "2px outset";});
		tr.appendChild(td2);
		
		if(document.getElementById("divEf")){//если присутствует графа "Принимает ли эфавиренц"
			td1.style.cssText +="top: 400px";
			td2.style.cssText +="top: 400px";
		}else{//если отсутствует графа "Принимает ли эфавиренц"
			td1.style.cssText +="top: 340px";
			td2.style.cssText +="top: 340px";
		}
		
		divAnemiaTab.appendChild(tr);
		start_window.appendChild(divAnemiaTab);

}

//функция выводит результат подбора профилактики для беременной
function showResultPregnant(event){
//если есть что-то ниже ячеек "Уровень гемоглобина"/"<110г/л"/">110г/л" - удалить 
	while(divAnemiaTab.nextSibling){
		start_window.removeChild(divAnemiaTab.nextSibling);
			}
//если нет окна вывода информации - создать его	
	if(!document.getElementById("divResPreg")){	
		var divResPreg = document.createElement("div");
		divResPreg.id = "divResPreg";
		divResPreg.style.cssText = "width:0px; height:3px;padding:5px; background:white; border:2px solid; border-radius:10px; overflow:auto; position:absolute;top:460px;left:420px;box-shadow:10px 8px 20px -1px black; opacity:1";
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
//вызвать функцию рассчитывающую курс профилактики для беременных	
	calculatePVT(str);
};

//функция рассчитывает курс профилактики для беременной
function calculatePVT(str){
	var p = document.createElement("p");
	if(str[1]=="1" && str[2]=="2"  ){//если не принимает пожизненно АРТ и СД4 меньше 200 кл
		if(str[4]=="0"){//если гемоглобин не ниже 110 г/л
			p.innerHTML = "<big> 1) Независимо от срока беременности - <b>зидовудин</b> 300 мг + <b>ламивудин</b> 150 мг + <b>невирапин</b> 200 мг 2 р/день до родов (в первые 2 недели <b>невирапин</b> назначают в половинной дозе);<br> <br>2) В случае анемии или непереносимости <b>зидовудина</b> его можно заменить на <b>тенофовир</b> или <b>абакавир</b>;<br><br> 3) Во время родов и в послеродовом периоде продолжить вышеуказанную схему;<br><br> 4) Проводить контроль уровня гемоглобина, ферментов печени через 2 недели после назначения схемы и далее через каждые 4 недели; <br> <br> 5)Новорожденному назначить сироп <b>зидовудина</b> 4 мг/кг  2 р/день в течение 7 дней с началом через 8 часов после рождения;<br><br> 6) Если  роженица получала профилактику менее 4 недель новорожденный должен получать <b>зидовудин</b> в течение 4 недель;<br><br> 7) Недоношенным новорожденным <b>зидовудин</b> назначают в дозе 1,5 мг/кг внутривенно или 2,0 мг/кг внутрь;</big>";
		}else{//если гемоглобин  ниже 110 г/л
			p.innerHTML = "<big> 1) Независимо от срока беременности - <b>абакавир</b> 300 мг + <b>ламивудин</b> 150 мг + <b>невирапин</b> 200 мг 2 р/день до родов (в первые 2 недели <b>невирапин</b> назначают в половинной дозе);<br> <br>2) Во время родов и в послеродовом периоде продолжить вышеуказанную схему;<br><br> 3) Проводить контроль уровня гемоглобина, ферментов печени через 2 недели после назначения схемы и далее через каждые 4 недели; <br> <br> 4)Новорожденному назначить сироп <b>зидовудина</b> 4 мг/кг  2 р/день в течение 7 дней с началом через 8 часов после рождения;<br><br> 5) Если  роженица получала профилактику менее 4 недель новорожденный должен получать <b>зидовудин</b> в течение 4 недель;<br><br> 6) Недоношенным новорожденным <b>зидовудин</b> назначают в дозе 1,5 мг/кг внутривенно или 2,0 мг/кг внутрь;</big>";
		}
	}else if(str[1]=="1" && str[2]=="1" ){//если не принимает пожизненно АРТ и СД4 oт 200 до 350 кл
		if(str[4]=="0"){//если гемоглобин не ниже 110 г/л
			p.innerHTML = "<big> <big> 1) Независимо от срока беременности - <b>зидовудин</b> 300 мг + <b>ламивудин</b> 150 мг + <b>лопинавир/ритонавир</b> 400/100 мг или <b>саквинавир/ритонавир</b> 800/100 мг 2 р/день до родов ;<br> <br> 2) В случае анемии или непереносимости <b>зидовудина</b> его можно заменить на <b>тенофовир</b> или <b>абакавир</b>;<br> <br> 3) Во время родов  продолжить вышеуказанную схему;<br><br> 4) После родов вопрос о дальнейшем лечении решить в условиях Центра СПИД после обследования. До обследования женщина получает вышеуказанную схему;<br> <br> 5) Новорожденному назначить сироп <b>зидовудина</b> 4 мг/кг  2 р/день в течение 7 дней с началом через 8 часов после рождения;<br><br> 6) Если роженица получала профилактику менее 4 недель новорожденный должен получать <b>зидовудин</b> в течение 4 недель;<br><br> 7) Недоношенным новорожденным <b>зидовудин</b> назначают в дозе 1,5 мг/кг внутривенно или 2,0 мг/кг внутрь; </big>";
		}else{//если гемоглобин  ниже 110 г/л
			p.innerHTML = "<big> 1) <b>Абакавир</b> 300 мг + <b>ламивудин</b> 150 мг + <b>лопинавир/ритонавир</b> 400/100 мг или <b>саквинавир/ритонавир</b> 800/100 мг 2 р/день до родов. Мониторинг уровня гемоглобина каждые 2 недели;<br> <br> 2)  Во время родов  продолжить вышеуказанную схему;<br><br> 3) После родов вопрос о дальнейшем лечении решить в условиях Центра СПИД после обследования. До обследования женщина получает вышеуказанную схему;<br> <br> 4) Новорожденному назначить сироп <b>зидовудина</b> 4 мг/кг  2 р/день в течение 7 дней с началом через 8 часов после рождения;<br><br> 5) Если роженица получала профилактику менее 4 недель новорожденный должен получать <b>зидовудин</b> в течение 4 недель;<br><br> 6) Недоношенным новорожденным <b>зидовудин</b> назначают в дозе 1,5 мг/кг внутривенно или 2,0 мг/кг внутрь; </big>";
		}
	}else if(str[1]=="0" && str[2]=="0"){//если принимает пожизненно АРТ и в схеме есть эфавиренц
		if(str[0]=="0"){//если срок беременности до 8 недель
			if(str[5]=="0"){//если гемоглобин  не ниже 110 г/л
				p.innerHTML = "<big> 1) Заменить <b>эфавиренц</b> на <b>саквинавир</b> 800 мг или <b>невирапин</b> 200 мг;<br><br> 2)  Во время родов  продолжить вышеуказанную схему;<br><br> 3)  Новорожденному назначить сироп <b>зидовудина</b> 4 мг/кг  2 р/день в течение 7 дней с началом через 8 часов после рождения;<br><br> 4) Если  роженица получала профилактику менее 4 недель новорожденный должен получать <b>зидовудин</b> в течение 4 недель;<br><br> 5) Недоношенным новорожденным <b>зидовудин</b> назначают в дозе 1,5 мг/кг внутривенно или 2,0 мг/кг внутрь; </big>";	
			}else{//если гемоглобин  ниже 110 г/л
				p.innerHTML = "<big> 1) Заменить <b>эфавиренц</b> на <b>саквинавир</b> 800 мг или <b>невирапин</b> 200 мг и <b>зидовудин</b> на <b>абакавир</b> 300 мг ;<br><br> 2)  Во время родов  продолжить вышеуказанную схему;<br><br> 3)  Новорожденному назначить сироп <b>зидовудина</b> 4 мг/кг  2 р/день в течение 7 дней с началом через 8 часов после рождения;<br><br> 4) Если  роженица получала профилактику менее 4 недель новорожденный должен получать <b>зидовудин</b> в течение 4 недель;<br><br> 5) Недоношенным новорожденным <b>зидовудин</b> назначают в дозе 1,5 мг/кг внутривенно или 2,0 мг/кг внутрь; </big>";	
			}
		}else{//если срок беременности больше 8 недель
			if(str[5]=="0"){//если гемоглобин  не ниже 110 г/л
				p.innerHTML = "<big> 1) Не менять схему АРТ;<br><br> 2)  Во время родов  продолжить принимаемую схему;<br><br> 3)  Новорожденному назначить сироп <b>зидовудина</b> 4 мг/кг  2 р/день в течение 7 дней с началом через 8 часов после рождения;<br><br> 4) Если  роженица получала профилактику менее 4 недель новорожденный должен получать <b>зидовудин</b> в течение 4 недель;<br><br> 5) Недоношенным новорожденным <b>зидовудин</b> назначают в дозе 1,5 мг/кг внутривенно или 2,0 мг/кг внутрь; </big>";
			}else{//если гемоглобин  ниже 110 г/л
				p.innerHTML = "<big> 1) Заменить <b>зидовудин</b> на <b>абакавир</b> 300 мг;<br><br> 2)  Во время родов  продолжить принимаемую схему;<br><br> 3)  Новорожденному назначить сироп <b>зидовудина</b> 4 мг/кг  2 р/день в течение 7 дней с началом через 8 часов после рождения;<br><br> 4) Если  роженица получала профилактику менее 4 недель новорожденный должен получать <b>зидовудин</b> в течение 4 недель;<br><br> 5) Недоношенным новорожденным <b>зидовудин</b> назначают в дозе 1,5 мг/кг внутривенно или 2,0 мг/кг внутрь; </big>";
			}
		}
	}else if(str[1]=="0" && str[2]=="1"){//если принимает пожизненно АРТ и в схеме нет эфавиренца
		   if(str[5]=="0") {
			   p.innerHTML = "<big> 1) Не менять схему АРТ;<br><br> 2)  Во время родов  продолжить принимаемую схему;<br><br> 3)  Новорожденному назначить сироп <b>зидовудина</b> 4 мг/кг  2 р/день в течение 7 дней с началом через 8 часов после рождения;<br><br> 4) Если  роженица получала профилактику менее 4 недель новорожденный должен получать <b>зидовудин</b> в течение 4 недель;<br><br> 5) Недоношенным новорожденным <b>зидовудин</b> назначают в дозе 1,5 мг/кг внутривенно или 2,0 мг/кг внутрь; </big>";
		   }else{
			   p.innerHTML = "<big> 1) Заменить <b>зидовудин</b> на <b>абакавир</b>;<br><br> 2)  Во время родов  продолжить принимаемую схему;<br><br> 3)  Новорожденному назначить сироп <b>зидовудина</b> 4 мг/кг  2 р/день в течение 7 дней с началом через 8 часов после рождения;<br><br> 4) Если  роженица получала профилактику менее 4 недель новорожденный должен получать <b>зидовудин</b> в течение 4 недель;<br><br> 5) Недоношенным новорожденным <b>зидовудин</b> назначают в дозе 1,5 мг/кг внутривенно или 2,0 мг/кг внутрь; </big>";
		   }
	}else if(str[1]=="1" && str[2]=="0" && str[4]=="0"){//если не принимает пожизненно АРТ и СД-4 больше 350 клеток и гемоглобин 110 г/л и выше
		if(str[3]=="1"){//если вирусная нагрузка выше 10000 копий или неивестно 
			p.innerHTML = "<big> 1) С 24 - 26 недели назначить <b>зидовудин</b> 300 мг + <b>ламивудин</b> 150 мг + <b>лопинавир/ритонавир</b> 400/100 мг или <b>саквинавир/ритонавир</b> 800/100 мг 2 р/день до родов. Мониторинг уровня гемоглобина каждые 2 недели;<br> <br> 2)  В случае анемии или непереносимости <b>зидовудина</b> его можно заменить на <b>тенофовир</b> или <b>абакавир</b>;<br><br> 3) Во время родов  продолжить вышеуказанную схему;<br> <br> 4) После родов прием АРТ прекратить; <br><br> 5) Новорожденному назначить сироп <b>зидовудина</b> 4 мг/кг  2 р/день в течение 7 дней с началом через 8 часов после рождения;<br><br> 6) Если роженица получала профилактику менее 4 недель новорожденный должен получать <b>зидовудин</b> в течение 4 недель;<br><br> 7) Недоношенным новорожденным <b>зидовудин</b> назначают в дозе 1,5 мг/кг внутривенно или 2,0 мг/кг внутрь; </big>";
		}else{//если вирусная нагрузка ниже 10000 копий 
			p.innerHTML = "<big> 1) С 24 - 26 недели назначить <b>зидовудин</b> 300 мг  2 р/день до родов. Мониторинг уровня гемоглобина каждые 2 недели;<br> <br> 2)  В случае анемии или непереносимости <b>зидовудина</b> его можно заменить на <b>тенофовир</b> или <b>абакавир</b>;<br><br> 3) Во время родов  продолжить прием <b>зидовудина</b> по 300 мг каждые 3 часа до родоразрешения, однократно с началом родов дать <b>ламивудин</b> 150 мг и <b>невирапин</b> 200 мг;<br> <br> 4) При родоразрешении путем элективного кесаревого сечения за 4 часа до операции назначают <b>зидовудин</b> 300 мг перорально или внутривенно 2 мг/кг в первый час и 1 мг/кг до пересечения пуповины; <br><br> 5) После родов продолжить прием <b>зидовудина</b> 300 мг и <b>ламивудина</b> 150 мг 2 р/день в течение 7 дней;<br> <br> 6) Новорожденному назначить сироп <b>зидовудина</b> 4 мг/кг  + сироп  <b>ламивудина</b> 2 мг/кг 2 р/день в течение 7 дней, однократно <b>невирапин</b> 2 мг/кг (не позднее 48 - 72 часов после рождения);<br><br> 7) Если роженица получала профилактику менее 4 недель новорожденный должен получать <b>зидовудин</b> в течение 4 недель;<br><br> 8) Недоношенным новорожденным <b>зидовудин</b> назначают в дозе 1,5 мг/кг внутривенно или 2,0 мг/кг внутрь; </big>";
		}
	}else if(str[1]=="1" && str[2]=="0" && str[4]=="1"){//если не принимает пожизненно АРТ и СД-4 больше 350 клеток и гемоглобин меньше 110 г/л
		if(str[3]=="1"){//если вирусная нагрузка выше 10000 копий или неизвестно
			p.innerHTML = "<big> 1) С 24 - 26 недели назначить <b>абакавир</b> 300 мг + <b>ламивудин</b> 150 мг + <b>лопинавир/ритонавир</b> 400/100 мг или <b>саквинавир/ритонавир</b> 800/100 мг 2 р/день до родов. Мониторинг уровня гемоглобина каждые 2 недели;<br> <br> 2) Во время родов  продолжить вышеуказанную схему;<br> <br> 3) После родов прием АРТ прекратить; <br><br> 4) Новорожденному назначить сироп <b>зидовудина</b> 4 мг/кг  2 р/день в течение 7 дней с началом через 8 часов после рождения;<br><br> 6) Если роженица получала профилактику менее 4 недель новорожденный должен получать <b>зидовудин</b> в течение 4 недель;<br><br> 7) Недоношенным новорожденным <b>зидовудин</b> назначают в дозе 1,5 мг/кг внутривенно или 2,0 мг/кг внутрь; </big>";
		}else{//если вирусная нагрузка ниже 10000 копий 
			p.innerHTML = "<big> 1) С 24 - 26 недели назначить <b>зидовудин</b> 300 мг  2 р/день до родов. Мониторинг уровня гемоглобина каждые 2 недели;<br> <br> 2)  В случае анемии или непереносимости <b>зидовудина</b> его можно заменить на <b>тенофовир</b> или <b>абакавир</b>;<br><br> 3) Во время родов  продолжить прием <b>зидовудина</b> по 300 мг каждые 3 часа до родоразрешения, однократно с началом родов дать <b>ламивудин</b> 150 мг и <b>невирапин</b> 200 мг;<br> <br> 4) При родоразрешении путем элективного кесаревого сечения за 4 часа до операции назначают <b>зидовудин</b> 300 мг перорально или внутривенно 2 мг/кг в первый час и 1 мг/кг до пересечения пуповины; <br><br> 5) После родов продолжить прием <b>зидовудина</b> 300 мг и <b>ламивудина</b> 150 мг 2 р/день в течение 7 дней;<br> <br> 6) Новорожденному назначить сироп <b>зидовудина</b> 4 мг/кг  + сироп  <b>ламивудина</b> 2 мг/кг 2 р/день в течение 7 дней, однократно <b>невирапин</b> 2 мг/кг (не позднее 48 - 72 часов после рождения);<br><br> 7) Если роженица получала профилактику менее 4 недель новорожденный должен получать <b>зидовудин</b> в течение 4 недель;<br><br> 8) Недоношенным новорожденным <b>зидовудин</b> назначают в дозе 1,5 мг/кг внутривенно или 2,0 мг/кг внутрь; </big>";
		}
	}else if(str[0]=="0" || str[0]=="1"  && str[1]=="1" && str[2]=="3"){//если срок беременности до 24 недель, не принимает пожизненно АРТ и СД 4 клетки неизвестны
			p.innerHTML = "<big> 1) Выполнить анализ крови на уровень СД-4 клеток ;<br> <br> 2) Повторная явка в ЦентрСПИД для получения рекомендаций по профилактике вертикальной передачи ВИЧ;<br> <br>  </big>";
	}else if(str[0]=="2" && str[1]=="1" && str[2]=="3"){//если срок беременности больше 24 недель, не принимает пожизненно АРТ и СД-4 неизвестно
		if(str[4]=="0"){//если гемоглобин выше 110г/л
			p.innerHTML = "<big> 1) Назначить <b>зидовудин</b> 300 мг + <b>ламивудин</b> 150 мг + <b>лопинавир/ритонавир</b> 400/100 мг или <b>саквинавир/ритонавир</b> 800/100 мг 2 р/день до родов. Мониторинг уровня гемоглобина каждые 2 недели;<br> <br> 2)  В случае анемии или непереносимости <b>зидовудина</b> его можно заменить на <b>тенофовир</b> или <b>абакавир</b>;<br><br> 3) Во время родов  продолжить вышеуказанную схему;<br> <br> 4) В сроке 32 - 33 недели выполнить анализ крови на уровень СД - 4 клеток и вирусную нагрузку с дальнейшей консультацией специалистами ЦентраСПИД для решения вопроса о родоразрешении и дальнейшем проведении лечения АРТ - препаратами; <br><br> 5) Новорожденному назначить сироп <b>зидовудина</b> 4 мг/кг  2 р/день в течение 7 дней с началом через 8 часов после рождения;<br><br> 6) Если роженица получала профилактику менее 4 недель новорожденный должен получать <b>зидовудин</b> в течение 4 недель;<br><br> 7) Недоношенным новорожденным <b>зидовудин</b> назначают в дозе 1,5 мг/кг внутривенно или 2,0 мг/кг внутрь; </big>";
		}else{//если гемоглобин ниже 110г/л 
			p.innerHTML = "<big> 1) Назначить <b>абакавир</b> 300 мг  + <b>ламивудин</b> 150 мг + <b>лопинавир/ритонавир</b> 400/100 мг или <b>саквинавир/ритонавир</b> 800/100 мг 2 р/день до родов. Мониторинг уровня гемоглобина каждые 2 недели;<br> <br> 2) Во время родов  продолжить вышеуказанную схему;<br> <br> 3) В сроке 32 - 33 недели выполнить анализ крови на уровень СД - 4 клеток и вирусную нагрузку с дальнейшей консультацией специалистами ЦентраСПИД для решения вопроса о родоразрешении и дальнейшем проведении лечения АРТ - препаратами; <br><br> 4) Новорожденному назначить сироп <b>зидовудина</b> 4 мг/кг  2 р/день в течение 7 дней с началом через 8 часов после рождения;<br><br> 5) Если роженица получала профилактику менее 4 недель новорожденный должен получать <b>зидовудин</b> в течение 4 недель;<br><br> 6) Недоношенным новорожденным <b>зидовудин</b> назначают в дозе 1,5 мг/кг внутривенно или 2,0 мг/кг внутрь; </big>";
		}
	}
	divResPreg.appendChild(p);
}

//функция рассчитывает курс профилактики в случае установления диагноза ВИЧ непосредственно в родах
function showExtreme(event){
	
//удалить все что находится ниже графы "Срок беременности"
	while(divNeoTab.nextSibling){
		start_window.removeChild(divNeoTab.nextSibling);
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
		p.innerHTML = "<big> 1) C началом родов назначить <b>зидовудин</b> 300 мг каждые 3 часа + <b>ламивудин</b> 150 мг с началом родов и каждые 12 часов + <b>невирапин</b> 200 мг однократно;<br> <br> 2) Продолжить <b>зидовудин</b> 300 мг + <b>ламивудин</b> 150 мг в течение 7 дней после родов;<br><br> 3) Дальнейшая тактика будет зависеть от уровня СД-4 клеток, вирусной нагрузки и результатов клинического обследования, которое необходимо провести через 12 часов после родов, а если роженица не получила АРВ - профилактику во время родов - как можно скорее после родоразрешения; <br> <br> 4) Недоношенным новорожденным <b>зидовудин</b> назначают в дозе 1,5 мг/кг внутривенно или 2,0 мг/кг внутрь;<br><br> 5) Если роженица не получила <b>невирапин</b>  или от момента приема невирапина до рождения ребенка прошло менее 2 часов, одну дозу невирапина дать ребенку сразу после рождения, другую - через 72 часа;<br><br> 6) Если роженица получила профилактику <b>зидовудином</b> и <b>ламивудином</b> в родах, новорожденному необходимо дать <b>зидовудин</b> и <b>ламивудин</b> между 8 - 12 часами после рождения, а если роженица не получала АРВ - профилактику в родах - как можно быстрее после рождения;<br><br> 7) Новорожденному назначают сироп <b>зидовудина</b> 4 мг/кг + <b>ламивудин</b> 2 мг/кг в течение 4 недель + <b>невирапин</b> 2 мг/кг однократно в первые 48 - 72 часа после рождения</big>";
		
		divResPreg.appendChild(p);
}

//функция выводит ячейки таблицы "Ведение родов"
function showTabChildbirth(event){
	//удалить все элементы ниже ячеек "Профилактика беременным и новорожденным" и "Ведение родов" если они есть	
	while(start_window.children.length!=1){
				start_window.removeChild(start_window.lastChild);
				}
	start_window.style.height = "563px";//вернуть размер окна к исходному
	td_Childbirth.style.background = "red";//закрасить ячейку красным
	td_Pregnant.style.background = "linear-gradient(to top left, #CD853F , #FFDEAD)";//вернуть цвет соседней ячейки на коричневый
	var arrText = ["<b>БЕРЕМЕННАЯ ПОЛУЧАЛА ПРОФИЛАКТИКУ И ВИРУСНАЯ НАГРУЗКА В 3 ТРИМЕСТРЕ НИЖЕ 1000 КОПИЙ</b>","<b>БЕРЕМЕННАЯ ПОЛУЧАЛА ПРОФИЛАКТИКУ И ВИРУСНАЯ НАГРУЗКА В 3 ТРИМЕСТРЕ ВЫШЕ 1000 КОПИЙ</b>","<b>БЕРЕМЕННАЯ НЕ ПОЛУЧАЛА ПРОФИЛАКТИКУ</b>","<b>ПРЕЖДЕВРЕМЕННЫЕ РОДЫ В СРОКЕ ДО 34 НЕДЕЛЬ</b>"];
	
	var table = document.createElement("table");
     table.id = "childbirthTab";
	 table.style.cssText = "border-spacing:60px; position:absolute; top: 90px; left:110px";
	
	 for(var i=0;i<2;i++){
		var tr = document.createElement("tr");
		for(var j=0;j<2;j++){
			var td = document.createElement("td");
			td.style.cssText = "width:220px;height:110px;background:white; padding:10px;border:4px outset; border-radius:10px;text-align:center; vertical-align:middle;background:linear-gradient(to top left, #CD853F , #FFDEAD);box-shadow:10px 8px 20px -1px black; cursor:pointer";
			td.onclick = showChildbirth;//функция вывода окна информации о ведении родов
			td.addEventListener("mouseover",function(){ this.style.background = "#FFFAF0"; });
			td.addEventListener("mouseout",function(){ this.style.background = "linear-gradient(to top left, #CD853F , #FFDEAD)"; });
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
		divShowChildbirth.style.cssText = "width:0px; height:3px;padding:5px; background:white; border:2px solid; border-radius:10px; overflow:auto; position:absolute;top:100px;left:420px;box-shadow:10px 8px 20px -1px black; opacity:1";
		
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
				start_window.removeChild(start_window.lastChild);
				}
		start_window.appendChild(divShowChildbirth);
		calculateChildbirth(0);//вызвать функцию загрузки текста информации о ведении родов в окно divShowChildbirth
	}
	if(event.currentTarget==childbirthTab.children[0].children[1]){
		while(start_window.children.length!=1){//удалить все ниже ячеек "Профилактика беременным и новорожденным" и "Ведение родов"
				start_window.removeChild(start_window.lastChild);
				}
		start_window.appendChild(divShowChildbirth);
		calculateChildbirth(1);//вызвать функцию загрузки текста информации о ведении родов в окно divShowChildbirth
	}
	if(event.currentTarget==childbirthTab.children[1].children[0]){
		while(start_window.children.length!=1){//удалить все ниже ячеек "Профилактика беременным и новорожденным" и "Ведение родов"
				start_window.removeChild(start_window.lastChild);
				}
		start_window.appendChild(divShowChildbirth);
		calculateChildbirth(2);//вызвать функцию загрузки текста информации о ведении родов в окно divShowChildbirth
	}
	if(event.currentTarget==childbirthTab.children[1].children[1]){
		while(start_window.children.length!=1){//удалить все ниже ячеек "Профилактика беременным и новорожденным" и "Ведение родов"
				start_window.removeChild(start_window.lastChild);
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
		start_window.removeChild(divShowChildbirth);//удалить окно вывода информации о ведении родов
		start_window.removeChild(input);
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
	


