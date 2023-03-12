$(document).ready(function() {

    var windowsize = $(window).width();
    var $selected_pc = '';
    var $selected_pg = '';
    var $selected_pe = '';
    var $account_connected = false;
    var textbox = document.getElementById("usernameInput");
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    $('.gems-select').click(function() {
        if ($('.gen-area').hasClass('area-disabled')) {
            sweetAlert("Error", "You need to connect your account first.", "error");
        } else {
            fixPCbox($(this));
        }
    });
    $('.gold-select').click(function() {
        if ($('.gen-area').hasClass('area-disabled')) {
            sweetAlert("Error", "You need to connect your account first.", "error");
        } else {
            fixPCbox1($(this));
        }
    });
    $('.resource-select').click(function() {
        if ($('.gen-area').hasClass('area-disabled')) {
            sweetAlert("Error", "You need to connect your account first.", "error");
        } else {
            fixPCbox2($(this));
        }
    });

    $('.connect-button').click(function() {
        if ($account_connected == false) {
            //put this after the 3 below for emails " && usernameInput.value.match(mailformat) "
            if ($('#usernameInput').val() != '' && usernameInput.value.length >= 3) {
                if ($('#serverInput').val() != '') {
                    $('#m-accname').text($('#usernameInput').val());
                    $('#m-server').text($('#serverInput').val());
                    $('#m-region').text($('#regionInput').val());
                    $.magnificPopup.open({
                        items: {
                            src: '#loading_modal',
                        },
                        type: 'inline',
                        preloader: false,
                        modal: true,
                        callbacks: {
                            open: function() {},
                            close: function() {
                                console.log('closed');
                                $account_connected = true;
                                $('.account-connet-area').addClass('account-disabled');
                                $('#user-accname').text($('#usernameInput').val());
                                $('.account-connected').removeClass('acc-disabled');
                                $('.gen-area').removeClass('area-disabled');
                                $('.account-connet-area').addClass('area-disabled');
                                $('#usernameInput, #serverInput, #regionInput, #aesInput').attr('disabled', 'true');
                            }
                        }
                    });
                    progress_slow_connect(function() {
                        console.log('progress_done');
                        $.magnificPopup.close();
                    });
                } else {
                    sweetAlert("Error", "Please select your Platform.", "error");
                }
            } else {
                sweetAlert("Error", "Please enter your correct Username.", "error");
                // Change this to say email if using emails
            }
        } else {
            sweetAlert("Error", "You are already connected.", "error");
        }
    });

    $('.generate-button').click(function() {
        if ($('.gen-area').hasClass('area-disabled') || $account_connected == false) {
            sweetAlert("Error", "You need to connect your account first.", "error");
        } else {
            $.magnificPopup.open({
                items: {
                    src: '#gen_modal',
                },
                type: 'inline',
                preloader: false,
                modal: true,
                callbacks: {
                    open: function() {
                        loading_step();
                    }
                }
            });
        }

    });

    function loading_step() {
        var $message_span = $('.gen-loading-msg');
        $message_span.text('Performing User Authentication...');
        progress_med(function() {
            $message_span.text('Encrypting communication with server...');
            progress_med(function() {
                $message_span.text('Generating server request...');
                progress_med(function() {
                    $message_span.text('Retrieving current server script...');
                    progress_fast(function() {
                        $message_span.text('Preparing packets to be sent...');
                        progress_fast(function() {
                            $message_span.text('Sending request to Queue...');
                            progress_med(function() {
                                $('.generator-loading').fadeOut('slow', function() {
                                    $('.generator-verification').fadeIn('slow', function() {
                                        console.log('human_verification');
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    }

    function progress_slow(callback) {
        var $temp_percentage = 0;
        var $pbar_div = $('.g-progressbar');
        var $p_array = [5, 10, 15];
        $pbar_div.css('width', '0%');
        var interval_timer = setInterval(function() {
            if ($temp_percentage != 100) {
                $temp_percentage = $temp_percentage + 10;
                $pbar_div.css('width', $temp_percentage + '%');
            } else {
                callback();
                clearInterval(interval_timer);
            }
        }, Math.floor((Math.random() * 1200) + 600));
    }

    function progress_med(callback) {
        var $temp_percentage = 0;
        var $pbar_div = $('.g-progressbar');
        var $p_array = [5, 10, 15];
        $pbar_div.css('width', '0%');
        var interval_timer = setInterval(function() {
            if ($temp_percentage != 100) {
                $temp_percentage = $temp_percentage + 10;
                $pbar_div.css('width', $temp_percentage + '%');
            } else {
                callback();
                clearInterval(interval_timer);
            }
        }, Math.floor((Math.random() * 600) + 250));
    }

    function progress_fast(callback) {
        var $temp_percentage = 0;
        var $pbar_div = $('.g-progressbar');
        var $p_array = [5, 10, 15];
        $pbar_div.css('width', '0%');
        var interval_timer = setInterval(function() {
            if ($temp_percentage != 100) {
                $temp_percentage = $temp_percentage + 10;
                $pbar_div.css('width', $temp_percentage + '%');
            } else {
                callback();
                clearInterval(interval_timer);
            }
        }, Math.floor((Math.random() * 350) + 100));
    }

    function progress_slow_connect(callback) {
        var $temp_percentage = 0;
        var $pbar_div = $('.g-progressbar');
        $pbar_div.css('width', '0%');
        var interval_timer = setInterval(function() {
            if ($temp_percentage == 0) {
                $temp_percentage = 20;
                $pbar_div.css('width', $temp_percentage + '%')
            } else if ($temp_percentage == 20) {
                $temp_percentage = 35;
                $pbar_div.css('width', $temp_percentage + '%');
            } else if ($temp_percentage == 35) {
                $temp_percentage = 65;
                $pbar_div.css('width', $temp_percentage + '%');
            } else if ($temp_percentage == 65) {
                $temp_percentage = 75;
                $pbar_div.css('width', $temp_percentage + '%');
            } else if ($temp_percentage == 75) {
                $temp_percentage = 85;
                $pbar_div.css('width', $temp_percentage + '%');
            } else if ($temp_percentage == 85) {
                $temp_percentage = 89;
                $pbar_div.css('width', $temp_percentage + '%');
            } else if ($temp_percentage == 89) {
                $temp_percentage = 100;
                $pbar_div.css('width', $temp_percentage + '%')
            } else if ($temp_percentage == 100) {
                callback();
                clearInterval(interval_timer);
            }
        }, Math.floor((Math.random() * 1200) + 600));
    }

    function fixPCbox($parent_class) {
        resetPCBoxes();
        if ($parent_class.hasClass('pc-1')) {
            $selected_pc = 'PC_2500';
        }
        if ($parent_class.hasClass('pc-2')) {
            $selected_pc = 'PC_5200';
        }
        if ($parent_class.hasClass('pc-3')) {
            $selected_pc = 'PC_14500';
        }
        $parent_class.addClass('activated');
    }

    function resetPCBoxes() {
        var $pc_list = $('.pc-1, .pc-2, .pc-3, .pc-4, .pc-5');
        if ($pc_list.hasClass('activated')) {
            $pc_list.removeClass('activated');
        }
    }

    function fixPCbox1($parent_class1) {
        resetPCBoxes1();
        if ($parent_class1.hasClass('pg-1')) {
            $selected_pg = 'PG_2500';
        }
        if ($parent_class1.hasClass('pg-2')) {
            $selected_pg = 'PG_5200';
        }
        if ($parent_class1.hasClass('pg-3')) {
            $selected_pg = 'PG_14500';
        }
        $parent_class1.addClass('activated');
    }

    function resetPCBoxes1() {
        var $pg_list = $('.pg-1, .pg-2, .pg-3, .pg-4, .pg-5');
        if ($pg_list.hasClass('activated')) {
            $pg_list.removeClass('activated');
        }
    }

    function fixPCbox2($parent_class2) {
        resetPCBoxes2();
        if ($parent_class2.hasClass('pe-1')) {
            $selected_pe = 'PG_2500';
        }
        if ($parent_class2.hasClass('pe-2')) {
            $selected_pe = 'PG_5200';
        }
        if ($parent_class2.hasClass('pe-3')) {
            $selected_pe = 'PG_14500';
        }
        $parent_class2.addClass('activated');
    }

    function resetPCBoxes2() {
        var $pe_list = $('.pe-1, .pe-2, .pe-3, .pe-4, .pe-5');
        if ($pe_list.hasClass('activated')) {
            $pe_list.removeClass('activated');
        }
    }
});

$('.f-s').fancySelect();
$('.parallaxme').parallax("50%", 0.5);
$('.makemesameheight1').equalHeights();
$('.makemesameheight2').equalHeights();
$('.makemesameheight3').equalHeights();
$('.makemesameheight4').equalHeights();
$('.popup-tos').magnificPopup({
    type: 'inline',
    preloader: false
});
$('.popup-contact').magnificPopup({
    type: 'inline',
    preloader: false
});
$('.popup-pp').magnificPopup({
    type: 'inline',
    preloader: false
});
$('.scroll-me').bind("click", function(e) {
    var target = $(this).attr("href"); // Get the target element
    var scrollToPosition = $(target).offset().top; // Position to scroll to
    $('html /* For FF & IE */,body /* For Chrome */').animate({
        'scrollTop': scrollToPosition
    }, 500, function(target) {
        window.location.hash = target;
    });
    e.preventDefault();
});

var X00Gems = ['<img src="img/extra-lives.png" alt="" class="cr-gem-icon" /> 25 Extra Lives', '<img src="img/extra-lives.png" alt="" class="cr-gem-icon" /> 125 Extra Lives', '<img src="img/extra-lives.png" alt="" class="cr-gem-icon" /> 225 Extra Lives', '<img src="img/extra-lives.png" alt="" class="cr-gem-icon" /> 325 Extra Lives', '<img src="img/extra-lives.png" alt="" class="cr-gem-icon" /> 425 Extra Lives', '<img src="img/extra-lives.png" alt="" class="cr-gem-icon" /> 525 Extra Lives', '<img src="img/extra-lives.png" alt="" class="cr-gem-icon" /> 625 Extra Lives', '<img src="img/extra-lives.png" alt="" class="cr-gem-icon" /> 725 Extra Lives', '<img src="img/extra-lives.png" alt="" class="cr-gem-icon" /> 825 Extra Lives', '<img src="img/extra-lives.png" alt="" class="cr-gem-icon" /> 925 Extra Lives', '<img src="img/extra-lives.png" alt="" class="cr-gem-icon" /> 50 Extra Lives', '<img src="img/extra-lives.png" alt="" class="cr-gem-icon" /> 150 Extra Lives', '<img src="img/extra-lives.png" alt="" class="cr-gem-icon" /> 250 Extra Lives', '<img src="img/extra-lives.png" alt="" class="cr-gem-icon" /> 350 Extra Lives', '<img src="img/extra-lives.png" alt="" class="cr-gem-icon" /> 450 Extra Lives', '<img src="img/extra-lives.png" alt="" class="cr-gem-icon" /> 550 Extra Lives', '<img src="img/extra-lives.png" alt="" class="cr-gem-icon" /> 650 Extra Lives', '<img src="img/extra-lives.png" alt="" class="cr-gem-icon" /> 750 Extra Lives', '<img src="img/extra-lives.png" alt="" class="cr-gem-icon" /> 850 Extra Lives', '<img src="img/extra-lives.png" alt="" class="cr-gem-icon" /> 950 Extra Lives', '<img src="img/extra-lives.png" alt="" class="cr-gem-icon" /> 75 Extra Lives', '<img src="img/extra-lives.png" alt="" class="cr-gem-icon" /> 175 Extra Lives', '<img src="img/extra-lives.png" alt="" class="cr-gem-icon" /> 275 Extra Lives', '<img src="img/extra-lives.png" alt="" class="cr-gem-icon" /> 375 Extra Lives', '<img src="img/extra-lives.png" alt="" class="cr-gem-icon" /> 475 Extra Lives', '<img src="img/extra-lives.png" alt="" class="cr-gem-icon" /> 575 Extra Lives', '<img src="img/extra-lives.png" alt="" class="cr-gem-icon" /> 675 Extra Lives', '<img src="img/extra-lives.png" alt="" class="cr-gem-icon" /> 775 Extra Lives', '<img src="img/extra-lives.png" alt="" class="cr-gem-icon" /> 875 Extra Lives', '<img src="img/extra-lives.png" alt="" class="cr-gem-icon" /> 975 Extra Lives', '<img src="img/extra-lives.png" alt="" class="cr-gem-icon" /> 100 Extra Lives', '<img src="img/extra-lives.png" alt="" class="cr-gem-icon" /> 200 Extra Lives', '<img src="img/extra-lives.png" alt="" class="cr-gem-icon" /> 300 Extra Lives', '<img src="img/extra-lives.png" alt="" class="cr-gem-icon" /> 400 Extra Lives', '<img src="img/extra-lives.png" alt="" class="cr-gem-icon" /> 500 Extra Lives', '<img src="img/extra-lives.png" alt="" class="cr-gem-icon" /> 600 Extra Lives', '<img src="img/extra-lives.png" alt="" class="cr-gem-icon" /> 700 Extra Lives', '<img src="img/extra-lives.png" alt="" class="cr-gem-icon" /> 800 Extra Lives', '<img src="img/extra-lives.png" alt="" class="cr-gem-icon" /> 900 Extra Lives', '<img src="img/extra-lives.png" alt="" class="cr-gem-icon" /> 1000 Extra Lives', '<img src="img/extra-moves.png" alt="" class="cr-gem-icon" /> 25 Extra Moves', '<img src="img/extra-moves.png" alt="" class="cr-gem-icon" /> 125 Extra Moves', '<img src="img/extra-moves.png" alt="" class="cr-gem-icon" /> 225 Extra Moves', '<img src="img/extra-moves.png" alt="" class="cr-gem-icon" /> 325 Extra Moves', '<img src="img/extra-moves.png" alt="" class="cr-gem-icon" /> 425 Extra Moves', '<img src="img/extra-moves.png" alt="" class="cr-gem-icon" /> 525 Extra Moves', '<img src="img/extra-moves.png" alt="" class="cr-gem-icon" /> 625 Extra Moves', '<img src="img/extra-moves.png" alt="" class="cr-gem-icon" /> 725 Extra Moves', '<img src="img/extra-moves.png" alt="" class="cr-gem-icon" /> 825 Extra Moves', '<img src="img/extra-moves.png" alt="" class="cr-gem-icon" /> 925 Extra Moves', '<img src="img/extra-moves.png" alt="" class="cr-gem-icon" /> 50 Extra Moves', '<img src="img/extra-moves.png" alt="" class="cr-gem-icon" /> 150 Extra Moves', '<img src="img/extra-moves.png" alt="" class="cr-gem-icon" /> 250 Extra Moves', '<img src="img/extra-moves.png" alt="" class="cr-gem-icon" /> 350 Extra Moves', '<img src="img/extra-moves.png" alt="" class="cr-gem-icon" /> 450 Extra Moves', '<img src="img/extra-moves.png" alt="" class="cr-gem-icon" /> 550 Extra Moves', '<img src="img/extra-moves.png" alt="" class="cr-gem-icon" /> 650 Extra Moves', '<img src="img/extra-moves.png" alt="" class="cr-gem-icon" /> 750 Extra Moves', '<img src="img/extra-moves.png" alt="" class="cr-gem-icon" /> 850 Extra Moves', '<img src="img/extra-moves.png" alt="" class="cr-gem-icon" /> 950 Extra Moves', '<img src="img/extra-moves.png" alt="" class="cr-gem-icon" /> 75 Extra Moves', '<img src="img/extra-moves.png" alt="" class="cr-gem-icon" /> 175 Extra Moves', '<img src="img/extra-moves.png" alt="" class="cr-gem-icon" /> 275 Extra Moves', '<img src="img/extra-moves.png" alt="" class="cr-gem-icon" /> 375 Extra Moves', '<img src="img/extra-moves.png" alt="" class="cr-gem-icon" /> 475 Extra Moves', '<img src="img/extra-moves.png" alt="" class="cr-gem-icon" /> 575 Extra Moves', '<img src="img/extra-moves.png" alt="" class="cr-gem-icon" /> 675 Extra Moves', '<img src="img/extra-moves.png" alt="" class="cr-gem-icon" /> 775 Extra Moves', '<img src="img/extra-moves.png" alt="" class="cr-gem-icon" /> 875 Extra Moves', '<img src="img/extra-moves.png" alt="" class="cr-gem-icon" /> 975 Extra Moves', '<img src="img/extra-moves.png" alt="" class="cr-gem-icon" /> 100 Extra Moves', '<img src="img/extra-moves.png" alt="" class="cr-gem-icon" /> 200 Extra Moves', '<img src="img/extra-moves.png" alt="" class="cr-gem-icon" /> 300 Extra Moves', '<img src="img/extra-moves.png" alt="" class="cr-gem-icon" /> 400 Extra Moves', '<img src="img/extra-moves.png" alt="" class="cr-gem-icon" /> 500 Extra Moves', '<img src="img/extra-moves.png" alt="" class="cr-gem-icon" /> 600 Extra Moves', '<img src="img/extra-moves.png" alt="" class="cr-gem-icon" /> 700 Extra Moves', '<img src="img/extra-moves.png" alt="" class="cr-gem-icon" /> 800 Extra Moves', '<img src="img/extra-moves.png" alt="" class="cr-gem-icon" /> 900 Extra Moves', '<img src="img/extra-moves.png" alt="" class="cr-gem-icon" /> 1000 Extra Moves', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 700 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 300 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 10,000 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 9,900 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 9,800 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 9,700 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 9,600 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 9,500 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 9,400 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 9,300 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 9,200 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 9,100 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 9,000 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 8,800 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 8,900 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 8,700 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 8,500 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 8,600 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 8,100 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 8,200 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 7,700 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 7,500 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 7,300 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 7,100 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 7,000 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 6,800 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 6,600 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 6,500 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 6,400 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 6,200 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 6,300 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 6,100 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 6,000 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 5,900 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 5,800 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 5,700 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 5,600 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 5,500 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 5,400 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 5,300 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 5,200 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 5,100 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 5,000 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 4,700 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 4,900 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 4,800 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 4,500 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 4,400 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 4,300 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 4,100 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 4,000 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 4,200 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 3,100 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 3,500 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 3,600 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 400 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 3,100 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 3,000 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 2,800 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 2,300 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 2,100 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 1,700 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 1,900 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 1,200 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 1,100 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 800 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 6,900 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 4,200 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 5,800 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 1,600 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 900 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 500 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 100 Gold Bars', '<img src="img/gold-bars.png" alt="" class="cr-gem-icon" /> 200 Gold Bars'];
var X00CF = ['../cf/Korea.png', '../cf/Japan.png', '../cf/Finland.png', '../cf/Denmark.png', '../cf/UK.png', '../cf/US.png', '../cf/Germany.png', '../cf/Netherlands.png', '../cf/Sweden.png', '../cf/Australia.png', '../cf/France.png', '../cf/Austria.png', '../cf/Greece.png', '../cf/Hungary.png', '../cf/Ireland.png', '../cf/Italy.png', '../cf/Kuwait.png', '../cf/Mexico.png', '../cf/Pakistan.png', '../cf/Peru.png', '../cf/Poland.png', '../cf/Turkey.png', '../cf/UnitedArabEmirates.png'];

function X00Random(X00Minimum, X00Maximum) {
    return Math.floor((Math.random() * X00Maximum) + X00Minimum);
}

var X00ActivityIntervalSeconds;
var X00ActivitySecondsCurrent = 0;

function X00ActivitiesAdd() {
    clearInterval(X00ActivityIntervalSeconds);
    X00ActivitySecondsCurrent = 0;
    $('#X00Activities div').remove();
    $('<div style="text-align: center;"><h3><img src="' + X00CF[X00Random(0, X00CF.length)] + '" alt="Country Flag" class="country-flag" /><span class="subheader ipsubheader">IP: ' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '</span> <span class="subheader">has generated</span> <span class="subheader recgenvalue" style="font-weight: bold; color: #ffcc05;">' + X00Gems[X00Random(0, X00Gems.length)] + ' </span> <span class="subheader"><span id="X00ActivitySeconds" class="ipsubheader"> 0s</span> ago</span></div>').appendTo('#X00Activities').hide().fadeIn(250);
    X00ActivityIntervalSeconds = setInterval(function() {
        X00ActivitySecondsCurrent++;
        $('#X00ActivitySeconds').html(X00ActivitySecondsCurrent + 's');
    }, 1000);
}

$(function() {

    X00ActivitiesAdd();
    var X00Activities = function() {
        setTimeout(function() {
            X00ActivitiesAdd();
            X00Activities();
        }, X00Random(1000, 25000));
    };
    X00Activities();


});


$(".follow-scroll").hide();
$(window).scroll(function() {
    console.log($(window).scrollTop());
    if ($(window).scrollTop() > 500) {
        $(".follow-scroll").fadeIn();
    } else {
        $(".follow-scroll").fadeOut();
    }

});


// online stats
var ee;
var eenum2 = Math.floor((Math.random() * 10) - (Math.random() * 15)) + 471;

function dis_num3() {
    document.getElementById("online2").innerHTML = eenum2;
    var randWay = Math.floor(Math.random() * 10 + 1);
    if (randWay <= 5) {
        eenum2 = eenum2 + Math.floor(Math.random() * 10 + 1);;
    } else {
        eenum2 = eenum2 - Math.floor(Math.random() * 10 + 1);;
    }
    ee = setTimeout("dis_num3()", 5000);
}
dis_num3();

var ChatReplied = false;
var ChatDate = new Date();
var ChatUserName = '';
var ChatUserNames = ["BOOP", "whyamihere", "candymycrush", "SweetTooth", "bubblegum", "FBlivesRequests", "extralives", "freegoldbars", "candygal", "candyguy", "sagaNdeeznuts", "CandyCrushAddict", "sugarRUSH99", "lolipop", "jawbreaker", "kingdevlol", "candyyy", "candyman5", "KandyKrush", "candyKING", "SugarPine7", "AryaStarksFaces", "Geoffery", "JonSnow", "TooManyBatmen", "HeIsBatman", "NoIamBatman", "iAmBatman", "Harambe", "PostMaPhone", "Snacky", "ShroudsChair", "MeMeBigBoy", "Kvothe", "ActualCancer", "DabOnTheH8rs", "EmjoiMovieBestMovie", "YourWelcome", "caihwja", "AntsInMyEyesJohnson", "MrPoopyButthole", "StanMarsh", "WhatIsLove", "SquareEarther", "RoundEarther", "FlatEarther", "ChattyCathy", "EnterUsername", "whiqojaojo", "snahk", "ThatOneGuy", "SmallPea", "EDupez", "EnglandIsMyCity", "GoSquanchYourself", "PickleRick34", "NoobNoob", "PickleRick", "TurtletheCat", "Pobelter", "EugeneJPark", "Doublelift", "C9Sneaky", "lamBjerg", "Popobelterold", "HOGEE", "WizFujiiN", "HotGuy6Pack", "dawoofsclaw", "TiPApollo", "Soeren", "FSNChunkyfresh", "Ariana22ROO", "Waker", "Podu", "C9Hard", "Shiphtur", "HOoZy", "Chapanya", "Dyrus", "Entranced", "WildTurtle", "WildTurtl", "lntense", "Hauntzer", "LiquidFeniX", "THExJOHNxCENA555", "Imaqtpie", "ZionSpartan", "JJackstar", "Ekkocat", "LiquidKEITH", "mldkingking", "Loopercorn", "TiPMa", "Ohhhq", "ninjamaster69xxx", "CaliTrlolz8", "ice", "C9Meteos", "JannaMechanics", "KEITHMCBRIEF", "dunamis", "Quasmire", "scorro", "LiquidQuas", "GVHauntzer", "PengYiliang", "Casely", "wahoolahoola", "godisfeng66666", "Zbuum", "ilovefatdongs", "TransIogic", "LemonBoy", "Link", "Chipotlehunter", "TDKkina", "DJTrance", "Duocek", "Hate", "KonKwon", "Nihillmatic", "Zaryab", "intero", "Biofrost", "LongCat4", "CSTJesiz", "GVKeane", "TiPyoondog", "RedoutabIe", "LiquidXpecial", "JayJ", "GVCop", "iKeNNyu", "C9Hai", "FunFrock", "CLGLourlo", "evertan", "Chaullenger", "Aniratak", "PorpoiseDeluxe", "Isuyu", "CLGDandyLite", "Arcsecond", "BloodWater", "Jynthe", "Sickoscott", "RickyTang", "DaBox", "ALLRekklesvNA", "Hoofspark", "DuBuKiD", "AdrianMa", "GuriAndGunji", "stuntopia", "RyanChoi", "AiShiTeru", "FSNMeMer", "J0kes", "C9Balls", "C9SoIo", "yungmulahBABY", "FeelTheLove", "dawolfsclaw", "BaamSouma", "NMEotter", "stuntopolis", "llRomell", "GoJeongPa", "p0z", "Trisexual", "MarkPassion", "Seeiya", "AAltec", "C9LemonNation", "maplestreet8", "goldenglue", "MegaZero", "VIPEEEEEEEEEEEER", "Panchie", "fabbbyyy", "halo3madsniper", "iLucent", "1k2o1ko12ko12ko2", "Bokbokimacat", "VANISHINGDRAG0N", "LiquidPiglet", "playmkngsupport", "Gambler", "Gaggiano", "JJayel", "JoopsaKid", "1brayle", "Azingy", "Kebrex", "WahzYan", "willxo", "TailsLoL", "darksnipa47", "Thyak", "JimmyTalon", "vane", "sooyoung", "lalaisland", "Lourlo", "Sunar", "PlayWithAnimals", "scarra", "HUYAGorilIA", "Lock0nStratos", "aphromoo", "KMadClown", "ChaIlengerAhri", "YY90001PiKaChu", "Thefatkidfromup", "ahqwe5tdoor", "Nintenpai", "JustJayce", "toontown", "BasedYoona", "GoldStars", "ExecutionerKen", "nicemoves", "InvertedComposer", "LiquidIWD", "Stan007", "woshishabi", "JukeKing", "xPecake", "BlGHUEVOS", "Plun", "KingCobra", "TDKSmoothie", "TSMLustboy", "C10Meteos", "lllllllllllllIII", "ohdaughter", "PekinWoof", "BrandonFtw8", "m2sticc", "DaiJurJur", "DontMashMe", "CaseOpened", "otte", "wutroletoplay", "Thurtle", "Dodo8", "Frostalicious", "bobqinXD", "MrCarter", "Hellkey", "Chimonaa1", "DaBoxII", "GVVicious", "Jummychu", "PAlNLESS", "LiLBunnyFuFuu", "Lukeeeeeeeeee", "Lattman", "Daserer", "AlliancePatrick", "Lionsexual", "St1xxay", "Kojolika", "CSTCris", "KojotheCat", "StellaLoussier", "Gleebglarbu", "Altrum", "RiotMeyeA", "Rule18", "mandatorycloud", "Tritan", "LiquidDominate", "cidadedecack", "RoA", "BillyBoss", "xPepastel", "TaketheDraw", "ST2g", "Migipooop", "dKiWiKid", "NMEflareszx", "Gundamu", "imp", "DDABONG", "Daydreamin", "Nightlie", "MRHIGHLIGHTREEL", "Shweeb", "JinMori", "Tailsz", "Bischu", "CRBRakin", "Chaox", "Grigne", "LogicalDan", "DAKular", "DifferentSword", "Geranimoo", "InnoX", "FishingforUrf", "FluffyKittens206", "ImJinAh", "CloudNguyen", "moonway", "whoishe", "TiensiNoAkuma", "Ethil", "nothinghere", "SuperMetroid", "hiimgosu", "Mammon", "BGJessicaJung", "coBBz", "waitingforu", "LearningToPIay", "YiOwO", "heavenTime", "AnDa", "WakaWaka", "hashinshin", "TDKKez", "MariaCreveling", "Cypress", "YahooDotCom", "Phanimal", "Aror", "RFLegendary", "BenNguyen", "AHHHHHHHHH", "Linsanityy", "Valkrin", "Gate", "Allorim", "Johnp0t", "Superrrman", "Laughing", "AKAPapaChau", "denoshuresK", "Anthony", "Nightblue3", "Aranium", "Pallione", "BamfDotaPlayer", "FakerSama", "xiaolan", "Sweept", "HooManDu", "XiaoWeiXiao", "HctMike", "Revenge", "Apauloh", "latebloomer", "CRBFyre", "MongolWarrior", "Hiphophammer", "CoachLFProTeam", "hiimria", "Jackoo", "Saskio", "DadeFakerPawn", "GVStvicious", "NeonSurge", "NMEBodydrop", "MatLifeTriHard", "PantsareDragon", "GinormousNoob", "IMbz", "miqo", "VoyboyCARRY", "Hakuho", "Hexadecimal", "themassacre8", "Ayr", "SeaHorsee", "F0rtissimo", "GamerXz", "Remie", "Soghp", "Raimazz", "Ultimazero", "bigfatlp", "NMETrashyy", "C9LOD", "Popuh", "SAGASUPVEIGM", "Iamagoodboy", "TrollerDog", "Descraton", "LiquidInoriTV", "MiniMe", "IlIlIIIlIIIIlIII", "Shweebie", "KatLissEverdeen", "PoppersOP", "B1GKr1T", "DGB", "stephyscute2", "TEESEMM", "Cyprincess", "baohando", "urbutts", "maplestreeTT", "jamee", "SawitonReddit", "VeryBitter", "BenignSentinel", "MrJuvel", "Denny", "LeeGuitarStringa", "DKrupt", "LAGEhsher", "eLLinOiSe", "MochiBalls", "Sonnynot6", "ixou", "Taeyawn", "Dezx", "7hThintoN", "BeautifulKorean", "VwSTeesum", "TLIWDominate", "Vsepr", "ktSmurf", "Vultix", "Soredemo", "ROBERTxLEE", "AnnieBot", "aksn1per", "IamFearless", "FrostyLights", "SoYung", "Tuoooor", "Polx", "Agolite", "CloudWater", "Delta", "LAGOrbwalk", "sexycan", "SimonHawkes", "Rohammers", "NMEInnoX", "ChineseJester", "IAmDoughboy", "Cytosine", "Vanxer", "SDiana2", "Araya", "TheItalianOne", "F1Flow", "Kazahana", "Malajukii", "xiaoweiba", "JoshMabrey", "shinymew", "Event", "freelancer18", "ZnipetheDog", "hiitsviper", "HappyBirfdizzay", "Abou222", "Gir1shot2diamond", "KiNGNidhogg", "PurpleFloyd", "Rathul", "Kwaku", "BeachedWhaIe", "14h", "Xpecial", "CLGThink", "Aiciel", "oerh", "butttpounder", "TalkPIayLove", "jordank", "TwistyJuker", "MeganFoxisGG", "NiHaoDyLan", "TallerACE", "Doomtrobo", "Wardrium", "TwtchTviLoveSezu", "Westrice", "iMysterious", "BennyHung", "EnmaDaiO", "xTc4", "FallenBandit", "RumbIeMidGG", "deft1", "GochuHunter", "XxRobvanxX", "DuoChiDianShi", "coLBubbadub", "LeBulbe", "TanHat", "Dusty", "Jibberwackey", "Tallwhitebro", "llllllllllllIIII", "LilBuu", "Diamond", "cesuna", "BigolRon", "xSojin", "Gh3ttoWatermelon", "KingofMemes", "111094Jrh", "bive", "Yammy", "FasScriptor", "Docxm", "GVBunnyFuFuu", "Alphabetical", "Liquidzig", "YouHadNoDream", "TINYHUEVOS", "Sheepx", "GangstaSwerve", "LeBulbetier", "amandagugu", "Rushmore", "AnnieCHastur", "OverlordForte", "Muffintopper66", "Kazura", "zetsuen", "wozhixiangyin", "CaptainNuke", "alextheman", "Seongmin", "Working", "kyaasenpaix3", "gurminder", "VwSKhoachitizer", "TGZ", "KrucifixKricc", "Kevnn", "Academiic", "ArianaLovato", "Elemia", "CLGDeftsu", "XerbeK", "CeIestic", "RedEyeAkame", "Kerpal", "xFSNSaber", "MakNooN", "Hcore", "MrGamer", "zeralf", "Fenixlol", "Indivisible", "SHOWMETHEMONEY", "Adorations", "Niqhtmarex", "RambointheJungle", "Iucid", "iOddOrange", "Uncover", "DD666666", "r0b0cop", "VictoricaDebloiz", "Gleebglarb", "EmperorSteeleye", "SillyAdam", "WWWWWWWWWWWWWWMW", "tempname456543", "FeedOn", "iJesus69", "OmegaB", "Riftcrawl", "Xandertrax", "Krymer", "TwistedSun", "DeTRFShinmori", "RiceFox", "iKoogar", "Mizuji", "White", "zgerman", "FORG1VENliftlift", "sakurafIowers", "xSaury", "PiPiPig", "Pyrr", "TheCptAmerica", "NtzNasty", "SlowlyDriftnAway", "cre4tive", "LAGGoldenShiv", "FSNDLuffy", "NintendudeX", "duliniul", "Cybody", "Odete49", "TFBlade", "Platoon", "CopyCat", "BarbecueRibs", "TitanDweevil", "HeroesOfTheStorm", "JRT94", "RedBerrrys", "Rockblood", "YoloOno", "BalmungLFT", "IreliaCarriesU", "LikeAMaws", "PaulDano", "ErzaScarIet", "KiritoKamui", "ProofOfPayment", "DonPorks", "BarronZzZ", "Pikaboo", "aLeo", "MikeytheBully", "7Qing", "BillyBossXD", "DragonRaider", "Haughty", "KMadClowns", "ikORY", "Nikkone", "WeixiaTianshi", "QQ346443922", "FoxDog", "Tahx", "Hawk", "Haruka", "Scrumm", "cackgod", "iAmNotSorry", "coLROBERTO", "GladeGleamBright", "MonkeyDufle", "M1ssBear", "theletter3", "Sandrew", "RongRe", "MrGatsby", "xBlueMoon", "Merryem", "ElkWhisperer", "Enticed", "Draguner", "DeliciousMilkGG", "Patoy", "Lucl3n3Ch4k0", "Smoian", "Piaget", "Xiaomi", "zeflife", "IsDatLohpally", "HatersWantToBeMe", "Blackmill", "PrinceChumpJohn", "NhatNguyen", "Nebulite", "IAmTheIRS", "TedStickles", "LOD", "CallMeExtremity", "kimjeii", "Kappasun", "JJJackstar", "TSMMeNoHaxor", "Zealous", "Normalize", "Topcatz", "KimchimanBegins", "DrawingPalette", "AnarchyofDinh", "hiimxiao", "MikeHct", "Manco", "ChumpJohnsTeemo", "Heejae", "delirous", "Iodus", "WakaWakaWak", "Hawez", "ThaOGTschussi", "TwistedFox", "PureCorruption", "HotshotGG", "Turdelz", "ysohardstylez", "Brainfre3z", "ilyTaylor", "Zaineking", "QualityADC", "LingTong", "DyrudeJstormRMX", "AnObesePanda", "silvermidget", "CornStyle", "LafalgarTaw", "Zeyzal", "Meowwwwwww", "Pokemorph", "JimmyHong", "Hoardedsoviet", "Nematic", "C9Yusui", "BlownbyJanna", "Sojs", "Cerathe", "FairieTail", "Xeralis", "ichibaNNN", "SerenityKitty", "Contractz", "WWvvWvvWvvwWwvww", "BlueHole", "SAGANoPause", "Mookiez", "RiotChun", "ValkrinSenpai", "HeXrisen", "CptJack", "Sleepyz", "HurricaneJanna", "ToxiGood", "ItsYourChoice", "TaintedDucky", "probablycoL", "Ina", "FreeGaming", "Phaxen", "tofumanoftruth", "xHeroofChaos", "Rockllee", "Sunohara", "Ryzer", "SpiritDog", "Kazma", "Sjvir", "Maulface", "SombreroGalaxy", "Bebhead", "ecco", "AurionKratos", "RoseByrne", "Kammgefahr", "VwSSandvich", "TDKLouisXGeeGee", "Picarus", "erwinbooze", "xrawrgasm", "Tangularx", "CSauce", "Back2Nexus", "SepekuAW", "Chuuper", "Airtom", "pro711", "Theifz", "SirhcEezy", "LuckyLone56", "AtomicN", "Splorchicken", "00000000", "UpAIlNight", "k3soju", "MikeyC", "s7efen", "FENOMENO", "XIVJan", "Splorgen", "djpocketchange", "Oasis", "Iggypop", "BallsInYourFace", "dopa7", "MasterDragonKing", "ssforfail", "MissyQing", "Endlesss", "badeed", "SmooshyCake", "Karmix", "Alestz", "svbk", "KissMeRDJ", "TeaMALaoSong", "drallaBnayR", "CHRISTHORMANN", "KnivesMillions", "MahNeega", "Sphinx", "Impasse", "Stefono62", "CLGEasy", "GankedFromAbove", "IslandLager", "MrJuneJune", "BrianTheis", "ShorterACE", "morippe", "Meatmush", "Dusey", "Paperkat", "Submit", "TooPro4u", "Porogami", "iuzi", "Suzikai", "TDKNear", "LiquidInori", "Deleted", "NtzLeopard", "UnKooL", "Desu", "Born4this", "sickening", "AllianceMike", "Dinklebergg", "YouGotFaker", "FusionSin", "IMBAYoungGooby", "Neverlike", "BestGodniviaNA", "FFat20GGWP", "kMSeunG", "AliBracamontes", "rua0311desuyo", "54Bomb99", "jivhust", "Penguinpreacher", "Yashimasta", "Erurikku", "ReeferChiefer420", "WonderfulTea", "Gamely", "OberonDark", "Imunne", "Hoeji", "xTearz", "NicoleKidman", "DonDardanoni", "Wonderfuls", "HentaiKatness69", "Ayai", "EREnko", "Cruzerthebruzer", "Connort", "Anoledoran", "BiggestNoob", "Anangelababy007", "TrojanPanda", "MasterCoach", "Kirmora", "wswgou", "NMEotterr", "DragonxCharl", "uJ3lly", "moosebreeder", "Strompest", "Kurumx", "Protective", "LegacyofHao", "DkBnet", "koreas", "AxelAxis", "NiMaTMSiLe", "Preachy", "WoahItsJoe", "XXRhythmMasterXX", "Lemin", "Destinedwithin", "Afflictive", "Nydukon", "Herald0fDeath", "ChowPingPong", "QuanNguyen", "interest", "Slylittlefox121", "VictimOfTalent", "chadiansile", "iToradorable", "BIackWinter", "Mazrer", "NKSoju", "nhocBym", "Dreemo", "Virus", "CowGoesMooooo", "Masrer", "Michaelcreative", "Emanpop", "Druiddroid", "KevonBurt", "Magicians", "HiImYolo", "LoveSick", "kamonika", "Chunkyfresh", "tongsoojosim", "hiimrogue", "Zookerz", "LiShengShun", "DeTFMYumenoti", "EddieMasao", "AGilletteRazor", "andtheknee", "Hazedlol", "SrsBznsBro", "Spreek", "Toxil", "JustinJoe", "Silverblade12345", "WalterWhiteOG", "SwiftyNyce", "Volt", "DoctorElo", "Connie", "DELLZOR", "aiopqwe", "MidnightBoba", "Sikeylol", "Warmogger", "Melhsa", "OmekoMushi", "Life", "SleepyDinosaur", "Leonard", "CatVomit", "Likang45", "PSiloveyou", "xtsetse", "ClydeBotNA", "Cpense", "Arakune", "shadowshifte", "LeeBai", "SexualSavant", "CornChowder", "DeTRFEsteL", "Astro", "deDeezer", "Jayms", "v1anddrotate", "JGLafter", "UhKili", "Aceyy", "Zik", "RiNDiN", "Grandederp", "KawaiiTheo", "Senjogahara", "Th3FooL", "GusTn", "TheTyrant", "GoJeonPa", "DJJingYun", "Egotesticle", "IoveLu", "OGNEunJungCho", "kevybear", "ImJas", "Agrorenn", "Synxia", "DouyuTVForgottt", "GrimSamurai", "6666666666666", "RockleeCtrl", "Xode", "QQ459680082", "KittenAnya", "Zakard", "MARSIRELIA", "WallOfText", "SireSnoopy", "kelppowder", "Hxadecimal", "onelaugh", "MisoMango", "PiggyAzalea", "MisterDon", "VirginEmperor", "suzuXIII", "P18GEMEINV", "Kurumz", "kjin", "CcLiuShicC", "ExileOfTheBlade", "Iambbb", "Fubguns", "Asutarotto", "WhatisLove", "Niqhtmarea", "L0LWal", "JannaFKennedy", "Steffypoo", "KillerHeedonge", "AsianSGpotato", "whiteclaw", "GATOAmyTorin", "lovemyRMB", "Frostarix", "voyyboy", "Melo", "RiotZALE", "ElvishGleeman", "givesyouwiings", "LoveIy", "Packy", "Ntzsmgyu", "Susice", "Dontqqnubz", "mikeshiwuer", "Chulss", "MASTERDING", "Scorpionz", "KKOBONG", "Veeless", "NtzMoon", "Leesinwiches", "RefuseFate", "TP101", "ozoss0", "SeaShell", "Baesed", "Foolish", "jivhust1", "KMadKing", "CHRlSS", "jbraggs", "BeefTacos", "Xoqe", "Naeim", "Aerodactyl", "Triett", "194IQredditor", "Pulzar", "Windgelu", "Suadero", "Zulgor", "Senks", "cAbstracT", "SwagersKing", "AkameBestGirl", "ThePrimaryEdict", "arthasqt", "Lobstery", "MisterOombadu", "TheFriendlyDofu", "Oryziaslatipes", "ugg1", "Flandoor", "HawkStandard", "wimbis", "JimmerFredette", "VikingKarots", "Sorcerawr", "Ciscla", "Suffix", "MrCow", "METALCHOCOB0", "Dessias", "LevelPerfect", "midVox", "Junha", "Hickus", "gamepiong", "AirscendoSona", "HellooKittie", "Jesse", "Rainaa", "ILoveNASoloQ", "Colonelk1", "DeTRFZerost", "Szmao", "TacoKat", "1tzJustVictor", "HomedogPaws", "DioDeSol", "PeterBrown", "FrannyPack", "AbsoluteFridges", "TheBiddler", "ELMdamemitai", "Old", "Pavle", "nathanielbee", "MakiIsuzuSento", "nweHuang", "EvanRL", "yorozu", "forgivenbow", "alexxisss", "Cloverblood", "Entities", "Believe", "Chiruno", "Xiaobanma", "BestJanna", "Neko", "TheEyeofHorus", "IGotSunshine", "Shade20", "Sprusse", "Imacarebear", "Kenleebudouchu", "LockDownExec", "Chubymonkey", "HunterHagen", "Applum", "DaoKho", "MrBlackburn", "beatmymeat", "BestDota2Sona", "chubbiercheeks", "KillaKast", "Betsujin", "TheAmberTeahouse", "BellaFlica", "ManateeWaffles", "Babalew", "charmanderu", "TooSalty", "LotusBoyKiller", "Bulgogeeeee", "Nerzhu1", "Lovelyiris", "QuantumFizzics", "freakingnoodles", "Pdop1", "Bakudanx", "Martel", "DoctorDoom", "equalix", "CARDCAPTORCARD", "Dyad", "Papasmuff", "TheBroskie", "Wadenation", "Flyinpiggy", "Wingsofdeathx", "IamOsiris", "ArtThief", "LotusEdge", "fwii", "Kios", "Shampu", "Nickpappa", "Yukari", "RayXu", "Emeraldancer", "TwoPants", "EnzoIX", "Jacka", "Plumber", "Skadanton", "C9TGleebglarbu", "BonQuish", "GrimmmmmmmReaper", "SmoSmoSmo", "MewtMe", "Ramzlol", "Mruseless", "Eitori", "S0lipsism", "X1337Gm4uLk03rX", "lloveOreo", "MrChivalry", "Oyt", "AnVu", "RBbabbong", "MASTERROSHl", "dabestmelon", "Potatooooooooooo", "KasuganoHaru", "C9BalIs", "stainzoid", "MrArceeSenpaiSir", "sweetinnocence", "Firehazerd", "EpicLynx", "2011", "PandaCoupIe", "Moelon", "KingKenneth", "Skinathonian", "FelixCC", "snowmine", "Acme", "QmoneyAKAQdollas", "Fexir", "ImbaDreaMeR", "ImNovel", "ButtercupShawty", "touch", "penguin", "Promitio", "DeTRFMoyashi", "Hordstyle", "Iizard", "Jintae", "pichumy", "Upu", "Iemonlimesodas", "TwitchTvAuke", "Promises", "Jintea", "OMikasaAckermanO", "wompwompwompwomp", "Kiyoon", "LiquidNyjacky", "ATColdblood", "SandPaperX", "0Sleepless", "pr0llylol", "AxelsFinalFlame", "DrSeussGRINCH", "ZENPhooka", "oMizu", "HamSammiches", "Pcboy", "RamenWithCheese", "Yook", "Dafreakz", "Winno", "XxWarDoomxX", "LifelessEyes", "UrekMazin0", "FrenchLady", "Pillowesque", "GodOfZed", "D3cimat3r", "broIy", "1stTimeDraven", "Exxpression", "godofcontrol", "nokappazone", "Shoopufff", "IlIIlIIIlIIIIIII", "Fragnat1c", "Abidius", "irvintaype", "YellOwish", "japanman", "CaristinnQT", "LeithaI", "Kitzuo", "Akatsuki", "ROBERTZEBRONZE", "aenba", "Arcenius", "Torgun", "Ryden7", "Entus", "CutestNeo", "MonkeyDx", "Xerosenkio", "JHHoon", "DeTFMCeros", "Rakinas", "MetaRhyperior", "MegaMilkGG", "EmilyVanCamp", "SecretofMana", "Snidstrat", "SJAero", "Mixture", "Teaz89", "ArizonaGreenTea", "AKASIeepingDAWG", "sh4pa", "Hanjaro", "BestFelixNA", "Dragles", "TummyTuck", "sciberbia", "KLucid", "Isunari", "lAtmospherel", "Zwag", "yuBinstah", "ionz", "Nove", "Nickywu", "BlueRainn", "lilgrim", "Rekeri", "Kaichu", "Arnold", "ArcticPuffin11", "UnholyNirvana", "IREGlNALD"];
var ChatContent = ["How can you kill that which has a thousand extra lives!??", "this just made the game so much more enjoyable", "Badass!", "THANKS", "ty for this", "thanks", "I've been lookin for a working candy crush generator for ages!", "I bet this is how most players got up to the levels they're at", "Make sure you log out and back into your candy crush account if you dont get your resources within a day.", "I like to look at the losers begging for lives and laugh at them!", "Now this is how you should play candy crush.", "candy CRUSHED", "dudes, you may have to generate a couple times when the server is under heavy load", "I didn't think it worked but I finally got my 5k gold bars after waiting a few hours", "Weird bug, I have to generate each item seperately to get it to work...", "Almost feel sorry for the suckers that bought gold bars and lives", "Got all my lives thanks fam", "A facebook comment was actually useful for once!", "what does one do with 10,000 gold bars lol", "I cant be the only one here who wants to eat these candies lol", "those color bombs look tasty", "i'm addicted to every candy crush game lol", "Guess i can buy those boosters now", "anyone know how to remove obstacles and blockers?", "Now if only i could generate color bombs lol", "I don't even understand how the bars and moves showed up and I don't need to know :)", "Wish i would have found this a day ago, I wouldn't have bought bars...", "This saved me so much money", "soooo many extra livessss yeeessss", "Guys, if you don't get your gold bars try using a mobile device.", "Yeah, switching to mobile did the trick, thanks whoever suggested it!", "Finally got my extra lives thanks!", "Got my gold bars thanks!", "woah this actually worked! i got my gold bars and lives holy shit", "can we all stop with the imagine meme lol", "imagine imagining", "imagine needing extra lives", "imagine paying for gold bars", "imagine paying for extra moves", "imagine paying for extra lives", "Thanks whoever made this, the lives in this game are such a scam", "there are quite a lot more people here today and its taking forever to get my items!!", "how many people are using this rn... jeez", "btw guys if you use this more than once per day your resources may not be delivered", "my mom freaked when i generated extra lives for here lmao", "Wow finally a working candy crush generator that isn't trying to steal my password.", "oh nice i actually got my extra lives", "Im on break at work and found this, my coworkers and me are racing to level 600, i'm gonna win now! loool", "yeah they update this very frequently", "Oh sweet they fixed the problem where the gold bars weren't being added to the account correctly!", "when i try to generate more moves over 200 it takes ages but anything less is almost instant", "ty for your help guys it worked when i used my phone", "Thanks, I got my extra lives now! I had to use google chrome for some reason lol", "If you can't get the extra moves to work, try using a phone it worked for me", "i can never seem to get the extra moves to work, anyone know how to fix it?", "500 extra lives lets goooo", "Candy Crush is actually playable now, neat!", "this has ruined normal candy crush for me now. how did i play it before this lol", "yeah the later levels can be a bitch to complete without using this generator", "I about gave up on one level until I found this amazing tool.. seriously saved my sanity.", "with all these moves i cannot be stopped!", "yeah this saved me from asking friends for more lives haha", "thank FUCK for this, i was about to ask other for move lives lolo", "woah i've never had this many gold bars before", "@geoffery did you get it working or u need help still?", "who else was here yesterday?", "yeah this worked better on mobile.. weird!", "thanks for the help", "No problem!", "Thank god I found this, I was not about to spend money to keep playing.", "@dab you still here?", "i wonder how much i can generate per day?", "Whew, finally worked!", "can i generate for friends to??", "@flatearther can you pm me real quick?", "oh I'm so dumb, I figured it out.", "works?", "Yeah this still works", "@thatoneguy yes, its still working.", "That was easier than I thought it would be.", "dunno why so many people whine in chat, it's literally free resources...", "Finally! Thanks!", "@Bjerg I can help you if you pm me", "I feel almost sorry for ppl who bought this shit lmao", "Jeez that was really simple.", "please dont spam the chat just to see if it works...", "this is worse than twitch chat", "Kappa", "So many shitposts in here, yeesh", "I like the people that just copy paste what others type, so funny....", "This is amazing!", "I'd like to buy whoever made this a beer.", "I still dont know how they can do this for free!", "my first try didn't work, glad I came back!", "My dad could beat up all of yours.", "This chat gave me cancer", "aweesome", "thanks so much holy crap", "Impressed it actually worked.", "Anyone tried this already?", "Does it work in NA?", "Why this is so easy lol?", "This is incredible, never thought it would work.", "I generated a small fortune , can't wait to start playing lol.", "NA player here, works flawless.", "Can someone help me with the survey?", "OMG!", "LOL!", "ROFL!", "Real", "gayyyy I validated and my request got placed in the server queue", "easy", "bro", "What can I do here?", "Shut up man I love this website", "hi guys", "How much have u made so far?", "what about surveys on mobile phone?", "Is this free?", "How long do you have to wait?", "Yea", "No", "I know", "Exactly why this is so good", "uhm", "maybe", "I can't wait anymoreeee", "Is this for real guys?", "Thanks man I appreciate this.", "Cool =)", "<message deleted>", "oh god", "damn", "I love this", "Never imagined this would work but damn its so simple", "saw this on forums pretty impressive", "yo guys dont spam okay?", "anyone up for a game?", "you think this will be patched any time soon", "this sure is saving me a lot of money", "Is it better to only generate small amounts so they don't notice?", "so happy i found this", "you guys watch nightblue?", "I have seen this website on twitch stream i think", "just wow", "Where do I generate my girlfriend?", "a friend told me about this", "thanks to whoever spams this chatroom, really helping out lol", "where i put in my password, or is that even required?", "so far I am cool with this", "can I get for free?", "bye guys", "okay i applied thank you", "how much can you even have", "incredible", "having to wait 10 minutes for what would have cost hundred of dollars is fine, chill guys", "need to go now", "brb", "You should give it a try", "dont regret being here", "fucking works!", "omg stop asking how to use it and figure it out urself", "guys this is so easy, it takes less than a minute", "Can anyone do it for me? My username is brazilpidgey", "PM me pls", "wow sucks noobs haha", "thanks obama", "today is lucky day", "this is the best hack website i've found, the others are just fake bul****t", "is everyone here as cheap as me? lololol", "when can I play I am new to this", "This for free?", "how often is this updated?", "I generated some for my girlfriend making her happy and i dont pay for them lol", "man servers are always overcapacity fuk it, ill come back l8r", "funny how this works but it does like always", "hi again im here for MORE", "i need some what do i do", "this worked lol", "fuck i have so much on my acc but i am tempted to get more in case its patched", "where do all of you come from", "fucking EPIIIccCC", "i was stuck and had to do again but it worked then", "thank you for giving me this!", "saw on stream yo", " everything working fine", "i love this game so much... not enuf to spend money on it tho", "this makes my game more enjoyable i hope", "thank you all for helping me out bros", "thanks to whoever pmed me it worked", "thank you for messaging me man", "when do you wanna play?", "imagine all the people waiting fo this", "any idea if this still works tomorrow", "best website ever", "is this twitch chat?", "wow really many people online here", "save some for me you turds XD", "anyone not here for the free shit lol?", "what was the newest update", "who is up for a chat hehe?", "i play in EU", "check my profile i am rich", "when is it start man?", "even noobs can do this", "i was wondering how people always are rich in these kind of games", "i can only recommend this stuff", "great i can test the game before supporting the devs", "can't wait for it to start!", "where do you come from?", "does this giveaway go forever?", "EZ game", "i begin to like this very much. third try i unlocked", "worth", "ok cool", "i see no limits on how much you can get thats so epic", "which country are you playing in guys?", "think so man", "Likely, but I think one day this will fail", "this still works at the moment", "i havent seen this before but im impressed with the result!", "my boyfriend will freak out :D", "nice ", "surveys dont appaer every time but i think its there to have enough money for the website to keep running", "actually i had no problem with any survey ever, just try?", "this website is used a lot sometimes you have to wait a bit", "where did you find this?", "Servers still overloaded i really hate the queue?", "servers have been shakey i think cus they upgrading", "i wish i found this earlier", "i wasted so much money on this game lol - good this is free here", "how come i dont see any trolls here..oh wait", "just dodged the queue for this", "any bro needs help?", "lol made my friend quit cus he spent like 80 dollars and i got all this for free haha", "please don't patch this devs pleeeeeassee", "it didn't work yesterday but it is now ty for fixing it", "i'm goin to report u all for cheating in my favorite game", "i feel like this will be the best! it was starting to get boring lol", "thank so much", "free stuff? yes pls?", "ok sounds good enough for me bros", "anyone from reddit here?", "Didn't think it worked till I logged in, LOL", "guys add me on skype @DorkVader825 if u wanna play", "my friends on facebook spam this like every day they are rly happy about it", "can i do this on phone?", "what?", "yes i got it too", "why would someone just go here to hate and spam pff", "noobs pls if you dont know how to do it dont spam here okay", "great generator good i found this", "too many kids in this chat", "josh are you here?", "unlocking takes some time for me", "derp", "i am curious is this legit?", "i keep getting an error someone help?", "had to reload page before it worked", "used this three times lol see you ingame suckers", "i see most people here write positive things it is true?", "hi my english no good i here get hack?", "Exactly what I think", "shut up and take my - oh wait it's free nevermind", "when i came first to this website i was like most of you guys just spamming here the chat, in the end im glad that i tried it because now for next year or so i am not leaving my room", "if you want a proof add me on skype", "this game better not die just when i get rich", "thank you!", "are you not bored at all? i cant wait for new content", "i am looking for a friend please pm me", "i thought my friend wanted to fool me with this website link. but the hak actualy work", "aasdasdasd", "Any mods here? i cant post a screenshot of my account in this chatroom?", "i'm pickle RIIICK", "i agree", "i now know what the terminator meant when he said I'll be back LOL", "what i always disliked is when you get close to release date and they move it even further", "from all websites ive been on this is the first and probably the only one which rly gives you the items", "wasted so much time on other sites till i found this one", "yeah free item is cool", "you like this?", "What you think about all this", "I want to play from korea", "wow i waited ages to get a server transfer now here it shouldnt be a problem anymore", "lol ProAsh32 is here? you were in my skype! how are you guy", "wasssuuuppp", "now the secret is solved", "this works for EU players right?", "hey i am a newbie will i be able to play?", "just made my acc and already hit ite/currency cap - are the devs clueless or just dont give a fuck??", "can i do this with my nexus phone?", "...^^", "fucking hilarious some people", "^u^", "wow 10 minutes ago this was empty now all people here wtf", "i confessed to my priest about using this site to get free stuff, apprently he uses it too lol", "FINALLY took long enuf was about to give up", "i can imagine that", "okay", "not sure if i understood? its all free right?", "I would be so sad if this did not work because it took a while, thankfully it worked then", "uhm", "where can i suggest a game for u to hack next?", "i think with the new game might become somewhat more interesting", "fucking helll! it worked!.", "yayy", "guy i tested this and its working", "i usually choose the first offer in the list because its normally the easiest one", "i think some offers easier in countries like USA", "if you chose an offer make sure to finish it complete or you will not work!"];
var ChatAntiBot = ["imagine being a bot lmaao", "slow clap....", "I'm just here to crush some candy bro. With my metal arms of course.", "Here we go with the 'everyone's a bot' guy...", "I swear there's one of you per hour claiming we're bots.. I actually just copy and paste this same message every time.", "*excited robot noises*", "Surprise Mother Fucker, I'm real!", "beep boop", "byeeee theeennn", "then leave, no one gives a fuck", "I thought so too.", "Fuck you I'm not a bot", "Does this sound like a bot to you noob?", "yeah we're all bots...smh", "bot? i'm here for spamming this shit lol", "are you stupid or something? they have anti bot protection", "sure bot, 0101010110 lmao xD", "no, we're not bots Kappa"];


$(document).ready(function() {

    $('#X00ChatContent').niceScroll({
        autohidemode: false
    });
    $('#ascrail2000').show();
    ChatStart();
    ChatLog("Welcome to the chatroom, posting links or spamming will result in a kick.");
    ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], ChatContent[rng(0, ChatContent['length'] - 1)]);
    $('#X00InputChat')['keypress'](function(_0xaa63xc) {
        if (_0xaa63xc['keyCode'] == 13) {
            $('#X00ButtonChat')['click']();
        };
    });
    $('#X00ButtonChat')['click'](function() {
        if (ChatUserName == '') {
            $('#X00ContainerChatUserName')['fadeIn'](250);
            $('.X00OverlaySmall').fadeIn(200);
        } else {
            $msg = $('#X00InputChat')['val']();

            ChatAddEntry('<span>' + ChatUserName + '</span>', $msg);
            $('#X00InputChat')['val']('');
            if ($msg.indexOf("bots") >= 0 || $msg.indexOf("bot") >= 0 || $msg.indexOf("robots") >= 0) {
                setTimeout(function() {
                    ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], '<span class="mention">@ ' + ChatUserName + ' </span>' + ChatAntiBot[rng(0, ChatAntiBot['length'] - 1)]);
                }, rng(7250, 9300));
            }
            if (!ChatReplied) {
                setTimeout(function() {
                    ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], '<span class="mention">@ ' + ChatUserName + ' </span>  You new here? Welcome to the party!');

                    setTimeout(function() {
                        ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], '<span class="mention">@ ' + ChatUserName + ' </span>  this is the only functional candy crush generator that works and doesnt try to steal your information.');
                        setTimeout(function() {
                            ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], '<span class="mention">@ ' + ChatUserName + ' </span> ' + ' hey dont recognize your name, if your stuck just keep trying and it will work. Maybe try mobile too');

                        }, rng(11500, 19500));
                    }, rng(6500, 8500));
                }, rng(6000, 9500));
                ChatReplied = true;
            }
        };
    });
    $('#X00ButtonChatUserName')['click'](function() {
        ChatUserName = $('#X00InputChatUserName')['val']();
        $('#X00ContainerChatUserName')['fadeOut'](250, function() {
            $('.X00OverlaySmall').fadeOut(200, function() {
                $('#X00ButtonChat')['click']();
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

    $('#X00InputComment').focus(function() {
        $('#X00ContainerAdditional').slideDown(500);
    });
});

function Random(_0xaa63x2, _0xaa63x3) {
    return Math['floor'](Math['random']() * (_0xaa63x3 - _0xaa63x2) + _0xaa63x2);
};

function ChatAddEntry(_0xaa63x5, _0xaa63x6) {
    if (_0xaa63x5 == '' || _0xaa63x6 == '') {
        return;
    };
    $('<div class=\"X00ChatEntry\"><span class=\"X00EntryUserName\">[' + ChatDate.getHours() + ':' + ChatDate.getFullMinutes() + ']  ' + _0xaa63x5 + ':</span><span class=\"X00EntryContent\">' + _0xaa63x6 + '</span></div>')['appendTo']('#X00ChatContent')['hide'](0)['fadeIn'](250);
    $('#X00ChatContent')['scrollTop']($('#X00ChatContent')[0]['scrollHeight']);
};

function ChatLog(_0xaa63x6) {
    $('<div class=\"X00ChatEntry\"><span class=\"ChatNotification\">' + _0xaa63x6 + '</span></div>')['appendTo']('#X00ChatContent')['hide'](0)['fadeIn'](250);
    $('#X00ChatContent')['scrollTop']($('#X00ChatContent')[0]['scrollHeight']);
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