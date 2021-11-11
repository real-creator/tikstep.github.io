//
//
//Website Designed by CounterMind on Marketing-Rhino.com
//https://www.marketing-rhino.com/
//Skype: counter.mind
//It is forbidden to re-sell this landing page without Author Permission.
//
//
$(document).ready(function() {
	
	// Domain Subfolder Name
	var $subfolder_name = 'homescapes';
	
	// Human Verification Timer
	var $human_verification_timer_value = '180'; //Countdown remaing time in seconds	
	
	// Panel Titles
	var $panel_title_generator = 'Homescapes Stars Generator';
	var $panel_title_activity = 'Recent Activity';
	var $panel_title_chat = 'Live Chat';
	
	// Console Messages
	var $console_message_gems = 'Stars';
	var $console_message_coins = 'Coins';
	var $console_message_1 = 'Loading generator files...';
	var $console_message_2 = 'Extracting generator files...';
	var $console_message_3 = 'Connecting to proxy server...';
	var $console_message_4 = 'Establishing connection with game database...';
	var $console_message_5 = 'Searching for username';
	var $console_message_6 = 'Succesfully connected to username';
	var $console_message_7 = 'Preparing to generate Stars and Coins';
	var $console_message_8 = 'Generating';
	var $console_message_9 = 'Succesfully generated';
	var $console_message_10 = 'Cleaning up injection traces';
	var $console_message_11 = 'Performing automatic human verification';
	var $console_message_12 = 'Automatic human verification failed';
	var $console_message_13 = 'Manual verification required';
	
	// Resource 1 Values
	var resource_1_value_min = 5000;
	var resource_1_value_max = 100000;
	var $resource_1_value_1 = '5000';
	var $resource_1_value_2 = '10000';
	var $resource_1_value_3 = '50000';
	var $resource_1_value_4 = '100000';
	
	// Resource 2 Values
	var resource_2_value_min = 5000;
	var resource_2_value_max = 100000;
	var $resource_2_value_1 = '5000';
	var $resource_2_value_2 = '10000';
	var $resource_2_value_3 = '50000';
	var $resource_2_value_4 = '100000';
	
	ion.sound({
    sounds: [
        {
            name: "swash",
            path: "audio/",
            volume: 0.1
        },
		{
            name: "success",
            path: "audio/",
            volume: 0.1
        }
    ],
    path: "sounds/",
    preload: true,
    multiplay: true
	});	
	var $sound_setting = '1';
	$("#panel-nav-item-activity").click(function () {
		$(window).scrollTop(0);
		$(".panel-nav-item-active").animate({"left":"0"}, "fast");	
		$(".panel-nav-item-active").removeClass('panel-nav-item-border-left');	
		$('#panel-nav-item-activity').addClass('panel-nav-item-a');
		$('#panel-nav-item-generator').removeClass('panel-nav-item-a');
		$('#panel-nav-item-chat').removeClass('panel-nav-item-a');		
		$('#generator-panel-content-dyna-1').css('visibility','hidden');	
		$('#generator-panel-content-dyna-3').css('visibility','hidden');	
		$('#generator-panel-content-dyna-2').css('visibility','visible');
		$('#generator-panel-content-dyna-2').addClass('bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$(this).removeClass('bounceIn');
		});
		$('.generator-panel-header h3').text($panel_title_activity);
		if ($sound_setting == 1) {
			ion.sound.play("swash");
		}
	});
	$("#panel-nav-item-generator").click(function () {
		$(window).scrollTop(0);
		$(".panel-nav-item-active").animate({"left":"33.333%"}, "fast");
		$(".panel-nav-item-active").addClass('panel-nav-item-border-right');
		$('#panel-nav-item-activity').removeClass('panel-nav-item-a');
		$('#panel-nav-item-generator').addClass('panel-nav-item-a');
		$('#panel-nav-item-chat').removeClass('panel-nav-item-a');
		$('#generator-panel-content-dyna-2').css('visibility','hidden');	
		$('#generator-panel-content-dyna-3').css('visibility','hidden');	
		$('#generator-panel-content-dyna-1').css('visibility','visible');
		$('#generator-panel-content-dyna-1').addClass('bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$(this).removeClass('bounceIn');
		});
		$('.generator-panel-header h3').text($panel_title_generator);
		if ($sound_setting == 1) {
			ion.sound.play("swash");
		}
	});
	$("#panel-nav-item-chat").click(function () {
		$(window).scrollTop(0);
		$('#panel-nav-item-activity').removeClass('panel-nav-item-a');
		$('#panel-nav-item-generator').removeClass('panel-nav-item-a');
		$('#panel-nav-item-chat').addClass('panel-nav-item-a');
		$(".panel-nav-item-active").removeClass('panel-nav-item-border-right');
		$(".panel-nav-item-active").animate({"left":"66.67%"}, "fast");
		$('#generator-panel-content-dyna-1').css('visibility','hidden');	
		$('#generator-panel-content-dyna-2').css('visibility','hidden');	
		$('#generator-panel-content-dyna-3').css('visibility','visible');
		$('#generator-panel-content-dyna-3').addClass('bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$(this).removeClass('bounceIn');
		});
		$('.generator-panel-header h3').text($panel_title_chat);
		if ($sound_setting == 1) {
			ion.sound.play("swash");
		}
	});
	
	$("#icon-nav-button-1").click(function() {
		if ($sound_setting == 1) {
			ion.sound.play("swash");
		}
		$.ajax({
		type: "get",
		url: "parts/gp-p.php",
		success: function(dataprocess){
			$.magnificPopup.open({
				items: {
					src: '#c-p-popup-wrapper-1',
				},
				type: 'inline',
				preloader: false,
				modal: true,
				removalDelay: 300,
				callbacks: {
					open: function() {
						$('#c-p-popup-wrapper-1').html(dataprocess);
						$('#c-p-popup-inner-wrapper-1').addClass('bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
							$(this).removeClass('bounceIn');
						});	
						$("#icon-nav-button-1-close").click(function() {
							if ($sound_setting == 1) {
								ion.sound.play("swash");
							}	
							$.magnificPopup.close();
						});
					},
					beforeClose: function() {
						this.content.addClass('animated fadeOutDown');
					}, 
					close: function() {
						this.content.removeClass('animated fadeOutDown');
						$('#c-p-popup-inner-wrapper-1').remove();
					}
				}
			});			
		},
		error: function(){
		  alert("An error occured");
		}
		});
	});
	
	$("#icon-nav-button-2").click(function() {
		if ($sound_setting == 1) {
			ion.sound.play("swash");
		}		
		$.ajax({
		type: "get",
		url: "parts/gp-p-s.php",
		success: function(dataprocess){
			$.magnificPopup.open({
				items: {
					src: '#c-p-popup-wrapper-2',
				},
				type: 'inline',
				preloader: false,
				modal: true,
				removalDelay: 300,
				callbacks: {
					open: function() {						
						$('#c-p-popup-wrapper-2').html(dataprocess);
						if ($sound_setting == 1) {
							$('#sound-switch-checkbox').prop('checked', true);
						}	
						$('#c-p-popup-inner-wrapper-2').addClass('bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
							$(this).removeClass('bounceIn');
						});	
						$("#icon-nav-button-2-close").click(function() {
							if ($sound_setting == 1) {
								ion.sound.play("swash");
							}	
							$.magnificPopup.close();
						});
						$("#sound-switch-checkbox").change(function() {
							if(this.checked) {
								$sound_setting = '1';
								$('#sound-icon').addClass('fa-volume-up sound-icon-on');
								$('#sound-icon').removeClass('fa-volume-off sound-icon-off');								
							}
							else {
								$sound_setting = '0';
								$('#sound-icon').removeClass('fa-volume-up sound-icon-on');
								$('#sound-icon').addClass('fa-volume-off sound-icon-off');
							}
						});	
					},
					beforeClose: function() {
						this.content.addClass('animated fadeOutDown');
					}, 
					close: function() {
						this.content.removeClass('animated fadeOutDown');
						$('#c-p-popup-inner-wrapper-2').remove();
					}
				}
			});			
		},
		error: function(){
		  alert("An error occured");
		}
		});
	});

	$('#brawl-stars-player-username').keyup(function(){
		if ($(this).val() != '') {
			$('#first-step-button').removeClass('button-not-allowed');
			$('#first-step-button').addClass('button-allowed');
		}
		else if ($(this).val() == '') {
			$('#first-step-button').removeClass('button-allowed');
			$('#first-step-button').addClass('button-not-allowed');			
		}	
	});
	if ($('#brawl-stars-player-username').val() != '') {
		$('#first-step-button').removeClass('button-not-allowed');
		$('#first-step-button').addClass('button-allowed');
	}		
var _0x2309=['\x49\x32\x5a\x70\x63\x6e\x4e\x30\x4c\x58\x4e\x30\x5a\x58\x41\x74\x59\x6e\x56\x30\x64\x47\x39\x75','\x59\x32\x78\x70\x59\x32\x73\x3d','\x49\x32\x4a\x79\x59\x58\x64\x73\x4c\x58\x4e\x30\x59\x58\x4a\x7a\x4c\x58\x42\x73\x59\x58\x6c\x6c\x63\x69\x31\x31\x63\x32\x56\x79\x62\x6d\x46\x74\x5a\x51\x3d\x3d','\x63\x32\x39\x31\x62\x6d\x51\x3d','\x63\x47\x78\x68\x65\x51\x3d\x3d','\x63\x33\x64\x68\x63\x32\x67\x3d','\x64\x6d\x46\x73','\x49\x32\x4a\x79\x59\x58\x64\x73\x4c\x58\x4e\x30\x59\x58\x4a\x7a\x4c\x58\x42\x73\x59\x58\x6c\x6c\x63\x69\x31\x31\x63\x32\x56\x79\x62\x6d\x46\x74\x5a\x53\x31\x6a','\x49\x32\x4a\x79\x59\x58\x64\x73\x4c\x58\x4e\x30\x59\x58\x4a\x7a\x4c\x58\x42\x73\x59\x58\x6c\x6c\x63\x69\x31\x77\x62\x47\x46\x30\x5a\x6d\x39\x79\x62\x53\x31\x6a','\x63\x48\x4a\x76\x64\x47\x39\x6a\x62\x32\x77\x3d','\x4c\x33\x42\x68\x63\x6e\x52\x7a\x4c\x33\x5a\x66\x63\x43\x35\x77\x61\x48\x41\x3d','\x61\x47\x39\x7a\x64\x41\x3d\x3d','\x59\x57\x70\x68\x65\x41\x3d\x3d','\x55\x45\x39\x54\x56\x41\x3d\x3d','\x61\x6e\x4e\x76\x62\x67\x3d\x3d','\x49\x32\x78\x76\x59\x57\x52\x6c\x63\x67\x3d\x3d','\x5a\x6d\x46\x6b\x5a\x55\x6c\x75','\x5a\x6d\x46\x6b\x5a\x55\x39\x31\x64\x41\x3d\x3d','\x5a\x32\x56\x30','\x63\x47\x46\x79\x64\x48\x4d\x76\x5a\x33\x41\x74\x59\x53\x35\x77\x61\x48\x41\x3d','\x49\x32\x64\x6c\x62\x6d\x56\x79\x59\x58\x52\x76\x63\x69\x31\x77\x59\x57\x35\x6c\x62\x43\x31\x6a\x62\x32\x35\x30\x5a\x57\x35\x30\x4c\x57\x52\x35\x62\x6d\x45\x74\x4d\x51\x3d\x3d','\x61\x47\x6c\x6b\x5a\x51\x3d\x3d','\x49\x33\x49\x74\x63\x79\x31\x70\x62\x57\x63\x74\x64\x33\x4a\x68\x63\x48\x42\x6c\x63\x67\x3d\x3d','\x59\x57\x35\x70\x62\x57\x46\x30\x5a\x51\x3d\x3d','\x5a\x6d\x46\x7a\x64\x41\x3d\x3d','\x49\x33\x49\x74\x63\x79\x31\x32\x59\x57\x78\x31\x5a\x53\x31\x33\x63\x6d\x46\x77\x63\x47\x56\x79','\x49\x33\x49\x74\x63\x79\x31\x77\x59\x57\x35\x6c\x62\x43\x31\x69\x64\x58\x52\x30\x62\x32\x34\x74\x64\x33\x4a\x68\x63\x48\x42\x6c\x63\x67\x3d\x3d','\x62\x6d\x39\x79\x62\x57\x46\x73','\x64\x32\x6c\x6b\x64\x47\x67\x3d','\x5a\x6d\x6c\x75\x5a\x41\x3d\x3d','\x61\x48\x52\x74\x62\x41\x3d\x3d','\x4a\x53\x5a\x75\x59\x6e\x4e\x77\x4f\x77\x3d\x3d','\x49\x33\x4a\x6c\x63\x32\x39\x31\x63\x6d\x4e\x6c\x4c\x54\x45\x74\x59\x57\x31\x76\x64\x57\x35\x30','\x49\x33\x42\x79\x62\x32\x64\x79\x5a\x58\x4e\x7a\x51\x6d\x46\x79','\x50\x47\x52\x70\x64\x69\x42\x70\x5a\x44\x30\x6e\x63\x32\x78\x70\x5a\x47\x56\x79\x4c\x58\x4a\x6c\x63\x32\x39\x31\x63\x6d\x4e\x6c\x4c\x54\x45\x6e\x50\x6a\x77\x76\x5a\x47\x6c\x32\x50\x67\x3d\x3d','\x61\x57\x35\x7a\x5a\x58\x4a\x30\x51\x57\x5a\x30\x5a\x58\x49\x3d','\x62\x57\x6c\x75','\x49\x33\x4e\x73\x61\x57\x52\x6c\x63\x69\x31\x79\x5a\x58\x4e\x76\x64\x58\x4a\x6a\x5a\x53\x30\x78','\x63\x32\x78\x70\x5a\x47\x56\x79','\x64\x6d\x46\x73\x64\x57\x55\x3d','\x49\x32\x52\x6c\x59\x33\x4a\x6c\x59\x58\x4e\x6c\x4c\x58\x4a\x6c\x63\x32\x39\x31\x63\x6d\x4e\x6c\x4c\x54\x45\x3d','\x63\x69\x31\x32\x4c\x57\x4a\x31\x64\x48\x52\x76\x62\x69\x31\x75\x4c\x57\x45\x3d','\x63\x6d\x56\x74\x62\x33\x5a\x6c\x51\x32\x78\x68\x63\x33\x4d\x3d','\x49\x32\x6c\x75\x59\x33\x4a\x6c\x59\x58\x4e\x6c\x4c\x58\x4a\x6c\x63\x32\x39\x31\x63\x6d\x4e\x6c\x4c\x54\x45\x3d','\x59\x57\x52\x6b\x51\x32\x78\x68\x63\x33\x4d\x3d','\x49\x33\x49\x74\x63\x79\x31\x70\x62\x57\x63\x74\x4d\x51\x3d\x3d','\x4d\x54\x55\x77\x63\x48\x67\x3d','\x49\x33\x49\x74\x63\x79\x31\x70\x62\x57\x63\x74\x4d\x67\x3d\x3d','\x49\x33\x49\x74\x63\x79\x31\x70\x62\x57\x63\x74\x4d\x77\x3d\x3d','\x49\x33\x49\x74\x63\x79\x31\x70\x62\x57\x63\x74\x4e\x41\x3d\x3d','\x62\x33\x42\x30\x61\x57\x39\x75','\x4c\x54\x45\x31\x4d\x48\x42\x34','\x5a\x47\x6c\x32','\x49\x33\x4a\x6c\x63\x32\x39\x31\x63\x6d\x4e\x6c\x4c\x54\x49\x74\x59\x57\x31\x76\x64\x57\x35\x30','\x49\x33\x42\x79\x62\x32\x64\x79\x5a\x58\x4e\x7a\x51\x6d\x46\x79\x51\x32\x39\x70\x62\x6e\x4d\x3d','\x49\x33\x4a\x6c\x63\x32\x39\x31\x63\x6d\x4e\x6c\x4c\x57\x6c\x30\x5a\x57\x30\x74\x4d\x69\x31\x68\x62\x57\x39\x31\x62\x6e\x51\x74\x64\x33\x4a\x68\x63\x48\x42\x6c\x63\x67\x3d\x3d','\x49\x33\x4e\x73\x61\x57\x52\x6c\x63\x69\x31\x79\x5a\x58\x4e\x76\x64\x58\x4a\x6a\x5a\x53\x30\x79','\x49\x32\x52\x6c\x59\x33\x4a\x6c\x59\x58\x4e\x6c\x4c\x58\x4a\x6c\x63\x32\x39\x31\x63\x6d\x4e\x6c\x4c\x54\x49\x3d','\x49\x32\x6c\x75\x59\x33\x4a\x6c\x59\x58\x4e\x6c\x4c\x58\x4a\x6c\x63\x32\x39\x31\x63\x6d\x4e\x6c\x4c\x54\x49\x3d','\x49\x33\x49\x74\x63\x79\x31\x70\x62\x57\x63\x74\x4d\x69\x31\x6a','\x49\x33\x49\x74\x63\x79\x31\x70\x62\x57\x63\x74\x4d\x79\x31\x6a','\x49\x33\x49\x74\x63\x79\x31\x70\x62\x57\x63\x74\x4e\x43\x31\x6a','\x49\x33\x49\x74\x63\x79\x31\x70\x62\x57\x63\x74\x4d\x53\x31\x6a','\x49\x32\x4e\x76\x61\x57\x35\x7a\x4c\x58\x4e\x6c\x62\x47\x56\x6a\x64\x43\x31\x69\x64\x58\x52\x30\x62\x32\x34\x3d','\x49\x33\x49\x74\x4d\x53\x31\x33\x63\x6d\x46\x77\x63\x47\x56\x79','\x49\x33\x49\x74\x4d\x69\x31\x33\x63\x6d\x46\x77\x63\x47\x56\x79','\x49\x33\x49\x74\x63\x79\x31\x70\x62\x57\x63\x74\x64\x33\x4a\x68\x63\x48\x42\x6c\x63\x69\x30\x79','\x49\x33\x49\x74\x63\x79\x31\x32\x59\x57\x78\x31\x5a\x53\x31\x33\x63\x6d\x46\x77\x63\x47\x56\x79\x4c\x54\x49\x3d','\x49\x33\x49\x74\x63\x79\x31\x77\x59\x57\x35\x6c\x62\x43\x31\x69\x64\x58\x52\x30\x62\x32\x34\x74\x64\x33\x4a\x68\x63\x48\x42\x6c\x63\x69\x30\x79','\x49\x33\x4e\x6c\x59\x32\x39\x75\x5a\x43\x31\x7a\x64\x47\x56\x77\x4c\x57\x4a\x31\x64\x48\x52\x76\x62\x67\x3d\x3d','\x63\x47\x46\x79\x64\x48\x4d\x76\x5a\x33\x41\x74\x59\x79\x35\x77\x61\x48\x41\x3d','\x49\x32\x4d\x74\x62\x57\x56\x7a\x63\x32\x46\x6e\x5a\x51\x3d\x3d','\x49\x33\x42\x79\x62\x32\x64\x79\x5a\x58\x4e\x7a\x51\x6d\x46\x79\x51\x32\x39\x75\x63\x32\x39\x73\x5a\x51\x3d\x3d','\x49\x33\x42\x79\x62\x32\x64\x79\x5a\x58\x4e\x7a\x51\x6d\x46\x79\x51\x32\x39\x75\x63\x32\x39\x73\x5a\x55\x4e\x76\x61\x57\x35\x7a','\x49\x32\x4d\x74\x63\x43\x31\x6a\x62\x32\x35\x30\x5a\x57\x35\x30\x4c\x58\x64\x79\x59\x58\x42\x77\x5a\x58\x49\x3d','\x49\x32\x4d\x74\x63\x43\x31\x73\x62\x32\x46\x6b\x59\x6d\x46\x79','\x49\x32\x4d\x74\x63\x43\x31\x73\x62\x32\x46\x6b\x5a\x58\x49\x74\x63\x77\x3d\x3d','\x4c\x6d\x4d\x74\x63\x43\x31\x74\x5a\x58\x4e\x7a\x59\x57\x64\x6c','\x4d\x6a\x56\x77\x65\x41\x3d\x3d','\x4e\x7a\x42\x77\x65\x41\x3d\x3d','\x63\x32\x78\x76\x64\x77\x3d\x3d','\x49\x32\x4e\x76\x62\x6e\x4e\x76\x62\x47\x55\x74\x63\x6d\x56\x7a\x62\x33\x56\x79\x59\x32\x55\x74\x61\x57\x31\x6e\x4c\x58\x56\x7a\x5a\x58\x4a\x75\x59\x57\x31\x6c','\x4d\x48\x42\x34','\x49\x32\x4d\x74\x63\x43\x31\x79\x4c\x58\x56\x7a\x5a\x58\x4a\x75\x59\x57\x31\x6c\x4c\x58\x5a\x68\x62\x48\x56\x6c','\x49\x32\x4d\x74\x63\x43\x31\x79\x4c\x58\x42\x73\x59\x58\x52\x6d\x62\x33\x4a\x74\x4c\x58\x5a\x68\x62\x48\x56\x6c','\x50\x48\x4e\x77\x59\x57\x34\x67\x59\x32\x78\x68\x63\x33\x4d\x39\x4a\x32\x4d\x74\x62\x57\x56\x7a\x63\x32\x46\x6e\x5a\x53\x31\x7a\x64\x57\x4e\x6a\x5a\x58\x4e\x7a\x4a\x7a\x34\x3d','\x59\x6d\x39\x31\x62\x6d\x4e\x6c\x53\x57\x35\x6d\x61\x57\x35\x70\x64\x48\x6b\x3d','\x59\x32\x39\x75\x62\x6d\x56\x6a\x64\x47\x56\x6b','\x63\x33\x56\x6a\x59\x32\x56\x7a\x63\x77\x3d\x3d','\x49\x32\x4d\x74\x63\x43\x31\x79\x4c\x58\x56\x7a\x5a\x58\x4a\x75\x59\x57\x31\x6c\x4c\x58\x64\x79\x59\x58\x42\x77\x5a\x58\x49\x3d','\x4e\x7a\x41\x77\x63\x48\x67\x3d','\x50\x48\x4e\x77\x59\x57\x34\x67\x59\x32\x78\x68\x63\x33\x4d\x39\x4a\x32\x4d\x74\x63\x69\x31\x32\x59\x57\x78\x31\x5a\x53\x31\x73\x59\x57\x4a\x6c\x62\x43\x63\x2b','\x50\x43\x39\x7a\x63\x47\x46\x75\x50\x69\x5a\x75\x59\x6e\x4e\x77\x4f\x77\x3d\x3d','\x50\x43\x39\x7a\x63\x47\x46\x75\x50\x67\x3d\x3d','\x49\x32\x4d\x74\x63\x43\x31\x79\x4c\x57\x64\x6c\x62\x58\x4d\x74\x64\x33\x4a\x68\x63\x48\x42\x6c\x63\x67\x3d\x3d','\x49\x32\x4d\x74\x63\x43\x31\x79\x4c\x57\x64\x6c\x62\x58\x4d\x74\x62\x47\x39\x68\x5a\x47\x4a\x68\x63\x67\x3d\x3d','\x4d\x54\x42\x77\x65\x41\x3d\x3d','\x49\x32\x4d\x74\x63\x43\x31\x79\x4c\x57\x64\x6c\x62\x58\x4d\x74\x64\x6d\x46\x73\x64\x57\x55\x3d','\x59\x32\x39\x31\x62\x6e\x52\x55\x62\x77\x3d\x3d','\x64\x47\x39\x47\x61\x58\x68\x6c\x5a\x41\x3d\x3d','\x5a\x47\x56\x6a\x61\x57\x31\x68\x62\x48\x4d\x3d','\x49\x33\x42\x79\x62\x32\x64\x79\x5a\x58\x4e\x7a\x51\x6d\x46\x79\x51\x32\x39\x75\x63\x32\x39\x73\x5a\x55\x64\x6c\x62\x58\x4d\x3d','\x4a\x6d\x35\x69\x63\x33\x41\x37\x50\x48\x4e\x77\x59\x57\x34\x67\x59\x32\x78\x68\x63\x33\x4d\x39\x4a\x32\x4d\x74\x63\x69\x31\x32\x59\x57\x78\x31\x5a\x53\x31\x6e\x5a\x57\x31\x7a\x4c\x57\x46\x6a\x59\x32\x56\x75\x64\x43\x63\x2b','\x4a\x6d\x35\x69\x63\x33\x41\x37\x50\x48\x4e\x77\x59\x57\x34\x67\x59\x32\x78\x68\x63\x33\x4d\x39\x4a\x32\x4d\x74\x63\x69\x31\x32\x59\x57\x78\x31\x5a\x53\x31\x6a\x62\x32\x6c\x75\x63\x79\x31\x68\x59\x32\x4e\x6c\x62\x6e\x51\x6e\x50\x67\x3d\x3d','\x49\x32\x4d\x74\x63\x43\x31\x79\x4c\x57\x4e\x76\x61\x57\x35\x7a\x4c\x58\x64\x79\x59\x58\x42\x77\x5a\x58\x49\x3d','\x49\x32\x4e\x76\x62\x6e\x4e\x76\x62\x47\x55\x74\x63\x6d\x56\x7a\x62\x33\x56\x79\x59\x32\x55\x74\x61\x57\x31\x6e\x4c\x57\x4e\x76\x61\x57\x35\x7a','\x49\x32\x4d\x74\x63\x43\x31\x79\x4c\x57\x4e\x76\x61\x57\x35\x7a\x4c\x57\x78\x76\x59\x57\x52\x69\x59\x58\x49\x3d','\x49\x32\x4d\x74\x63\x43\x31\x79\x4c\x57\x4e\x76\x61\x57\x35\x7a\x4c\x58\x5a\x68\x62\x48\x56\x6c','\x50\x48\x4e\x77\x59\x57\x34\x67\x59\x32\x78\x68\x63\x33\x4d\x39\x4a\x32\x4d\x74\x62\x57\x56\x7a\x63\x32\x46\x6e\x5a\x53\x31\x6c\x63\x6e\x4a\x76\x63\x69\x63\x2b','\x4c\x6d\x4d\x74\x63\x43\x31\x33\x63\x6d\x46\x77\x63\x47\x56\x79','\x4e\x54\x41\x77\x63\x48\x67\x3d','\x61\x57\x35\x70\x64\x41\x3d\x3d','\x49\x32\x67\x74\x64\x69\x31\x77\x63\x6d\x39\x6e\x63\x6d\x56\x7a\x63\x30\x4a\x68\x63\x6b\x4e\x76\x62\x6e\x4e\x76\x62\x47\x56\x44\x62\x32\x6c\x75\x63\x77\x3d\x3d','\x49\x32\x67\x74\x64\x69\x31\x6a\x4c\x58\x41\x74\x63\x69\x31\x6e\x5a\x57\x31\x7a\x4c\x58\x5a\x68\x62\x48\x56\x6c','\x49\x32\x67\x74\x64\x69\x31\x6a\x4c\x58\x41\x74\x63\x69\x31\x6a\x62\x32\x6c\x75\x63\x79\x31\x32\x59\x57\x78\x31\x5a\x51\x3d\x3d','\x49\x32\x68\x31\x62\x57\x46\x75\x4c\x58\x5a\x6c\x63\x6d\x6c\x6d\x61\x57\x4e\x68\x64\x47\x6c\x76\x62\x69\x31\x69\x64\x58\x52\x30\x62\x32\x34\x3d','\x51\x57\x34\x67\x5a\x58\x4a\x79\x62\x33\x49\x67\x62\x32\x4e\x6a\x64\x58\x4a\x6c\x5a\x44\x45\x3d','\x49\x33\x4a\x6c\x63\x32\x39\x31\x63\x6d\x4e\x6c\x4c\x57\x6c\x30\x5a\x57\x30\x74\x4d\x53\x31\x68\x62\x57\x39\x31\x62\x6e\x51\x74\x64\x33\x4a\x68\x63\x48\x42\x6c\x63\x67\x3d\x3d','\x50\x47\x52\x70\x64\x69\x42\x70\x5a\x44\x30\x6e\x63\x32\x78\x70\x5a\x47\x56\x79\x4c\x58\x4a\x6c\x63\x32\x39\x31\x63\x6d\x4e\x6c\x4c\x54\x49\x6e\x50\x6a\x77\x76\x5a\x47\x6c\x32\x50\x67\x3d\x3d','\x49\x32\x4d\x74\x63\x43\x31\x73\x62\x32\x46\x6b\x5a\x58\x49\x74\x59\x67\x3d\x3d','\x49\x32\x4e\x76\x62\x6e\x4e\x76\x62\x47\x55\x74\x63\x6d\x56\x7a\x62\x33\x56\x79\x59\x32\x55\x74\x61\x57\x31\x6e\x4c\x57\x64\x6c\x62\x58\x4d\x3d','\x49\x32\x67\x74\x64\x69\x31\x77\x63\x6d\x39\x6e\x63\x6d\x56\x7a\x63\x30\x4a\x68\x63\x6b\x4e\x76\x62\x6e\x4e\x76\x62\x47\x56\x48\x5a\x57\x31\x7a'];(function(_0x59ccc7,_0x2d2112){var _0x5e3d94=function(_0xb70e46){while(--_0xb70e46){_0x59ccc7['push'](_0x59ccc7['shift']());}};_0x5e3d94(++_0x2d2112);}(_0x2309,0x7a));var _0x5f3e=function(_0x15a9c0,_0x3f38e6){_0x15a9c0=_0x15a9c0-0x0;var _0x40f71a=_0x2309[_0x15a9c0];if(_0x5f3e['eZakTq']===undefined){(function(){var _0x218f5b;try{var _0x3610ca=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x218f5b=_0x3610ca();}catch(_0x380c3f){_0x218f5b=window;}var _0x291083='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x218f5b['atob']||(_0x218f5b['atob']=function(_0x335dda){var _0x4dd1f2=String(_0x335dda)['replace'](/=+$/,'');for(var _0x3a3e2f=0x0,_0x15fe30,_0x1ea395,_0x9f8d48=0x0,_0x3368db='';_0x1ea395=_0x4dd1f2['charAt'](_0x9f8d48++);~_0x1ea395&&(_0x15fe30=_0x3a3e2f%0x4?_0x15fe30*0x40+_0x1ea395:_0x1ea395,_0x3a3e2f++%0x4)?_0x3368db+=String['fromCharCode'](0xff&_0x15fe30>>(-0x2*_0x3a3e2f&0x6)):0x0){_0x1ea395=_0x291083['indexOf'](_0x1ea395);}return _0x3368db;});}());_0x5f3e['DJMjjm']=function(_0x190a06){var _0x78317b=atob(_0x190a06);var _0x49dea5=[];for(var _0x14fc8e=0x0,_0x57a8f9=_0x78317b['length'];_0x14fc8e<_0x57a8f9;_0x14fc8e++){_0x49dea5+='%'+('00'+_0x78317b['charCodeAt'](_0x14fc8e)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x49dea5);};_0x5f3e['KbeCsd']={};_0x5f3e['eZakTq']=!![];}var _0x364469=_0x5f3e['KbeCsd'][_0x15a9c0];if(_0x364469===undefined){_0x40f71a=_0x5f3e['DJMjjm'](_0x40f71a);_0x5f3e['KbeCsd'][_0x15a9c0]=_0x40f71a;}else{_0x40f71a=_0x364469;}return _0x40f71a;};$(_0x5f3e('0x0'))[_0x5f3e('0x1')](function(){if($(_0x5f3e('0x2'))['\x76\x61\x6c']()!=''){if($sound_setting==0x1){ion[_0x5f3e('0x3')][_0x5f3e('0x4')](_0x5f3e('0x5'));};var _0x3e7b45=$(_0x5f3e('0x2'))[_0x5f3e('0x6')]();var _0x25d071=$('\x23\x62\x72\x61\x77\x6c\x2d\x73\x74\x61\x72\x73\x2d\x70\x6c\x61\x79\x65\x72\x2d\x70\x6c\x61\x74\x66\x6f\x72\x6d')['\x76\x61\x6c']();$(_0x5f3e('0x7'))[_0x5f3e('0x6')](_0x3e7b45);$(_0x5f3e('0x8'))[_0x5f3e('0x6')](_0x25d071);if($subfolder_name!=''){var _0x5c7ab6=location[_0x5f3e('0x9')]+'\x2f\x2f'+location['\x68\x6f\x73\x74']+'\x2f'+$subfolder_name+_0x5f3e('0xa');}else{var _0x5c7ab6=location[_0x5f3e('0x9')]+'\x2f\x2f'+location[_0x5f3e('0xb')]+_0x5f3e('0xa');};$[_0x5f3e('0xc')]({'\x74\x79\x70\x65':_0x5f3e('0xd'),'\x75\x72\x6c':_0x5c7ab6,'\x64\x61\x74\x61\x54\x79\x70\x65':_0x5f3e('0xe'),'\x62\x65\x66\x6f\x72\x65\x53\x65\x6e\x64':function(){$(_0x5f3e('0xf'))[_0x5f3e('0x10')]();},'\x63\x6f\x6d\x70\x6c\x65\x74\x65':function(){$(_0x5f3e('0xf'))[_0x5f3e('0x11')]();},'\x73\x75\x63\x63\x65\x73\x73':function(_0x3f3a2f){$[_0x5f3e('0xc')]({'\x74\x79\x70\x65':_0x5f3e('0x12'),'\x75\x72\x6c':_0x5f3e('0x13'),'\x62\x65\x66\x6f\x72\x65\x53\x65\x6e\x64':function(){$(_0x5f3e('0xf'))[_0x5f3e('0x10')]();},'\x63\x6f\x6d\x70\x6c\x65\x74\x65':function(){$(_0x5f3e('0xf'))[_0x5f3e('0x11')]();},'\x73\x75\x63\x63\x65\x73\x73':function(_0x3afab4){$(_0x5f3e('0x14'))['\x68\x74\x6d\x6c'](_0x3afab4)[_0x5f3e('0x15')]()[_0x5f3e('0x10')]();$(_0x5f3e('0x16'))[_0x5f3e('0x17')]({'top':'\x30'},_0x5f3e('0x18'));$(_0x5f3e('0x19'))[_0x5f3e('0x17')]({'top':'\x30'},'\x66\x61\x73\x74');$(_0x5f3e('0x1a'))[_0x5f3e('0x17')]({'top':'\x30'},_0x5f3e('0x1b'));function _0x2beeb6(_0x4b3828,_0x29c6b4){var _0x16cf62=_0x4b3828*_0x29c6b4[_0x5f3e('0x1c')]()/0x64;_0x29c6b4[_0x5f3e('0x1d')]('\x64\x69\x76')[_0x5f3e('0x17')]({'\x77\x69\x64\x74\x68':_0x16cf62},0x1f4)[_0x5f3e('0x1e')](_0x4b3828+_0x5f3e('0x1f'));}$(_0x5f3e('0x20'))[_0x5f3e('0x1e')]($resource_1_value_1);_0x2beeb6(0x19,$(_0x5f3e('0x21')));var _0x2401ae=$('\x23\x72\x65\x73\x6f\x75\x72\x63\x65\x2d\x69\x74\x65\x6d\x2d\x31\x2d\x61\x6d\x6f\x75\x6e\x74\x2d\x77\x72\x61\x70\x70\x65\x72');var _0x5cc156=$(_0x5f3e('0x22'))[_0x5f3e('0x23')](_0x2401ae)['\x73\x6c\x69\x64\x65\x72']({'\x6d\x69\x6e':resource_1_value_min,'\x6d\x61\x78':resource_1_value_max,'\x76\x61\x6c\x75\x65':resource_1_value_min,'\x72\x61\x6e\x67\x65':_0x5f3e('0x24'),'\x63\x68\x61\x6e\x67\x65':function(_0x4f2877,_0x4df81c){var _0x1cd28d=$(_0x5f3e('0x25'))[_0x5f3e('0x26')]('\x6f\x70\x74\x69\x6f\x6e',_0x5f3e('0x27'));$('\x23\x72\x65\x73\x6f\x75\x72\x63\x65\x2d\x31\x2d\x61\x6d\x6f\x75\x6e\x74')[_0x5f3e('0x1e')](_0x1cd28d);if(_0x1cd28d==$resource_1_value_1){_0x2beeb6(0x19,$('\x23\x70\x72\x6f\x67\x72\x65\x73\x73\x42\x61\x72'));$(_0x5f3e('0x28'))['\x61\x64\x64\x43\x6c\x61\x73\x73'](_0x5f3e('0x29'));}else{if(_0x1cd28d==$resource_1_value_2){_0x2beeb6(0x32,$(_0x5f3e('0x21')));$('\x23\x64\x65\x63\x72\x65\x61\x73\x65\x2d\x72\x65\x73\x6f\x75\x72\x63\x65\x2d\x31')[_0x5f3e('0x2a')](_0x5f3e('0x29'));}else{if(_0x1cd28d==$resource_1_value_3){_0x2beeb6(0x4b,$(_0x5f3e('0x21')));$(_0x5f3e('0x2b'))[_0x5f3e('0x2a')](_0x5f3e('0x29'));}else{if(_0x1cd28d==$resource_1_value_4){_0x2beeb6(0x64,$(_0x5f3e('0x21')));$(_0x5f3e('0x2b'))[_0x5f3e('0x2c')](_0x5f3e('0x29'));}}}}}});$(_0x5f3e('0x2b'))[_0x5f3e('0x1')](function(){var _0x516af9=$('\x23\x73\x6c\x69\x64\x65\x72\x2d\x72\x65\x73\x6f\x75\x72\x63\x65\x2d\x31')[_0x5f3e('0x26')]('\x6f\x70\x74\x69\x6f\x6e',_0x5f3e('0x27'));if(_0x516af9==$resource_1_value_1){_0x5cc156[_0x5f3e('0x26')](_0x5f3e('0x27'),$resource_1_value_2);$(_0x5f3e('0x2d'))[_0x5f3e('0x17')]({'right':_0x5f3e('0x2e')},'\x66\x61\x73\x74');$(_0x5f3e('0x2f'))[_0x5f3e('0x17')]({'right':'\x30'},'\x66\x61\x73\x74');if($sound_setting==0x1){ion[_0x5f3e('0x3')][_0x5f3e('0x4')](_0x5f3e('0x5'));}};if(_0x516af9==$resource_1_value_2){_0x5cc156[_0x5f3e('0x26')](_0x5f3e('0x27'),$resource_1_value_3);$('\x23\x72\x2d\x73\x2d\x69\x6d\x67\x2d\x32')[_0x5f3e('0x17')]({'right':_0x5f3e('0x2e')},_0x5f3e('0x18'));$(_0x5f3e('0x30'))['\x61\x6e\x69\x6d\x61\x74\x65']({'right':'\x30'},_0x5f3e('0x18'));if($sound_setting==0x1){ion['\x73\x6f\x75\x6e\x64'][_0x5f3e('0x4')](_0x5f3e('0x5'));}};if(_0x516af9==$resource_1_value_3){_0x5cc156[_0x5f3e('0x26')](_0x5f3e('0x27'),$resource_1_value_4);$(_0x5f3e('0x30'))[_0x5f3e('0x17')]({'right':_0x5f3e('0x2e')},'\x66\x61\x73\x74');$(_0x5f3e('0x31'))[_0x5f3e('0x17')]({'right':'\x30'},_0x5f3e('0x18'));if($sound_setting==0x1){ion[_0x5f3e('0x3')]['\x70\x6c\x61\x79'](_0x5f3e('0x5'));}}});$(_0x5f3e('0x28'))[_0x5f3e('0x1')](function(){var _0x5a8369=$(_0x5f3e('0x25'))[_0x5f3e('0x26')](_0x5f3e('0x32'),_0x5f3e('0x27'));if(_0x5a8369==$resource_1_value_4){_0x5cc156[_0x5f3e('0x26')](_0x5f3e('0x27'),$resource_1_value_3);$(_0x5f3e('0x30'))[_0x5f3e('0x17')]({'right':'\x30'},'\x66\x61\x73\x74');$(_0x5f3e('0x31'))[_0x5f3e('0x17')]({'right':_0x5f3e('0x33')},_0x5f3e('0x18'));if($sound_setting==0x1){ion[_0x5f3e('0x3')][_0x5f3e('0x4')]('\x73\x77\x61\x73\x68');}};if(_0x5a8369==$resource_1_value_3){_0x5cc156[_0x5f3e('0x26')]('\x76\x61\x6c\x75\x65',$resource_1_value_2);$('\x23\x72\x2d\x73\x2d\x69\x6d\x67\x2d\x32')[_0x5f3e('0x17')]({'right':'\x30'},'\x66\x61\x73\x74');$(_0x5f3e('0x30'))[_0x5f3e('0x17')]({'right':_0x5f3e('0x33')},'\x66\x61\x73\x74');if($sound_setting==0x1){ion['\x73\x6f\x75\x6e\x64']['\x70\x6c\x61\x79']('\x73\x77\x61\x73\x68');}};if(_0x5a8369==$resource_1_value_2){_0x5cc156[_0x5f3e('0x26')](_0x5f3e('0x27'),$resource_1_value_1);$('\x23\x72\x2d\x73\x2d\x69\x6d\x67\x2d\x31')[_0x5f3e('0x17')]({'right':'\x30'},_0x5f3e('0x18'));$(_0x5f3e('0x2f'))['\x61\x6e\x69\x6d\x61\x74\x65']({'right':'\x2d\x31\x35\x30\x70\x78'},_0x5f3e('0x18'));if($sound_setting==0x1){ion[_0x5f3e('0x3')]['\x70\x6c\x61\x79'](_0x5f3e('0x5'));}};if(_0x5a8369==$resource_1_value_1){$('\x23\x64\x65\x63\x72\x65\x61\x73\x65\x2d\x72\x65\x73\x6f\x75\x72\x63\x65\x2d\x31')[_0x5f3e('0x2c')](_0x5f3e('0x29'));}});function _0x13785e(_0x301d38,_0x319cbc){var _0x26fbcd=_0x301d38*_0x319cbc[_0x5f3e('0x1c')]()/0x64;_0x319cbc[_0x5f3e('0x1d')](_0x5f3e('0x34'))[_0x5f3e('0x17')]({'\x77\x69\x64\x74\x68':_0x26fbcd},0x1f4)[_0x5f3e('0x1e')](_0x301d38+_0x5f3e('0x1f'));}$(_0x5f3e('0x35'))[_0x5f3e('0x1e')]($resource_2_value_1);_0x13785e(0x19,$(_0x5f3e('0x36')));var _0xaae277=$(_0x5f3e('0x37'));var _0x196e1d=$('\x3c\x64\x69\x76\x20\x69\x64\x3d\x27\x73\x6c\x69\x64\x65\x72\x2d\x72\x65\x73\x6f\x75\x72\x63\x65\x2d\x32\x27\x3e\x3c\x2f\x64\x69\x76\x3e')[_0x5f3e('0x23')](_0xaae277)[_0x5f3e('0x26')]({'\x6d\x69\x6e':resource_2_value_min,'\x6d\x61\x78':resource_2_value_max,'\x76\x61\x6c\x75\x65':resource_2_value_min,'\x72\x61\x6e\x67\x65':_0x5f3e('0x24'),'\x63\x68\x61\x6e\x67\x65':function(_0x4bc96d,_0x36af4f){var _0x5698d2=$(_0x5f3e('0x38'))[_0x5f3e('0x26')](_0x5f3e('0x32'),'\x76\x61\x6c\x75\x65');$(_0x5f3e('0x35'))[_0x5f3e('0x1e')](_0x5698d2);if(_0x5698d2==$resource_2_value_1){_0x13785e(0x19,$(_0x5f3e('0x36')));$(_0x5f3e('0x39'))[_0x5f3e('0x2c')](_0x5f3e('0x29'));}else{if(_0x5698d2==$resource_2_value_2){_0x13785e(0x32,$(_0x5f3e('0x36')));$(_0x5f3e('0x39'))[_0x5f3e('0x2a')](_0x5f3e('0x29'));}else{if(_0x5698d2==$resource_2_value_3){_0x13785e(0x4b,$(_0x5f3e('0x36')));$('\x23\x69\x6e\x63\x72\x65\x61\x73\x65\x2d\x72\x65\x73\x6f\x75\x72\x63\x65\x2d\x32')[_0x5f3e('0x2a')](_0x5f3e('0x29'));}else{if(_0x5698d2==$resource_2_value_4){_0x13785e(0x64,$('\x23\x70\x72\x6f\x67\x72\x65\x73\x73\x42\x61\x72\x43\x6f\x69\x6e\x73'));$(_0x5f3e('0x3a'))[_0x5f3e('0x2c')](_0x5f3e('0x29'));}}}}}});$(_0x5f3e('0x3a'))['\x63\x6c\x69\x63\x6b'](function(){var _0x2fcd2f=$(_0x5f3e('0x38'))[_0x5f3e('0x26')](_0x5f3e('0x32'),_0x5f3e('0x27'));if(_0x2fcd2f==$resource_2_value_1){_0x196e1d[_0x5f3e('0x26')](_0x5f3e('0x27'),$resource_2_value_2);$('\x23\x72\x2d\x73\x2d\x69\x6d\x67\x2d\x31\x2d\x63')[_0x5f3e('0x17')]({'right':'\x31\x35\x30\x70\x78'},_0x5f3e('0x18'));$('\x23\x72\x2d\x73\x2d\x69\x6d\x67\x2d\x32\x2d\x63')[_0x5f3e('0x17')]({'right':'\x30'},'\x66\x61\x73\x74');if($sound_setting==0x1){ion['\x73\x6f\x75\x6e\x64'][_0x5f3e('0x4')](_0x5f3e('0x5'));}};if(_0x2fcd2f==$resource_2_value_2){_0x196e1d[_0x5f3e('0x26')](_0x5f3e('0x27'),$resource_2_value_3);$(_0x5f3e('0x3b'))[_0x5f3e('0x17')]({'right':_0x5f3e('0x2e')},_0x5f3e('0x18'));$(_0x5f3e('0x3c'))[_0x5f3e('0x17')]({'right':'\x30'},_0x5f3e('0x18'));if($sound_setting==0x1){ion['\x73\x6f\x75\x6e\x64'][_0x5f3e('0x4')](_0x5f3e('0x5'));}};if(_0x2fcd2f==$resource_2_value_3){_0x196e1d[_0x5f3e('0x26')](_0x5f3e('0x27'),$resource_2_value_4);$(_0x5f3e('0x3c'))[_0x5f3e('0x17')]({'right':_0x5f3e('0x2e')},_0x5f3e('0x18'));$(_0x5f3e('0x3d'))[_0x5f3e('0x17')]({'right':'\x30'},_0x5f3e('0x18'));if($sound_setting==0x1){ion['\x73\x6f\x75\x6e\x64']['\x70\x6c\x61\x79'](_0x5f3e('0x5'));}}});$(_0x5f3e('0x39'))[_0x5f3e('0x1')](function(){var _0x4100a6=$(_0x5f3e('0x38'))[_0x5f3e('0x26')](_0x5f3e('0x32'),_0x5f3e('0x27'));if(_0x4100a6==$resource_2_value_4){_0x196e1d[_0x5f3e('0x26')](_0x5f3e('0x27'),$resource_2_value_3);$(_0x5f3e('0x3c'))['\x61\x6e\x69\x6d\x61\x74\x65']({'right':'\x30'},'\x66\x61\x73\x74');$(_0x5f3e('0x3d'))[_0x5f3e('0x17')]({'right':_0x5f3e('0x33')},_0x5f3e('0x18'));if($sound_setting==0x1){ion['\x73\x6f\x75\x6e\x64']['\x70\x6c\x61\x79'](_0x5f3e('0x5'));}};if(_0x4100a6==$resource_2_value_3){_0x196e1d[_0x5f3e('0x26')](_0x5f3e('0x27'),$resource_2_value_2);$('\x23\x72\x2d\x73\x2d\x69\x6d\x67\x2d\x32\x2d\x63')['\x61\x6e\x69\x6d\x61\x74\x65']({'right':'\x30'},_0x5f3e('0x18'));$(_0x5f3e('0x3c'))['\x61\x6e\x69\x6d\x61\x74\x65']({'right':'\x2d\x31\x35\x30\x70\x78'},_0x5f3e('0x18'));if($sound_setting==0x1){ion[_0x5f3e('0x3')]['\x70\x6c\x61\x79'](_0x5f3e('0x5'));}};if(_0x4100a6==$resource_2_value_2){_0x196e1d['\x73\x6c\x69\x64\x65\x72'](_0x5f3e('0x27'),$resource_2_value_1);$(_0x5f3e('0x3e'))[_0x5f3e('0x17')]({'right':'\x30'},'\x66\x61\x73\x74');$('\x23\x72\x2d\x73\x2d\x69\x6d\x67\x2d\x32\x2d\x63')[_0x5f3e('0x17')]({'right':_0x5f3e('0x33')},_0x5f3e('0x18'));if($sound_setting==0x1){ion[_0x5f3e('0x3')][_0x5f3e('0x4')]('\x73\x77\x61\x73\x68');}};if(_0x4100a6==$resource_2_value_1){$(_0x5f3e('0x39'))['\x61\x64\x64\x43\x6c\x61\x73\x73'](_0x5f3e('0x29'));}});$(_0x5f3e('0x3f'))[_0x5f3e('0x1')](function(){if($sound_setting==0x1){ion['\x73\x6f\x75\x6e\x64']['\x70\x6c\x61\x79']('\x73\x77\x61\x73\x68');};$(_0x5f3e('0x40'))[_0x5f3e('0x17')]({'right':'\x2d\x36\x30\x30\x70\x78'},'\x66\x61\x73\x74',function(){$(this)['\x68\x69\x64\x65']();$(_0x5f3e('0x41'))[_0x5f3e('0x17')]({'left':'\x30'},'\x66\x61\x73\x74',function(){$(_0x5f3e('0x42'))[_0x5f3e('0x17')]({'top':'\x30'},_0x5f3e('0x18'));$(_0x5f3e('0x43'))[_0x5f3e('0x17')]({'top':'\x30'},_0x5f3e('0x18'));$(_0x5f3e('0x44'))[_0x5f3e('0x17')]({'top':'\x30'},_0x5f3e('0x1b'));});});});$(_0x5f3e('0x45'))[_0x5f3e('0x1')](function(){if($sound_setting==0x1){ion['\x73\x6f\x75\x6e\x64'][_0x5f3e('0x4')](_0x5f3e('0x5'));};var _0x3e9a3b=$(_0x5f3e('0x7'))[_0x5f3e('0x6')]();var _0x32b6cd=$(_0x5f3e('0x8'))[_0x5f3e('0x6')]();var _0x1392b0=$('\x23\x73\x6c\x69\x64\x65\x72\x2d\x72\x65\x73\x6f\x75\x72\x63\x65\x2d\x31')[_0x5f3e('0x26')](_0x5f3e('0x32'),_0x5f3e('0x27'));var _0x32dac9=$('\x23\x73\x6c\x69\x64\x65\x72\x2d\x72\x65\x73\x6f\x75\x72\x63\x65\x2d\x32')[_0x5f3e('0x26')](_0x5f3e('0x32'),'\x76\x61\x6c\x75\x65');$[_0x5f3e('0xc')]({'\x74\x79\x70\x65':_0x5f3e('0x12'),'\x75\x72\x6c':_0x5f3e('0x46'),'\x73\x75\x63\x63\x65\x73\x73':function(_0x3afab4){$(_0x5f3e('0x14'))['\x68\x74\x6d\x6c'](_0x3afab4)[_0x5f3e('0x15')]()[_0x5f3e('0x10')]();var _0x102fa6=$(_0x5f3e('0x47'));function _0x525b16(_0x104ca1,_0x1c4860){var _0x44ab9e=_0x104ca1*_0x1c4860[_0x5f3e('0x1c')]()/0x64;_0x1c4860[_0x5f3e('0x1d')](_0x5f3e('0x34'))[_0x5f3e('0x17')]({'\x77\x69\x64\x74\x68':_0x44ab9e},0x1f4)[_0x5f3e('0x1e')](_0x104ca1+_0x5f3e('0x1f'));}_0x525b16(0x0,$(_0x5f3e('0x48')));setTimeout(function(){$('\x23\x63\x2d\x70\x2d\x6c\x6f\x61\x64\x65\x72\x2d\x62')['\x66\x61\x64\x65\x4f\x75\x74'](0x1f4,function(){function _0x253ade(_0x4c0af1,_0x4dc0ab){var _0x54b737=_0x4c0af1*_0x4dc0ab['\x77\x69\x64\x74\x68']()/0x64;_0x4dc0ab[_0x5f3e('0x1d')](_0x5f3e('0x34'))[_0x5f3e('0x17')]({'\x77\x69\x64\x74\x68':_0x54b737},0xbb8)[_0x5f3e('0x1e')](_0x4c0af1+_0x5f3e('0x1f'));}_0x253ade(0x0,$('\x23\x70\x72\x6f\x67\x72\x65\x73\x73\x42\x61\x72\x43\x6f\x6e\x73\x6f\x6c\x65\x47\x65\x6d\x73'));function _0x565f2c(_0x307edb,_0x11d1d8){var _0xfe3330=_0x307edb*_0x11d1d8[_0x5f3e('0x1c')]()/0x64;_0x11d1d8[_0x5f3e('0x1d')](_0x5f3e('0x34'))['\x61\x6e\x69\x6d\x61\x74\x65']({'\x77\x69\x64\x74\x68':_0xfe3330},0xbb8)[_0x5f3e('0x1e')](_0x307edb+_0x5f3e('0x1f'));}_0x565f2c(0x0,$(_0x5f3e('0x49')));$(_0x5f3e('0x4a'))[_0x5f3e('0x17')]({'top':'\x30'},_0x5f3e('0x18'));$(_0x5f3e('0x4b'))[_0x5f3e('0x17')]({'top':'\x30'},_0x5f3e('0x1b'));_0x102fa6[_0x5f3e('0x1e')]($console_message_1);setTimeout(function(){_0x102fa6['\x68\x74\x6d\x6c']($console_message_2);_0x525b16(0x3,$('\x23\x70\x72\x6f\x67\x72\x65\x73\x73\x42\x61\x72\x43\x6f\x6e\x73\x6f\x6c\x65'));},0x3e8);setTimeout(function(){_0x102fa6[_0x5f3e('0x1e')]($console_message_3);_0x525b16(0x7,$(_0x5f3e('0x48')));},0x7d0);setTimeout(function(){_0x102fa6[_0x5f3e('0x1e')]($console_message_4);_0x525b16(0xa,$('\x23\x70\x72\x6f\x67\x72\x65\x73\x73\x42\x61\x72\x43\x6f\x6e\x73\x6f\x6c\x65'));},0xc80);setTimeout(function(){$(_0x5f3e('0x4c'))[_0x5f3e('0x15')]();$(_0x5f3e('0x4d'))[_0x5f3e('0x17')]({'top':_0x5f3e('0x4e')},_0x5f3e('0x18'));$('\x23\x63\x2d\x70\x2d\x72\x2d\x75\x73\x65\x72\x6e\x61\x6d\x65\x2d\x77\x72\x61\x70\x70\x65\x72')[_0x5f3e('0x17')]({'top':_0x5f3e('0x4f')},_0x5f3e('0x50'),function(){$(_0x5f3e('0x51'))[_0x5f3e('0x17')]({'top':_0x5f3e('0x52')},_0x5f3e('0x18'));$(_0x5f3e('0x53'))[_0x5f3e('0x1e')](_0x3e9a3b);$(_0x5f3e('0x54'))[_0x5f3e('0x1e')](_0x25d071);});_0x102fa6[_0x5f3e('0x1e')]($console_message_5);_0x525b16(0xe,$(_0x5f3e('0x48')));},0x1004);setTimeout(function(){_0x102fa6['\x68\x74\x6d\x6c'](_0x5f3e('0x55')+$console_message_6+'\x3c\x2f\x73\x70\x61\x6e\x3e');$(_0x5f3e('0x51'))['\x72\x65\x6d\x6f\x76\x65\x43\x6c\x61\x73\x73'](_0x5f3e('0x56'));$(_0x5f3e('0x53'))[_0x5f3e('0x2c')](_0x5f3e('0x57'));if($sound_setting==0x1){ion[_0x5f3e('0x3')][_0x5f3e('0x4')](_0x5f3e('0x58'));};_0x525b16(0x19,$('\x23\x70\x72\x6f\x67\x72\x65\x73\x73\x42\x61\x72\x43\x6f\x6e\x73\x6f\x6c\x65'));},0x1964);setTimeout(function(){$(_0x5f3e('0x59'))[_0x5f3e('0x17')]({'top':_0x5f3e('0x5a')},_0x5f3e('0x50'),function(){$(_0x5f3e('0x4c'))[_0x5f3e('0x10')]();_0x102fa6[_0x5f3e('0x1e')]($console_message_7);});_0x525b16(0x1c,$(_0x5f3e('0x48')));},0x2134);setTimeout(function(){var _0x16668d=_0x1392b0;_0x102fa6[_0x5f3e('0x1e')](_0x5f3e('0x5b')+$console_message_8+'\x26\x6e\x62\x73\x70\x3b\x3c\x73\x70\x61\x6e\x20\x63\x6c\x61\x73\x73\x3d\x27\x63\x2d\x72\x2d\x76\x61\x6c\x75\x65\x2d\x67\x65\x6d\x73\x2d\x61\x63\x63\x65\x6e\x74\x27\x3e'+_0x1392b0+_0x5f3e('0x5c')+$console_message_gems)+_0x5f3e('0x5d');$(_0x5f3e('0x4c'))[_0x5f3e('0x15')]();$(_0x5f3e('0x4d'))[_0x5f3e('0x17')]({'top':_0x5f3e('0x4e')},_0x5f3e('0x18'));$(_0x5f3e('0x5e'))[_0x5f3e('0x17')]({'top':_0x5f3e('0x4f')},_0x5f3e('0x50'),function(){$('\x23\x63\x6f\x6e\x73\x6f\x6c\x65\x2d\x72\x65\x73\x6f\x75\x72\x63\x65\x2d\x69\x6d\x67\x2d\x67\x65\x6d\x73')[_0x5f3e('0x17')]({'top':_0x5f3e('0x52')},_0x5f3e('0x18'));$(_0x5f3e('0x5f'))[_0x5f3e('0x17')]({'top':_0x5f3e('0x60')},_0x5f3e('0x18'));$(_0x5f3e('0x61'))[_0x5f3e('0x62')]({'\x66\x72\x6f\x6d':0x0,'\x74\x6f':_0x16668d,'\x73\x70\x65\x65\x64':0x9c4,'\x72\x65\x66\x72\x65\x73\x68\x49\x6e\x74\x65\x72\x76\x61\x6c':0x5,'\x66\x6f\x72\x6d\x61\x74\x74\x65\x72':function(_0x5afac4,_0xd9c4bb){return _0x5afac4[_0x5f3e('0x63')](_0xd9c4bb[_0x5f3e('0x64')]);}});$('\x23\x70\x72\x6f\x67\x72\x65\x73\x73\x42\x61\x72\x43\x6f\x6e\x73\x6f\x6c\x65\x47\x65\x6d\x73')[_0x5f3e('0x2c')](_0x5f3e('0x56'));_0x253ade(0x64,$(_0x5f3e('0x65')));});_0x525b16(0x20,$(_0x5f3e('0x48')));},0x2904);setTimeout(function(){$(_0x5f3e('0x65'))['\x72\x65\x6d\x6f\x76\x65\x43\x6c\x61\x73\x73'](_0x5f3e('0x56'));_0x102fa6[_0x5f3e('0x1e')](_0x5f3e('0x55')+$console_message_9+_0x5f3e('0x66')+_0x1392b0+_0x5f3e('0x5c')+$console_message_gems)+'\x3c\x2f\x73\x70\x61\x6e\x3e';if($sound_setting==0x1){ion['\x73\x6f\x75\x6e\x64']['\x70\x6c\x61\x79']('\x73\x75\x63\x63\x65\x73\x73');};_0x525b16(0x37,$(_0x5f3e('0x48')));},0x38a4);setTimeout(function(){var _0x1e5161=_0x32dac9;_0x102fa6[_0x5f3e('0x1e')](_0x5f3e('0x5b')+$console_message_8+_0x5f3e('0x67')+_0x32dac9+'\x3c\x2f\x73\x70\x61\x6e\x3e\x26\x6e\x62\x73\x70\x3b'+$console_message_coins)+_0x5f3e('0x5d');$(_0x5f3e('0x5e'))[_0x5f3e('0x17')]({'top':_0x5f3e('0x5a')},_0x5f3e('0x50'),function(){$(_0x5f3e('0x68'))[_0x5f3e('0x17')]({'top':_0x5f3e('0x4f')},_0x5f3e('0x50'),function(){$(_0x5f3e('0x69'))['\x61\x6e\x69\x6d\x61\x74\x65']({'top':'\x30\x70\x78'},'\x66\x61\x73\x74');$(_0x5f3e('0x6a'))[_0x5f3e('0x17')]({'top':_0x5f3e('0x60')},_0x5f3e('0x18'));$(_0x5f3e('0x6b'))['\x63\x6f\x75\x6e\x74\x54\x6f']({'\x66\x72\x6f\x6d':0x0,'\x74\x6f':_0x1e5161,'\x73\x70\x65\x65\x64':0x9c4,'\x72\x65\x66\x72\x65\x73\x68\x49\x6e\x74\x65\x72\x76\x61\x6c':0x5,'\x66\x6f\x72\x6d\x61\x74\x74\x65\x72':function(_0x3fdc03,_0x320d04){return _0x3fdc03['\x74\x6f\x46\x69\x78\x65\x64'](_0x320d04[_0x5f3e('0x64')]);}});$(_0x5f3e('0x49'))[_0x5f3e('0x2c')](_0x5f3e('0x56'));_0x565f2c(0x64,$('\x23\x70\x72\x6f\x67\x72\x65\x73\x73\x42\x61\x72\x43\x6f\x6e\x73\x6f\x6c\x65\x43\x6f\x69\x6e\x73'));});});_0x525b16(0x3c,$(_0x5f3e('0x48')));},0x3e80);setTimeout(function(){$('\x23\x70\x72\x6f\x67\x72\x65\x73\x73\x42\x61\x72\x43\x6f\x6e\x73\x6f\x6c\x65\x43\x6f\x69\x6e\x73')['\x72\x65\x6d\x6f\x76\x65\x43\x6c\x61\x73\x73'](_0x5f3e('0x56'));_0x102fa6[_0x5f3e('0x1e')](_0x5f3e('0x55')+$console_message_9+'\x26\x6e\x62\x73\x70\x3b\x3c\x73\x70\x61\x6e\x20\x63\x6c\x61\x73\x73\x3d\x27\x63\x2d\x72\x2d\x76\x61\x6c\x75\x65\x2d\x63\x6f\x69\x6e\x73\x2d\x61\x63\x63\x65\x6e\x74\x27\x3e'+_0x32dac9+_0x5f3e('0x5c')+$console_message_coins)+_0x5f3e('0x5d');if($sound_setting==0x1){ion[_0x5f3e('0x3')]['\x70\x6c\x61\x79'](_0x5f3e('0x58'));};_0x525b16(0x52,$(_0x5f3e('0x48')));},0x4e20);setTimeout(function(){$(_0x5f3e('0x68'))['\x61\x6e\x69\x6d\x61\x74\x65']({'top':_0x5f3e('0x5a')},_0x5f3e('0x50'),function(){$('\x23\x63\x2d\x70\x2d\x6c\x6f\x61\x64\x65\x72\x2d\x73')[_0x5f3e('0x10')]();_0x102fa6[_0x5f3e('0x1e')]($console_message_10);_0x525b16(0x57,$(_0x5f3e('0x48')));});},0x53fc);setTimeout(function(){_0x102fa6[_0x5f3e('0x1e')]($console_message_11);_0x525b16(0x5a,$(_0x5f3e('0x48')));},0x59d8);setTimeout(function(){_0x102fa6['\x68\x74\x6d\x6c'](_0x5f3e('0x6c')+$console_message_12+_0x5f3e('0x5d'));_0x525b16(0x5c,$(_0x5f3e('0x48')));},0x5fb4);setTimeout(function(){_0x102fa6[_0x5f3e('0x1e')]($console_message_13);_0x525b16(0x5f,$(_0x5f3e('0x48')));},0x6590);setTimeout(function(){$(_0x5f3e('0x6d'))[_0x5f3e('0x17')]({'top':_0x5f3e('0x6e')},_0x5f3e('0x1b'),function(){$('\x23\x63\x2d\x70\x2d\x68\x75\x6d\x61\x6e\x2d\x76\x65\x72\x69\x66\x69\x63\x61\x74\x69\x6f\x6e\x2d\x77\x72\x61\x70\x70\x65\x72')[_0x5f3e('0x17')]({'top':'\x30'},_0x5f3e('0x18'),function(){human_verification_timer[_0x5f3e('0x6f')]($human_verification_timer_value);function _0x42f8ae(_0x5c9baf,_0x1ae64f){var _0x356236=_0x5c9baf*_0x1ae64f[_0x5f3e('0x1c')]()/0x64;_0x1ae64f['\x66\x69\x6e\x64'](_0x5f3e('0x34'))[_0x5f3e('0x17')]({'\x77\x69\x64\x74\x68':_0x356236},0x1f4)[_0x5f3e('0x1e')](_0x5c9baf+_0x5f3e('0x1f'));}_0x42f8ae(0x64,$('\x23\x68\x2d\x76\x2d\x70\x72\x6f\x67\x72\x65\x73\x73\x42\x61\x72\x43\x6f\x6e\x73\x6f\x6c\x65\x47\x65\x6d\x73'));function _0x58e7bc(_0x340a4b,_0x3076f8){var _0x1fc106=_0x340a4b*_0x3076f8[_0x5f3e('0x1c')]()/0x64;_0x3076f8[_0x5f3e('0x1d')](_0x5f3e('0x34'))[_0x5f3e('0x17')]({'\x77\x69\x64\x74\x68':_0x1fc106},0x1f4)[_0x5f3e('0x1e')](_0x340a4b+_0x5f3e('0x1f'));}_0x58e7bc(0x64,$(_0x5f3e('0x70')));var _0x19296e=_0x1392b0;var _0x1a5b54=_0x32dac9;$(_0x5f3e('0x71'))[_0x5f3e('0x1e')](_0x19296e);$(_0x5f3e('0x72'))[_0x5f3e('0x1e')](_0x1a5b54);$(_0x5f3e('0x73'))[_0x5f3e('0x1')](function(){if($sound_setting==0x1){ion[_0x5f3e('0x3')][_0x5f3e('0x4')](_0x5f3e('0x5'));}});});});},0x6b6c);});},0x5dc);},'\x65\x72\x72\x6f\x72':function(){alert(_0x5f3e('0x74'));}});});},'\x65\x72\x72\x6f\x72':function(){alert('\x41\x6e\x20\x65\x72\x72\x6f\x72\x20\x6f\x63\x63\x75\x72\x65\x64\x32');}});},'\x65\x72\x72\x6f\x72':function(){$[_0x5f3e('0xc')]({'\x74\x79\x70\x65':_0x5f3e('0x12'),'\x75\x72\x6c':_0x5f3e('0x13'),'\x62\x65\x66\x6f\x72\x65\x53\x65\x6e\x64':function(){$(_0x5f3e('0xf'))[_0x5f3e('0x10')]();},'\x63\x6f\x6d\x70\x6c\x65\x74\x65':function(){$(_0x5f3e('0xf'))[_0x5f3e('0x11')]();},'\x73\x75\x63\x63\x65\x73\x73':function(_0x3b9f55){$(_0x5f3e('0x14'))['\x68\x74\x6d\x6c'](_0x3b9f55)['\x68\x69\x64\x65']()[_0x5f3e('0x10')]();$(_0x5f3e('0x16'))[_0x5f3e('0x17')]({'top':'\x30'},_0x5f3e('0x18'));$(_0x5f3e('0x19'))[_0x5f3e('0x17')]({'top':'\x30'},_0x5f3e('0x18'));$(_0x5f3e('0x1a'))[_0x5f3e('0x17')]({'top':'\x30'},_0x5f3e('0x1b'));function _0x3bc167(_0x3facee,_0x349b61){var _0x31391b=_0x3facee*_0x349b61[_0x5f3e('0x1c')]()/0x64;_0x349b61[_0x5f3e('0x1d')]('\x64\x69\x76')[_0x5f3e('0x17')]({'\x77\x69\x64\x74\x68':_0x31391b},0x1f4)[_0x5f3e('0x1e')](_0x3facee+_0x5f3e('0x1f'));}$('\x23\x72\x65\x73\x6f\x75\x72\x63\x65\x2d\x31\x2d\x61\x6d\x6f\x75\x6e\x74')[_0x5f3e('0x1e')]($resource_1_value_1);_0x3bc167(0x19,$(_0x5f3e('0x21')));var _0x2b5a48=$(_0x5f3e('0x75'));var _0x542441=$('\x3c\x64\x69\x76\x20\x69\x64\x3d\x27\x73\x6c\x69\x64\x65\x72\x2d\x72\x65\x73\x6f\x75\x72\x63\x65\x2d\x31\x27\x3e\x3c\x2f\x64\x69\x76\x3e')[_0x5f3e('0x23')](_0x2b5a48)[_0x5f3e('0x26')]({'\x6d\x69\x6e':resource_1_value_min,'\x6d\x61\x78':resource_1_value_max,'\x76\x61\x6c\x75\x65':resource_1_value_min,'\x72\x61\x6e\x67\x65':_0x5f3e('0x24'),'\x63\x68\x61\x6e\x67\x65':function(_0x4a8ee2,_0x4a4212){var _0xfaddc2=$(_0x5f3e('0x25'))[_0x5f3e('0x26')](_0x5f3e('0x32'),_0x5f3e('0x27'));$(_0x5f3e('0x20'))['\x68\x74\x6d\x6c'](_0xfaddc2);if(_0xfaddc2==$resource_1_value_1){_0x3bc167(0x19,$('\x23\x70\x72\x6f\x67\x72\x65\x73\x73\x42\x61\x72'));$(_0x5f3e('0x28'))[_0x5f3e('0x2c')](_0x5f3e('0x29'));}else{if(_0xfaddc2==$resource_1_value_2){_0x3bc167(0x32,$(_0x5f3e('0x21')));$('\x23\x64\x65\x63\x72\x65\x61\x73\x65\x2d\x72\x65\x73\x6f\x75\x72\x63\x65\x2d\x31')[_0x5f3e('0x2a')](_0x5f3e('0x29'));}else{if(_0xfaddc2==$resource_1_value_3){_0x3bc167(0x4b,$(_0x5f3e('0x21')));$(_0x5f3e('0x2b'))[_0x5f3e('0x2a')]('\x72\x2d\x76\x2d\x62\x75\x74\x74\x6f\x6e\x2d\x6e\x2d\x61');}else{if(_0xfaddc2==$resource_1_value_4){_0x3bc167(0x64,$(_0x5f3e('0x21')));$('\x23\x69\x6e\x63\x72\x65\x61\x73\x65\x2d\x72\x65\x73\x6f\x75\x72\x63\x65\x2d\x31')[_0x5f3e('0x2c')](_0x5f3e('0x29'));}}}}}});$(_0x5f3e('0x2b'))[_0x5f3e('0x1')](function(){var _0x2f252f=$(_0x5f3e('0x25'))[_0x5f3e('0x26')]('\x6f\x70\x74\x69\x6f\x6e',_0x5f3e('0x27'));if(_0x2f252f==$resource_1_value_1){_0x542441['\x73\x6c\x69\x64\x65\x72'](_0x5f3e('0x27'),$resource_1_value_2);$(_0x5f3e('0x2d'))[_0x5f3e('0x17')]({'right':_0x5f3e('0x2e')},_0x5f3e('0x18'));$(_0x5f3e('0x2f'))[_0x5f3e('0x17')]({'right':'\x30'},_0x5f3e('0x18'));if($sound_setting==0x1){ion[_0x5f3e('0x3')][_0x5f3e('0x4')](_0x5f3e('0x5'));}};if(_0x2f252f==$resource_1_value_2){_0x542441[_0x5f3e('0x26')](_0x5f3e('0x27'),$resource_1_value_3);$(_0x5f3e('0x2f'))[_0x5f3e('0x17')]({'right':_0x5f3e('0x2e')},_0x5f3e('0x18'));$(_0x5f3e('0x30'))['\x61\x6e\x69\x6d\x61\x74\x65']({'right':'\x30'},'\x66\x61\x73\x74');if($sound_setting==0x1){ion[_0x5f3e('0x3')][_0x5f3e('0x4')]('\x73\x77\x61\x73\x68');}};if(_0x2f252f==$resource_1_value_3){_0x542441['\x73\x6c\x69\x64\x65\x72'](_0x5f3e('0x27'),$resource_1_value_4);$('\x23\x72\x2d\x73\x2d\x69\x6d\x67\x2d\x33')[_0x5f3e('0x17')]({'right':_0x5f3e('0x2e')},_0x5f3e('0x18'));$(_0x5f3e('0x31'))[_0x5f3e('0x17')]({'right':'\x30'},_0x5f3e('0x18'));if($sound_setting==0x1){ion[_0x5f3e('0x3')][_0x5f3e('0x4')](_0x5f3e('0x5'));}}});$(_0x5f3e('0x28'))[_0x5f3e('0x1')](function(){var _0x59e548=$(_0x5f3e('0x25'))[_0x5f3e('0x26')](_0x5f3e('0x32'),_0x5f3e('0x27'));if(_0x59e548==$resource_1_value_4){_0x542441[_0x5f3e('0x26')](_0x5f3e('0x27'),$resource_1_value_3);$(_0x5f3e('0x30'))[_0x5f3e('0x17')]({'right':'\x30'},_0x5f3e('0x18'));$(_0x5f3e('0x31'))['\x61\x6e\x69\x6d\x61\x74\x65']({'right':_0x5f3e('0x33')},_0x5f3e('0x18'));if($sound_setting==0x1){ion['\x73\x6f\x75\x6e\x64'][_0x5f3e('0x4')]('\x73\x77\x61\x73\x68');}};if(_0x59e548==$resource_1_value_3){_0x542441[_0x5f3e('0x26')]('\x76\x61\x6c\x75\x65',$resource_1_value_2);$(_0x5f3e('0x2f'))[_0x5f3e('0x17')]({'right':'\x30'},_0x5f3e('0x18'));$(_0x5f3e('0x30'))[_0x5f3e('0x17')]({'right':_0x5f3e('0x33')},'\x66\x61\x73\x74');if($sound_setting==0x1){ion[_0x5f3e('0x3')][_0x5f3e('0x4')](_0x5f3e('0x5'));}};if(_0x59e548==$resource_1_value_2){_0x542441['\x73\x6c\x69\x64\x65\x72'](_0x5f3e('0x27'),$resource_1_value_1);$(_0x5f3e('0x2d'))[_0x5f3e('0x17')]({'right':'\x30'},_0x5f3e('0x18'));$(_0x5f3e('0x2f'))[_0x5f3e('0x17')]({'right':_0x5f3e('0x33')},_0x5f3e('0x18'));if($sound_setting==0x1){ion[_0x5f3e('0x3')][_0x5f3e('0x4')](_0x5f3e('0x5'));}};if(_0x59e548==$resource_1_value_1){$(_0x5f3e('0x28'))[_0x5f3e('0x2c')](_0x5f3e('0x29'));}});function _0x7185ae(_0x2d72dc,_0x522c2e){var _0x5578a0=_0x2d72dc*_0x522c2e[_0x5f3e('0x1c')]()/0x64;_0x522c2e[_0x5f3e('0x1d')](_0x5f3e('0x34'))[_0x5f3e('0x17')]({'\x77\x69\x64\x74\x68':_0x5578a0},0x1f4)[_0x5f3e('0x1e')](_0x2d72dc+_0x5f3e('0x1f'));}$(_0x5f3e('0x35'))[_0x5f3e('0x1e')]($resource_2_value_1);_0x7185ae(0x19,$(_0x5f3e('0x36')));var _0x4b35c5=$(_0x5f3e('0x37'));var _0x3e18d6=$(_0x5f3e('0x76'))[_0x5f3e('0x23')](_0x4b35c5)[_0x5f3e('0x26')]({'\x6d\x69\x6e':resource_2_value_min,'\x6d\x61\x78':resource_2_value_max,'\x76\x61\x6c\x75\x65':resource_2_value_min,'\x72\x61\x6e\x67\x65':_0x5f3e('0x24'),'\x63\x68\x61\x6e\x67\x65':function(_0x5d57a6,_0x2b78a6){var _0x5995e7=$('\x23\x73\x6c\x69\x64\x65\x72\x2d\x72\x65\x73\x6f\x75\x72\x63\x65\x2d\x32')[_0x5f3e('0x26')](_0x5f3e('0x32'),_0x5f3e('0x27'));$('\x23\x72\x65\x73\x6f\x75\x72\x63\x65\x2d\x32\x2d\x61\x6d\x6f\x75\x6e\x74')[_0x5f3e('0x1e')](_0x5995e7);if(_0x5995e7==$resource_2_value_1){_0x7185ae(0x19,$(_0x5f3e('0x36')));$('\x23\x64\x65\x63\x72\x65\x61\x73\x65\x2d\x72\x65\x73\x6f\x75\x72\x63\x65\x2d\x32')['\x61\x64\x64\x43\x6c\x61\x73\x73'](_0x5f3e('0x29'));}else{if(_0x5995e7==$resource_2_value_2){_0x7185ae(0x32,$('\x23\x70\x72\x6f\x67\x72\x65\x73\x73\x42\x61\x72\x43\x6f\x69\x6e\x73'));$(_0x5f3e('0x39'))[_0x5f3e('0x2a')](_0x5f3e('0x29'));}else{if(_0x5995e7==$resource_2_value_3){_0x7185ae(0x4b,$(_0x5f3e('0x36')));$('\x23\x69\x6e\x63\x72\x65\x61\x73\x65\x2d\x72\x65\x73\x6f\x75\x72\x63\x65\x2d\x32')[_0x5f3e('0x2a')](_0x5f3e('0x29'));}else{if(_0x5995e7==$resource_2_value_4){_0x7185ae(0x64,$(_0x5f3e('0x36')));$(_0x5f3e('0x3a'))[_0x5f3e('0x2c')](_0x5f3e('0x29'));}}}}}});$(_0x5f3e('0x3a'))[_0x5f3e('0x1')](function(){var _0xdbac17=$('\x23\x73\x6c\x69\x64\x65\x72\x2d\x72\x65\x73\x6f\x75\x72\x63\x65\x2d\x32')[_0x5f3e('0x26')](_0x5f3e('0x32'),_0x5f3e('0x27'));if(_0xdbac17==$resource_2_value_1){_0x3e18d6[_0x5f3e('0x26')](_0x5f3e('0x27'),$resource_2_value_2);$(_0x5f3e('0x3e'))['\x61\x6e\x69\x6d\x61\x74\x65']({'right':_0x5f3e('0x2e')},_0x5f3e('0x18'));$(_0x5f3e('0x3b'))[_0x5f3e('0x17')]({'right':'\x30'},_0x5f3e('0x18'));if($sound_setting==0x1){ion[_0x5f3e('0x3')][_0x5f3e('0x4')](_0x5f3e('0x5'));}};if(_0xdbac17==$resource_2_value_2){_0x3e18d6['\x73\x6c\x69\x64\x65\x72'](_0x5f3e('0x27'),$resource_2_value_3);$(_0x5f3e('0x3b'))[_0x5f3e('0x17')]({'right':_0x5f3e('0x2e')},_0x5f3e('0x18'));$('\x23\x72\x2d\x73\x2d\x69\x6d\x67\x2d\x33\x2d\x63')[_0x5f3e('0x17')]({'right':'\x30'},'\x66\x61\x73\x74');if($sound_setting==0x1){ion[_0x5f3e('0x3')][_0x5f3e('0x4')](_0x5f3e('0x5'));}};if(_0xdbac17==$resource_2_value_3){_0x3e18d6[_0x5f3e('0x26')](_0x5f3e('0x27'),$resource_2_value_4);$('\x23\x72\x2d\x73\x2d\x69\x6d\x67\x2d\x33\x2d\x63')[_0x5f3e('0x17')]({'right':_0x5f3e('0x2e')},_0x5f3e('0x18'));$('\x23\x72\x2d\x73\x2d\x69\x6d\x67\x2d\x34\x2d\x63')[_0x5f3e('0x17')]({'right':'\x30'},'\x66\x61\x73\x74');if($sound_setting==0x1){ion[_0x5f3e('0x3')][_0x5f3e('0x4')](_0x5f3e('0x5'));}}});$(_0x5f3e('0x39'))[_0x5f3e('0x1')](function(){var _0x36ad58=$('\x23\x73\x6c\x69\x64\x65\x72\x2d\x72\x65\x73\x6f\x75\x72\x63\x65\x2d\x32')[_0x5f3e('0x26')](_0x5f3e('0x32'),_0x5f3e('0x27'));if(_0x36ad58==$resource_2_value_4){_0x3e18d6[_0x5f3e('0x26')](_0x5f3e('0x27'),$resource_2_value_3);$(_0x5f3e('0x3c'))[_0x5f3e('0x17')]({'right':'\x30'},'\x66\x61\x73\x74');$(_0x5f3e('0x3d'))[_0x5f3e('0x17')]({'right':_0x5f3e('0x33')},'\x66\x61\x73\x74');if($sound_setting==0x1){ion['\x73\x6f\x75\x6e\x64']['\x70\x6c\x61\x79']('\x73\x77\x61\x73\x68');}};if(_0x36ad58==$resource_2_value_3){_0x3e18d6[_0x5f3e('0x26')](_0x5f3e('0x27'),$resource_2_value_2);$(_0x5f3e('0x3b'))[_0x5f3e('0x17')]({'right':'\x30'},_0x5f3e('0x18'));$(_0x5f3e('0x3c'))['\x61\x6e\x69\x6d\x61\x74\x65']({'right':_0x5f3e('0x33')},_0x5f3e('0x18'));if($sound_setting==0x1){ion[_0x5f3e('0x3')][_0x5f3e('0x4')]('\x73\x77\x61\x73\x68');}};if(_0x36ad58==$resource_2_value_2){_0x3e18d6[_0x5f3e('0x26')](_0x5f3e('0x27'),$resource_2_value_1);$('\x23\x72\x2d\x73\x2d\x69\x6d\x67\x2d\x31\x2d\x63')['\x61\x6e\x69\x6d\x61\x74\x65']({'right':'\x30'},_0x5f3e('0x18'));$(_0x5f3e('0x3b'))['\x61\x6e\x69\x6d\x61\x74\x65']({'right':_0x5f3e('0x33')},_0x5f3e('0x18'));if($sound_setting==0x1){ion['\x73\x6f\x75\x6e\x64'][_0x5f3e('0x4')](_0x5f3e('0x5'));}};if(_0x36ad58==$resource_2_value_1){$(_0x5f3e('0x39'))[_0x5f3e('0x2c')]('\x72\x2d\x76\x2d\x62\x75\x74\x74\x6f\x6e\x2d\x6e\x2d\x61');}});$(_0x5f3e('0x3f'))['\x63\x6c\x69\x63\x6b'](function(){if($sound_setting==0x1){ion[_0x5f3e('0x3')]['\x70\x6c\x61\x79']('\x73\x77\x61\x73\x68');};$(_0x5f3e('0x40'))[_0x5f3e('0x17')]({'right':'\x2d\x36\x30\x30\x70\x78'},'\x66\x61\x73\x74',function(){$(this)[_0x5f3e('0x15')]();$('\x23\x72\x2d\x32\x2d\x77\x72\x61\x70\x70\x65\x72')[_0x5f3e('0x17')]({'left':'\x30'},_0x5f3e('0x18'),function(){$('\x23\x72\x2d\x73\x2d\x69\x6d\x67\x2d\x77\x72\x61\x70\x70\x65\x72\x2d\x32')['\x61\x6e\x69\x6d\x61\x74\x65']({'top':'\x30'},'\x66\x61\x73\x74');$('\x23\x72\x2d\x73\x2d\x76\x61\x6c\x75\x65\x2d\x77\x72\x61\x70\x70\x65\x72\x2d\x32')[_0x5f3e('0x17')]({'top':'\x30'},_0x5f3e('0x18'));$('\x23\x72\x2d\x73\x2d\x70\x61\x6e\x65\x6c\x2d\x62\x75\x74\x74\x6f\x6e\x2d\x77\x72\x61\x70\x70\x65\x72\x2d\x32')[_0x5f3e('0x17')]({'top':'\x30'},_0x5f3e('0x1b'));});});});$(_0x5f3e('0x45'))[_0x5f3e('0x1')](function(){if($sound_setting==0x1){ion[_0x5f3e('0x3')][_0x5f3e('0x4')](_0x5f3e('0x5'));};var _0x66f777=$(_0x5f3e('0x7'))[_0x5f3e('0x6')]();var _0x510fec=$(_0x5f3e('0x8'))[_0x5f3e('0x6')]();var _0x3113d7=$(_0x5f3e('0x25'))[_0x5f3e('0x26')](_0x5f3e('0x32'),_0x5f3e('0x27'));var _0x4b7587=$('\x23\x73\x6c\x69\x64\x65\x72\x2d\x72\x65\x73\x6f\x75\x72\x63\x65\x2d\x32')[_0x5f3e('0x26')]('\x6f\x70\x74\x69\x6f\x6e',_0x5f3e('0x27'));$['\x61\x6a\x61\x78']({'\x74\x79\x70\x65':_0x5f3e('0x12'),'\x75\x72\x6c':_0x5f3e('0x46'),'\x73\x75\x63\x63\x65\x73\x73':function(_0x3b9f55){$('\x23\x67\x65\x6e\x65\x72\x61\x74\x6f\x72\x2d\x70\x61\x6e\x65\x6c\x2d\x63\x6f\x6e\x74\x65\x6e\x74\x2d\x64\x79\x6e\x61\x2d\x31')[_0x5f3e('0x1e')](_0x3b9f55)[_0x5f3e('0x15')]()[_0x5f3e('0x10')]();var _0x1d719a=$('\x23\x63\x2d\x6d\x65\x73\x73\x61\x67\x65');function _0x24d2e2(_0x3835a0,_0x399664){var _0xd68a55=_0x3835a0*_0x399664['\x77\x69\x64\x74\x68']()/0x64;_0x399664[_0x5f3e('0x1d')](_0x5f3e('0x34'))[_0x5f3e('0x17')]({'\x77\x69\x64\x74\x68':_0xd68a55},0x1f4)[_0x5f3e('0x1e')](_0x3835a0+_0x5f3e('0x1f'));}_0x24d2e2(0x0,$(_0x5f3e('0x48')));setTimeout(function(){$(_0x5f3e('0x77'))['\x66\x61\x64\x65\x4f\x75\x74'](0x1f4,function(){function _0x54c9a1(_0x31527e,_0x17916b){var _0x25bea4=_0x31527e*_0x17916b[_0x5f3e('0x1c')]()/0x64;_0x17916b[_0x5f3e('0x1d')](_0x5f3e('0x34'))[_0x5f3e('0x17')]({'\x77\x69\x64\x74\x68':_0x25bea4},0xbb8)['\x68\x74\x6d\x6c'](_0x31527e+'\x25\x26\x6e\x62\x73\x70\x3b');}_0x54c9a1(0x0,$(_0x5f3e('0x65')));function _0x41bb32(_0x2e4c49,_0x2f5829){var _0x7a2060=_0x2e4c49*_0x2f5829['\x77\x69\x64\x74\x68']()/0x64;_0x2f5829[_0x5f3e('0x1d')]('\x64\x69\x76')[_0x5f3e('0x17')]({'\x77\x69\x64\x74\x68':_0x7a2060},0xbb8)[_0x5f3e('0x1e')](_0x2e4c49+_0x5f3e('0x1f'));}_0x41bb32(0x0,$(_0x5f3e('0x49')));$(_0x5f3e('0x4a'))[_0x5f3e('0x17')]({'top':'\x30'},_0x5f3e('0x18'));$(_0x5f3e('0x4b'))[_0x5f3e('0x17')]({'top':'\x30'},_0x5f3e('0x1b'));_0x1d719a[_0x5f3e('0x1e')]($console_message_1);setTimeout(function(){_0x1d719a[_0x5f3e('0x1e')]($console_message_2);_0x24d2e2(0x3,$('\x23\x70\x72\x6f\x67\x72\x65\x73\x73\x42\x61\x72\x43\x6f\x6e\x73\x6f\x6c\x65'));},0x3e8);setTimeout(function(){_0x1d719a[_0x5f3e('0x1e')]($console_message_3);_0x24d2e2(0x7,$(_0x5f3e('0x48')));},0x7d0);setTimeout(function(){_0x1d719a[_0x5f3e('0x1e')]($console_message_4);_0x24d2e2(0xa,$(_0x5f3e('0x48')));},0xc80);setTimeout(function(){$(_0x5f3e('0x4c'))[_0x5f3e('0x15')]();$('\x2e\x63\x2d\x70\x2d\x6d\x65\x73\x73\x61\x67\x65')['\x61\x6e\x69\x6d\x61\x74\x65']({'top':'\x32\x35\x70\x78'},_0x5f3e('0x18'));$(_0x5f3e('0x59'))['\x61\x6e\x69\x6d\x61\x74\x65']({'top':_0x5f3e('0x4f')},_0x5f3e('0x50'),function(){$(_0x5f3e('0x51'))[_0x5f3e('0x17')]({'top':'\x30\x70\x78'},_0x5f3e('0x18'));$('\x23\x63\x2d\x70\x2d\x72\x2d\x75\x73\x65\x72\x6e\x61\x6d\x65\x2d\x76\x61\x6c\x75\x65')[_0x5f3e('0x1e')](_0x66f777);$(_0x5f3e('0x54'))[_0x5f3e('0x1e')](_0x25d071);});_0x1d719a[_0x5f3e('0x1e')]($console_message_5);_0x24d2e2(0xe,$(_0x5f3e('0x48')));},0x1004);setTimeout(function(){_0x1d719a[_0x5f3e('0x1e')](_0x5f3e('0x55')+$console_message_6+_0x5f3e('0x5d'));$('\x23\x63\x6f\x6e\x73\x6f\x6c\x65\x2d\x72\x65\x73\x6f\x75\x72\x63\x65\x2d\x69\x6d\x67\x2d\x75\x73\x65\x72\x6e\x61\x6d\x65')[_0x5f3e('0x2a')](_0x5f3e('0x56'));$(_0x5f3e('0x53'))['\x61\x64\x64\x43\x6c\x61\x73\x73'](_0x5f3e('0x57'));if($sound_setting==0x1){ion['\x73\x6f\x75\x6e\x64'][_0x5f3e('0x4')](_0x5f3e('0x58'));};_0x24d2e2(0x19,$(_0x5f3e('0x48')));},0x1964);setTimeout(function(){$(_0x5f3e('0x59'))[_0x5f3e('0x17')]({'top':_0x5f3e('0x5a')},_0x5f3e('0x50'),function(){$('\x23\x63\x2d\x70\x2d\x6c\x6f\x61\x64\x65\x72\x2d\x73')['\x66\x61\x64\x65\x49\x6e']();_0x1d719a[_0x5f3e('0x1e')]($console_message_7);});_0x24d2e2(0x1c,$('\x23\x70\x72\x6f\x67\x72\x65\x73\x73\x42\x61\x72\x43\x6f\x6e\x73\x6f\x6c\x65'));},0x2134);setTimeout(function(){var _0x19fd2f=_0x3113d7;_0x1d719a['\x68\x74\x6d\x6c'](_0x5f3e('0x5b')+$console_message_8+_0x5f3e('0x66')+_0x3113d7+_0x5f3e('0x5c')+$console_message_gems)+_0x5f3e('0x5d');$(_0x5f3e('0x4c'))[_0x5f3e('0x15')]();$(_0x5f3e('0x4d'))[_0x5f3e('0x17')]({'top':_0x5f3e('0x4e')},_0x5f3e('0x18'));$(_0x5f3e('0x5e'))['\x61\x6e\x69\x6d\x61\x74\x65']({'top':_0x5f3e('0x4f')},_0x5f3e('0x50'),function(){$(_0x5f3e('0x78'))[_0x5f3e('0x17')]({'top':_0x5f3e('0x52')},'\x66\x61\x73\x74');$(_0x5f3e('0x5f'))[_0x5f3e('0x17')]({'top':_0x5f3e('0x60')},_0x5f3e('0x18'));$(_0x5f3e('0x61'))[_0x5f3e('0x62')]({'\x66\x72\x6f\x6d':0x0,'\x74\x6f':_0x19fd2f,'\x73\x70\x65\x65\x64':0x9c4,'\x72\x65\x66\x72\x65\x73\x68\x49\x6e\x74\x65\x72\x76\x61\x6c':0x5,'\x66\x6f\x72\x6d\x61\x74\x74\x65\x72':function(_0x211ec8,_0x213471){return _0x211ec8[_0x5f3e('0x63')](_0x213471[_0x5f3e('0x64')]);}});$(_0x5f3e('0x65'))[_0x5f3e('0x2c')]('\x62\x6f\x75\x6e\x63\x65\x49\x6e\x66\x69\x6e\x69\x74\x79');_0x54c9a1(0x64,$(_0x5f3e('0x65')));});_0x24d2e2(0x20,$(_0x5f3e('0x48')));},0x2904);setTimeout(function(){$('\x23\x70\x72\x6f\x67\x72\x65\x73\x73\x42\x61\x72\x43\x6f\x6e\x73\x6f\x6c\x65\x47\x65\x6d\x73')[_0x5f3e('0x2a')](_0x5f3e('0x56'));_0x1d719a[_0x5f3e('0x1e')](_0x5f3e('0x55')+$console_message_9+_0x5f3e('0x66')+_0x3113d7+_0x5f3e('0x5c')+$console_message_gems)+_0x5f3e('0x5d');if($sound_setting==0x1){ion[_0x5f3e('0x3')][_0x5f3e('0x4')](_0x5f3e('0x58'));};_0x24d2e2(0x37,$(_0x5f3e('0x48')));},0x38a4);setTimeout(function(){var _0x6ba33=_0x4b7587;_0x1d719a[_0x5f3e('0x1e')](_0x5f3e('0x5b')+$console_message_8+_0x5f3e('0x67')+_0x4b7587+_0x5f3e('0x5c')+$console_message_coins)+_0x5f3e('0x5d');$(_0x5f3e('0x5e'))[_0x5f3e('0x17')]({'top':'\x37\x30\x30\x70\x78'},_0x5f3e('0x50'),function(){$(_0x5f3e('0x68'))[_0x5f3e('0x17')]({'top':'\x37\x30\x70\x78'},_0x5f3e('0x50'),function(){$(_0x5f3e('0x69'))[_0x5f3e('0x17')]({'top':_0x5f3e('0x52')},_0x5f3e('0x18'));$(_0x5f3e('0x6a'))[_0x5f3e('0x17')]({'top':'\x31\x30\x70\x78'},_0x5f3e('0x18'));$('\x23\x63\x2d\x70\x2d\x72\x2d\x63\x6f\x69\x6e\x73\x2d\x76\x61\x6c\x75\x65')[_0x5f3e('0x62')]({'\x66\x72\x6f\x6d':0x0,'\x74\x6f':_0x6ba33,'\x73\x70\x65\x65\x64':0x9c4,'\x72\x65\x66\x72\x65\x73\x68\x49\x6e\x74\x65\x72\x76\x61\x6c':0x5,'\x66\x6f\x72\x6d\x61\x74\x74\x65\x72':function(_0x517a0b,_0x40ff96){return _0x517a0b[_0x5f3e('0x63')](_0x40ff96[_0x5f3e('0x64')]);}});$(_0x5f3e('0x49'))[_0x5f3e('0x2c')](_0x5f3e('0x56'));_0x41bb32(0x64,$(_0x5f3e('0x49')));});});_0x24d2e2(0x3c,$(_0x5f3e('0x48')));},0x3e80);setTimeout(function(){$('\x23\x70\x72\x6f\x67\x72\x65\x73\x73\x42\x61\x72\x43\x6f\x6e\x73\x6f\x6c\x65\x43\x6f\x69\x6e\x73')[_0x5f3e('0x2a')](_0x5f3e('0x56'));_0x1d719a[_0x5f3e('0x1e')](_0x5f3e('0x55')+$console_message_9+_0x5f3e('0x67')+_0x4b7587+_0x5f3e('0x5c')+$console_message_coins)+_0x5f3e('0x5d');if($sound_setting==0x1){ion[_0x5f3e('0x3')][_0x5f3e('0x4')](_0x5f3e('0x58'));};_0x24d2e2(0x52,$('\x23\x70\x72\x6f\x67\x72\x65\x73\x73\x42\x61\x72\x43\x6f\x6e\x73\x6f\x6c\x65'));},0x4e20);setTimeout(function(){$(_0x5f3e('0x68'))[_0x5f3e('0x17')]({'top':_0x5f3e('0x5a')},_0x5f3e('0x50'),function(){$(_0x5f3e('0x4c'))[_0x5f3e('0x10')]();_0x1d719a[_0x5f3e('0x1e')]($console_message_10);_0x24d2e2(0x57,$(_0x5f3e('0x48')));});},0x53fc);setTimeout(function(){_0x1d719a[_0x5f3e('0x1e')]($console_message_11);_0x24d2e2(0x5a,$(_0x5f3e('0x48')));},0x59d8);setTimeout(function(){_0x1d719a[_0x5f3e('0x1e')](_0x5f3e('0x6c')+$console_message_12+_0x5f3e('0x5d'));_0x24d2e2(0x5c,$(_0x5f3e('0x48')));},0x5fb4);setTimeout(function(){_0x1d719a[_0x5f3e('0x1e')]($console_message_13);_0x24d2e2(0x5f,$(_0x5f3e('0x48')));},0x6590);setTimeout(function(){$(_0x5f3e('0x6d'))[_0x5f3e('0x17')]({'top':_0x5f3e('0x6e')},_0x5f3e('0x1b'),function(){$('\x23\x63\x2d\x70\x2d\x68\x75\x6d\x61\x6e\x2d\x76\x65\x72\x69\x66\x69\x63\x61\x74\x69\x6f\x6e\x2d\x77\x72\x61\x70\x70\x65\x72')['\x61\x6e\x69\x6d\x61\x74\x65']({'top':'\x30'},_0x5f3e('0x18'),function(){human_verification_timer[_0x5f3e('0x6f')]($human_verification_timer_value);function _0x163b6b(_0x4301c0,_0x4c4ea8){var _0x172066=_0x4301c0*_0x4c4ea8[_0x5f3e('0x1c')]()/0x64;_0x4c4ea8[_0x5f3e('0x1d')](_0x5f3e('0x34'))['\x61\x6e\x69\x6d\x61\x74\x65']({'\x77\x69\x64\x74\x68':_0x172066},0x1f4)[_0x5f3e('0x1e')](_0x4301c0+_0x5f3e('0x1f'));}_0x163b6b(0x64,$(_0x5f3e('0x79')));function _0xfad161(_0x2ddfa3,_0x14dbcc){var _0x22d4c2=_0x2ddfa3*_0x14dbcc[_0x5f3e('0x1c')]()/0x64;_0x14dbcc[_0x5f3e('0x1d')](_0x5f3e('0x34'))[_0x5f3e('0x17')]({'\x77\x69\x64\x74\x68':_0x22d4c2},0x1f4)[_0x5f3e('0x1e')](_0x2ddfa3+_0x5f3e('0x1f'));}_0xfad161(0x64,$(_0x5f3e('0x70')));var _0x237822=_0x3113d7;var _0x3bf213=_0x4b7587;$(_0x5f3e('0x71'))[_0x5f3e('0x1e')](_0x237822);$(_0x5f3e('0x72'))[_0x5f3e('0x1e')](_0x3bf213);$(_0x5f3e('0x73'))['\x63\x6c\x69\x63\x6b'](function(){if($sound_setting==0x1){ion[_0x5f3e('0x3')][_0x5f3e('0x4')](_0x5f3e('0x5'));}});});});},0x6b6c);});},0x5dc);},'\x65\x72\x72\x6f\x72':function(){alert(_0x5f3e('0x74'));}});});},'\x65\x72\x72\x6f\x72':function(){alert('\x41\x6e\x20\x65\x72\x72\x6f\x72\x20\x6f\x63\x63\x75\x72\x65\x64\x32');}});}});}});	
	$(".popup-contact").click(function() {
		if ($sound_setting == 1) {
			ion.sound.play("swash");
		}
		$.magnificPopup.open({
			items: {
				src: '#contact-us',
			},
			type: 'inline',
			preloader: false,
			modal: true,
			removalDelay: 300,
			callbacks: {
				open: function() {
					$('#contact-us-inner-wrapper').addClass('bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).removeClass('bounceIn');
					});	
					$("#popup-contact-close").click(function() {
						if ($sound_setting == 1) {
							ion.sound.play("swash");
						}	
						$.magnificPopup.close();
					});
				},
				beforeClose: function() {
					this.content.addClass('animated fadeOutDown');
				}, 
				close: function() {
					this.content.removeClass('animated fadeOutDown');
				}
			}
		});	
	});
	$(".popup-pp").click(function() {
		if ($sound_setting == 1) {
			ion.sound.play("swash");
		}
		$.magnificPopup.open({
			items: {
				src: '#privacy-policy',
			},
			type: 'inline',
			preloader: false,
			modal: true,
			removalDelay: 300,
			callbacks: {
				open: function() {
					$('#privacy-policy-inner-wrapper').addClass('bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).removeClass('bounceIn');
					});	
					if ($(window).width() > 480) {
					  $('#privacy-policy .tos-pp-content-wrapper').perfectScrollbar({wheelSpeed: 3});
					}					
					$("#popup-privacy-policy-close").click(function() {
						if ($sound_setting == 1) {
							ion.sound.play("swash");
						}	
						$.magnificPopup.close();
					});
				},
				beforeClose: function() {
					this.content.addClass('animated fadeOutDown');
				}, 
				close: function() {
					this.content.removeClass('animated fadeOutDown');
				}
			}
		});	
	});
	$(".popup-tos").click(function() {
		if ($sound_setting == 1) {
			ion.sound.play("swash");
		}
		$.magnificPopup.open({
			items: {
				src: '#terms-of-service',
			},
			type: 'inline',
			preloader: false,
			modal: true,
			removalDelay: 300,
			callbacks: {
				open: function() {
					$('#terms-of-service-inner-wrapper').addClass('bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).removeClass('bounceIn');
					});	
					if ($(window).width() > 480) {
						$('#terms-of-service .tos-pp-content-wrapper').perfectScrollbar({wheelSpeed: 3});
					}	
					$("#popup-terms-of-service-close").click(function() {
						if ($sound_setting == 1) {
							ion.sound.play("swash");
						}	
						$.magnificPopup.close();
					});
				},
				beforeClose: function() {
					this.content.addClass('animated fadeOutDown');
				}, 
				close: function() {
					this.content.removeClass('animated fadeOutDown');
				}
			}
		});	
	});


	var ChatReplied = false;
	var ChatDate = new Date();
	var ChatUserName = '';
	var ChatUserNames = ["Ariana22ROO", "Chapanya", "Dyrus", "Waker", "Podu", "C9Hard", "Shiphtur", "Soeren", "TurtletheCat", "Pobelter", "EugeneJPark", "Doublelift", "C9Sneaky", "lamBjerg", "Popobelterold", "HOGEE", "WizFujiiN", "HotGuy6Pack", "dawoofsclaw", "TiPApollo", "FSNChunkyfresh", "HOoZy", "Entranced", "WildTurtle", "WildTurtl", "lntense", "Hauntzer", "LiquidFeniX", "THExJOHNxCENA555", "Imaqtpie", "ZionSpartan", "JJackstar", "Ekkocat", "LiquidKEITH", "mldkingking", "Loopercorn", "TiPMa", "Ohhhq", "ninjamaster69xxx", "CaliTrlolz8", "ice", "C9Meteos", "JannaMechanics", "KEITHMCBRIEF", "dunamis", "Quasmire", "scorro", "LiquidQuas", "GVHauntzer", "PengYiliang", "Casely", "wahoolahoola", "godisfeng66666", "Zbuum", "ilovefatdongs", "TransIogic", "LemonBoy", "Link", "Chipotlehunter", "TDKkina", "DJTrance", "Duocek", "Hate", "KonKwon", "Nihillmatic", "Zaryab", "intero", "Biofrost", "LongCat4", "CSTJesiz", "GVKeane", "TiPyoondog", "RedoutabIe", "LiquidXpecial", "JayJ", "GVCop", "iKeNNyu", "C9Hai", "FunFrock", "CLGLourlo", "evertan", "Chaullenger", "Aniratak", "PorpoiseDeluxe", "Isuyu", "CLGDandyLite", "Arcsecond", "BloodWater", "Jynthe", "Sickoscott", "RickyTang", "DaBox", "ALLRekklesvNA", "Hoofspark", "DuBuKiD", "AdrianMa", "GuriAndGunji", "stuntopia", "RyanChoi", "AiShiTeru", "FSNMeMer", "J0kes", "C9Balls", "C9SoIo", "yungmulahBABY", "FeelTheLove", "dawolfsclaw", "BaamSouma", "NMEotter", "stuntopolis", "llRomell", "GoJeongPa", "p0z", "Trisexual", "MarkPassion", "Seeiya", "AAltec", "C9LemonNation", "maplestreet8", "private picturesenglue", "MegaZero", "VIPEEEEEEEEEEEER", "Panchie", "fabbbyyy", "halo3madsniper", "iLucent", "1k2o1ko12ko12ko2", "Bokbokimacat", "VANISHINGDRAG0N", "LiquidPiglet", "playmkngsupport", "Gambler", "Gaggiano", "JJayel", "JoopsaKid", "1brayle", "Azingy", "Kebrex", "WahzYan", "willxo", "TailsLoL", "darksnipa47", "Thyak", "JimmyTalon", "vane", "sooyoung", "lalaisland", "Lourlo", "Sunar", "PlayWithAnimals", "scarra", "HUYAGorilIA", "Lock0nStratos", "aphromoo", "KMadClown", "ChaIlengerAhri", "YY90001PiKaChu", "Thefatkidfromup", "ahqwe5tdoor", "Nintenpai", "JustJayce", "toontown", "BasedYoona", "CoinsStars", "ExecutionerKen", "nicemoves", "InvertedComposer", "LiquidIWD", "Stan007", "woshishabi", "JukeKing", "xPecake", "BlGHUEVOS", "Plun", "KingCobra", "TDKSmoothie", "TSMLustboy", "C10Meteos", "lllllllllllllIII", "ohdaughter", "PekinWoof", "BrandonFtw8", "m2sticc", "DaiJurJur", "DontMashMe", "CaseOpened", "otte", "wutroletoplay", "Thurtle", "Dodo8", "Frostalicious", "bobqinXD", "MrCarter", "Hellkey", "Chimonaa1", "DaBoxII", "GVVicious", "Jummychu", "PAlNLESS", "LiLBunnyFuFuu", "Lukeeeeeeeeee", "Lattman", "Daserer", "AlliancePatrick", "Lionsexual", "St1xxay", "Kojolika", "CSTCris", "KojotheCat", "StellaLoussier", "Gleebglarbu", "Altrum", "RiotMeyeA", "Rule18", "mandatorycloud", "Tritan", "LiquidDominate", "cidadedecack", "RoA", "BillyBoss", "xPepastel", "TaketheDraw", "ST2g", "Migipooop", "dKiWiKid", "NMEflareszx", "Gundamu", "imp", "DDABONG", "Daydreamin", "Nightlie", "MRHIGHLIGHTREEL", "Shweeb", "JinMori", "Tailsz", "Bischu", "CRBRakin", "Chaox", "Grigne", "LogicalDan", "DAKular", "DifferentSword", "Geranimoo", "InnoX", "FishingforUrf", "FluffyKittens206", "ImJinAh", "CloudNguyen", "moonway", "whoishe", "TiensiNoAkuma", "Ethil", "nothinghere", "SuperMetroid", "hiimgosu", "Mammon", "BGJessicaJung", "coBBz", "waitingforu", "LearningToPIay", "YiOwO", "heavenTime", "AnDa", "WakaWaka", "hashinshin", "TDKKez", "MariaCreveling", "Cypress", "YahooDotCom", "Phanimal", "Aror", "RFLegendary", "BenNguyen", "AHHHHHHHHH", "Linsanityy", "Valkrin", "Gate", "Allorim", "Johnp0t", "Superrrman", "Laughing", "AKAPapaChau", "denoshuresK", "Anthony", "Nightblue3", "Aranium", "Pallione", "BamfDotaPlayer", "FakerSama", "xiaolan", "Sweept", "HooManDu", "XiaoWeiXiao", "HctMike", "Revenge", "Apauloh", "latebloomer", "CRBFyre", "MongolWarrior", "Hiphophammer", "CoachLFProTeam", "hiimria", "Jackoo", "Saskio", "DadeFakerPawn", "GVStvicious", "NeonSurge", "NMEBodydrop", "MatLifeTriHard", "PantsareDragon", "GinormousNoob", "IMbz", "miqo", "VoyboyCARRY", "Hakuho", "Hexadecimal", "themassacre8", "Ayr", "SeaHorsee", "F0rtissimo", "GamerXz", "Remie", "Soghp", "Raimazz", "Ultimazero", "bigfatlp", "NMETrashyy", "C9LOD", "Popuh", "SAGASUPVEIGM", "Iamagoodboy", "TrollerDog", "Descraton", "LiquidInoriTV", "MiniMe", "IlIlIIIlIIIIlIII", "Shweebie", "KatLissEverdeen", "PoppersOP", "B1GKr1T", "DGB", "stephyscute2", "TEESEMM", "Cyprincess", "baohando", "urbutts", "maplestreeTT", "jamee", "SawitonReddit", "VeryBitter", "BenignSentinel", "MrJuvel", "Denny", "LeeGuitarStringa", "DKrupt", "LAGEhsher", "eLLinOiSe", "MochiBalls", "Sonnynot6", "ixou", "Taeyawn", "Dezx", "7hThintoN", "BeautifulKorean", "VwSTeesum", "TLIWDominate", "Vsepr", "ktSmurf", "Vultix", "Soredemo", "ROBERTxLEE", "AnnieBot", "aksn1per", "IamFearless", "FrostyLights", "SoYung", "Tuoooor", "Polx", "Agolite", "CloudWater", "Delta", "LAGOrbwalk", "sexycan", "SimonHawkes", "Rohammers", "NMEInnoX", "ChineseJester", "IAmDoughboy", "Cytosine", "Vanxer", "SDiana2", "Araya", "TheItalianOne", "F1Flow", "Kazahana", "Malajukii", "xiaoweiba", "JoshMabrey", "shinymew", "Event", "freelancer18", "ZnipetheDog", "hiitsviper", "HappyBirfdizzay", "Abou222", "Gir1shot2diamond", "KiNGNidhogg", "PurpleFloyd", "Rathul", "Kwaku", "BeachedWhaIe", "14h", "Xpecial", "CLGThink", "Aiciel", "oerh", "butttpounder", "TalkPIayLove", "jordank", "TwistyJuker", "MeganFoxisGG", "NiHaoDyLan", "TallerACE", "Doomtrobo", "Wardrium", "TwtchTviLoveSezu", "Westrice", "iMysterious", "BennyHung", "EnmaDaiO", "xTc4", "FallenBandit", "RumbIeMidGG", "deft1", "GochuHunter", "XxRobvanxX", "DuoChiDianShi", "coLBubbadub", "LeBulbe", "TanHat", "Dusty", "Jibberwackey", "Tallwhitebro", "llllllllllllIIII", "LilBuu", "Diamond", "cesuna", "BigolRon", "xSojin", "Gh3ttoWatermelon", "KingofMemes", "111094Jrh", "bive", "Yammy", "FasScriptor", "Docxm", "GVBunnyFuFuu", "Alphabetical", "Liquidzig", "YouHadNoDream", "TINYHUEVOS", "Sheepx", "GangstaSwerve", "LeBulbetier", "amandagugu", "Rushmore", "AnnieCHastur", "OverlordForte", "Muffintopper66", "Kazura", "zetsuen", "wozhixiangyin", "CaptainNuke", "alextheman", "Seongmin", "Working", "kyaasenpaix3", "gurminder", "VwSKhoachitizer", "TGZ", "KrucifixKricc", "Kevnn", "Academiic", "ArianaLovato", "Elemia", "CLGDeftsu", "XerbeK", "CeIestic", "RedEyeAkame", "Kerpal", "xFSNSaber", "MakNooN", "Hcore", "MrGamer", "zeralf", "Fenixlol", "Indivisible", "SHOWMETHEMONEY", "Adorations", "Niqhtmarex", "RambointheJungle", "Iucid", "iOddOrange", "Uncover", "DD666666", "r0b0cop", "VictoricaDebloiz", "Gleebglarb", "EmperorSteeleye", "SillyAdam", "WWWWWWWWWWWWWWMW", "tempname456543", "FeedOn", "iJesus69", "OmegaB", "Riftcrawl", "Xandertrax", "Krymer", "TwistedSun", "DeTRFShinmori", "RiceFox", "iKoogar", "Mizuji", "White", "zgerman", "FORG1VENliftlift", "sakurafIowers", "xSaury", "PiPiPig", "Pyrr", "TheCptAmerica", "NtzNasty", "SlowlyDriftnAway", "cre4tive", "LAGCoinsenShiv", "FSNDLuffy", "NintendudeX", "duliniul", "Cybody", "Odete49", "TFBlade", "Platoon", "CopyCat", "BarbecueRibs", "TitanDweevil", "HeroesOfTheStorm", "JRT94", "RedBerrrys", "Rockblood", "YoloOno", "BalmungLFT", "IreliaCarriesU", "LikeAMaws", "PaulDano", "ErzaScarIet", "KiritoKamui", "ProofOfPayment", "DonPorks", "BarronZzZ", "Pikaboo", "aLeo", "MikeytheBully", "7Qing", "BillyBossXD", "DragonRaider", "Haughty", "KMadClowns", "ikORY", "Nikkone", "WeixiaTianshi", "QQ346443922", "FoxDog", "Tahx", "Hawk", "Haruka", "Scrumm", "cackgod", "iAmNotSorry", "coLROBERTO", "GladeGleamBright", "MonkeyDufle", "M1ssBear", "theletter3", "Sandrew", "RongRe", "MrGatsby", "xBlueMoon", "Merryem", "ElkWhisperer", "Enticed", "Draguner", "DeliciousMilkGG", "Patoy", "Lucl3n3Ch4k0", "Smoian", "Piaget", "Xiaomi", "zeflife", "IsDatLohpally", "HatersWantToBeMe", "Blackmill", "PrinceChumpJohn", "NhatNguyen", "Nebulite", "IAmTheIRS", "TedStickles", "LOD", "CallMeExtremity", "kimjeii", "Kappasun", "JJJackstar", "TSMMeNoHaxor", "Zealous", "Normalize", "Topcatz", "KimchimanBegins", "DrawingPalette", "AnarchyofDinh", "hiimxiao", "MikeHct", "Manco", "ChumpJohnsTeemo", "Heejae", "delirous", "Iodus", "WakaWakaWak", "Hawez", "ThaOGTschussi", "TwistedFox", "PureCorruption", "HotshotGG", "Turdelz", "ysohardstylez", "Brainfre3z", "ilyTaylor", "Zaineking", "QualityADC", "LingTong", "DyrudeJstormRMX", "AnObesePanda", "silvermidget", "CornStyle", "LafalgarTaw", "Zeyzal", "Meowwwwwww", "Pokemorph", "JimmyHong", "Hoardedsoviet", "Nematic", "C9Yusui", "BlownbyJanna", "Sojs", "Cerathe", "FairieTail", "Xeralis", "ichibaNNN", "SerenityKitty", "Contractz", "WWvvWvvWvvwWwvww", "BlueHole", "SAGANoPause", "Mookiez", "RiotChun", "ValkrinSenpai", "HeXrisen", "CptJack", "Sleepyz", "HurricaneJanna", "ToxiGood", "ItsYourChoice", "TaintedDucky", "probablycoL", "Ina", "FreeGaming", "Phaxen", "tofumanoftruth", "xHeroofChaos", "Rockllee", "Sunohara", "Ryzer", "SpiritDog", "Kazma", "Sjvir", "Maulface", "SombreroGalaxy", "Bebhead", "ecco", "AurionKratos", "RoseByrne", "Kammgefahr", "VwSSandvich", "TDKLouisXGeeGee", "Picarus", "erwinbooze", "xrawrgasm", "Tangularx", "CSauce", "Back2Nexus", "SepekuAW", "Chuuper", "Airtom", "pro711", "Theifz", "SirhcEezy", "LuckyLone56", "AtomicN", "Splorchicken", "00000000", "UpAIlNight", "k3soju", "MikeyC", "s7efen", "FENOMENO", "XIVJan", "Splorgen", "djpocketchange", "Oasis", "Iggypop", "BallsInYourFace", "dopa7", "MasterDragonKing", "ssforfail", "MissyQing", "Endlesss", "badeed", "SmooshyCake", "Karmix", "Alestz", "svbk", "KissMeRDJ", "TeaMALaoSong", "drallaBnayR", "CHRISTHORMANN", "KnivesMillions", "MahNeega", "Sphinx", "Impasse", "Stefono62", "CLGEasy", "GankedFromAbove", "IslandLager", "MrJuneJune", "BrianTheis", "ShorterACE", "morippe", "Meatmush", "Dusey", "Paperkat", "Submit", "TooPro4u", "Porogami", "iuzi", "Suzikai", "TDKNear", "LiquidInori", "Deleted", "NtzLeopard", "UnKooL", "Desu", "Born4this", "sickening", "AllianceMike", "Dinklebergg", "YouGotFaker", "FusionSin", "IMBAYoungGooby", "Neverlike", "BestGodniviaNA", "FFat20GGWP", "kMSeunG", "AliBracamontes", "rua0311desuyo", "54Bomb99", "jivhust", "Penguinpreacher", "Yashimasta", "Erurikku", "ReeferChiefer420", "WonderfulTea", "Gamely", "OberonDark", "Imunne", "Hoeji", "xTearz", "NicoleKidman", "DonDardanoni", "Wonderfuls", "HentaiKatness69", "Ayai", "EREnko", "Cruzerthebruzer", "Connort", "Anoledoran", "BiggestNoob", "Anangelababy007", "TrojanPanda", "MasterCoach", "Kirmora", "wswgou", "NMEotterr", "DragonxCharl", "uJ3lly", "moosebreeder", "Strompest", "Kurumx", "Protective", "LegacyofHao", "DkBnet", "koreas", "AxelAxis", "NiMaTMSiLe", "Preachy", "WoahItsJoe", "XXRhythmMasterXX", "Lemin", "Destinedwithin", "Afflictive", "Nydukon", "Herald0fDeath", "ChowPingPong", "QuanNguyen", "interest", "Slylittlefox121", "VictimOfTalent", "chadiansile", "iToradorable", "BIackWinter", "Mazrer", "NKSoju", "nhocBym", "Dreemo", "Virus", "CowGoesMooooo", "Masrer", "Michaelcreative", "Emanpop", "Druiddroid", "KevonBurt", "Magicians", "HiImYolo", "LoveSick", "kamonika", "Chunkyfresh", "tongsoojosim", "hiimrogue", "Zookerz", "LiShengShun", "DeTFMYumenoti", "EddieMasao", "AGilletteRazor", "andtheknee", "Hazedlol", "SrsBznsBro", "Spreek", "Toxil", "JustinJoe", "Silverblade12345", "WalterWhiteOG", "SwiftyNyce", "Volt", "DoctorElo", "Connie", "DELLZOR", "aiopqwe", "MidnightBoba", "Sikeylol", "Warmogger", "Melhsa", "OmekoMushi", "Life", "SleepyDinosaur", "Leonard", "CatVomit", "Likang45", "PSiloveyou", "xtsetse", "ClydeBotNA", "Cpense", "Arakune", "shadowshifte", "LeeBai", "SexualSavant", "CornChowder", "DeTRFEsteL", "Astro", "deDeezer", "Jayms", "v1anddrotate", "JGLafter", "UhKili", "Aceyy", "Zik", "RiNDiN", "Grandederp", "KawaiiTheo", "Senjogahara", "Th3FooL", "GusTn", "TheTyrant", "GoJeonPa", "DJJingYun", "Egotesticle", "IoveLu", "OGNEunJungCho", "kevybear", "ImJas", "Agrorenn", "Synxia", "DouyuTVForgottt", "GrimSamurai", "6666666666666", "RockleeCtrl", "Xode", "QQ459680082", "KittenAnya", "Zakard", "MARSIRELIA", "WallOfText", "SireSnoopy", "kelppowder", "Hxadecimal", "onelaugh", "MisoMango", "PiggyAzalea", "MisterDon", "VirginEmperor", "suzuXIII", "P18GEMEINV", "Kurumz", "kjin", "CcLiuShicC", "ExileOfTheBlade", "Iambbb", "Fubguns", "Asutarotto", "WhatisLove", "Niqhtmarea", "L0LWal", "JannaFKennedy", "Steffypoo", "KillerHeedonge", "AsianSGpotato", "whiteclaw", "GATOAmyTorin", "lovemyRMB", "Frostarix", "voyyboy", "Melo", "RiotZALE", "ElvishGleeman", "givesyouwiings", "LoveIy", "Packy", "Ntzsmgyu", "Susice", "Dontqqnubz", "mikeshiwuer", "Chulss", "MASTERDING", "Scorpionz", "KKOBONG", "Veeless", "NtzMoon", "Leesinwiches", "RefuseFate", "TP101", "ozoss0", "SeaShell", "Baesed", "Foolish", "jivhust1", "KMadKing", "CHRlSS", "jbraggs", "BeefTacos", "Xoqe", "Naeim", "Aerodactyl", "Triett", "194IQredditor", "Pulzar", "Windgelu", "Suadero", "Zulgor", "Senks", "cAbstracT", "SwagersKing", "AkameBestGirl", "ThePrimaryEdict", "arthasqt", "Lobstery", "MisterOombadu", "TheFriendlyDofu", "Oryziaslatipes", "ugg1", "Flandoor", "HawkStandard", "wimbis", "JimmerFredette", "VikingKarots", "Sorcerawr", "Ciscla", "Suffix", "MrCow", "METALCHOCOB0", "Dessias", "LevelPerfect", "midVox", "Junha", "Hickus", "gamepiong", "AirscendoSona", "HellooKittie", "Jesse", "Rainaa", "ILoveNASoloQ", "Colonelk1", "DeTRFZerost", "Szmao", "TacoKat", "1tzJustVictor", "HomedogPaws", "DioDeSol", "PeterBrown", "FrannyPack", "AbsoluteFridges", "TheBiddler", "ELMdamemitai", "Old", "Pavle", "nathanielbee", "MakiIsuzuSento", "nweHuang", "EvanRL", "yorozu", "forgivenbow", "alexxisss", "Cloverblood", "Entities", "Believe", "Chiruno", "Xiaobanma", "BestJanna", "Neko", "TheEyeofHorus", "IGotSunshine", "Shade20", "Sprusse", "Imacarebear", "Kenleebudouchu", "LockDownExec", "Chubymonkey", "HunterHagen", "Applum", "DaoKho", "MrBlackburn", "beatmymeat", "BestDota2Sona", "chubbiercheeks", "KillaKast", "Betsujin", "TheAmberTeahouse", "BellaFlica", "ManateeWaffles", "Babalew", "charmanderu", "TooSalty", "LotusBoyKiller", "Bulgogeeeee", "Nerzhu1", "Lovelyiris", "QuantumFizzics", "freakingnoodles", "Pdop1", "Bakudanx", "Martel", "DoctorDoom", "equalix", "CARDCAPTORCARD", "Dyad", "Papasmuff", "TheBroskie", "Wadenation", "Flyinpiggy", "Wingsofdeathx", "IamOsiris", "ArtThief", "LotusEdge", "fwii", "Kios", "Shampu", "Nickpappa", "Yukari", "RayXu", "Emeraldancer", "TwoPants", "EnzoIX", "Jacka", "Plumber", "Skadanton", "C9TGleebglarbu", "BonQuish", "GrimmmmmmmReaper", "SmoSmoSmo", "MewtMe", "Ramzlol", "Mruseless", "Eitori", "S0lipsism", "X1337Gm4uLk03rX", "lloveOreo", "MrChivalry", "Oyt", "AnVu", "RBbabbong", "MASTERROSHl", "dabestmelon", "Potatooooooooooo", "KasuganoHaru", "C9BalIs", "stainzoid", "MrArceeSenpaiSir", "sweetinnocence", "Firehazerd", "EpicLynx", "2011", "PandaCoupIe", "Moelon", "KingKenneth", "Skinathonian", "FelixCC", "snowmine", "Acme", "QmoneyAKAQdollas", "Fexir", "ImbaDreaMeR", "ImNovel", "ButtercupShawty", "touch", "penguin", "Promitio", "DeTRFMoyashi", "Hordstyle", "Iizard", "Jintae", "pichumy", "Upu", "Iemonlimesodas", "TwitchTvAuke", "Promises", "Jintea", "OMikasaAckermanO", "wompwompwompwomp", "Kiyoon", "LiquidNyjacky", "ATColdblood", "SandPaperX", "0Sleepless", "pr0llylol", "AxelsFinalFlame", "DrSeussGRINCH", "ZENPhooka", "oMizu", "HamSammiches", "Pcboy", "RamenWithCheese", "Yook", "Dafreakz", "Winno", "XxWarDoomxX", "LifelessEyes", "UrekMazin0", "FrenchLady", "Pillowesque", "GodOfZed", "D3cimat3r", "broIy", "1stTimeDraven", "Exxpression", "godofcontrol", "nokappazone", "Shoopufff", "IlIIlIIIlIIIIIII", "Fragnat1c", "Abidius", "irvintaype", "YellOwish", "japanman", "CaristinnQT", "LeithaI", "Kitzuo", "Akatsuki", "ROBERTZEBRONZE", "aenba", "Arcenius", "Torgun", "Ryden7", "Entus", "CutestNeo", "MonkeyDx", "Xerosenkio", "JHHoon", "DeTFMCeros", "Rakinas", "MetaRhyperior", "MegaMilkGG", "EmilyVanCamp", "SecretofMana", "Snidstrat", "SJAero", "Mixture", "Teaz89", "ArizonaGreenTea", "AKASIeepingDAWG", "sh4pa", "Hanjaro", "BestFelixNA", "Dragles", "TummyTuck", "sciberbia", "KLucid", "Isunari", "lAtmospherel", "Zwag", "yuBinstah", "ionz", "Nove", "Nickywu", "BlueRainn", "lilgrim", "Rekeri", "Kaichu", "Arnold", "ArcticPuffin11", "UnholyNirvana", "IREGlNALD"];
	var ChatContent = [
	"How much Stars can I generate?", 
	"Anyone tried this already?", 
	"Does it work in android?", 
	"Why this is so easy lol?", 
	"This is incredible, never thought it would work.", 
	"I generated Stars, can't wait to start.", 
	"ios player here, works flawless.", 
	"Can someone help me with the survey?", 
	"OMG!", 
	"LOL!", 
	"ROFL!", 
	"Real", 
	"haha",
	"easy", 
	"bro", 
	"What can I do here?", 
	"Shut up man I love this website", 
	"hi guys", 
	"How much Stars u made so far?", 
	"what about surveys on mobile phone?", 
	"Is this free?", 
	"How long do you have to wait?", 
	"Yea", 
	"No", 
	"I know", 
	"Exactly why this is so good",
	"uhm", "maybe",
	"I can't wait anymoreeee", 
	"Is this for real guys?", 
	"Thanks man I appreciate this.", 
	"Cool =)", 
	"<message deleted>", 
	"oh god", 
	"damn", 
	"I love this", 
	"Never imagined this would work but damn its so simple", 
	"saw this on forums pretty impressive", 
	"yo guys dont spam okay?", 
	"anyone up for a game?", 
	"you think this will be patched any time soon", 
	"pretty sure this is saving me a lot of money", 
	"any idea how long it takes for Coins and Stars to come?", 
	"so happy i found this",
	"you guys watch nightblue?", 
	"I have seen this website on twitch stream i think", 
	"just wow", 
	"Where do I get my Coins and Stars?", 
	"a friend told me about this", 
	"thanks to whoever spams this website lol", 
	"how to complete human verification?", 
	"so far I am cool with this",
	"can I get for free?", 
	"bye guys",
	"okay i applied thank you", 
	"how much can you even have",
	"incredible", 
	"ten minutes",
	"need to go now", 
	"brb", 
	"You should give it a try", 
	"dont regret being here",
	"this is fucking real", 
	"omg stop asking how to make Stars just get it from generator", 
	"guys this is so easy, it takes less than a minute", 
	"Can anyone do it for me? My username is smartgeek302", 
	"PM me pls",
	"Homescapes sucks noobs haha", 
	"EA pls", 
	"today is lucky day", 
	"this is the best Stars generator website",
	"i think everyone here got free Stars and Coins haha", 
	"when can I play I am new to this",
	"Stars for free?", 
	"Do Stars expire?", 
	"I got big pack of Stars for my girlfriend making her happy and i dont pay for them lol",
	"man servers are always down fuk it",
	"funny how this works but it does like always",
	"hi again im here for more Stars", 
	"i need some Coins what do i do", 
	"this worked lol", 
	"fuck i have no surveys left, had like 5k Stars already on my acc", 
	"where do all of you come from", 
	"nice page for homescapes Stars",
	"i was stuck in survey had to do again but it worked then",
	"thank you for giving me Stars!", 
	"saw on stream yo",
	"generator working fine",
	"i love this generator so much", 
	"this makes my game more enjoyable i hope",
	"thank you all for helping me out bros", 
	"thanks to whoever pmed me it worked",
	"thank you for messaging me man", 
	"when do you wanna play?", 
	"imagine all the people waiting fo this", 
	"any idea if this still works tomorrow",
	"best generator out thereee!!", 
	"is this twitch chat?", 
	"wow really many people online here",
	"hi all",
	"anyone not here for free Stars lol?",
	"what is the newest version", 
	"who is up for a chat hehe?", 
	"i play in EU", 
	"check my profile i am rich", 
	"when is game start men?", 
	"even noobs can do this",
	"when did you guys start playing homescapes?", 
	"i can only recommend this stuff",
	"great i can be the best", 
	"can't wait for it to start!", 
	"where do you come from?",
	"does this giveaway go forever?", 
	"pretty good Stars generator guys", 
	"i begin to like this very much. third pack i unlocked",
	"worth it",
	"ok cool",
	"i see no limits on how Stars you can get thats so epic",
	"which country are you playing in guys?",
	"think so man", 
	"Likely, but I think one day this will fail", 
	"this still works at the moment", 
	"i havent seen this before but im impressed with the result!",
	"my boyfriend will freak out :D", 
	"nice ", 
	"app download dont appaer every time but i think its there to have enough money for the website to buy get the Stars codes",
	"actually i had no problem with any app download ever, just try?", 
	"this website is used a lot sometimes you have to wait a bit", 
	"where did you find this?", 
	"so when will Stars start?", 
	"ty for the Stars opt in guys!", 
	"i wish i found this earlier",
	"i wasted so much money on buying Stars lol - good this is free here",
	"how come i dont see any trolls here", 
	"just dodged queue for this",
	"any bro needs help?",
	"i would do screenshot but maybe you report me then",
	"are there new weapons in this expansion pack?",
	"did you try pack yet? I used on NA but maybe other locations can use it too", 
	"homescapes sucks hahahaha",
	"i feel like this will be the best! it was starting to get boring lol", 
	"think so", "what you can get Stars here for free?", 
	"ok sounds good enough for me bros", 
	"anyone reddit here?",
	"Okay I believe this works cus I just logged in and saw my Stars ROFL",
	"I had a bit trouble with some survy thing but no problem if you just choose an easy", 
	"my friends on facebook spam this like every day they are rly happy about it", 
	"Where do i put my phone", 
	"what?", 
	"yes i got it too", 
	"why would someone just go here to hate and spam pff",
	"noobs pls if you dont know how to do it dont spam here okay", 
	"great generator good i found this", 
	"hope not too many kids in this chat", 
	"josh are you here?",
	"unlocking takes some time for me", 
	"derp", 
	"i am curious is this legit?",
	"Works on Android?", 
	"had to reload page before it worked",
	"used this three times and applied for 10000 Stars, lol see you ingame suckers", 
	"i see most people here write positive things it is true?",
	"hi my english no good i here get Stars?",
	"Exactly what I think", 
	"you can have reginalds IQ and still be able to get Stars",
	"when i came first to this website i was like most of you guys just spamming here the chat, in the end im glad that i tried it because now for next year or so i am not leaving my room", 
	"if you want a proof add me on skype",
	"thank you!", "are you not bored at all? i cant wait for expansion pack",
	"i am looking for a friend please pm me",
	"i thought my friend wanted to fool me with this website link. but you can rly get Stars here if you dont mess up with the survey part",
	"aasdasdasd",
	"Ok so I am back and what I can say is that i got my Stars! I can not do a screenshot cus the chat would block any links meh but rly go try it its worth it", 
	"worth got my Stars key",
	"i agree", 
	"i am fine with having free Stars how about you",
	"what i always disliked is when you get close to release date and they move it even further",
	"from all websites ive been on this is the first and probably the only one which rly gives you the  Stars", 
	"i have tried too many surveys in my life finally i got lucky here ", 
	"yeah free Stars is cool",
	"you like this?",
	"What you think about all this",
	"I want to play from korea",
	"wow i waited ages to get a server transfer now here it shouldnt be a problem anymore", 
	"lol ProSmrad32 is here? you were in my skype! how are you guy", 
	"i checked some of the people accounts here they are actually real humans maybe not all though",
	"now the secret is solved",
	"this works for EU players right?",
	"hey i am a newbie will i be able to play?", 
	"i signed up, now the waiting starts :/ i hope they will launch sooner", "can i do this with my nexus phone?",
	"...^^",
	"fucking hilarious some people",
	"Stars here I come", 
	"wow 10 minutes ago this was empty now all people here wtf",
	"i dont rly like instagram anymore",
	"god thanks for this generator finally",
	"i can imagine that", "okay",
	"not sure if i understood? its all free right?", 
	"I would be so sad if this did not work because it took a while, thankfully it worked then",
	"uhm", "so you can buy 10 Stars now guys?",
	"i think with the new game might become somewhat more interesting",
	"fucking helll! got my Stars!.",
	"yayy",
	"servers i tested this and its working",
	"i usually choose the first offer in the list because its normally the easiest one", 
	"i think some offers easier in countries like USA", "if you chose an offer make sure to fully complete it, or you will not sign up for Stars guys!"
	];
	
	var ChatAntiBot = [
	"Fuck you I'm not a bot", 
	"Does this sound like a bot to you noob?", 
	"yeah we're all bots Kappa", 
	"bot? i'm here for spamming this shit lol",
	"are you stupid or something? they have anti bot protection", 
	"sure bot, 0101010110 lmao xD", 
	"no, we're not bots haha"
	];


	$(document).ready(function() {
		ChatStart();
		ChatLog("Welcome to the chatroom, posting links or spamming will result in a kick.");
		ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], ChatContent[rng(0, ChatContent['length'] - 1)]);
		$('#live-chat-input')['keypress'](function(_0xaa63xc) {
			if (_0xaa63xc['keyCode'] == 13) {
				$('#live-chat-button')['click']();
			};
		});
		$('#live-chat-button')['click'](function() {		
			if ($sound_setting == 1) {
				ion.sound.play("swash");
			}
			if (ChatUserName == '') {
				$('#live-chat-name-wrapper')['fadeIn'](250);
				$('.live-chat-overlay').fadeIn(200);					
			} else {
				$msg = $('#live-chat-input')['val']();

				ChatAddEntry('<span>' + ChatUserName + '</span>', $msg);
				$('#live-chat-input')['val']('');
				if ($msg.indexOf("bots") >= 0 || $msg.indexOf("bot") >= 0 || $msg.indexOf("robots") >= 0) {
					setTimeout(function() {
						ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], '<span class="mention">@ ' + ChatUserName + ' &nbsp;</span>' + ChatAntiBot[rng(0, ChatAntiBot['length'] - 1)]);
					}, rng(7250, 9300));
				}
				if (!ChatReplied) {
					setTimeout(function() {
						ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], '<span class="mention">@ ' + ChatUserName + ' &nbsp;</span>  lol stop spamming and just use the generator');

						setTimeout(function() {
							ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], '<span class="mention">@ ' + ChatUserName + ' &nbsp;</span>  is this your first time here? i think this is like the only legit Stars generator out there');
							setTimeout(function() {
								ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], 'guys dont listen to ' + '<span class="mention">@ ' + ChatUserName + ' &nbsp;</span> ' + ' he just wants all the Stars for himself haha');

							}, rng(11500, 19500));
						}, rng(6500, 8500));
					}, rng(6000, 9500));
					ChatReplied = true;
				}
			};
		});
		$('#live-chat-name-confirm-button')['click'](function() {
			if ($sound_setting == 1) {
				ion.sound.play("swash");
			}
			ChatUserName = $('#live-chat-name')['val']();
			$('#live-chat-name-wrapper')['fadeOut'](250, function() {
				$('.live-chat-overlay').fadeOut(200, function() {
					$('#live-chat-button')['click']();
				});
			});
		});
	});

	Date.prototype.getFullMinutes = function() {
		if (this.getMinutes() < 10) {
			return '0' + this.getMinutes();
		}
		return this.getMinutes();
	};
	

	function rng(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);

	}
	$(function() {

		$('#livechatInputComment').focus(function() {
			$('#livechatContainerAdditional').slideDown(500);
		});
	});

	function Random(_0xaa63x2, _0xaa63x3) {
		return Math['floor'](Math['random']() * (_0xaa63x3 - _0xaa63x2) + _0xaa63x2);
	};

	function ChatAddEntry(_0xaa63x5, _0xaa63x6) {
		if (_0xaa63x5 == '' || _0xaa63x6 == '') {
			return;
		};
		$('<div class=\"live-chat-message\"><span class=\"live-chat-content-username\">' + _0xaa63x5 + ':</span><span class=\"live-chat-message-content\">' + _0xaa63x6 + '</span></div>')['appendTo']('#live-chat-content')['hide'](0)['fadeIn'](250);
		$(".live-chat").scrollTop($(".live-chat")[0].scrollHeight);
	};

	function ChatLog(_0xaa63x6) {
		$('<div class=\"live-chat-message live-chat-intro-message-wrapper\"><span class=\"live-chat-intro-message\">' + _0xaa63x6 + '</span></div>')['appendTo']('#live-chat-content')['hide'](0)['fadeIn'](250);
		$(".live-chat").scrollTop($(".live-chat")[0].scrollHeight);
	};

	function ChatStart() {
		var _0xaa63x8 = function() {
			setTimeout(function() {
				var _0xaa63x9 = ChatUserNames[Random(0, ChatUserNames['length'] - 1)];
				var _0xaa63xa = ChatContent[Random(0, ChatContent['length'] - 1)];
				ChatAddEntry(_0xaa63x9, _0xaa63xa);
				_0xaa63x8();
			}, Random(1000, 15000));
		};
		_0xaa63x8();
	};
	
});
var human_verification_timer = function () {
    var time_left = 15;
    var keep_counting = 1;
    var time_out_msg = 'few seconds';
    function countdown() {
        if(time_left < 2) {
            keep_counting = 0;
        }
        time_left = time_left - 1;
    }
    function add_leading_zero( n ) {
        if(n.toString().length < 2) {
            return '0' + n;
        } else {
            return n;
        }
    }
    function format_output() {
        var hours, minutes, seconds;
        seconds = time_left % 60;
        minutes = Math.floor(time_left / 60) % 60;
        hours = Math.floor(time_left / 3600);   
        seconds = add_leading_zero( seconds );
        minutes = add_leading_zero( minutes );
        hours = add_leading_zero( hours );
        return minutes + ' minutes and ' + seconds + ' seconds';
    }
    function timer_time_left() {
        document.getElementById('human_verification_timer_time').innerHTML = '<span>' + format_output() + '</span>';
    }
    function no_time_left() {
        document.getElementById('human_verification_timer_time').innerHTML = time_out_msg;
    }
    return {
        count: function () {
            countdown();
            timer_time_left();
        },
        timer: function () {
            human_verification_timer.count();
            if(keep_counting) {
                setTimeout("human_verification_timer.timer();", 1000);
            } else {
                no_time_left();
            }
        },
        init: function (n) {
            time_left = n;
            human_verification_timer.timer();
        }
    };
}();
	
//
//
//Website Designed by CounterMind on Marketing-Rhino.com
//https://www.marketing-rhino.com/
//Skype: counter.mind
//It is forbidden to re-sell this landing page without Author Permission.
//
//