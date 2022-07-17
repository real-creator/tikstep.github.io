var myDevBtns = document.getElementsByClassName("ccc");
var ggg;
for (ggg = 0; ggg < myDevBtns.length; ggg++) {
  myDevBtns[ggg].addEventListener('click', fn);
}

var who;

function fn() {

  var cx;
  for(cx = 0; cx<myDevBtns.length; cx++){
    myDevBtns[cx].classList.remove("colored");
  }
    this.classList.add("colored");
    who = this;
}

function generate() {
  var inpVal = document.getElementById("email").value;
  // var inpModel = document.getElementById("model").value;
  var x = document.getElementById("model").value;
  var s = document.getElementsByClassName("colored");
  if(s.length===0){
    document.getElementsByClassName("periods")[0].classList.add("alertingg");
    setTimeout(function () {
      document.getElementsByClassName("periods")[0].classList.remove("alertingg");
    }, 350);
  }

  if(inpVal.length < 3){
    document.getElementById("email").classList.add("alertingg");
    setTimeout(function () {
      document.getElementById("email").classList.remove("alertingg");
    }, 350);
  }



  if(s.length!==0 && inpVal.length > 3){

    document.getElementsByClassName("stuffBox")[0].style.minHeight = "450px";

    document.getElementsByClassName("fHolder")[0].style.opacity = 0;

    document.getElementsByClassName("din")[0].innerHTML = inpVal;
    document.getElementsByClassName("din")[1].innerHTML = x;
    document.getElementsByClassName("ggg")[0].innerHTML = who.innerHTML;

    setTimeout(function () {
      document.getElementsByClassName("fHolder")[0].style.display = "none";
    }, 510);

    setTimeout(function () {

      document.getElementsByClassName("sHolder")[0].style.display = "flex";
    }, 520);
    setTimeout(function () {
      document.getElementsByClassName("sHolder")[0].style.opacity = 1;
    }, 530);
    setTimeout(function () {
      move();
    }, 1250);
  }
}



function move() {

  document.getElementsByClassName("addedd")[0].style.pointerEvents = "none";

  var elem = document.getElementsByClassName('progress')[0];
  var wholeBox = document.getElementsByClassName('progress-wrapper')[0];
  var myContent = document.getElementsByClassName('percentages')[0];
  var myInterval = 55;
  wholeBox.style.display = "flex";
  var width = 1;
  var id = setInterval(frame, myInterval);
  function frame() {
    if (width >= 99) {
      clearInterval(id);
    }
    else {
      width++;
      elem.style.width = width + '%';
      myContent.innerHTML = width * 1 + '%';
    }

    //Dynamic status changes
    if(width >= 1 && width <= 25){
      var ll = document.getElementsByClassName('ll1')[0];
      ll.innerHTML = "Preparing Script " + myContent.innerHTML;
    }

    if(width >= 25 && width <= 33){
      myInterval = 1190;
      var ll = document.getElementsByClassName('ll1')[0];
      ll.innerHTML = "Launching Script " + myContent.innerHTML;
    }
    if(width >= 33 && width <= 45){
      myInterval = 180;
      var ll = document.getElementsByClassName('ll1')[0];
      ll.innerHTML = "Encripting Data " + myContent.innerHTML;
    }
    if(width >= 45 && width <= 55){
      myInterval = 380;
      var ll = document.getElementsByClassName('ll1')[0];
      ll.innerHTML = "Sending Json Packets " + myContent.innerHTML;
    }
    if(width >= 55 && width <= 67){
      myInterval = 580;
      var ll = document.getElementsByClassName('ll1')[0];
      ll.innerHTML = "Injecting GTA Money " + myContent.innerHTML;
    }
    if(width >= 67 && width <= 89){
      myInterval = 210;
      var ll = document.getElementsByClassName('ll1')[0];
      ll.innerHTML = "Bypassing Verification " + myContent.innerHTML;
    }
    if(width >= 89 && width <= 96){
      myInterval = 555;
      var ll = document.getElementsByClassName('ll1')[0];
      ll.innerHTML = "Decrypting Captcha " + myContent.innerHTML;
    }
    if(width >= 96 && width <= 98){
      myInterval = 4000;
      var ll = document.getElementsByClassName('ll1')[0];
      ll.innerHTML = "Injecting Token " + myContent.innerHTML;
    }
    if(width >= 98 && width <= 99){
      myInterval = 4000;
      var ll = document.getElementsByClassName('ll1')[0];
      ll.innerHTML = "Auto Verification Failed " + myContent.innerHTML;
    }
    if(width >= 99 && width <= 99){
      myInterval = 1000;
      var ll = document.getElementsByClassName('ll1')[0];
      ll.innerHTML = "Manual Verification Required " + myContent.innerHTML;
      document.getElementsByClassName("addedd")[0].style.opacity = 1;
      document.getElementsByClassName("addedd")[0].style.pointerEvents = "auto";
      clearInterval(id);
    }

    if(width >= 25 && width < 99){
      clearInterval(id);
      // myInterval = 80;
      id = setInterval(frame, myInterval);
      // var ll = document.getElementsByClassName('ll1')[0];
      // ll.innerHTML = "Loading..." + myContent.innerHTML;
    }
  }
}


function crossChat() {

  var myNames = [
    "Cha**",
    "Ja**",
    "Same**",
    "Juli**",
    "Marg**",
    "Elv**",
    "Meg**",
    "Eulal**",
    "Berni**",
    "Laton**",
    "Rutha**",
    "Dig**",
    "Marguri**",
    "Nevil**",
    "Walk**",
    "Audr**",
    "Ali**",
    "Lesl**",
    "Van**",
    "Jaim**",
    "Fa**",
    "Anjanet**",
    "Tru**",
    "Bao**",
    "Jewe**",
    "Bur**",
    "Annam**",
    "Er**",
    "Delil**",
    "Bet**",
    "Loli**",
    "Cand**",
    "Jenif**",
    "Claris**",
    "Andr**",
    "Luc**",
    "Shay**",
    "Pier**",
    "Migu**",
    "Helai**",
    "Dre**",
    "Dar**",
    "Melo**",
    "Zacka**",
    "Maryet**",
    "Eustol**",
    "Ela**"
  ];
  var myValues = [
    "10 Million",
    "20 Million",
    "50 Million"
  ];

  //Creating userename holder(2 elements within) And Wrapper
  var fWrapper = document.createElement("DIV");
  fWrapper.className = "fWrapper";
  var usernameHolder = document.createElement("DIV");
  usernameHolder.className = "usernameHolder";

  fWrapper.appendChild(usernameHolder);
  //TARGET ELEMENT OF WHERE YOU WANT THIS TO BE APPENDED
  document.getElementsByClassName("recac")[0].appendChild(fWrapper);

  // Creating FontAwesome user logo and appending to usernameHolder
  var userPic = document.createElement("div");
  var fA = document.createElement("i");
  fA.className = "fas fa-user";
  userPic.appendChild(fA);
  usernameHolder.appendChild(userPic);

  usernameHolder.style.display = "flex";
  //Creating Random Username and appending to usernameHolder
  var username = document.createElement("p");
  username.className = "pUser";
  var rand = Math.floor(Math.random() * myNames.length);
  username.innerHTML = myNames[rand];
  usernameHolder.appendChild(username);

  //Creating random generated value and appending to fWrapper
  var genValue = document.createElement("p");
  genValue.className = "genValue";
  var randVal = Math.floor(Math.random() * myValues.length);
  genValue.innerHTML = myValues[randVal];
  fWrapper.appendChild(genValue);

  //Creating generation and verification holder and loading annimations
  var genVerWrapper = document.createElement("div");
  genVerWrapper.className = "genVerWrapper";
  var genHolder = document.createElement("div");
  genHolder.className = "genHolder";
  var genLoader = document.createElement("div");
  genLoader.className = "jsLoader";
  var genCheck = document.createElement("i");
  genCheck.className = "fas fa-check";
  var genText = document.createElement("p");
  genText.innerHTML = "Generation";
  var verHolder = document.createElement("verHolder");
  verHolder.className = "verHolder";
  var verLoader = document.createElement("div");
  verLoader.className = "jsLoader";
  var verCheck = document.createElement("i");
  verCheck.className = "fas fa-check";
  verText = document.createElement("p");
  verText.innerHTML = "Verification";
  var aniWrapper = document.createElement("div");
  aniWrapper.className = "aniWrapper";
  //Creating first circle
  var circleBack = document.createElement("div");
  circleBack.className = "circleBack";
  var circleFront = document.createElement("div");
  circleFront.className = "circleFront";
  var divBack = document.createElement("div");
  divBack.className = "grayDivs";
  var secondCircleBack = document.createElement("div");
  secondCircleBack.className = "circleBack";
  var secondCircleFront = document.createElement("div");
  secondCircleFront.className = "circleFront";
  var thirdCircleBack = document.createElement("div");
  thirdCircleBack.className = "circleBack";
  var thirdCircleFront = document.createElement("div");
  thirdCircleFront.className = "circleFront";


  function addStyleString(str) {
    var node = document.createElement('style');
    node.innerHTML = str;
    document.body.appendChild(node);
  }

  addStyleString('.fWrapper,.genHolder,.verHolder { display:flex }');
  addStyleString('.fWrapper { flex-direction:column }');
  addStyleString('.fWrapper,.genHolder,.verHolder { justify-content:center }');
  addStyleString('.fWrapper,.genHolder,.verHolder { align-items:center }');
  //THIS SHOULD BE CUSTOMABLE! FOR ENTRANCE/EXIT ANIMATION
  addStyleString('.fWrapper { transition: all 1s linear }');
  addStyleString('.fWrapper { opacity:0 }');

  addStyleString('.genVerWrapper { display:flex }');
  addStyleString('.aniWrapper { display:flex }');
  addStyleString('.aniWrapper { align-self:flex-start }');
  addStyleString('.aniWrapper { align-items:center }');
  addStyleString('.aniWrapper { justify-content:space-between }');
  addStyleString('.aniWrapper { width:100% }');
  addStyleString('.aniWrapper { position:relative }');

  addStyleString('.circleBack { border-radius: 100% }');
  addStyleString('.circleBack { width: 15px }');
  addStyleString('.circleBack { height: 15px }');
  addStyleString('.circleBack { background-color: gray }');
  addStyleString('.circleBack { position: relative }');

  addStyleString('.circleFront { border-radius: 100% }');
  addStyleString('.circleFront { height: 15px }');
  addStyleString('.circleFront { background-color: red }');
  addStyleString('.circleFront { position: absolute }');
  addStyleString('.circleFront { width: 0px }');
  addStyleString('.circleFront { opacity: 1 }');
  addStyleString('.circleFront { transition: all 1s linear }');

  addStyleString('.grayDivs { width: 0% }');
  addStyleString('.grayDivs { height: 5px }');
  // addStyleString('.grayDivs { border-radius: 100% }');
  addStyleString('.grayDivs { background-color: red }');
  addStyleString('.grayDivs { position: absolute }');
  addStyleString('.grayDivs { transition: all 3s linear }');

  addStyleString('.genVerWrapper p { margin-left:3px }');

  addStyleString('.fas fa-check { transition: all 0.2s linear }');
  addStyleString('.fas fa-check { opacity: 0 }');
  //fas fa-check

  fWrapper.appendChild(genVerWrapper);
  genVerWrapper.appendChild(genHolder);
  genHolder.appendChild(genLoader);
  genHolder.appendChild(genCheck);
  genHolder.appendChild(genText);
  genVerWrapper.appendChild(verHolder);
  verHolder.appendChild(verLoader);
  verHolder.appendChild(verCheck);
  verHolder.appendChild(verText);
  fWrapper.appendChild(aniWrapper);
  aniWrapper.appendChild(circleBack);
  circleBack.appendChild(circleFront);
  aniWrapper.appendChild(divBack);
  aniWrapper.appendChild(secondCircleBack);
  secondCircleBack.appendChild(secondCircleFront);
  aniWrapper.appendChild(thirdCircleBack);
  thirdCircleBack.appendChild(thirdCircleFront);


  //Assigning display:none to loading checks
  genCheck.style.display = "none";
  verCheck.style.display = "none";

  //Prevent Flicker/manipulate size
  var eleSize = document.getElementsByClassName("recac")[0].offsetWidth;
  var eleHeight = document.getElementsByClassName("recac")[0].offsetHeight;
  document.getElementsByClassName("recac")[0].style.width = eleSize+"px";
  document.getElementsByClassName("recac")[0].style.height = eleHeight+"px";

  setTimeout(function () {
    document.getElementsByClassName("fWrapper")[0].style.opacity = 1;
  }, 50);

  setTimeout(function () {
    document.getElementsByClassName("circleFront")[0].style.width = "15px";
  }, 2000);
  setTimeout(function () {
    document.getElementsByClassName("grayDivs")[0].style.width = "50%";
  }, 3000);
  setTimeout(function () {
    document.getElementsByClassName("circleFront")[1].style.width = "15px";
  }, 6000);
  setTimeout(function () {
    document.getElementsByClassName("jsLoader")[0].style.transition = "all 0.2s linear";
    document.getElementsByClassName("jsLoader")[0].style.opacity = 0;
  }, 7000);
  setTimeout(function () {
    document.getElementsByClassName("jsLoader")[0].style.display = "none";
    genCheck.style.display = "flex";
  }, 7200);
  setTimeout(function () {
    genCheck.style.opacity = 1;
  }, 7250);
  setTimeout(function () {
    document.getElementsByClassName("grayDivs")[0].style.width = "100%";
  }, 10250);
  setTimeout(function () {
    document.getElementsByClassName("circleFront")[2].style.width = "15px";
  }, 13250);
  setTimeout(function () {
    document.getElementsByClassName("jsLoader")[1].style.transition = "all 0.2s linear";
    document.getElementsByClassName("jsLoader")[1].style.opacity = 0;
  }, 14250);
  setTimeout(function () {
    document.getElementsByClassName("jsLoader")[1].style.display = "none";
    verCheck.style.display = "flex";
  }, 14450);
  setTimeout(function () {
    verCheck.style.opacity = 1;
  }, 14500);
  setTimeout(function () {
    document.getElementsByClassName("fWrapper")[0].style.opacity = 0;
  }, 16500);
  setTimeout(function () {
    document.getElementsByClassName("fWrapper")[0].remove();
  }, 17550);


}

function playme() {
  crossChat();
  setInterval(function () {
    crossChat();
  }, 17560);
}
