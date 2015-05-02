//////////////////////////////////////////////////////////////////////////////////////////
// JQUERY
//////////////////////////////////////////////////////////////////////////////////////////

var header = $(".header")
var content = $(".content")
var footer = $(".footer")
var menu = $(".menu")

header.click(function(){

	header.toggleClass('halfvh')
	content.toggleClass('quartervh')
	footer.toggleClass('quartervh')
	menu.toggleClass('visible')

})































