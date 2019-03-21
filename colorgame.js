var colors= generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var numberSquares = 6;



easyBtn.addEventListener("click",function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected")
	numberSquares = 3;
	colors = generateRandomColors(numberSquares);
   pickedColor = pickColor();
   colorDisplay.textContent = pickedColor;
   for(var i = 0;i < squares.length;i++){
   	if(colors[i]){
   		squares[i].style.backgroundColor = colors[i];
	}else{
		squares[i].style.display = "none";
	}
}
});



hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected")
	numberSquares = 6;
	colors = generateRandomColors(numberSquares);
   pickedColor = pickColor();
   colorDisplay.textContent = pickedColor;

   for(var i = 0;i < squares.length;i++){
   		squares[i].style.backgroundColor = colors[i];
   		squares[i].style.display = "block";

   	}


});





resetbutton.addEventListener("click",function()
{
colors = generateRandomColors(numberSquares);	
pickedColor = pickColor();
colorDisplay.textContent = pickedColor;
resetbutton.textContent = "New colors";
 messageDisplay.textContent = "";
for(var i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor = colors[i];
}
h1.style.backgroundColor = "steelblue";
});
 




 colorDisplay.textContent = pickedColor;
for(var i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click",function(){
 var clickedColor = this.style.backgroundColor;
 if(clickedColor ===pickedColor){
 messageDisplay.textContent = "correct!";
 resetbutton.textContent = "Play Again";
 changeColors(clickedColor);
 h1.style.backgroundColor = clickedColor;	
 
 }
 	else{
 		this.style.backgroundColor = "#232323";
 		messageDisplay.textContent = "Try Again!";
 	}
 });
}



function changeColors(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = color;
	}
}



function pickColor(){
var random = Math.floor(Math.random() * colors.length);
return colors[random];
}


function generateRandomColors(num){
	var arr = [];
	for(var i = 0; i < num; i++){
arr.push(randomColor())
	}
	return arr;
}


function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb("+r+", " + g + ", " + b + ")";
}