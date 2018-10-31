//<![CDATA[

$(document).ready(function(){

$.urlParam = function(name){
var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
if (results==null){
return null;
}
else{
return decodeURI(results[1]) || 0;
}
}		

var getlink = $("#getlink"),
tunggudulu = $("#tunggudulu"),
gotolink = $("#gotolink"),
//separator11 = $("#separator11"),
//separator1 = $("#separator1"),
separator = $("#separator"),
kepoin = $("#kepoin"),
kepoin1 = $("#kepoin1"),
timer = $('#timer');

if ($.urlParam('o') != null){
//separator11.removeClass('hidden');
//separator1.removeClass('hidden');
separator.removeClass('hidden');
kepoin.removeClass('hidden');
kepoin1.removeClass('hidden');
timer.pietimer({
timerSeconds: 10, //generate link
color: '#03a9f4',
fill: false,
showPercentage: true,
callback: function() {
getlink.prop('disabled',false);						
getlink.removeClass('hidden');
tunggudulu.prop('disabled',false);						
tunggudulu.removeClass('hidden');	
timer.addClass('hidden');
}
});				
}

function gotolinkcountdown(){
var countDown = 0; //getlink
gotolink.removeClass('hidden');		
var x = setInterval(function() {

var distance = countDown -= 1;

gotolink.html('<span class="glyphicon glyphicon-time"></span> Generate Link Plase Wait...');

if (distance < 0) {
clearInterval(x);
gotolink.prop('disabled',false);
gotolink.html('<span class="glyphicon glyphicon-ok-sign"></span> Go to Link');
}
}, 1000);
}				

var request = false;
getlink.click(function() {
if (request == false) {
gotolinkcountdown();
request = true;		
}
$('html, body').animate({
scrollTop: eval(gotolink.offset().top - 10)
}, 100);
});	

gotolink.on("click",function(){
var realurl = aesCrypto.decrypt(convertstr($.urlParam('o')),convertstr('root'));
window.location.href=realurl;
});					

fuckAdBlock.on(true, function() {
$("#adbs").html("Matikan Adblock Untuk Melanjutkan Mendownload !!!");
$("#adb").removeClass('hidden');
}).on(false, function() {
});

})
//]]>
