/*** Temporary text filler function. Remove when deploying template. ***/
var gibberish=["This is just some filler text", "Welcome to Dynamic Drive CSS Library", "Demo content nothing to read here"]
function filltext(words){
for (var i=0; i<words; i++)
document.write(gibberish[Math.floor(Math.random()*3)]+" ")
}

var d = new Date();

function fadeIn(element_id){
	//quadratic function controls alpha level
	var element = document.getElementById(element_id);
	var time0 = d.getTime();
	var x = 0;
	var alpha = 0;
	while(x < 1.0) //changes alpha level over time
	{
		x = (d.getTime() - time0) / 1000;
		alpha = -100*x*x + 200*x;
		//element.
	}
}

var portrait = document.getElementById('portrait');

document.getElementById('btn-home').onclick = function(){portrait.src='gnome.png'};
document.getElementById('btn-projects').onclick = function(){portrait.src='SC_cat.jpg'};
document.getElementById('btn-blog').onclick = function(){portrait.src='shyguy_avatar.jpg'};

/*
var home_btn = document.getElementById('btn-home');
home_btn.onclick = function(){home_btn.src='gnome.png'};
var proj_btn = document.getElementById('btn-projects');
proj_btn.onclick = function(){_btn.src='gnome.png'};
*/