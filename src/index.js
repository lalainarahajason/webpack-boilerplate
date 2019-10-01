require('bootstrap');
require("../assets/stylesheets/main.scss");

function removeClass(el, className)
{
	if (el.classList)
		el.classList.remove(className)
	else if (hasClass(el, className))
	{
		var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
		el.className = el.className.replace(reg, ' ');
	}
}

window.onload = function(){
	document.querySelector('.jumbotron').classList.remove("preload");
} 