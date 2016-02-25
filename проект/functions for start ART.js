//добавление таблицы и параграфа в стартовое окно при клике на вкладку "Старт антиретровирусной терапии"
function appendTabART(){
  
 $("#start_window").empty();//если в стартовом окне что-то есть - очистить стартовое окно
		  
  var attention = document.createElement("div");
  attention.id = "paragraph_Start_ART";  
  attention.style.cssText = "opacity:0; ";
  attention.innerHTML = "<span style=\"color:red\">ВНИМАНИЕ!</span>  &nbsp Выбирайте вариант ответа <b>\"ДА\"</b> или <b>\"НЕТ\"</b>. При невозможности проведения анализа крови на наличие HLA-B*5701 - выбирайте вариант <b>\"НЕТ\"</b>. Подразумевается что АРТ назначается впервые, пациент обследован и полностью готов к назначению АРТ, не имеет на данный момент активного гепатита, у женщин исключена беременность. Назначение АРВ-препаратов беременным женщинам рассмотрен в разделе <strong><u>\"Профилактика вертикальной передачи\"</u></strong>. ";
  start_window.appendChild(attention);
  start_window.style.height = "630px";
  var divTab = document.createElement("div");//таблица вопросов
  divTab.id = "divTab_Questions";
  divTab.style.cssText = "opacity:0;";
  var tableQuestions = document.createElement("table");
  tableQuestions.id = "tableQuestions";
  var arrQuestions =["<b>ПОЛ</b>","<b>ПРИНИМАЕТ ЛИ РИФАМПИЦИН</b>","<b>АНЕМИЯ</b>","<b>ПСИХИЧЕСКИЕ РАССТРОЙСТВА </b>\<small><i>(депрессия и т.д.\)</i></small>","<b>НЕФРОПАТИЯ</b> &nbsp<small><i>(клиренс креатинина \<50 мл/мин\)</i></small>","<b>НАЛИЧИЕ В КРОВИ HLA-B*5701</b>","<b>СД4 >400\(м\) или >250\(ж\)</b>"];   
  for(var i=0;i<arrQuestions.length;i++){
	var tr = document.createElement("tr");
	var td = document.createElement("td");
	td.id = "tdTableQuestions";
	td.innerHTML = arrQuestions[i];
	
	tr.appendChild(td);
	tableQuestions.appendChild(tr);
	}
	
	divTab.appendChild(tableQuestions);	
	
	start_window.appendChild(divTab);

	buildTable();//вызов функции построения таблицы выбора ответов на вопросы
//
	var x = setTimeout(function X(){
		if(attention.style.opacity!=1 && divTab.style.opacity!=1){
			attention.style.opacity = parseFloat(attention.style.opacity)+0.05+"";
			divTab.style.opacity = parseFloat(divTab.style.opacity)+0.05+"";
			setTimeout(X,50);
		}else{
			clearTimeout(x);
		
		}
	},100);
}

//построение таблицы выбора ответов на вопросы
function buildTable(){ 
	var table = document.createElement("table"); 
	table.id = "tab"; 
	table.style.cssText = "opacity:0;position:absolute;top:140px;left:240px;border-spacing:5px;border-spacing:10px 5px;";
	
	for(i=0;i<7;i++){ 
		var tr = document.createElement('tr'); 
		for(var j=0;j<2;j++){ 
			var td = document.createElement('td'); 
			td.className = "tdQuestions";
			if(i==0){ 
				td.style.cssText = "border: 4px outset; visibility:visible;background:linear-gradient(to top left, #CD853F , #FFDEAD);"; 
				td.onclick = flash; //функция вывода строк и закрашивания ячеек
				td.addEventListener("mouseover",function(){ if(this.style.backgroundColor!="red"){this.style.background = "#FFFAF0"; }});
				td.addEventListener("mouseout",function(){ if(this.style.backgroundColor!="red")this.style.background = "linear-gradient(to top left, #CD853F , #FFDEAD)";});
				td.addEventListener("mousedown",function(){ if(this.style.backgroundColor!="red")this.style.border = "4px inset";});
				td.addEventListener("mouseup",function(){ if(this.style.backgroundColor!="red")this.style.border = "4px outset";});
				if(j==0){td.innerHTML="<b>МУЖСКОЙ</b>";}				
				else {td.innerHTML="<b>ЖЕНСКИЙ</b>";}				
			}else{				
				td.style.cssText = "border:4px outset; visibility:hidden;background:linear-gradient(to top left, #CD853F , #FFDEAD);"; 
				td.onclick = flash; //функция вывода строк и закрашивания ячеек
				td.addEventListener("mouseover",function(){ if(this.style.backgroundColor!="red"){this.style.background = "#FFFAF0"; }});
				td.addEventListener("mouseout",function(){ if(this.style.backgroundColor!="red")this.style.background = "linear-gradient(to top left, #CD853F , #FFDEAD)";});
				td.addEventListener("mousedown",function(){ if(this.style.backgroundColor!="red")this.style.border = "4px inset";});
				td.addEventListener("mouseup",function(){ if(this.style.backgroundColor!="red")this.style.border = "4px outset";});
					if(i==6){//если строка последняя-назначить вызов функции вывода результата
						td.addEventListener("click",getResult);
						
						}
				 if(j==0){
					td.innerHTML="<b>ДА</b>";
				}else {
					td.innerHTML="<b>НЕТ</b>";
					}
			} 
			tr.appendChild(td); 
		} 
		table.appendChild(tr); 
	} 
	start_window.appendChild(table); 
	
	var x = setTimeout(function X(){
		if(table.style.opacity!=1){
			table.style.opacity=parseFloat(table.style.opacity)+0.05+"";
			setTimeout(X,50);
		}else{
			clearTimeout(x);
			}
		},100);
} 

//функция вывода строк и закрашивания ячеек 
function flash(){ 
	var indexCell = this.cellIndex;//номер кликнутой ячейки в строке 
	var indexRow = this.parentNode.rowIndex;//номер строки с кликнутой ячейкой в таблице 

	for(var i=0;i<this.parentNode.children.length;i++){//закраска ячейки 
		if(this.parentNode.children[i].cellIndex == indexCell){ 
			this.parentNode.children[i].style.background="red"; 
		}else{ 
			this.parentNode.children[i].style.background="linear-gradient(to top left, #CD853F , #FFDEAD)"; 
		} 
	} 

	for(var l=indexRow+1;l<tab.children.length;l++){//снятие закраски ячеек нижележащих строк при изменении выбора условий 
		for(var g=0;g<tab.children[l].children.length;g++){ 
			tab.children[l].children[g].style.background = "linear-gradient(to top left, #CD853F , #FFDEAD)"; 
		} 
	} 

	for(var j=0;j<tab.children.length;j++){//скрытие ячеек в случае изменения выбора условий 
		if(j<=indexRow || j==indexRow+1 ){ 
			for(var k=0;k<tab.children[j].children.length;k++){ 
				tab.children[j].children[k].style.visibility = "visible"; 
			} 
		}else{ 
			for(var k=0;k<tab.children[j].children.length;k++){ 
				tab.children[j].children[k].style.visibility = "hidden"; 
			} 
		} 
	} 
} 

//функция вывода результата подбора схемы терапии
function getResult(){
	var q = start_window.children[0].children;
	for(var i=0;i<q.length;i++){
	if(q[i].id =="res"){//если в стартовом окне есть окно вывода схемы АРТ - удалить его
		start_window.children[0].removeChild(q[i]);
		}
	}

	var res = document.createElement("div");//создать окно вывода схемы терапии
	res.id = "res";
	res.style.cssText ="width:0px;height:5px;";
	start_window.children[0].appendChild(res);
	var x = setTimeout(function X(){//растягивается в ширину
		if(res.style.width!="240px"){
			res.style.width=parseFloat(res.style.width)+40+"px";
			setTimeout(X,40);
		}else{
			clearTimeout(x);
		}
	},50);
	
	var y = setTimeout(function Y(){//растягивается в высоту
		if(res.style.height!="460px"){
			res.style.height=parseFloat(res.style.height)+45.5+"px";
			setTimeout(Y,20);
		}else{
			clearTimeout(y);
		}
	},250);
	
	
	
var arr = ["TDF","AZT","ABC","FTC","3TC","EFV","LPV","NVP"];
var str ="";
var td = tab.getElementsByTagName("td");
for(var i=0;i<td.length;i++){
	if(td[i].style.backgroundColor =="red"){
		str +=0;
	}else{
		str +=1;
	}
}
//исключение отдельных препаратов как противопоказанных
if(str[1] == "0"){
	arr.splice(5,1," ");
}
if(str[2] == "0"){
	arr.splice(6,1," ");
}
if(str[4] == "0"){
	arr.splice(1,1," ");
}
if(str[6] == "0"){
	arr.splice(5,1," ");
}
if(str[8] == "0"){
	arr.splice(0,1," ");
	arr.splice(3,1," ");
}
if(str[10] == "0"){
	arr.splice(2,1," ");
}
if(str[1] == "0"){
	arr.splice(5,1," ");
}
if(str[12] == "0"){
	arr.splice(7,1," ");
}

//составление схемы терапии
var first;

var second;

var third;

if(arr.indexOf("TDF")!=-1){
	first = " <p>1) <strong>Тенофовир</strong> 300 мг 1 р/день;</p>";
	second = " <p>2) <strong>Эмтрицитабин</strong> 200 мг 1 р/день;</p>";
}else{
	if(arr.indexOf("AZT")!=-1){
		first = " <p>1) <strong>Зидовудин</strong> 300 мг 2 р/день;</p>";
		second = " <p>2) <strong>Ламивудин</strong> 150 мг 2 р/день;</p>";
	}else{
		if(arr.indexOf("ABC")!=-1){
			first = " <p>1) <strong>Абакавир</strong> 300 мг 2 р/день;</p>";
			second = " <p>2) <strong>Ламивудин</strong> 150 мг 2 р/день;</p>";
		}else{
			first = "<p>1) <strong>Тенофовир</strong> с корректировкой дозы (300 мг 1 р/2 дня);</p>";
			second = "<p>2) <strong>Эмтрицитабин</strong> с корректировкой дозы (200 мг 1 р/2 дня);</p>";
		}
	}
}

if(arr.indexOf("EFV")!=-1){
	third = "<p>3) <strong>Эфавиренц</strong> 600 мг 1 р/день;</p>";
}else{
	if(arr.indexOf("LPV")!=-1){
		third = "<p>3) <strong>Лопинавир/ритонавир</strong> 400/100 мг 2 р/день;</p>";
	}else{
		if(arr.indexOf("NVP")!=-1){
			third = "<p>3) <strong>Невирапин</strong> 200 мг 1 р/день в первые 2 недели, далее - 200 мг 2 р/день;</p>";
		}else{
			third = "<p>3) <strong>Лопинавир/ритонавир</strong> 400/100 мг 2 р/день с корректировкой противотуберкулезной терапии - заменой <strong>рифампицина</strong> на альтернативный препарат;</p>";
		}
	}
}

var  p = document.createElement("p");
p.innerHTML = first+second+third;
setTimeout(function(){res.appendChild(p)},400);

}
		
	
	










	

