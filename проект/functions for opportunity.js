//функция очистки стартового поля и вывода меню оппортунистических инфекций
function appendParagraphOpportunity(){
	
	$("#start_window").empty().css("height","563px");//очистить стартовое окно и вернуть высоту окна к исходной	
//создание параграфа
    var attention = document.createElement("div");
		$(attention).attr("id","paragraphOpportunity").css("opacity","0").append("<span style=\"color:red\">ВНИМАНИЕ!</span>  &nbsp В данном разделе рассмотрено <b><u>только лечение</u></b> наиболее специфичных для ВИЧ-инфицированных пациентов оппортунистических инфекций. Заболевания, характерные для широкого круга пациентов \(сальмонеллез, бактериальные пневмонии и т.д.\), а также опухоли \(саркома Капоши, лимфома\) и туберкулез не рассматриваются.").appendTo($(start_window)).animate({opacity:"1"},1000);
	appendTabOpportunity();//функция создание таблицы выбора инфекции
}

//функция создания таблицы выбора инфекции 
function appendTabOpportunity(){ 

  if(start_window.querySelector("divOpp")){
	  divOpp.remove();
  }
  //создание таблицы выбора инфекции
  var table = document.createElement("table");
  $(table).attr("id","oppTab").css("opacity","0");
  for(var i=0;i<3;i++){
		var tr = document.createElement("tr");
		for(var j=0;j<3;j++){
			$("<td>").addClass("oppTabTD").appendTo($(tr));
		}
		table.appendChild(tr);
	}
	
	var arrText = ["<b>ПНЕВМОЦИСТНАЯ ПНЕВМОНИЯ</b>","<b>ТОКСОПЛАЗМОЗ</b>","<b>АТИПИЧНЫЕ МИКОБАКТЕРИОЗЫ</b>","<b>ЦИТОМЕГАЛОВИРУСНАЯ ИНФЕКЦИЯ</b>","<b>ГЕРПЕТИЧЕСКАЯ ИНФЕКЦИЯ 1 и 2 типов</b>","<b>КАНДИДОЗ</b>","<b>КРИПТОСПОРИДИОЗ, МИКРОСПОРИДИОЗ, ИЗОСПОРОЗ</b>","<b>КРИПТОКОККОЗ</b>","<b>ГИСТОПЛАЗМОЗ</b>",];
		
	var arrTD = table.querySelectorAll(".oppTabTD");
	for(var i=0;i<arrTD.length;i++){
		arrTD[i].innerHTML = arrText[i];		
		arrTD[i].addEventListener("click",openOppWindow);//функция загрузки окна вывода информации о конкретной инфекции
		}
	start_window.appendChild(table);
	$("#oppTab").animate({opacity:"1"},1000);
	
  
}

//функция создания окна вывода информации о конкретной инфекции
function openOppWindow(event){
	event = event || window.event;
//сделать коллекцию ячеек oppTab
	var arrTD = $(".oppTabTD");
	var eventTD;
//выислить номер ячейки на которой произошло событие и назначить его в переменную eventTD
	for(var i=0;i<arrTD.length;i++){
		if(arrTD[i]==event.currentTarget){
			eventTD = i;
		}
	}
//если есть таблица выбора инфекции - удалить ее	
	if(document.getElementById("oppTab")){
		$("#oppTab").remove();
		}
//создание окна вывода информации о конкретной инфекции
	$("<div>").attr("id", "divOpp").css({width:"0px", height:"3px", left:"388px"}).appendTo(start_window);
	
	
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
	setTimeout(function(){
			$("<input>").attr({id:"buttonBack", type:"button", value:"Назад"}).click(function(){
																							start_window.removeChild(divOpp);//удалить окно вывода информации о конкретной инфекции
																							start_window.removeChild(this);
																							appendTabOpportunity();//загрузить таблицу выбора инфекции
																							}).appendTo($(start_window));
			},450);
}



//функция создания текста информации о пневмоцистной пневмонии
function loadText(arg){
	var Opportunity = $(".Opportunity");
	divOpp.innerHTML = Opportunity[arg].innerHTML;
	

}



