// Sticky v1.0 by Daniel Raftery
// http://thrivingkings.com/sticky
//
// http://twitter.com/ThrivingKings

(function($) {

    // Using it without an object
    $.sticky = function(note, options, callback) {
        return $.fn.sticky(note, options, callback);
    };

    $.fn.sticky = function(note, options, callback) {
        // Default settings
        var position = 'top-left'; // top-left, top-right, bottom-left, or bottom-right

        var settings = {
            'speed': 2000, // animations: fast, slow, or integer
            'duplicates': false, // true or false
            'autoclose': false // integer or false
        };

        // Passing in the object instead of specifying a note
        if (!note) {
            note = this.html();
        }

        if (options) {
            $.extend(settings, options);
        }

        // Variables
        var display = true;
        var duplicate = 'no';

        // Somewhat of a unique ID
        var uniqID = Math.floor(Math.random() * 99999);

        // Handling duplicate notes and IDs
        $('.sticky-note').each(function() {
            if ($(this).html() == note && $(this).is(':visible')) {
                duplicate = 'yes';
                if (!settings['duplicates']) {
                    display = false;
                }
            }
            if ($(this).attr('id') == uniqID) {
                uniqID = Math.floor(Math.random() * 9999999);
            }
        });

        // Make sure the sticky queue exists
        if (!$('#recent-activity').find('.sticky-queue').html()) {
            $('#recent-activity').append('<div class="sticky-queue ' + position + '"></div>');
        }

        // Can it be displayed?
        if (display) {
            // Building and inserting sticky note
            $('.sticky-queue').prepend('<div class="sticky border-' + position + '" id="' + uniqID + '"></div>');
            $('#' + uniqID).append('<div class="sticky-note" rel="' + uniqID + '">' + note + '</div>');

            // Smoother animation
            if (screen.width < 440) {
                var height = '160px';
            } else {
                var height = '120px';
            }

            $('#' + uniqID).css('height', height);

            $('#' + uniqID).slideDown(settings['speed']);
            display = true;

        }

        // Listeners
        $('.sticky').ready(function() {
            if (settings['autoclose']) {
                $('#' + uniqID).delay(settings['autoclose']).fadeOut(settings['speed']);
            }

            function progressBarActivity(percent, $element) {
                var progressBarActivityWidth = percent * $element.width() / 100;
                $element.find('div').animate({
                    width: progressBarActivityWidth
                }, 500).html(percent + "%&nbsp;");
            }
            $('.recent-activity-progress-wrapper').html('<div id="progressBarActivity' + uniqID + '" class="activity-loadbar animated bounceIn"><div></div><span class="activity-progress-label activity-progress-label-1"><i class="fa fa-spinner fa-spin fa-fw"></i>Generation</span><span class="activity-progress-label activity-progress-label-2"><i class="fa fa-spinner fa-spin fa-fw"></i>Verification</span><span class="activity-progress-dot activity-progress-dot-1"></span><span class="activity-progress-dot activity-progress-dot-2"></span><span class="activity-progress-dot activity-progress-dot-3"></span></div>');
            progressBarActivity(0, $('#progressBarActivity' + uniqID));
            $('.activity-progress-dot-1').addClass('passed');
            setTimeout(function() {
                $('#progressBarActivity' + uniqID).fadeIn(function() {
                    progressBarActivity(50, $('#progressBarActivity' + uniqID));
                    setTimeout(function() {
                        $('.activity-progress-dot-2').addClass('passed');
                        $('.activity-progress-label-1').html('<i class="fa fa-check icon-green"></i>Generation');
                    }, 500);
                });
            }, 2000);

            var minNumber = 4000;
            var maxNumber = 10000;
            var randomNumber = randomNumberFromRange(minNumber, maxNumber);

            function randomNumberFromRange(min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min);
            }

            setTimeout(function() {
                progressBarActivity(100, $('#progressBarActivity' + uniqID));
                setTimeout(function() {
                    $('.activity-progress-dot-3').addClass('passed');
                    $('.activity-progress-label-2').html('<i class="fa fa-check icon-green"></i>Verification');
                }, 500);
                setTimeout(function() {
                    $(".recent-activity-progress-wrapper").fadeOut();
                }, 2500);
                setTimeout(function() {
                    if (screen.width < 440) {
                        $('#' + uniqID).animate({
                            height: "125px"
                        });
                    } else {
                        $('#' + uniqID).animate({
                            height: "78px"
                        });
                    }
                }, 3000);
            }, randomNumber);

        });

        // Callback data
        var response = {
            'id': uniqID,
            'duplicate': duplicate,
            'displayed': display,
            'position': position
        }

        // Callback function?
        if (callback) {
            callback(response);
        } else {
            return (response);
        }

    }
})(jQuery);

var Avatar = ["img/input-icon.png"];
var UserName = ["fredd***@hotmail.com", "falconfore***@gmail.com", "poupope***@hotmail.com", "john5***@gmail.com", "slimg***@hotmail.com", "jj995***@gmail.com", "france***@yahoo.com", "club***@gmail.com", "grassh***@hotmail.com", "grace***@gmail.com", "hungry***@mail.com", "mail***@gmail.com", "kiki5***@hotmail.com", "plants***@gmail.com", "happ***@gmail.com", "bgocta***@hotmail.com", "jacka***@gmail.com", "lovep***@gmail.com", "morelo***@gmail.com", "decap***@yahoo.com", "jo89jo***@mail.com", "novii***@gmail.com", "veve***@hotmail.com", "flyfl***@gmail.com", "longi***@gmail.com", "ne8ip***@yahoo.com", "xedo***@gmail.com", "desp***@hotmail.com", "huhu7***@gmail.com", "wearet***@mail.com", "game3***@gmail.com", "jili***@gmail.com", "motox***@hotmail.com", "veter***@gmail.com", "zelko77***@gmail.com", "boa1***@gmail.com", "pride***@yahoo.com", "pacif***@mail.com", "fjtoy***@gmail.com", "bengal***@hotmail.com", "krka***@gmail.com", "citru***@gmail.com", "dego***@hotmail.com", "mick***@gmail.com", "verbos***@yahoo.com", "no.pro***@gmail.com", "kiss4***@hotmail.com", "secam***@mail.com", "greenf***@gmail.com", "aster***@gmail.com", "huma***@hotmail.com", "91***@gmail.com", "g988***@yahoo.com", "urlik***@gmail.com", "give***@hotmail.com", "de.sca***@gmail.com", "k085***@mail.com", "fxfax***@gmail.com", "head***@hotmail.com", "g4g***@gmail.com", "jell***@yahoo.com", "lepa***@gmail.com", "fron***@hotmail.com", "mk1***@gmail.com", "ervi***@gmail.com", "rober***@gmail.com", "despo***@hotmail.com", "mywis***@gmail.com", "erdel***@yahoo.com", "jojo***@gmail.com", "hut***@hotmail.com", "class00***@gmail.com", "fit4***@mail.com", "h8***@gmail.com", "molly.l***@gmail.com", "brothe***@hotmail.com", "copie***@gmail.com", "diabl***@yahoo.com", "xero***@gmail.com", "bixna***@hotmail.com", "kme***@gmail.com", "url***@gmail.com", "wow.efe***@gmail.com", "seeu***@hotmail.com", "erd0***@gmail.com", "nema***@gmail.com", "vr.re***@yahoo.com", "zamb***@gmail.com", "meand***@hotmail.com", "flo***@gmail.com", "jt***@gmail.com", "frank8***@hotmail.com", "xrv***@gmail.com", "kap***@yahoo.com", "cec***@gmail.com", "jl95nyc***@hotmail.com", "crverx***@gmail.com", "bg.do***@gmail.com", "kumas***@gmail.com", "h65ian***@hotmail.com", "nk5yu***@gmail.com", "beas***@gmail.com", "virtu***@yahoo.com", "blac***@gmail.com", "negrost***@gmail.com", "vutr***@hotmail.com", "mn.sla***@gmail.com", "blad3***@mail.com", "vogu***@gmail.com", "blueh***@gmail.com", "tj.sim***@gmail.com", "urbany***@hotmail.com", "iren***@gmail.com", "nyc.lum***@gmail.com", "myjones***@gmail.com", "east***@hotmail.com", "cw785**@gmail.com", "criss***@gmail.com", "nball77***@hotmail.com", "frogup***@gmail.com", "mhell***@gmail.com", "metax***@yahoo.com", "brianja***@gmail.com", "nmanches***@hotmail.com", "mark99j***@gmail.com", "graylim***@gmail.com", "cristo***@gmail.com", "mdeniz***@gmail.com", "kostak***@gmail.com", "jackom89***@hotmail.com", "htenn***@gmail.com", "nova96sim***@gmail.com", "cerafeudi***@gmail.com", "mimicostan***@hotmail.com", "bruk.bo***@gmail.com", "frigol***@gmail.com", "bt01thro***@yahoo.com", "list***@gmail.com", "vdcrunc***@gmail.com", "kosItaR***@mail.com", "yota.v***@mail.com", "frans***@gmail.com", "nyci***@gmail.com", "uforce4***@gmail.com", "8jjla***@hotmail.com", "nic6***@yahoo.com", "maki0***@gmail.com", "nesh6***@gmail.com", "ntoon***@hotmail.com", "vision4***@gmail.com", "bluet***@gmail.com", "b2stro***@gmail.com", "kyoung8***@gmail.com", "2hot4u***@yahoo.com", "crazyho***@gmail.com", "built4***@hotmail.com", "mlax***@gmail.com", "celine.l***@gmail.com", "biofar***@gmail.com", "44fourn***@gmail.com", "vucko***@gmail.com", "hifict***@yahoo.com", "cv895lu***@hotmail.com", "deepf***@gmail.com", "putsoy***@gmail.com", "mr.magi***@gmail.com", "girlf***@gmail.com", "6senc***@yahoo.com", "print.pic***@gmail.com", "bend4***@hotmail.com", "hellh***@gmail.com", "year4r***@gmail.com", "kendra***@gmail.com", "v.real556***@gmail.com", "meandmy***@gmail.com", "ianurl***@gmail.com", "cadenca***@gmail.com", "li.ling8***@mail.com", "new95***@hotmail.com", "greentoo***@gmail.com", "negr0r***@yahoo.com", "opacit***@gmail.com", "aretta.jam***@gmail.com", "vteen***@gmail.com", "bridge2***@gmail.com", "vreck***@gmail.com", "xeno78***@hotmail.com", "hardy.li***@gmail.com", "buorno***@gmail.com", "99cristo***@gmail.com", "xenwrac***@gmail.com", "melodyman***@gmail.com", "opec98***@gmail.com", "viringo***@hotmail.com", "credito***@gmail.com", "kingofcoi***@gmail.com", "xyz.hac***@gmail.com", "zinadi***@gmail.com", "zafira1***@gmail.com", "susssy***@hotmail.com", "jtrone***@mail.com", "crownatho***@gmail.com", "fifty5***@gmail.com", "leaf995***@gmail.com", "nexus7s***@gmail.com", "nerftokil***@hotmail.com", "gigant***@gmail.com", "b.udines***@gmail.com", "9grams***@gmail.com", "volkov.k***@gmail.com", "brownd***@gmail.com", "cjjones***@hotmail.com", "realflo***@gmail.com", "letherjac***@gmail.com", "voluptuo***@gmail.com", "brian.sams***@gmail.com", "bridgit***@gmail.com", "rjohanes***@gmail.com", "gemini96***@gmail.com", "jkingst***@hotmail.com", "eholly***@gmail.com", "tmarkuso***@gmail.com", "olimp.cas***@gmail.com", "future.50***@gmail.com", "jetta1***@gmail.com", "di.olivi***@mail.com", "hhot2***@gmail.com", "ginger200***@hotmail.com", "lgenesi***@gmail.com", "guru4***@yahoo.com", "nrikko***@gmail.com", "fiverru***@gmail.com", "nopro***@gmail.com", "nettel***@gmail.com", "vcent***@gmail.com", "mr.marroc***@yahoo.com", "gipsyrepl***@hotmail.com", "futurist***@gmail.com", "novaqual***@gmail.com", "vjohanso***@gmail.com", "all.inclu***@gmail.com", "t4time***@yahoo.com", "masshyste***@gmail.com", "jtranspo***@hotmail.com", "transpon***@gmail.com", "fist2fac***@gmail.com", "calvin***@mail.com", "jwolf***@gmail.com", "qualitydefe***@gmail.com", "reaction***@gmail.com", "vig.miha***@hotmail.com", "xtitan***@gmail.com", "vdsoftw***@gmail.com", "becool***@gmail.com", "kate.jameso***@gmail.com", "xstyle***@gmail.com", "confet***@hotmail.com", "junior200***@gmail.com", "jy***@mail.com", "yg***@yahoo.com", "je***@gmail.com", "zr***@gmail.com", "jh***@hotmail.com", "hj***@gmail.com", "ce***@yahoo.com", "mn***@gmail.com", "mh***@gmail.com", "ct***@gmail.com", "ko***@yahoo.com", "fr***@gmail.com", "hu***@hotmail.com", "mt***@gmail.com", "vt***@yahoo.com", "Ctr***@gmail.com", "skyis***@gmail.com", "russe***@gmail.com", "olivej***@gmail.com", "kt.track***@hotmail.com", "normar.unic***@gmail.com", "olga***@yahoo.com", "trigg***@gmail.com", "justa***@gmail.com", "janeX***@mail.com", "ph***@gmail.com", "cloni***@hotmail.com", "figh***@yahoo.com", "mr.po***@gmail.com", "jrjac***@gmail.com", "vutan***@gmail.com", "gubner***@yahoo.com", "lkno5***@gmail.com", "georgej***@gmail.com", "vrck***@yahoo.com", "hipers***@hotmail.com", "mr.sty***@gmail.com", "oyegr***@gmail.com", "gilly9***@yahoo.com", "grckain***@gmail.com"];
var Resources = ["<span class='recent-activity-r-item-1'>10.000 <span class='recent-activity-r-item-label recent-activity-r-item-1-label'>UC</span></span>",
    "<span class='recent-activity-r-item-1'>50.000 <span class='recent-activity-r-item-label recent-activity-r-item-1-label'>UC</span></span>",
    "<span class='recent-activity-r-item-1'>50.000 <span class='recent-activity-r-item-label recent-activity-r-item-1-label'>UC</span></span>",
    "<span class='recent-activity-r-item-1'>50.000 <span class='recent-activity-r-item-label recent-activity-r-item-1-label'>UC</span></span>",
    "<span class='recent-activity-r-item-1'>25.000 <span class='recent-activity-r-item-label recent-activity-r-item-1-label'>UC</span></span>",
    "<span class='recent-activity-r-item-1'>50.000 <span class='recent-activity-r-item-label recent-activity-r-item-1-label'>UC</span></span>"
];
$(document).ready(function() {
    $.sticky('<div class="recent-activity-tab"><div class="recent-activity-user-wrapper"><img src="' + random_avatar() + '" class="activity-avatar"/><span class="activity-username">' + random_username() + '</span></div><div class="activity-generated-amount">' + random_amount() + '</div><div class="clearfix"></div><div class="recent-activity-progress-wrapper"></div>');
    var call_recent_activity_tab = function() {
        $.sticky('<div class="recent-activity-tab"><div class="recent-activity-user-wrapper"><img src="' + random_avatar() + '" class="activity-avatar"/><span class="activity-username">' + random_username() + '</span></div><div class="activity-generated-amount">' + random_amount() + '</div><div class="clearfix"></div><div class="recent-activity-progress-wrapper"></div>');
    }
    setInterval(call_recent_activity_tab, 11500);

    function random_avatar() {
        return Avatar[rng(0, Avatar['length'] - 1)];
    }

    function random_username() {
        return UserName[rng(0, UserName['length'] - 1)];
    }

    function random_platform() {
        return Platforms[rng(0, Platforms['length'] - 1)];
    }

    function random_amount() {
        return Resources[rng(0, Resources['length'] - 1)];
    }
});