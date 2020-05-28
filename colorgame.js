var colors=[ 
"rgb(255, 0, 0)",
"rgb(255, 255, 0)",
"rgb(0, 255, 0)",
"rgb(0, 255, 255)",
"rgb(0, 0, 255)",
"rgb(255, 0, 255)",
]
var squares=document.querySelectorAll(".square");
var pickedcolor=colors[3];
var colordisp=document.querySelector("#colordisp");
var msgdisp=document.querySelector("#dispMsg");
colordisp.textContent=pickedcolor;

for(var i=0;i<squares.length;i++){
	//add initial colors to squares
	squares[i].style.backgroundColor=colors[i];

	//add listeners to squares
	squares[i].addEventListener("click",function(){
		
		 var clickd=this.style.backgroundColor;
		if(clickd === pickedcolor){

			alert("correct");
		}
		else
		{
			
			this.style.background="#232323";
			msgdisp.textContent="Try again";
		}
		
		
	});
}


