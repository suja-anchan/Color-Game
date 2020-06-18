// var colors=[ 
// "rgb(255, 0, 0)",
// "rgb(255, 255, 0)",
// "rgb(0, 255, 0)",
// "rgb(0, 255, 255)",
// "rgb(0, 0, 255)",
// "rgb(255, 0, 255)",
// ]

var numSqs=6;
var colors = generateRandomColors(numSqs);
var squares=document.querySelectorAll(".square");
var pickedcolor=pickcolor();
var colordisp=document.querySelector("#colordisp");
var msgdisp=document.querySelector("#dispMsg");

var h1=document.querySelector("h1");
var resetb= document.querySelector("#reset");
var easyb=document.querySelector("#easy");
var hardb=document.querySelector("#hard");


easyb.addEventListener("click",function(){
	numSqs=3
hardb.classList.remove("selected");
easyb.classList.add("selected");
colors=generateRandomColors(numSqs);
pickedcolor=pickcolor();
colordisp.textContent=pickedcolor;
for(var i=0;i<squares.length;i++)
{
if(colors[i]){
	squares[i].style.background=colors[i];
}
else
{
	squares[i].style.display="none";
}
}

});

hardb.addEventListener("click",function(){
	numSqs=6
easyb.classList.remove("selected");
hardb.classList.add("selected");
colors=generateRandomColors(numSqs);
pickedcolor=pickcolor();
colordisp.textContent=pickedcolor;
for(var i=0;i<squares.length;i++)
{
	squares[i].style.display="block";
}

});

resetb.addEventListener("click",function(){
	colors=generateRandomColors(numSqs);
	pickedcolor= pickcolor();
	colordisp.textContent=pickedcolor;
	for(var i=0;i<squares.length;i++)
	  squares[i].style.backgroundColor=colors[i];
	
	h1.style.background="#232323";
});


for(var i=0;i<squares.length;i++){
	//add initial colors to squares
	squares[i].style.backgroundColor=colors[i];

	//add listeners to squares
	squares[i].addEventListener("click",function(){
		
		 var clickd=this.style.backgroundColor;
		if(clickd === pickedcolor){

			msgdisp.textContent="correct";
			resetb.textContent="Play Again?";
			changeclr(clickd);
			h1.style.backgroundColor= clickd;
		}
		else
		{
			
			this.style.background="#232323";
			msgdisp.textContent="Try again";
		}
		
		
	});
}

function changeclr(color){
	for (var i=0; i<colors.length;i++){
		squares[i].style.backgroundColor=color;
	}
}

function pickcolor(){
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num)
{
	//make an array
	var arr=[];


	
	for ( var i=0;i<num;i++){
		//add num random colors to array
		arr.push(randomColor());
	}

	//return array
	return arr;
}

function randomColor(){
	//pick a red from 0-255
	var r=Math.floor(Math.random() * 256);

	//pick a green from 0-255
	var g=Math.floor(Math.random() * 256);
	//pick a blue from 0-255
	var b=Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}	