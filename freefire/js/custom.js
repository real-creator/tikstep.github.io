
var username = '';
var selectedItem = '';

$(document).ready(function () {

    

    //alertify.set('notifier','position', 'top-right');

    $('.item').click(function () {
        $('#itemholder').html('<img src=' + $(this).children('img').attr('src') + ' />');


    })

    $('.balance').click(function () {
        $('#itemholder').html('<div class="balance customBal" >'+$(this).html()+'</div>');
        $('.customBal img').css('height', '40px');
        $('.customBal img').css('width', '40px');
    })

    $("form").submit(function (e) {
        e.preventDefault();
    });
    $('.btn-platform').css('background-color', 'transparent');
    $('#firstbtnplatform').css('background-color', 'skyblue');


    $('.btn-platform').click(function () {
        $('.btn-platform').css('background-color', 'transparent');
        $(this).css('background-color', 'skyblue');

    });

    $('#btn-content-load').click(function () {
        if ($('#player-username').val() == '') {
        	alert('Please enter your username');
        	return;
        }

        username = $('#player-username').val();
        $('#playernameholder').html(username);

        Process1();
    })

    $('#confirmbtn').click(function () {
        $(this).fadeOut(50);

        setTimeout(function () {
            showLoader();
            setTimeout(function () {
                Process2();
            }
                , 500);
        }
            , 100);


    });

    $('#btnVerify').click(function(){
        Process3();
    });

    function showLoader() {
        $('.loader4').fadeIn(900);
        return;
    }
    function hideLoader() {
        $('.loader4').fadeOut(100);
    }

    function Process1() {

        $('#content-holder').fadeOut(900);
        $('.loader4').fadeIn(900);

        setTimeout(function () {
            $('#content1').html('Fetching data...');
            $('#content1').fadeIn(100);
            setTimeout(function () {
                $('#content1').html('Searching for ' + username + '');
                setTimeout(function () {
                    $('#content1').html('Player is found');
                    setTimeout(function () {
                        $('#content1').fadeOut(500);
                        setTimeout(function () {
                            $('#itemholder').fadeIn(2000);
                            setTimeout(function () {
                                $('.center-con').fadeIn(500);
                                setTimeout(function () {
                                    $('#playerto').fadeIn(500);
                                    setTimeout(function () {
                                        hideLoader();
                                        setTimeout(function () {
                                            $('#confirmbtn').fadeIn(500);
                                        }
                                            , 500);
                                    }
                                        , 300);
                                }
                                    , 500);
                            }
                                , 700);

                        }
                            , 900);
                    }
                        , 1000);
                }
                    , 2000);
            }
                , 2500);
        }
            , 2700);
        return;
    }


    function Process2() {
        setTimeout(function () {
            $('#beforeVer').html('<p style="margin:0;">Performing Human Verification...</p>').fadeIn(500);
            setTimeout(function () {
                hideLoader();
                $('#itemholder').fadeOut(0);
                $('.center-con').fadeOut(0);
                $('#playerto').fadeOut(0);

                $('#beforeVer').html('<p style="margin:0;color:red">Automatic Human Verification Failed!</p>').fadeIn(500);
                setTimeout(function () {
                    $('#beforeVer').html('<p style="margin:0;color:#d7ce66">Manual Human Verification is Required.</p>');
                    
                    $('#humanVer').fadeIn();
                    $('#btnVerify').fadeIn();
                    
                    setTimeout(function () {
                        setTimeout(function () {
                            
                        }
                            , 10);

                    }
                        , 1000);
                }
                    , 2000);
            }
                , 3500);
        }
            , 3500);
    }

    function Process3() {
        
    }

    function hideAll(){

        $('#content-holder').fadeOut(0);
        $('#theloader').fadeOut(0);
        $('#itemholder').fadeOut(0);
        $('.center-con').fadeOut(0);
        $('#playerto').fadeOut(0);
        $('#content1').fadeOut(0);
        $('#beforeVer').fadeOut(0);
        $('#confirmbtn').fadeOut(0);
        $('#btnVerify').fadeOut(0);

    }
});
