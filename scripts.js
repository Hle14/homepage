/*** Temporary text filler function. Remove when deploying template. ***/
var gibberish=["This is just some filler text", "Welcome to Dynamic Drive CSS Library", "Demo content nothing to read here"]
function filltext(words){
for (var i=0; i<words; i++)
document.write(gibberish[Math.floor(Math.random()*3)]+" ")
}

var d = new Date();
var timer;
function fadeIn(element_id){
	//alert("fadeIn called");
	var element = document.getElementById(element_id);
	timer = setInterval(fadeShift(element),200);
};

function fadeShift(element){
	//alert("fadeShift called");
	if(element.style.opacity == 1.0)
	{
		//clearInterval(timer);
		clearInterval();
	} else
	{
		element.style.opacity += 0.1;

	}
};

/*
var fadeIn = function(element_id){
	//quadratic function controls alpha level
	var element = document.getElementById(element_id);
	var time0 = d.getTime();
	alert(time0);
	var x = 0;
	var alpha = 0;
	while(x < 1.0) //changes alpha level over time
	{
		x = (d.getTime() - time0) / 1000;
		alpha = (-1*x*x + 2*x);
		element.style.opacity = alpha;
	}
}
/*
document.onload = initVars();

function initVars(){
	var portrait = document.getElementById("portrait");

	document.getElementById("btn-home").onclick = changeGnome;
	document.getElementById("btn-projects").onclick = changeCat;
	document.getElementById("btn-blog").onclick = changeShyGuy;
}
*/


var changeGnome = function(){
	document.getElementById("portrait").src = "gnome.png";
}
var changeCat = function(){
	document.getElementById("portrait").src = "SC_cat.jpg";
}
var changeShyGuy = function(){
	document.getElementById("portrait").src = "shyguy_avatar.jpg";
}
window.onload = function(){
	fadeIn("portrait");

	var home = document.getElementById("btn-home");
	var proj = document.getElementById("btn-projects");
	var blog = document.getElementById("btn-blog");

	home.addEventListener("click",changeGnome,false);
	proj.addEventListener("click",changeCat,false);
	blog.addEventListener("click",changeShyGuy,false);
};