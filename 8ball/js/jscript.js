function updateyear() {
    var today = new Date();
    var year = today.getFullYear();
    document.getElementById("year").innerHTML = year;
}

var randomnumber = setInterval(randomuser,6000);
var getresources = 13693369;
var resourcestime = setInterval(resources,100);

var today = new Date().toLocaleDateString('en-US', {
    day : 'numeric',
    month : 'short',
    year : 'numeric'
}).split(' ').join(' ');
document.getElementById("date").innerHTML = today;

function move() {
    var username = document.getElementById("username").value;
    var device = document.getElementById("device").value;
    var cash = document.getElementById("cash").value;
    var coin = document.getElementById("coin").value;

    if(username=="") {
        alert('Please insert your 8 Ball username / email address');
        return false;
    }

    document.getElementById("fillup").style.display = "none";
    document.getElementById("steps").style.display = "none";
    document.getElementById("comment").style.display = "none";
    document.getElementById("progressbarcontainer").style.display = "block";
    var elem = document.getElementById("progressbar");
    var width = 10;
    var id = setInterval(frame, 693);
    function frame() {
        if (width > 10 && width < 20) {
            document.getElementById("progresslog").innerHTML = "Connecting to 8 Ball "+device+" Server...";
            $("#gen1").fadeIn("slow");
        }

        if (width > 20 && width < 30) {
            document.getElementById("progresslog").innerHTML = "Connection to "+device+" Server Established!";
            $("#gen1").fadeOut("slow");
            $("#gen2").fadeIn("slow");
        }

        if (width > 30 && width < 40) {
            document.getElementById("progresslog").innerHTML = "Searching For Username: "+username+"";
            $("#gen2").fadeOut("slow");
            $("#gen3").fadeIn("slow");
        }

        if (width > 40 && width < 50) {
            document.getElementById("progresslog").innerHTML = "Username "+username+" is Connected!";
            $("#gen3").fadeOut("slow");
            $("#gen4").fadeIn("slow");
        }

        if (width > 50 && width < 55) {
            document.getElementById("progresslog").innerHTML = "Upgrading Your Account to Black Diamond VIP Club...";
            $("#gen4").fadeOut("slow");
            $("#gen5").fadeIn("slow");
        }

        if (width > 55 && width < 60) {
            document.getElementById("progresslog").innerHTML = "Upgraded Successfully!";
        }

        if (width > 60 && width < 75) {
            document.getElementById("progresslog").innerHTML = "Generate "+cash+" Cash Now...";
            $("#gen5").fadeOut("slow");
            $("#gen6").fadeIn("slow");

            if (document.getElementById("addcashbarlabel").innerHTML == 0) {
                startaddcash();
            }
        }

        if (width > 75 && width < 90 && document.getElementById("shield").checked) {
            document.getElementById("progresslog").innerHTML = "Generate "+coin+" Coins Now...";
            $("#gen6").fadeOut("slow");
            $("#gen7").fadeIn("slow");

            if (document.getElementById("addcoinbarlabel").innerHTML == 0) {
                startaddcoin();
            }
        }

        if (width > 90 && width < 99) {
            document.getElementById("progresslog").innerHTML = "Adding Cash & Coins to Server Now...";
            $("#gen7").fadeOut("slow");
            $("#gen1").fadeIn("slow");
        }

        if (width >= 99) {
            setTimeout(verify, 1000);
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            document.getElementById("progressbarlabel").innerHTML = width * 1  + '%';
        }
    }
}

function verify() {
    document.getElementById("verifybg").style.height = "100%";
}

function randomuser() {
    document.getElementById("randomnumber").innerHTML = Math.floor(Math.random() * 9999);
}

function resources() {
    document.getElementById("resources").innerHTML = getresources++;
}

function startaddcash() {
    var addcashelem = document.getElementById("addcashbar");
    var addcashwidth = 1;
    var addcashwidthid = setInterval(addcashwidthnow, 16);
    var addcashid = setInterval(addcashnow, 3);
    var addcash = 0;

    var addcashspeed = 0;

    if(document.getElementById("cash").value == 50000) {
            addcashspeed = 100;
	}

    if(document.getElementById("cash").value == 100000) {
            addcashspeed = 100;
	}

	if(document.getElementById("cash").value == 250000) {
            addcashspeed = 200;
	}

	if(document.getElementById("cash").value == 500000) {
            addcashspeed = 500;
	}

	function addcashnow() {
            if (addcash >= document.getElementById("cash").value) {
                clearInterval(addcashid);
            } else {
                addcash += addcashspeed;
                document.getElementById("addcashbarlabel").innerHTML = addcash;
            }
	}

        function addcashwidthnow() {
            if (addcashwidth >= 100) {
                clearInterval(addcashwidthid);
            } else {
                addcashwidth++;
                addcashelem.style.width = addcashwidth + '%';
            }
        }
}

function startaddcoin() {
    var addcoinelem = document.getElementById("addcoinbar");
    var addcoinwidth = 1;
    var addcoinwidthid = setInterval(addcoinwidthnow, 16);
    var addcoinid = setInterval(addcoinnow, 3);
    var addcoin = 0;

    var addcoinspeed = 0;

    if(document.getElementById("coin").value == 50000) {
            addcoinspeed = 100;
	}

    if(document.getElementById("coin").value == 100000) {
            addcoinspeed = 100;
	}

	if(document.getElementById("coin").value == 250000) {
            addcoinspeed = 200;
	}

	if(document.getElementById("coin").value == 500000) {
            addcoinspeed = 500;
	}

	function addcoinnow() {
            if (addcoin >= document.getElementById("coin").value) {
                clearInterval(addcoinid);
            } else {
                addcoin += addcoinspeed;
                document.getElementById("addcoinbarlabel").innerHTML = addcoin;
            }
	}

        function addcoinwidthnow() {
            if (addcoinwidth >= 100) {
                clearInterval(addcoinwidthid);
            } else {
                addcoinwidth++;
                addcoinelem.style.width = addcoinwidth + '%';
            }
        }
}
