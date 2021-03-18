function C1() {
    if ($("#VALORANTEMAIL").val() == "" || $("#VALORANTREGION").val() == "") {
        alert("Type in your real Email address and choose your server.")
    } else {
        $(".S1").fadeOut(1000);
        setTimeout(function() {

            $(".S2").fadeIn(1000);

            setTimeout(function() {

                var TYPED = new Typed(".LOADING", {
                    strings: ["Loading <strong>Valorant Beta Key Generator</strong>^500.^500.^500.^1000", "<strong>VALORANT." + $("#VALORANTREGION").val() + ".CONFIG</strong> loaded^500.^500.^500.^1000", "Generating <strong>Valorant Beta Key</strong> for you^500.^500.^500.^3000", "Composing email with generated code to <strong>" + $("#VALORANTEMAIL").val() + "</strong>^500.^500.^500.^1000", "<strong class='RED'>FAIL!^1000 Botlike behaviour detected.^1000</strong> Pass human verification to continue and to receive <strong>your free Valorant Beta Key</strong>."],
                    typeSpeed: 75,
                    backSpeed: 75,
                    backDelay: 500,
                    showCursor: false,
                    onComplete: function() {
                        $(".lds-ellipsis").fadeOut(1000);
                        $(".HV").fadeIn(1000);
                    }
                })

            }, 1000)

        }, 1000) 
    }
}