/*** Temporary text filler function. Remove when deploying template. ***/
var gibberish=["This is just some filler text", "Welcome to Dynamic Drive CSS Library", "Demo content nothing to read here"]
function filltext(words){
for (var i=0; i<words; i++)
document.write(gibberish[Math.floor(Math.random()*3)]+" ")
}





var fadeEffect=function(){
	return{
		init:function(id, flag, target){
			this.elem = document.getElementById(id);
			clearInterval(this.elem.si);
			this.target = target ? target : flag ? 100 : 0;
			this.flag = flag || -1;
			this.alpha = this.elem.style.opacity ? parseFloat(this.elem.style.opacity) * 100 : 0;
			this.elem.si = setInterval(function(){fadeEffect.tween()}, 20);
		},
		tween:function(){
			if(this.alpha == this.target){
				clearInterval(this.elem.si);
			}else{
				var value = Math.round(this.alpha + ((this.target - this.alpha) * .05)) + (1 * this.flag);
				this.elem.style.opacity = value / 100;
				this.elem.style.filter = 'alpha(opacity=' + value + ')';
				this.alpha = value
			}
		}
	}
}();



/*
function fadeIn(){

	document.getElementById("portrait").style.opacity += 0.1;
	setTimeout(fadeIn,250);
	alert("THIS IS CALLED");
};*/




var changeGnome = function(){
	document.getElementById("portrait").src = "gnome.png";
};
var changeCat = function(){
	document.getElementById("portrait").src = "SC_cat.jpg";
};
var changeShyGuy = function(){
	document.getElementById("portrait").src = "shyguy_avatar.jpg";
};
window.onload = function(){
	//fadeIn();

	fadeEffect.init('portrait',3,100);

	//fadeEffect.init('menu_items',1,100);

	var home = document.getElementById("btn-home");
	var proj = document.getElementById("btn-projects");
	var blog = document.getElementById("btn-blog");

	home.addEventListener("click",changeGnome,false);
	proj.addEventListener("click",changeCat,false);
	blog.addEventListener("click",changeShyGuy,false);
};