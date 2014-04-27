/*** Temporary text filler function. Remove when deploying template. ***/
var gibberish=["This is just some filler text", "Welcome to Dynamic Drive CSS Library", "Demo content nothing to read here"]
function filltext(words){
for (var i=0; i<words; i++)
document.write(gibberish[Math.floor(Math.random()*3)]+" ")
}



var loads_index = 0;

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
				if(loads_index < loads.length - 1){ //if all elements haven't been loaded, continue loading
					loads_index++; //load the next index
					fadeEffect.init(loads[loads_index],3,100);
				}
			}else{
				var value = Math.round(this.alpha + ((this.target - this.alpha) * .05)) + (1 * this.flag);
				this.elem.style.opacity = value / 100;
				this.elem.style.filter = 'alpha(opacity=' + value + ')';
				this.alpha = value;
			}
		}
	}
}();


var changeGnome = function(){
	document.getElementById("portrait").src = "gnome.png";
};
var changeCat = function(){
	document.getElementById("portrait").src = "SC_cat.jpg";
};
var changeShyGuy = function(){
	document.getElementById("portrait").src = "shyguy_avatar.jpg";
};

//elements to load - at the end of the last fade in fadeEffect.tween will call itself using the next item in the array
var loads = new Array("portrait","btn-home","btn-projects","btn-blog","btn-links","btn-contact");


window.onload = function(){

	//could you pass "for each x in loads"?
	fadeEffect.init(loads[loads_index],3,100);

	var home = document.getElementById("btn-home");
	var proj = document.getElementById("btn-projects");
	var blog = document.getElementById("btn-blog");

	home.addEventListener("click",changeGnome,false);
	proj.addEventListener("click",changeCat,false);
	blog.addEventListener("click",changeShyGuy,false);
};