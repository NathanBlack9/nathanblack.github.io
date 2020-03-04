function readMore(){
//------по ЛКМ определяет ID элемента------
	document.onclick = function(event){
			event = event || window.event;
			if (!event.target) {
				event.target = event.srcElement;
			}
		var elID = event.target.id;
//-----------------------------------------
		switch (elID){
			case "btn1":
				var dots = document.getElementById("dots1");
				var more = document.getElementById("more1");
				var btn = document.getElementById("btn1");

			if(dots.style.display === "none"){
				dots.style.display="inline";
				btn.innerHTML="Read more"
				more.style.display="none"
			} else{
				dots.style.display="none";
				btn.innerHTML="Hide"
				more.style.display="inline"
			};break;	
		
			case "btn2":
				var dots = document.getElementById("dots2");
				var more = document.getElementById("more2");
				var btn = document.getElementById("btn2");

			if(dots.style.display === "none"){
				dots.style.display="inline";
				btn.innerHTML="Read more"
				more.style.display="none"
			} else{
				dots.style.display="none";
				btn.innerHTML="Hide"
				more.style.display="inline"
			}; break;	

			case "btn3":
				var dots = document.getElementById("dots3");
				var more = document.getElementById("more3");
				var btn = document.getElementById("btn3");

			if(dots.style.display === "none"){
				dots.style.display="inline";
				btn.innerHTML="Read more"
				more.style.display="none"
			} else{
				dots.style.display="none";
				btn.innerHTML="Hide"
				more.style.display="inline"
			};break;	

			case "btn4":
				var dots = document.getElementById("dots4");
				var more = document.getElementById("more4");
				var btn = document.getElementById("btn4");

			if(dots.style.display === "none"){
				dots.style.display="inline";
				btn.innerHTML="Read more"
				more.style.display="none"
			} else{
				dots.style.display="none";
				btn.innerHTML="Hide"
				more.style.display="inline"
			};break;

			case "btn5":
				var dots = document.getElementById("dots5");
				var more = document.getElementById("more5");
				var btn = document.getElementById("btn5");

			if(dots.style.display === "none"){
				dots.style.display="inline";
				btn.innerHTML="Read more"
				more.style.display="none"
			} else{
				dots.style.display="none";
				btn.innerHTML="Hide"
				more.style.display="inline"
			};break;
		
			case "btn6":
				var dots = document.getElementById("dots6");
				var more = document.getElementById("more6");
				var btn = document.getElementById("btn6");

			if(dots.style.display === "none"){
				dots.style.display="inline";
				btn.innerHTML="Read more"
				more.style.display="none"
			} else{
				dots.style.display="none";
				btn.innerHTML="Hide";
				more.style.display="inline";
			};break;

			case "btn7":
				var dots = document.getElementById("dots7");
				var more = document.getElementById("more7");
				var btn = document.getElementById("btn7");

			if(dots.style.display === "none"){
				dots.style.display="inline";
				btn.innerHTML="Read more"
				more.style.display="none"
			} else{
				dots.style.display="none";
				btn.innerHTML="Hide"
				more.style.display="inline"
			};break;

			case "btn8":
				var dots = document.getElementById("dots8");
				var more = document.getElementById("more8");
				var btn = document.getElementById("btn8");

			if(dots.style.display === "none"){
				dots.style.display="inline";
				btn.innerHTML="Read more"
				more.style.display="none"
			} else{
				dots.style.display="none";
				btn.innerHTML="Hide"
				more.style.display="inline"
			};break;
		}
	}
}

