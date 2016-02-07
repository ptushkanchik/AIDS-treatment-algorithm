//функция очистки стартового поля и вывода меню оппортунистических инфекций
function appendParagraphOpportunity(){
	
	while(start_window.children.length){//если в стартовом окне что-то есть - очистить стартовое окно
		start_window.removeChild(start_window.firstChild);
		}
	
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
	var arrFunction = [pnevm,toxo,atypMic,CMV,herpes,candid,cryptMicroIzo,crypt,histo];
	
	var arrTD = table.querySelectorAll("td");
	for(var i=0;i<arrTD.length;i++){
		arrTD[i].innerHTML = arrText[i];
		arrTD[i].onclick = openOppWindow;//функция загрузки окна вывода информации о конкретной инфекции
		arrTD[i].addEventListener("click",arrFunction[i]);//функция создания текста с информацией о конкретной инфекции
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
function openOppWindow(){
	
	if(document.getElementById("oppTab")){//если есть таблица выбора инфекции - удалить ее
		start_window.removeChild(oppTab);
		}
	var divOpp = document.createElement("div");//создание окна вывода информации о конкретной инфекции
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

//функция плавного появления окна вывода информации о конкретной инфекции
function show_divOpp(){
	var x = setTimeout(function X(){//плавное появление окна вывода информации о конкретной инфекции 
		if(divOpp.style.opacity!=1 ){
			divOpp.style.opacity = parseFloat(divOpp.style.opacity)+0.05+"";
			setTimeout(X,50);
		}else{
			clearTimeout(x);
		}
	},100);
}

//функция создания текста информации о пневмоцистной пневмонии
function pnevm(){
	create_button();
	
	var firstLine = document.createElement("h3");
	firstLine.innerHTML = "<center><u>Первая линия терапии:</u></center> ";
	divOpp.appendChild(firstLine);
	var p1 = document.createElement("p"); 
	p1.innerHTML = "<b>Триметоприм-сульфаметоксазол</b> (бисептол, бактрим) при тяжелом или среднетяжелом течении - внутривенно(по 5-6 ампул 3 р/день). После стабилизации состояния пациента 1820 мг (4 таблетки по 480 мг) 4 р/день перорально. Общая длительность лечения - 21 день. В легких случаях можно начинать сразу с перорального приема. ";
	divOpp.appendChild(p1);
	var secondLine = document.createElement("h3");
	secondLine.innerHTML = "<center><u>Вторая линия терапии:</u></center> ";
	divOpp.appendChild(secondLine);
	var p2 = document.createElement("p");
	p2.innerHTML = "<b>Клиндамицин</b> - 600 мг каждые 6 часов в/в або п/о + <b>примахин</b> 15 мг п/о 2 р/день в течение 21 дней.";
	divOpp.appendChild(p2);
	var altLine = document.createElement("h3");
	altLine.innerHTML = "<center><u>Альтернативные линии терапии:</u></center> ";
	divOpp.appendChild(altLine);
	var  p3 = document.createElement("p");
	p3.innerHTML = "а) <b>Триметоприм-сульфаметоксазол</b> (бисептол, бактрим) - 5-6 ампул 3 р/день или 1820 мг (4 таблетки по 480 мг) 4 р/день перорально + <b>дапсон</b> 100мг 1 р/день перорально;";
	divOpp.appendChild(p3);
	var  p4 = document.createElement("p");
	p4.innerHTML = "в) <b>Атоваквон</b> - 750мг перорально 2 р/день во время еды в течение 21 дня;";
	divOpp.appendChild(p4);
	var overLine = document.createElement("h3");
	overLine.innerHTML = "<center><u><i>Дополнительно:</i></u></center> ";
	divOpp.appendChild(overLine);
	var  p5 = document.createElement("p");
	p5.innerHTML = "При тяжелом течении, прогрессировании гипоксии или возникновении отека легких - <b>преднизолон</b>  до 240 мг в день в/в до 2 недель. После лечения рекомендован курс вторичной профилактики - <b>триметоприм-сульфаметоксазол</b> (бисептол, бактрим) по 2 таблетки в день до стабилизации уровня СД4 выше 200 кл/мкл в течение 3 месяцев;";
	divOpp.appendChild(p5);
	
	show_divOpp();
}

//функция создания текста информации о токсоплазмозе
function toxo(){
	create_button();
	
	var firstDay = document.createElement("h3");
	firstDay.innerHTML = "<center><u>Первый день:</u></center> ";
	divOpp.appendChild(firstDay);
	var p1 = document.createElement("p"); 
	p1.innerHTML = "<b>Пириметамин</b> - 200мг однократно;";
	divOpp.appendChild(p1);
	var otherDay = document.createElement("h3");
	otherDay.innerHTML = "<center><u>Далее:</u></center>";
	divOpp.appendChild(otherDay);
	var p2 = document.createElement("p");
	p2.innerHTML = "<b>Пириметамин</b> - 25мг 3 р/день или 50мг 2 р/день в течение 6 - 8 недель;";
	divOpp.appendChild(p2);
	var plus = document.createElement("h4");
	plus.innerHTML = "<center><u>плюс:</u></center>";
	divOpp.appendChild(plus);
	var  p3 = document.createElement("p");
	p3.innerHTML = "а) <b>Фолиновая кислота</b> (лейковорин) - 15мг 1 р/день в течение 6 - 8 недель;";
	divOpp.appendChild(p3);
	var  p4 = document.createElement("p");
	p4.innerHTML = "в) <b>Сульфадиазин</b> - 1,0г - 1,5г внутрь каждые 6 часов в течение 6 - 8 недель;";
	divOpp.appendChild(p4);
	var  p5 = document.createElement("h3");
	p5.innerHTML = "<center><u>Внимание!</u></center>";
	divOpp.appendChild(p5);
	var  p6 = document.createElement("p");
	p6.innerHTML = "Сульфадиазин может быть заменен одним из следующих препаратов: <b>клиндамицин</b> - 600мг 4 р/день в/в або п/о в течение 6 недель; <b>азитромицин</b> - 1200мг 1 р/день п/о в течение 6 недель; <b>кларитромицин</b> - 1000мг 2 р/день п/о в течение 6 недель; <b>атоваквон</b> - 750мг 4 р/день п/о в течение 6 недель;";
	divOpp.appendChild(p6);
	
	show_divOpp();
}

//функция создания текста информации о атипичных микобактериозах
function atypMic(){
	create_button();
	
	var firstLine = document.createElement("h3");
	firstLine.innerHTML = "<center><u>Препараты первой линии:</u></center> ";
	divOpp.appendChild(firstLine);
	var p1 = document.createElement("p"); 
	p1.innerHTML = "<b>Кларитромицин</b> - 500мг - 1000мг внутрь 2 р/день в течение 6 месяцев;";
	divOpp.appendChild(p1);
	var plus = document.createElement("h4");
	plus.innerHTML = "<center><u>плюс:</u></center>";
	divOpp.appendChild(plus);
	var p2 = document.createElement("p"); 
	p2.innerHTML = "<b>Этамбутол</b> - 500мг - 400мг внутрь 1 р/день в течение 6 месяцев;";
	divOpp.appendChild(p2);
	var plus1 = document.createElement("h4");
	plus1.innerHTML = "<center><u>плюс:</u></center>";
	divOpp.appendChild(plus1);
	var p3 = document.createElement("p"); 
	p3.innerHTML = "<b>Рифабутин</b> - 300мг - 450мг внутрь 1 р/день в течение 6 месяцев;";
	divOpp.appendChild(p3);
	var otherLine = document.createElement("h3");
	otherLine.innerHTML = "<center><u>Другие препараты, активные против МАС:</u></center> ";
	divOpp.appendChild(otherLine);
	var p4 = document.createElement("p"); 
	p4.innerHTML = "а)<b>Азитромицин</b> - 600мг - 1200мг внутрь 1 р/день в течение 12 месяцев;";
	divOpp.appendChild(p4);
	var p5 = document.createElement("p"); 
	p5.innerHTML = "в)<b>Амикацин</b> - 15мг/кг в/в 1 р/день;";
	divOpp.appendChild(p5);
	var p6 = document.createElement("p"); 
	p6.innerHTML = "с)<b>Ципрофлоксацин</b> - 500мг внутрь 2 р/день в течение 12 месяцев;";
	divOpp.appendChild(p6);
	
	show_divOpp();
}

//функция создания текста информации о цитомегаловирусной инфекции
function CMV(){
	create_button();
	
	var p1 = document.createElement("p"); 
	p1.innerHTML = "<br><b>Ганцикловир</b> - 5мг/кг в/в 2 р/день - 14 дней при ретините, 14 - 21 день при прочих формах;";
	divOpp.appendChild(p1);
	var or = document.createElement("h4");
	or.innerHTML = "<center><u>или:</u></center>";
	divOpp.appendChild(or);
	var p2 = document.createElement("p"); 
	p2.innerHTML = "<b>Фоскарнет</b> - 90мг/кг в/в 2 р/день за 2 часа в течение 14 дней;";
	divOpp.appendChild(p2);
	var or1 = document.createElement("h4");
	or1.innerHTML = "<center><u>или:</u></center>";
	divOpp.appendChild(or1);
	var p3 = document.createElement("p"); 
	p3.innerHTML = "<b>Ганцикловир</b> + <b>Фоскарнет</b> в вышеуказанных дозах в течение 14 дней;";
	divOpp.appendChild(p3);
	var or2 = document.createElement("h4");
	or2.innerHTML = "<center><u>Поддерживающая терапия:</u></center>";
	divOpp.appendChild(or2);
	var p4 = document.createElement("p"); 
	p4.innerHTML = "<i>применяется в случае CMV-ретинита, прекращается в случае улучшения зрения при отсутствии признаков поражения зрительного нерва и повышении уровня СД4 выше 150 кл/мкл в течение 3-6 месяцев в ответ на прием АРТ</i> ;";
	divOpp.appendChild(p4);
	var p5 = document.createElement("p"); 
	p5.innerHTML = "<b>Ганцикловир</b> - 5мг/кг в/в 1 р/день - 5 дней в неделю постоянно;";
	divOpp.appendChild(p5);
	var or3 = document.createElement("h4");
	or3.innerHTML = "<center><u>или:</u></center>";
	divOpp.appendChild(or3);
	var p6 = document.createElement("p"); 
	p6.innerHTML = "<b>Фоскарнет</b> - 90 - 120мг/кг в/в 1 р/день постоянно;";
	divOpp.appendChild(p6);
	
	show_divOpp();
}

//функция создания текста информации о герпетической инфекции
function herpes(){
	create_button();
	
	var local = document.createElement("h2");
	local.innerHTML = "<u>Местные формы</u>";
	divOpp.appendChild(local);
	var p1 = document.createElement("p"); 
	p1.innerHTML = "<b>Ацикловир</b> - 400мг 5 р/день внутрь - 7 - 10 дней;";
	divOpp.appendChild(p1);
	var or = document.createElement("h4");
	or.innerHTML = "<center><u>или:</u></center>";
	divOpp.appendChild(or);
	var p2 = document.createElement("p"); 
	p2.innerHTML = "<b>Валацикловир</b> - 1г 2 р/день внутрь - 7 - 10 дней;";
	divOpp.appendChild(p2);
	var or1 = document.createElement("h4");
	or1.innerHTML = "<center><u>или:</u></center>";
	divOpp.appendChild(or1);
	var p3 = document.createElement("p"); 
	p3.innerHTML = "<b>Фамцикловир</b> - 250мг 3 р/день внутрь - 7 - 10 дней;";
	divOpp.appendChild(p3);
	var or2 = document.createElement("h4");
	or2.innerHTML = "<center><u>Поддерживающая терапия:</u></center>";
	divOpp.appendChild(or2);
	var p4 = document.createElement("p"); 
	p4.innerHTML = "<b>Ацикловир</b> (400мг 5 р/день), <b>валацикловир</b> (1г в день), <b>фамцикловир</b> (500мг 2 р/день) - длительно;";
	divOpp.appendChild(p4);
	var br = document.createElement("br");
	divOpp.appendChild(br);
	var general = document.createElement("h2");
	general.innerHTML = "<u>Генерализованные или диссеминированные формы</u>";
	divOpp.appendChild(general);
	var p5 = document.createElement("p"); 
	p5.innerHTML = "<b>Ацикловир</b> - 10мг/кг в/в каждые 8 часов - 7 - 14 дней;";
	divOpp.appendChild(p5);
	var or3 = document.createElement("h4");
	or3.innerHTML = "<center><u>или:</u></center>";
	divOpp.appendChild(or3);
	var p6 = document.createElement("p"); 
	p6.innerHTML = "<b>Валацикловир</b> - 1г 2 р/день внутрь - 7 - 10 дней либо до исчезновения клинических проявлений;";
	divOpp.appendChild(p6);
	
	show_divOpp();
}

//функция создания текста информации о кандидозе
function candid(){
	create_button();
//орофарингеальная форма	
	var orofaringeal = document.createElement("h2");
	orofaringeal.innerHTML = "<u>Орофарингеальная форма:</u>";
	divOpp.appendChild(orofaringeal);
		
		var firstLine = document.createElement("h3");
		firstLine.innerHTML = "<center><u>Первая линия лечения:</u></center> ";
		divOpp.appendChild(firstLine);
	
			var p1 = document.createElement("p"); 
			p1.innerHTML = "<b>Миконазол</b> - жевательные таблетки, рассасывать один раз в день в течение 7 дней;";
			divOpp.appendChild(p1);
	
		var or = document.createElement("h4");
		or.innerHTML = "<center><u>или:</u></center>";
		divOpp.appendChild(or);
	
			var p2 = document.createElement("p"); 
			p2.innerHTML = "<b>Кетоконазол</b> - 200мг 1 р/день внутрь - в течение 7 дней;";
			divOpp.appendChild(p2);
	
		var secondLine = document.createElement("h3");
		secondLine.innerHTML = "<center><u>Вторая линия лечения:</u></center> ";
		divOpp.appendChild(secondLine);
	
			var p2 = document.createElement("p"); 
			p2.innerHTML = "<b>Флюконазол</b> - 100мг 1 р/день внутрь - в течение 7 дней;";
			divOpp.appendChild(p2);
			
		var or1 = document.createElement("h4");
		or1.innerHTML = "<center><u>или:</u></center>";
		divOpp.appendChild(or1);
		
			var p3 = document.createElement("p"); 
			p3.innerHTML = "<b>Итраконазол</b> - 100мг 1 р/день внутрь - в течение 7 дней;";
			divOpp.appendChild(p3);
	
		var br = document.createElement("br");
		divOpp.appendChild(br);
	
//кандидоз пищевода	
	var esophageal = document.createElement("h2");	
	esophageal.innerHTML = "<u>Эзофагеальная форма:</u>";
	divOpp.appendChild(esophageal);
		
		var firstLine1 = document.createElement("h3");
		firstLine1.innerHTML = "<center><u>Первая линия лечения:</u></center> ";
		divOpp.appendChild(firstLine1);
		
			var p4 = document.createElement("p"); 
			p4.innerHTML = "<b>Флюконазол</b> - 400 мг/день, после исчезновения боли - 200мг/день перорально или внутривенно в течение 14 - 21 дней;";
			divOpp.appendChild(p4);
		
		var or2 = document.createElement("h4");
		or2.innerHTML = "<center><u>или:</u></center>";
		divOpp.appendChild(or2);
	
			var p5 = document.createElement("p"); 
			p5.innerHTML = "<b>Кетоконазол</b> - 200мг 2 р/день внутрь - в течение 21 дня;";
			divOpp.appendChild(p5);
		
		var secondLine1 = document.createElement("h3");
		secondLine1.innerHTML = "<center><u>Вторая линия лечения:</u></center> ";
		divOpp.appendChild(secondLine1);
		
			var p6 = document.createElement("p"); 
			p6.innerHTML = "<b>Амфотерицин В</b> - 0,6 - 0,8 мг/кг 1 р/день внутривенно - в течение 10 - 14 дней;";
			divOpp.appendChild(p6);
		
		var or3 = document.createElement("h4");
		or3.innerHTML = "<center><u>или:</u></center>";
		divOpp.appendChild(or3);
		
			var p7 = document.createElement("p"); 
			p7.innerHTML = "<b>Итраконазол</b> - 200 - 400 мг 1 р/день внутрь - в течение 2 - 3 недель;";
			divOpp.appendChild(p7);
			
	var br1 = document.createElement("br");
		divOpp.appendChild(br1);
//кандидоз влагалища			
	var vaginal = document.createElement("h2");	
	vaginal.innerHTML = "<u>Вагинальная форма:</u>";
	divOpp.appendChild(vaginal);
		
		var firstLine2 = document.createElement("h3");
		firstLine2.innerHTML = "<center><u>Первая линия лечения:</u></center> ";
		divOpp.appendChild(firstLine2);
		
			var p7 = document.createElement("p"); 
			p7.innerHTML = "<b>Флюконазол</b> - 100 мг внутрь однократно;";
			divOpp.appendChild(p7);
		
		var or4 = document.createElement("h4");
		or4.innerHTML = "<center><u>или:</u></center>";
		divOpp.appendChild(or4);
	
			var p8 = document.createElement("p"); 
			p8.innerHTML = "<b>Клотримазол</b> - 500мг однократно интравагинально;";
			divOpp.appendChild(p8);
		
		var secondLine2 = document.createElement("h3");
		secondLine2.innerHTML = "<center><u>Вторая линия лечения:</u></center> ";
		divOpp.appendChild(secondLine2);
		
			var p9 = document.createElement("p"); 
			p9.innerHTML = "<b>Кетоконазол</b> -  200 мг 2 р/день внутрь - в течение 3 дней;";
			divOpp.appendChild(p9);
		
		var or5 = document.createElement("h4");
		or5.innerHTML = "<center><u>или:</u></center>";
		divOpp.appendChild(or5);
		
			var p10 = document.createElement("p"); 
			p10.innerHTML = "<b>Кетоконазол</b> - 200 - 1 р/день внутрь - в течение 7 дней;";
			divOpp.appendChild(p10);
		
		var support = document.createElement("h3");
		support.innerHTML = "<center><u>Поддерживающая терапия:</u></center> ";
		divOpp.appendChild(support);
		
			var p11 = document.createElement("p"); 
			p11.innerHTML = "<b>Нистатин</b> -  2000 - 4000 мг 2 р/день интравагинально - в течение 10 дней;";
			divOpp.appendChild(p11);
		
		var or6 = document.createElement("h4");
		or6.innerHTML = "<center><u>или:</u></center>";
		divOpp.appendChild(or6);
		
			var p12 = document.createElement("p"); 
			p12.innerHTML = "<b>Флюконазол</b> - 50 - 200 мг  1 р/день внутрь - длительно;";
			divOpp.appendChild(p12);
			
		var br2 = document.createElement("br");
		divOpp.appendChild(br2);
		
//системный кандидоз 
	var system = document.createElement("h2");	
	system.innerHTML = "<u>Системный кандидоз:</u>";
	divOpp.appendChild(system);
		
		var firstLine3 = document.createElement("h3");
		firstLine3.innerHTML = "<center><u>Состояние стабильное:</u></center> ";
		divOpp.appendChild(firstLine3);
		
			var p13 = document.createElement("p"); 
			p13.innerHTML = "<b>Флюконазол</b> - 600 мг, при нормальной температуре - 400мг 1 р/день внутривенно в течение 2 - 3 недель;";
			divOpp.appendChild(p13);
		
		var or7 = document.createElement("h4");
		or7.innerHTML = "<center><u>или:</u></center>";
		divOpp.appendChild(or7);
	
			var p14 = document.createElement("p"); 
			p14.innerHTML = "<b>Амфотерицин В</b> - 0,6 - 0,8 мг/кг 1 р/день внутривенно - в течение 2 - 3 недель;";
			divOpp.appendChild(p14);
		
		var secondLine3 = document.createElement("h3");
		secondLine3.innerHTML = "<center><u>Состояние нестабильное (высокая температура, артериальная гипотензия и т.д.):</u></center> ";
		divOpp.appendChild(secondLine3);
		
			var p15 = document.createElement("p"); 
			p15.innerHTML = "<b>Амфотерицин В</b> -  0,8 - 1,0 мг/кг 1 р/день внутривенно - в течение 2 - 3 недель;";
			divOpp.appendChild(p15);
		
		var or8 = document.createElement("h4");
		or8.innerHTML = "<center><u>или:</u></center>";
		divOpp.appendChild(or8);
		
			var p16 = document.createElement("p"); 
			p16.innerHTML = "<b>Липосомальный амфотерицин В</b> - 1,0 - 3,0 мг/кг 1 р/день внутривенно - в течение 2 - 3 недель;";
			divOpp.appendChild(p16);
		
		var thirdLine3 = document.createElement("h3");
		thirdLine3.innerHTML = "<center><u>Состояние нестабильное (повышение уровня креатинина):</u></center> ";
		divOpp.appendChild(thirdLine3);
		
			var p17 = document.createElement("p"); 
			p17.innerHTML = "<b>Липосомальный амфотерицин В</b> -  0,5 - 1,0 мг/кг 1 р/день внутривенно - в течение 2 - 3 недель;";
			divOpp.appendChild(p17);
	
	
	var br3 = document.createElement("br");
		divOpp.appendChild(br3);		
	var p18 = document.createElement("p"); 
		p18.innerHTML = "<center><b><i>Препараты отменяют через 2 недели после негативного посева крови.</i></b></center> ";
		divOpp.appendChild(p18);
	
	
	show_divOpp();
	
}

//функция создания текста информации о криптоспоридиозе, микроспоридиозе, изоспорозе
function cryptMicroIzo(){
	create_button();
//Криптоспоридиоз	
	var cryptospor = document.createElement("h2");
	cryptospor.innerHTML = "<u>Криптоспоридиоз:</u>";
	divOpp.appendChild(cryptospor);
		
		var p1 = document.createElement("p"); 
		p1.innerHTML = "<b>Парамомицин</b> - 1000мг 3 р/день внутрь в течение 4 недель;";
		divOpp.appendChild(p1);
	
		var or = document.createElement("h4");
		or.innerHTML = "<center><u>плюс:</u></center>";
		divOpp.appendChild(or);
	
		var p2 = document.createElement("p"); 
		p2.innerHTML = "<b>Азитромицин</b> - 600мг 1 р/день внутрь в течение 4 недель;";
		divOpp.appendChild(p2);
	
		var or1 = document.createElement("h4");
		or1.innerHTML = "<center><u>в дальнейшем:</u></center>";
		divOpp.appendChild(or1);
		
		var p3 = document.createElement("p"); 
		p3.innerHTML = "<b>Парамомицин</b> - 1000мг 2 р/день внутрь в течение 8 недель;";
		divOpp.appendChild(p3);
		
	var br = document.createElement("br");
		divOpp.appendChild(br);
//Микроспоридиоз		
	var mycro = document.createElement("h2");
	mycro.innerHTML = "<u>Микроспоридиоз:</u>";
	divOpp.appendChild(mycro);
		
		var p4 = document.createElement("p"); 
		p4.innerHTML = "<b>Альбендазол</b> - 400мг 2 р/день внутрь в течение 4 недель;";
		divOpp.appendChild(p4);
	
		var or2 = document.createElement("h4");
		or2.innerHTML = "<center><u>при неэффективности:</u></center>";
		divOpp.appendChild(or2);
	
		var p5 = document.createElement("p"); 
		p5.innerHTML = "<b>Метронидазол</b> - 500мг 3 р/день внутрь в течение 4 недель;";
		divOpp.appendChild(p5);
	
	var br1 = document.createElement("br");
		divOpp.appendChild(br1);
//Изоспороз
	var izo = document.createElement("h2");
	izo.innerHTML = "<u>Изоспороз:</u>";
	divOpp.appendChild(izo);
		
		var p6 = document.createElement("p"); 
		p6.innerHTML = "<b>Триметоприм-сульфаметоксазол</b>(бисептол, бактрим)- 2 таблетки 2 р/день, при неэффективности 3 р/день в течение 7 дней (<i>при положительной динамике продолжать прием 10 недель</i>);";
		divOpp.appendChild(p6);
	
		var p7 = document.createElement("p"); 
		p7.innerHTML = "<b>Ципрофлоксацин</b> - 500мг 2 р/день внутрь в течение 7 дней (<i>при положительной динамике продолжать прием 10 недель</i>);";
		divOpp.appendChild(p7);
	
	show_divOpp();
}

//функция создания текста информации о криптококкозе
function crypt(){
	create_button();
	
	var firstLine = document.createElement("h3");
		firstLine.innerHTML = "<center><u>Первая линия лечения:</u></center> ";
		divOpp.appendChild(firstLine);
		
		var p1 = document.createElement("p"); 
			p1.innerHTML = "<b>Амфотерицин В</b> - 0,7 - 1,0 мг/кг 1 р/день внутривенно в течение 14 дней;";
			divOpp.appendChild(p1);	
	
		var or1 = document.createElement("h4");
			or1.innerHTML = "<center><u>плюс:</u></center>";
			divOpp.appendChild(or1);
		
		var p2 = document.createElement("p"); 
			p2.innerHTML = "<b>5 - Флуцитозин</b> - 25 мг/кг 4 р/день внутривенно в течение 14 дней;";
			divOpp.appendChild(p2);
			
		var or2 = document.createElement("h4");
			or2.innerHTML = "<center><u>далее:</u></center>";
			divOpp.appendChild(or2);
		
		var p3 = document.createElement("p"); 
			p3.innerHTML = "<b>Флуконазол</b> - 400 мг 1 р/день внутрь в течение не менее 10 недель;";
			divOpp.appendChild(p3);
			
		var or3 = document.createElement("h4");
			or3.innerHTML = "<center><u>далее:</u></center>";
			divOpp.appendChild(or3);
		
		var p4 = document.createElement("p"); 
			p4.innerHTML = "<b>Флуконазол</b> - 200 мг 1 р/день внутрь длительно;";
			divOpp.appendChild(p4);
			
	var secondLine = document.createElement("h3");
		secondLine.innerHTML = "<center><u>Вторая линия лечения:</u></center> ";
		divOpp.appendChild(secondLine);
		
		var p5 = document.createElement("p"); 
			p5.innerHTML = "<b>Амфотерицин В</b> - 0,7 - 1,0 мг/кг 1 р/день внутривенно в течение 6 - 10 недель;";
			divOpp.appendChild(p5);	
			
		var or4 = document.createElement("h4");
			or4.innerHTML = "<center><u>плюс:</u></center>";
			divOpp.appendChild(or4);
			
		var p6 = document.createElement("p"); 
			p6.innerHTML = "<b>5 - Флуцитозин</b> - 25 мг/кг 4 р/день внутривенно в течение 6 - 10 недель;";
			divOpp.appendChild(p6);
			
		var or5 = document.createElement("h4");
			or5.innerHTML = "<center><u>или:</u></center>";
			divOpp.appendChild(or5);
			
		var p7 = document.createElement("p"); 
			p7.innerHTML = "<b>Амфотерицин В</b> - 0,7 - 1,0 мг/кг 1 р/день внутривенно в течение 6 - 10 недель;";
			divOpp.appendChild(p7);
			
		var or6 = document.createElement("h4");
			or6.innerHTML = "<center><u>далее:</u></center>";
			divOpp.appendChild(or6);
			
		var p8 = document.createElement("p"); 
			p8.innerHTML = "<b>Флуконазол</b> - 400 - 800 мг 1 р/день внутрь в течение  10 - 12 недель;";
			divOpp.appendChild(p8);
			
		var or7 = document.createElement("h4");
			or7.innerHTML = "<center><u>далее:</u></center>";
			divOpp.appendChild(or7);
			
		var p9 = document.createElement("p"); 
			p9.innerHTML = "<b>Флуконазол</b> - 200 мг 1 р/день внутрь длительно;";
			divOpp.appendChild(p9);
		
	show_divOpp();
}

//функция создания текста информации о гистоплазмозе
function histo(){
	create_button();
	
	var p1 = document.createElement("p"); 
			p1.innerHTML = "<br><b>Амфотерицин В</b> - 0,7 - 1,0 мг/кг/сут внутривенно в течение 1 - 2 недель;";
			divOpp.appendChild(p1);	
			
	var or1 = document.createElement("h4");
			or1.innerHTML = "<center><u>далее:</u></center>";
			divOpp.appendChild(or1);
			
	var p2 = document.createElement("p"); 
			p2.innerHTML = "<b>Итраконазол</b> -200 мг 2 р/день внутрь;";
			divOpp.appendChild(p2);	
	
	
	show_divOpp();
}


