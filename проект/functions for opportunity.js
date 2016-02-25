//функция очистки стартового поля и вывода меню оппортунистических инфекций
function appendParagraphOpportunity(){
	
	$("#start_window").empty();//если в стартовом окне что-то есть - очистить стартовое окно
		
	
	start_window.style.height = "563px";
	
//создание параграфа
    	
	var attention = document.createElement("div");
		attention.id = "paragraphOpportunity";
		attention.style.cssText = "opacity:0; ";
		attention.innerHTML = "<span style=\"color:red\">ВНИМАНИЕ!</span>  &nbsp В данном разделе рассмотрено <b><u>только лечение</u></b> наиболее специфичных для ВИЧ-инфицированных пациентов оппортунистических инфекций. Заболевания, характерные для широкого круга пациентов \(сальмонеллез, бактериальные пневмонии и т.д.\), а также опухоли \(саркома Капоши, лимфома\) и туберкулез не рассматриваются. ";
   start_window.appendChild(attention);
   var x = setTimeout(function X(){//плавное появление параграфа
		if(attention.style.opacity!=1 ){
			attention.style.opacity = parseFloat(attention.style.opacity)+0.05+"";
			
			setTimeout(X,50);
		}else{
			clearTimeout(x);
		
		}
	},100);
   appendTabOpportunity();//функция создание таблицы выбора инфекции
}

//функция создания таблицы выбора инфекции 
function appendTabOpportunity(){ 

  if(start_window.querySelector("divOpp")){
	  divOpp.remove();
  }
  //создание таблицы выбора инфекции
  var table = document.createElement("table");
  table.id = "oppTab";

  table.style.cssText = "opacity:0;";
  for(var i=0;i<3;i++){
		var tr = document.createElement("tr");
		for(var j=0;j<3;j++){
			var td = document.createElement("td");
			td.className= "oppTabTD";
			tr.appendChild(td);
			}
		table.appendChild(tr);
		}
	
	var arrText = ["<b>ПНЕВМОЦИСТНАЯ ПНЕВМОНИЯ</b>","<b>ТОКСОПЛАЗМОЗ</b>","<b>АТИПИЧНЫЕ МИКОБАКТЕРИОЗЫ</b>","<b>ЦИТОМЕГАЛОВИРУСНАЯ ИНФЕКЦИЯ</b>","<b>ГЕРПЕТИЧЕСКАЯ ИНФЕКЦИЯ 1 и 2 типов</b>","<b>КАНДИДОЗ</b>","<b>КРИПТОСПОРИДИОЗ, МИКРОСПОРИДИОЗ, ИЗОСПОРОЗ</b>","<b>КРИПТОКОККОЗ</b>","<b>ГИСТОПЛАЗМОЗ</b>",];
		
	var arrTD = table.querySelectorAll("td");
	for(var i=0;i<arrTD.length;i++){
		arrTD[i].innerHTML = arrText[i];		
		arrTD[i].addEventListener("click",openOppWindow);//функция загрузки окна вывода информации о конкретной инфекции
		}
	start_window.appendChild(table);
	
	
  
  var x = setTimeout(function X(){//плавное появление параграфа и таблицы
		if( oppTab.style.opacity!=1 ){			
			oppTab.style.opacity = parseFloat(oppTab.style.opacity)+0.05+"";
			setTimeout(X,50);
		}else{
			clearTimeout(x);
		
		}
	},100);
  
}

//функция создания окна вывода информации о конкретной инфекции
function openOppWindow(event){
	event = event || window.event;
//сделать коллекцию ячеек oppTab
	var arrTD = oppTab.querySelectorAll("td");
	var eventTD;
//выислить номер ячейки на которой произошло событие и назначить его в переменную eventTD
	for(var i=0;i<arrTD.length;i++){
		if(arrTD[i]==event.currentTarget){
			eventTD = i;
		}
	}
//если есть таблица выбора инфекции - удалить ее	
	if(document.getElementById("oppTab")){
		start_window.removeChild(oppTab);
		}
//создание окна вывода информации о конкретной инфекции
	var divOpp = document.createElement("div");
	divOpp.id = "divOpp";
	divOpp.style.cssText = "width:0px; height:3px; left:388px";
	start_window.appendChild(divOpp);
	
//растягивается в ширину		
		var x = setTimeout(function X(){
				if(parseInt(divOpp.style.width)<parseInt("697px")){
					divOpp.style.width = parseInt(divOpp.style.width)+69.7+"px";
					divOpp.style.left = parseInt(divOpp.style.left)-30.8+"px";
					setTimeout(X,20);
				}else{
					clearTimeout(x);
					}
				},50);
//растягивается в высоту 		
		var y = setTimeout (function Y(){
				if(parseInt(divOpp.style.height)<parseInt("365px")){
					divOpp.style.height = parseInt(divOpp.style.height)+36.2+"px";
					
					setTimeout(Y,20);
				}else{
					clearTimeout(y);
					}
				},450);
	
			
//загрузить кнопку "Назад" в окно divOpp		
	create_button();
//вызвать функцию загрузки текста в окно и передать ей номер ячейки oppTab на которой произошло событие	
	loadText(eventTD);
}

//функция создания кнопки возврата в меню инфекций
function create_button(){
	var input = document.createElement("input");
	input.id = "buttonBack";
	input.type = "button";
	input.value = "Назад";
	input.style.cssText="opacity:0";
	input.onclick = function(){
		start_window.removeChild(divOpp);//удалить окно вывода информации о конкретной инфекции
		start_window.removeChild(input);
		appendTabOpportunity();//загрузить таблицу выбора инфекции
		};
	start_window.appendChild(input);
	setTimeout(function(){
		input.style.opacity = "1";
	},450);
}



//функция создания текста информации о пневмоцистной пневмонии
function loadText(arg){
	var Opportunity = document.body.querySelectorAll(".Opportunity");
	divOpp.innerHTML = Opportunity[arg].innerHTML;
	

}



