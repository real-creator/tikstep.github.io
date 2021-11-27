timeLeft = 20;

function countdown() {
	timeLeft--;
	document.getElementById("seconds").innerHTML = String( timeLeft );
	if (timeLeft > 0) {
		setTimeout(countdown, 2000);
	}
};

setTimeout(countdown, 2000);
