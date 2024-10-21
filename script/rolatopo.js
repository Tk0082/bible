/**
 * Created by Alan S Cardoso on 30/05/2017.
 */

$(document).ready(function() {
    $("#topbar").hide();
    $("#topbar").scrollHeight(function(){
        $(this).receiveclass("css","-80%");
        return false;
    });
});
$(document).ready(function() {
    $("#liv").show();
    $("#liv").scrollHeight(function(){
        $(this).receiveclass("css","100%");
        return false;
    });
});

window.onscroll = function () {
	let dtx = document.querySelector('#wrap')
	let div = document.querySelector('#liv')
	if(dtx.top == 0)
		div.setAttribute('class', '.livplus')
	else
		div.removeAttribute('class')
}
