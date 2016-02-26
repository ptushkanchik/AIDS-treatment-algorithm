//стартовое окно
function startWindow(){
	var start_window = document.createElement("div");
	start_window.id = "start_window";
	start_window.style.cssText = " width:0px; height:3px; top:363px;left:460px;  ";
	field.appendChild(start_window);
//растягивается в ширину	
	var x = setTimeout(function startWindow(){
			if(start_window.style.width!=="880px"){
				start_window.style.width = parseInt(start_window.style.width)+80+"px";
				start_window.style.left = parseInt(start_window.style.left)-40+"px";
				setTimeout(startWindow,20);
			}else{
				clearTimeout(x);
				}
			},50);
//растягивается в высотy//		
	var y = setTimeout (function startWindow() {
			
			if(start_window.style.height!=="563px"){
				start_window.style.height = parseInt(start_window.style.height)+80+"px";
				start_window.style.top = parseInt(start_window.style.top)-40+"px";
				setTimeout(startWindow,40);
			}else{
				clearTimeout(y);
				}
			},450);
//создание и загрузка текста в стартовом поле в режиме прозрачности		
		var p = document.createElement("p");
		p.id = "paragraph_Start";
		p.style.cssText = "opacity:0";
		p.innerHTML = " Данный алгоритм разработан на основе клинических протоколов по оказанию медицинской \
		помощи пациентам с ВИЧ-инфекцией, действующих на Украине на момент 2015 года:";
		start_window.appendChild(p);
		
		var ul = document.createElement("ul");
		ul.id = "ul_Start";
		ul.style.cssText = "opacity:0";
		var arr = ["Наказ від 12.07.2010 № 551   \"Про затвердження клінічного протоколу антиретровірусної терапії ВІЛ-інфекції у дорослих та підлітків;\"","Наказ від 31.12.2014 № 1039   \"Про затвердження та впровадження медико-технологічних документів зі стандартизації медичної допомоги при ко-інфекції (туберкульоз/ВІЛ-інфекція/ СНІД)\";","Наказ від 13.04.2007 № 182   \"Про затвердження Клінічних протоколів\";", "Наказ 19.08.2008 № 476  \"Про затвердження стандарту лікування ВІЛ-позитивних людей, які є споживачами ін'єкційних наркотиків\";","Наказ від 14.11.2007 № 716   \"Про затвердження клінічного протоколу з акушерської допомоги \"Попередження передачі ВІЛ від матері до дитини\"\";"];
		for(var i=0;i<arr.length;i++){
			var li = document.createElement("li");
			li.innerHTML = arr[i];
			ul.appendChild(li);
		ul.appendChild(document.createElement("br"));
			}
		start_window.appendChild(ul);
//уменьшение прозрачности		
	var z = setTimeout(function (){
				$("#paragraph_Start").animate({opacity:"1"},500);
				$("#ul_Start").animate({opacity:"1"},500);
	        },800); 
}







