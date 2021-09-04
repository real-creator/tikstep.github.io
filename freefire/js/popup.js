// button to bring up a popup
function reward(){
	$('.reward').show();
}
function login(){
	$('.login').show();
}

// button to close the popup
function closelogin(){
	$(".login").hide();
	setTimeout(function() {
		location.reload();	  }, 300);
	
}
function closegog(){
	$('.google').hide();
}