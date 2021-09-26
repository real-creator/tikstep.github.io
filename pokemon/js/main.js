var _0x274e = ['online_count()', 'date', 'innerHTML', 'getHours', 'toString', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'getMonth', 'getDate', 'getFullYear', 'length', '\x20minutes\x20and\x20', '\x20seconds', 'human_verification_timer_time', '<span>', 'human_verification_timer.timer();', 'timer', '', 'location', 'hostname', 'replace', '', 'Checking\x20device\x20compatibility...', 'Generating\x20tweaked\x20Apps...', 'Loading\x20the\x20best\x20performing\x20Apps', 'Your\x20Apps\x20links\x20are\x20ready', '180', 'sound', 'button', 'audio/', 'transition-1', 'count', 'transition-2', 'sounds/', '#b-1', 'click', 'ajax', 'GET', 'play', '.X650d', 'html', 'hide', 'magnificPopup', 'open', '#master-modal', 'inline', 'width', 'find', 'div', '%&nbsp;', '#progressBarConsole', 'parts/st_2.php', '.app-download-main', 'fadeIn', 'hasClass', 'platform-item-1', 'Android', '<i\x20class=\x27fab\x20fa-android\x20platform-select-icon\x27></i>', '#platform-select-input', 'val', 'android', 'platform-item-2', 'iOS', '<i\x20class=\x27fab\x20fa-apple\x20platform-select-icon\x27></i>', 'addClass', 'active', 'animated\x20jello', 'one', 'webkitAnimationEnd\x20mozAnimationEnd\x20MSAnimationEnd\x20oanimationend\x20animationend', 'removeClass', '.platform-item-1,\x20.platform-item-2', '.platform-item', '#b-2', '.platform-field-wrapper', 'shake\x20animated\x20border-b-red', '.console-msg', 'animated\x20bounceIn', '.generator-container', 'animated\x20bounceOut', 'get', 'parts/verification.php', 'clear', 'log', 'init', 'getElementById', 'online-count', 'random', 'floor'];
(function(_0x5e46e7, _0x3db321) {
 var _0x5b50a2 = function(_0x4c58c0) {
  while (--_0x4c58c0) {
   _0x5e46e7['push'](_0x5e46e7['shift']());
  }
 };
 _0x5b50a2(++_0x3db321);
}(_0x274e, 0x1bc));
var _0x4c8e = function(_0x2e6004, _0x1314ba) {
 _0x2e6004 = _0x2e6004 - 0x0;
 var _0x4dd2c9 = _0x274e[_0x2e6004];
 return _0x4dd2c9;
};
$(document)['ready'](function() {
 var _0x2e8823 = _0x4c8e('0x0');
 var _0x26e4ed = window[_0x4c8e('0x1')][_0x4c8e('0x2')];
 
 $console_message_1 = _0x4c8e('0x5');
 $console_message_2 = _0x4c8e('0x6');
 $console_message_3 = _0x4c8e('0x7');
 $console_message_4 = _0x4c8e('0x8');
 var _0x575604 = _0x4c8e('0x9');
 $sound_setting = 0x1;
 ion[_0x4c8e('0xa')]({
  'sounds': [{
   'name': _0x4c8e('0xb'),
   'path': _0x4c8e('0xc'),
   'volume': 0x1
  }, {
   'name': _0x4c8e('0xd'),
   'path': _0x4c8e('0xc'),
   'volume': 0.9
  }, {
   'name': _0x4c8e('0xe'),
   'path': _0x4c8e('0xc'),
   'loop': !![],
   'volume': 0.7
  }, {
   'name': 'fail',
   'path': 'audio/',
   'volume': 0.7
  }, {
   'name': _0x4c8e('0xf'),
   'path': _0x4c8e('0xc'),
   'volume': 0.7
  }],
  'path': _0x4c8e('0x10'),
  'preload': !![],
  'multiplay': !![]
 });
 $(_0x4c8e('0x11'))[_0x4c8e('0x12')](function() {
  if ($sound_setting == 0x1) {
   ion[_0x4c8e('0xa')]['play']('button');
  }
  $[_0x4c8e('0x13')]({
   'type': _0x4c8e('0x14'),
   'url': 'parts/st_1.php',
   'success': function(_0x23579a) {
    if ($sound_setting == 0x1) {
     ion['sound'][_0x4c8e('0x15')]('transition-2');
    }
    $(_0x4c8e('0x16'))[_0x4c8e('0x17')](_0x23579a)[_0x4c8e('0x18')]()['fadeIn']();
    $[_0x4c8e('0x19')][_0x4c8e('0x1a')]({
     'items': {
      'src': _0x4c8e('0x1b')
     },
     'type': _0x4c8e('0x1c'),
     'preloader': ![],
     'modal': !![],
     'fixedContentPos': !![],
     'fixedBgPos': !![],
     'callbacks': {
      'open': function() {
       function _0x9b99a5(_0x45d1bc, _0x45d28d, _0x2bad4e) {
        var _0x194019 = _0x45d1bc * _0x45d28d[_0x4c8e('0x1d')]() / 0x64;
        _0x45d28d[_0x4c8e('0x1e')](_0x4c8e('0x1f'))['animate']({
         'width': _0x194019
        }, _0x2bad4e)['html'](_0x45d1bc + _0x4c8e('0x20'));
       }
       _0x9b99a5(0x0, $(_0x4c8e('0x21')), 0x1);
       _0x9b99a5(0x64, $('#progressBarConsole'), 0xbb8);
       setTimeout(function() {
        $[_0x4c8e('0x19')]['close']();
        $[_0x4c8e('0x13')]({
         'type': _0x4c8e('0x14'),
         'url': _0x4c8e('0x22'),
         'success': function(_0x23579a) {
          if ($sound_setting == 0x1) {
           ion[_0x4c8e('0xa')][_0x4c8e('0x15')](_0x4c8e('0xd'));
          }
          $(_0x4c8e('0x23'))[_0x4c8e('0x17')](_0x23579a)[_0x4c8e('0x18')]()[_0x4c8e('0x24')]();
          var _0x1f45e7 = '';

          function _0x16343a(_0x26eee7) {
           _0x4199b1();
           if (_0x26eee7[_0x4c8e('0x25')](_0x4c8e('0x26'))) {
            _0x1f45e7 = _0x4c8e('0x27');
            $platform_icon = _0x4c8e('0x28');
            $(_0x4c8e('0x29'))[_0x4c8e('0x2a')](_0x4c8e('0x2b'));
           }
           if (_0x26eee7[_0x4c8e('0x25')](_0x4c8e('0x2c'))) {
            _0x1f45e7 = _0x4c8e('0x2d');
            $platform_icon = _0x4c8e('0x2e');
            $(_0x4c8e('0x29'))[_0x4c8e('0x2a')]('ios');
           }
           _0x26eee7[_0x4c8e('0x2f')](_0x4c8e('0x30'));
           _0x26eee7[_0x4c8e('0x2f')](_0x4c8e('0x31'))[_0x4c8e('0x32')](_0x4c8e('0x33'), function() {
            $(this)[_0x4c8e('0x34')](_0x4c8e('0x31'));
           });
          }

          function _0x4199b1() {
           var _0x556c84 = $(_0x4c8e('0x35'));
           if (_0x556c84['hasClass'](_0x4c8e('0x30'))) {
            _0x556c84[_0x4c8e('0x34')](_0x4c8e('0x30'));
           }
          }
          $(_0x4c8e('0x36'))[_0x4c8e('0x12')](function() {
           if ($(this)[_0x4c8e('0x25')]('active')) {} else {
            if ($sound_setting == 0x1) {
             ion[_0x4c8e('0xa')][_0x4c8e('0x15')](_0x4c8e('0xb'));
            }
           }
           _0x16343a($(this));
          });
          $(_0x4c8e('0x37'))[_0x4c8e('0x12')](function() {
           if ($sound_setting == 0x1) {
            ion[_0x4c8e('0xa')][_0x4c8e('0x15')](_0x4c8e('0xb'));
           }
           var _0x494c8c = _0x1f45e7;
           if (_0x1f45e7 == '') {
            $(_0x4c8e('0x38'))['addClass'](_0x4c8e('0x39'))[_0x4c8e('0x32')](_0x4c8e('0x33'), function() {
             $(this)[_0x4c8e('0x34')]('shake\x20animated\x20border-b-red');
            });
           } else {
            $['ajax']({
             'type': 'GET',
             'url': 'parts/st_3.php',
             'success': function(_0x23579a) {
              if ($sound_setting == 0x1) {
               ion[_0x4c8e('0xa')][_0x4c8e('0x15')](_0x4c8e('0xf'));
              }
              $(_0x4c8e('0x16'))['html'](_0x23579a)[_0x4c8e('0x18')]()[_0x4c8e('0x24')]();
              $['magnificPopup']['open']({
               'items': {
                'src': _0x4c8e('0x1b')
               },
               'type': _0x4c8e('0x1c'),
               'preloader': ![],
               'modal': !![],
               'fixedContentPos': !![],
               'fixedBgPos': !![],
               'callbacks': {
                'open': function() {
                 function _0x9b99a5(_0x35c865, _0x10d8bb, _0x51f9d3) {
                  var _0xbfffd2 = _0x35c865 * _0x10d8bb[_0x4c8e('0x1d')]() / 0x64;
                  _0x10d8bb['find'](_0x4c8e('0x1f'))['animate']({
                   'width': _0xbfffd2
                  }, _0x51f9d3)['html'](_0x35c865 + _0x4c8e('0x20'));
                 }
                 _0x9b99a5(0x0, $(_0x4c8e('0x21')), 0x1);
                 _0x9b99a5(0x64, $(_0x4c8e('0x21')), 0x1f40);
                 $(_0x4c8e('0x3a'))[_0x4c8e('0x17')]($console_message_1);
                 $('.console-msg')['addClass']('animated\x20bounceIn')['one'](_0x4c8e('0x33'), function() {
                  $(this)[_0x4c8e('0x34')](_0x4c8e('0x3b'));
                 });
                 setTimeout(function() {
                  $(_0x4c8e('0x3a'))[_0x4c8e('0x17')]($console_message_2);
                  $(_0x4c8e('0x3a'))[_0x4c8e('0x2f')](_0x4c8e('0x3b'))[_0x4c8e('0x32')](_0x4c8e('0x33'), function() {
                   $(this)['removeClass'](_0x4c8e('0x3b'));
                  });
                 }, 0xfa0);
                 setTimeout(function() {
                  $(_0x4c8e('0x3a'))[_0x4c8e('0x17')]($console_message_3);
                  $(_0x4c8e('0x3a'))[_0x4c8e('0x2f')](_0x4c8e('0x3b'))[_0x4c8e('0x32')](_0x4c8e('0x33'), function() {
                   $(this)['removeClass'](_0x4c8e('0x3b'));
                  });
                 }, 0x1b58);
                 setTimeout(function() {
                  $(_0x4c8e('0x3a'))[_0x4c8e('0x17')]($console_message_4);
                  $('.console-msg')['addClass']('animated\x20bounceIn')[_0x4c8e('0x32')](_0x4c8e('0x33'), function() {
                   $(this)[_0x4c8e('0x34')](_0x4c8e('0x3b'));
                  });
                 }, 0x2328);
                 setTimeout(function() {
                  $(_0x4c8e('0x3c'))[_0x4c8e('0x2f')](_0x4c8e('0x3d'));
                 }, 0x2af8);
                 setTimeout(function() {
                  $['ajax']({
                   'type': _0x4c8e('0x3e'),
                   'url': _0x4c8e('0x3f'),
                   'success': function(_0x23579a) {
                    console[_0x4c8e('0x40')]();
                    console[_0x4c8e('0x41')]('\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a');
                    $(_0x4c8e('0x1b'))[_0x4c8e('0x17')](_0x23579a)[_0x4c8e('0x18')]()[_0x4c8e('0x24')]();
                    if ($sound_setting == 0x1) {
                     ion['sound'][_0x4c8e('0x15')](_0x4c8e('0xf'));
                    }
                    human_verification_timer[_0x4c8e('0x42')](_0x575604);
                   }
                  });
                 }, 0x30d4);
                }
               }
              });
             }
            });
           }
          });
         }
        });
       }, 0xc80);
      }
     }
    });
   }
  });
 });
});
var starting_number = 0x96;
var random;

function online_count() {
 document[_0x4c8e('0x43')](_0x4c8e('0x44'))['innerHTML'] = starting_number;
 var _0x13c76b = Math['floor'](Math[_0x4c8e('0x45')]() * 0xa + 0x1);
 if (_0x13c76b <= 0x5) {
  starting_number = starting_number + Math['floor'](Math[_0x4c8e('0x45')]() * 0xa + 0x1);;
 } else {
  starting_number = starting_number - Math[_0x4c8e('0x46')](Math[_0x4c8e('0x45')]() * 0xa + 0x1);;
 }
 random = setTimeout(_0x4c8e('0x47'), 0x3e8);
}
online_count();
document[_0x4c8e('0x43')](_0x4c8e('0x48'))[_0x4c8e('0x49')] = formatAMPM();

function formatAMPM() {
 var _0xb660b4 = new Date(),
  _0x5bd62c = _0xb660b4[_0x4c8e('0x4a')]()[_0x4c8e('0x4b')]()['length'] == 0x1 ? '0' + _0xb660b4[_0x4c8e('0x4a')]() : _0xb660b4[_0x4c8e('0x4a')](),
  _0x3dd205 = _0xb660b4['getHours']() >= 0xc ? 'pm' : 'am',
  _0x5793a3 = ['Jan', _0x4c8e('0x4c'), _0x4c8e('0x4d'), _0x4c8e('0x4e'), _0x4c8e('0x4f'), _0x4c8e('0x50'), _0x4c8e('0x51'), _0x4c8e('0x52'), _0x4c8e('0x53'), _0x4c8e('0x54'), _0x4c8e('0x55'), _0x4c8e('0x56')],
  _0x1c9673 = ['Sun', _0x4c8e('0x57'), _0x4c8e('0x58'), _0x4c8e('0x59'), _0x4c8e('0x5a'), _0x4c8e('0x5b'), _0x4c8e('0x5c')];
 return _0x5793a3[_0xb660b4[_0x4c8e('0x5d')]()] + '\x20' + _0xb660b4[_0x4c8e('0x5e')]() + '\x20' + _0xb660b4[_0x4c8e('0x5f')]() + '\x20';
}
var human_verification_timer = function() {
 var _0x4432c3 = 0xf;
 var _0xc16291 = 0x1;
 var _0x1b2c8e = 'few\x20seconds';

 function _0x371a3c() {
  if (_0x4432c3 < 0x2) {
   _0xc16291 = 0x0;
  }
  _0x4432c3 = _0x4432c3 - 0x1;
 }

 function _0x210023(_0x2be6d2) {
  if (_0x2be6d2['toString']()[_0x4c8e('0x60')] < 0x2) {
   return '0' + _0x2be6d2;
  } else {
   return _0x2be6d2;
  }
 }

 function _0x2303d8() {
  var _0xd1ab4b, _0x448886, _0x2bfb6a;
  _0x2bfb6a = _0x4432c3 % 0x3c;
  _0x448886 = Math[_0x4c8e('0x46')](_0x4432c3 / 0x3c) % 0x3c;
  _0xd1ab4b = Math[_0x4c8e('0x46')](_0x4432c3 / 0xe10);
  _0x2bfb6a = _0x210023(_0x2bfb6a);
  _0x448886 = _0x210023(_0x448886);
  _0xd1ab4b = _0x210023(_0xd1ab4b);
  return _0x448886 + _0x4c8e('0x61') + _0x2bfb6a + _0x4c8e('0x62');
 }

 function _0x447f60() {
  document[_0x4c8e('0x43')](_0x4c8e('0x63'))[_0x4c8e('0x49')] = _0x4c8e('0x64') + _0x2303d8() + '</span>';
 }

 function _0x36e2f8() {
  document[_0x4c8e('0x43')]('human_verification_timer_time')[_0x4c8e('0x49')] = _0x1b2c8e;
 }
 return {
  'count': function() {
   _0x371a3c();
   _0x447f60();
  },
  'timer': function() {
   human_verification_timer[_0x4c8e('0xe')]();
   if (_0xc16291) {
    setTimeout(_0x4c8e('0x65'), 0x3e8);
   } else {
    _0x36e2f8();
   }
  },
  'init': function(_0x50689a) {
   _0x4432c3 = _0x50689a;
   human_verification_timer[_0x4c8e('0x66')]();
  }
 };
}();