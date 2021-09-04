

var rows = ['first', 'second', 'third'];
var totalChilds = 0;
var selectedGallery = '';
var selectedindex = '';
var selectedElement='';
var randname='';
var balanceval='';

function startRandomizer(){

    window.setTimeout( function(){
  
        var number = Math.floor(Math.random() * 3)
        selectedGallery = rows[number];
        totalChilds = $('#' + selectedGallery + ' .item').length;
        randname = names[ Math.floor(Math.random() *names.length-1)];
        
        selectedindex = Math.floor(Math.random() * totalChilds)-1;
        
        if (number != 2) {    
            selectedElement = $('.item').eq(selectedindex).children().last().attr('src');
            alertify.message('<div style="margin:0;text-align: center;"><p style="margin-top:8px;float:left;">'+randname +' got a game reward</p>'+'<img src="'+selectedElement+'" style="margin-left:5px;width:35px;height:35px;"/></div>').delay(4);
        }
        else{
            balanceval = $('.balance').eq(selectedindex).children('span').text();
            alertify.message('<div style="margin:0;text-align: center;"><p style="margin-top:8px;float:left;">'+randname+' transferd '+balanceval+' UC </p>'+'<img src="img/uc.png" style="margin-left:5px;width:35px;height:35px;"/></div>').delay(4);
        }
        
      startRandomizer();
  
    }, Math.random() * 8000 + 2000); // From 10 to 110 secconds
  
  } 
  
  startRandomizer();

