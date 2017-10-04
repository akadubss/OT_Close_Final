$(function(){
    $.w = $(window);
    $.w.on('resize', res);
    res();
});

function res() {
    $('.background1').css('height',($.w.outerHeight()-22)+'px');}
	
function res() {
    $('.About').css('height',($.w.outerHeight()-50)+'px');}
