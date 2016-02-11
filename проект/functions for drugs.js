//функция загружает параграф в стартовое окно
function appendParagraphDrugs(){
	while(start_window.children.length){//если в стартовом окне что-то есть - очистить стартовое окно
		start_window.removeChild(start_window.firstChild);
		}
	
	start_window.style.height = "563px";
//создание параграфа
    	
	var attentionDrugs = document.createElement("div");
		attentionDrugs.id = "attentionDrugs";
		attentionDrugs.style.cssText = " opacity:0 ";
		attentionDrugs.innerHTML = "<span style=\"color:red\">ВНИМАНИЕ!</span>  &nbsp В данном разделе рассмотрены лекарственные препараты, упомянутые в данной программе. Препараты располагаются в алфавитном порядке, без учета принадлежности к той или иной фармакологической группе. ";
   start_window.appendChild(attentionDrugs);
   
   var x = setTimeout(function X(){//плавное появление параграфа 
		if(attentionDrugs.style.opacity!=1 ){
			attentionDrugs.style.opacity = parseFloat(attentionDrugs.style.opacity)+0.05+"";			
			setTimeout(X,50);
		}else{
			clearTimeout(x);		
		}
	},100);
	
	appendListDrugs();   
}

//функция создает список лекарственных средств 
function appendListDrugs(){
	
	var container = document.createElement("div");
	container.id = "container";
	start_window.appendChild(container);
	
	var containerUp = document.createElement("div");
	containerUp.id = "containerUp";
	container.appendChild(containerUp);
	
	var listDrugs = document.createElement("table");
	listDrugs.id = "listDrugs";
	listDrugs.style.cssText = "opacity:0";
	
	var Up = document.createElement("div");
	Up.id = "Up";
	Up.onclick = function(){containerUp.scrollTop -=40;};
	Up.innerHTML = "<p>&#9650;</p>";
	
	Up.style.cssText = " opacity:0";
	start_window.appendChild(Up);
	
	var Down = document.createElement("div");
	Down.id = "Down";
	Down.onclick = function(){containerUp.scrollTop +=40;};
	Down.style.cssText = " opacity:0";
	Down.innerHTML = "<p>&#9660;</p>"
	
	
	start_window.appendChild(Down);
	
	var drugs = ["<strong>Абакавир</strong>","<strong>Азитромицин</strong>","<strong>Альбендазол</strong>","<strong>Амикацин</strong>","<strong>Амфотерицин В</strong>","<strong>Ацикловир</strong>","<strong>Валацикловир</strong>","<strong>Ганцикловир</strong>","<strong>Зидовудин</strong>","<strong>Итраконазол</strong>","<strong>Кетоконазол</strong>","<strong>Кларитромицин</strong>","<strong>Клиндамицин</strong>","<strong>Клотримазол</strong>","<strong>Ламивудин</strong>","<strong>Липосомальный амфотерицин В</strong>","<strong>Лопинавир/\nритонавир</strong>","<strong>Метронидазол</strong>","<strong>Миконазол</strong>","<strong>Невирапин</strong>","<strong>Нистатин</strong>","<strong>Парамомицин</strong>","<strong>Пириметамин</strong>","<strong>Рифабутин</strong>","<strong>Саквинавир/\nритонавир</strong>","<strong>Сульфадиазин</strong>","<strong>Тенофовир</strong>","<strong>Триметоприм - Сульфаметоксазол</strong>","<strong>Фамцикловир</strong>","<strong>5 - Флуцитозин</strong>","<strong>Флюконазол</strong>","<strong>Фолиновая кислота</strong>","<strong>Фоскарнет</strong>","<strong>Ципрофлоксацин</strong>","<strong>Эмтрицитабин</strong>","<strong>Этамбутол</strong>","<strong>Эфавиренц</strong>"];
	
	for(var i=0;i<drugs.length;i++){
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		td.className = "td_list_Drugs";
		td.onclick =  show_window_aboutDrug;
		td.innerHTML = drugs[i];
		tr.appendChild(td);
		listDrugs.appendChild(tr);
	}
	
	var x = setTimeout(function X(){//плавное появление списка 
		if(listDrugs.style.opacity!=1 && Up.style.opacity!=1 && Down.style.opacity!=1 ){
			listDrugs.style.opacity = parseFloat(listDrugs.style.opacity)+0.05+"";	
			Up.style.opacity = parseFloat(Up.style.opacity)+0.05+"";	
			Down.style.opacity = parseFloat(Down.style.opacity)+0.05+"";				
			setTimeout(X,50);
		}else{
			clearTimeout(x);		
		}
	},100);
	
	
	containerUp.appendChild(listDrugs);
	
	
};

//функция создает окно вывода информации о лекарственном средстве
function show_window_aboutDrug(event){
	var arr_td_list_Drugs = listDrugs.querySelectorAll(".td_list_Drugs");
	
	var arr_Drugs = document.body.querySelectorAll(".Drugs");
	
	var a = [].indexOf.call(arr_td_list_Drugs, event.currentTarget);
	
	for(var i=0;i<arr_td_list_Drugs.length;i++){
		if(arr_td_list_Drugs[i]==event.currentTarget){
			arr_td_list_Drugs[i].style.background = "red";
		}else{
			arr_td_list_Drugs[i].style.background = "";
		}
	}
	
//если в стартовом окне нет окна вывода информации о лекарственном средстве - создать его	
    if(!document.getElementById("openDrugs")){
		var openDrugs = document.createElement("div");
		openDrugs.id = "openDrugs";
		openDrugs.style.cssText = "width:0px; height:3px;left:658px;";
		start_window.appendChild(openDrugs);
	
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




