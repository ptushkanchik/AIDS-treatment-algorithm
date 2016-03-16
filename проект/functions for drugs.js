//функция загружает параграф в стартовое окно
function appendParagraphDrugs(){
	$("#start_window").empty().css("height", "563px");//если в стартовом окне что-то есть - очистить стартовое окно, установить высоту окна
//создание параграфа
    var attentionDrugs = document.createElement("div");
	$(attentionDrugs).attr("id", "attentionDrugs").css("opacity","0").append("<span style=\"color:red\">ВНИМАНИЕ!</span>  &nbsp В данном разделе рассмотрены лекарственные препараты, упомянутые в данной программе. Препараты располагаются в алфавитном порядке, без учета принадлежности к той или иной фармакологической группе.");
    $("#start_window").append(attentionDrugs);
   
	appendListDrugs();   
}

//функция создает список лекарственных средств 
function appendListDrugs(){
	
	var container = document.createElement("div");
	$(container).attr("id","container").appendTo($(start_window));
	
	var containerUp = document.createElement("div");
	$(containerUp).attr("id","containerUp").appendTo($(container));
		
	var listDrugs = document.createElement("table");
	$(listDrugs).attr("id","listDrugs").mousedown(function(){return false;}).css("opacity","0");
	
	var Up = document.createElement("div");
	$(Up).attr("id","Up").click(function(){containerUp.scrollTop -=40;}).mousedown(function(){return false;}).append("<p>&#9650;</p>").css("opacity","0").appendTo($(start_window));
		
	var Down = document.createElement("div");
	$(Down).attr("id","Down").click(function(){containerUp.scrollTop +=40;}).mousedown(function(){return false;}).append("<p>&#9660;</p>").css("opacity","0").appendTo($(start_window));
		
	var drugs = ["<strong >Абакавир</strong>","<strong>Азитромицин</strong>","<strong>Альбендазол</strong>","<strong>Амикацин</strong>","<strong>Амфотерицин В</strong>","<strong>Ацикловир</strong>","<strong>Валацикловир</strong>","<strong>Ганцикловир</strong>","<strong>Зидовудин</strong>","<strong>Итраконазол</strong>","<strong>Кетоконазол</strong>","<strong>Кларитромицин</strong>","<strong>Клиндамицин</strong>","<strong>Клотримазол</strong>","<strong>Ламивудин</strong>","<strong>Липосомальный амфотерицин В</strong>","<strong>Лопинавир/\nритонавир</strong>","<strong>Метронидазол</strong>","<strong>Миконазол</strong>","<strong>Невирапин</strong>","<strong>Нистатин</strong>","<strong>Парамомицин</strong>","<strong>Пириметамин</strong>","<strong>Рифабутин</strong>","<strong>Саквинавир/\nритонавир</strong>","<strong>Сульфадиазин</strong>","<strong>Тенофовир</strong>","<strong>Триметоприм - Сульфаметоксазол</strong>","<strong>Фамцикловир</strong>","<strong>5 - Флуцитозин</strong>","<strong>Флюконазол</strong>","<strong>Фолиновая кислота</strong>","<strong>Фоскарнет</strong>","<strong>Ципрофлоксацин</strong>","<strong>Эмтрицитабин</strong>","<strong>Этамбутол</strong>","<strong>Эфавиренц</strong>"];
	
	for(var i=0;i<drugs.length;i++){
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		$(td).addClass("td_list_Drugs").click(show_window_aboutDrug).append(drugs[i]).appendTo($(tr));
		$(listDrugs).append($(tr));
	}
	
	$(containerUp).append(listDrugs);
	
	$("#listDrugs, #Up, #Down, #attentionDrugs").animate({opacity:"1"},1000)
	
};

//функция создает окно вывода информации о лекарственном средстве
function show_window_aboutDrug(event){
	var arr_td_list_Drugs = $(".td_list_Drugs");
	
	var arr_Drugs = $(".Drugs");
	
	var a = [].indexOf.call(arr_td_list_Drugs, event.currentTarget);
	
	for(var i=0;i<arr_td_list_Drugs.length;i++){
		if(arr_td_list_Drugs[i]==event.currentTarget){
			$(arr_td_list_Drugs[i]).css("background-color","red");
		}else{
			$(arr_td_list_Drugs[i]).css("background-color","");
		}
	}
	
//если в стартовом окне нет окна вывода информации о лекарственном средстве - создать его	
    if(!document.getElementById("openDrugs")){
		var openDrugs = document.createElement("div");
		$(openDrugs).attr("id","openDrugs").css({width:"0px",height:"3px", left:"658px"}).appendTo($(start_window));
			
		//растягивается в ширину		
		var x = setTimeout(function X(){
				if(parseInt(openDrugs.style.width)<=parseInt("522px")){
					openDrugs.style.width = parseInt(openDrugs.style.width)+58+"px";
					openDrugs.style.left = parseInt(openDrugs.style.left)-43+"px";
					setTimeout(X,20);
				}else{
					clearTimeout(x);
					}
				},50);
//растягивается в высоту 		
		var y = setTimeout (function Y(){
				if(parseInt(openDrugs.style.height)<=parseInt("430px")){
					openDrugs.style.height = parseInt(openDrugs.style.height)+43+"px";
					
					setTimeout(Y,20);
				}else{
					clearTimeout(y);
					sh
					}
				},450);
	    
	}
//вызвать функцию загрузки текста информации о лекарственном средстве
	
			show_information_aboutDrug(a, arr_Drugs);
	   
}

//функция загрузки текста информации о лекарственном средстве	
function show_information_aboutDrug(a, arr){
	openDrugs.scrollTop = 0;
	openDrugs.innerHTML = arr[a].innerHTML;
}




