document.title = 'Bernard Quy Nguyen';



/**************   HEADER  ***************/
var HEADER = document.createElement('div');
HEADER.id = 'header';
container.append(HEADER);

var LOGO = document.createElement('div');
LOGO.id = 'logo';
LOGO.innerText = 'BQN';
HEADER.append(LOGO);

// NAVIGATION
var NAVBAR = document.createElement('div');
NAVBAR.id = 'nav';
HEADER.append(NAVBAR);
 
var HOME = document.createElement('button');
HOME.id = 'home-button';
HOME.className = 'home nav-buttons';
HOME.innerText = 'HOME';
NAVBAR.append(HOME);

var EDU = document.createElement('button');
EDU.id = 'edu-button';
EDU.className = 'edu nav-buttons';
EDU.innerText = 'EDUCATION';
NAVBAR.append(EDU);

var EXP = document.createElement('button');
EXP.id = 'exp-button';
EXP.className = 'exp nav-buttons';
EXP.innerText = 'EXPERIENCE';
NAVBAR.append(EXP);

var PROJ = document.createElement('button');
PROJ.id = 'proj-button';
PROJ.className = 'proj nav-buttons';
PROJ.innerText = 'PROJECTS';
NAVBAR.append(PROJ);

var RAND = document.createElement('button');
RAND.id = 'rand-button';
RAND.className = 'rand nav-buttons';
RAND.innerText = 'RANDOM';
NAVBAR.append(RAND);



/****************   BODY  *****************/
var MAIN = document.createElement('div');
MAIN.id = 'main';
container.append(MAIN);

var home = document.createElement('div');
home.id = 'home-content';
home.className = 'home content';
home.innerText = 'home';
MAIN.append(home);

var edu = document.createElement('div');
edu.id = 'edu-content';
edu.className = 'edu content';
edu.innerText = 'education';
MAIN.append(edu);

var edu1 = document.createElement('div');
edu1.innerText == 'WILLAMETTE';
edu.append(edu1);

var edu2 = document.createElement('div');
edu2.innerText == 'COLUMBIA';
edu.append(edu2);


var exp = document.createElement('div');
exp.id = 'exp-content';
exp.className = 'exp content';
exp.innerText = 'experience';
MAIN.append(exp);

var proj = document.createElement('div');
proj.id = 'proj-content';
proj.className = 'proj content';
proj.innerText = 'projects';
MAIN.append(proj);

var rand = document.createElement('div');
rand.id = 'rand-content';
rand.className = 'rand content';
rand.innerText = 'random';
MAIN.append(rand);

$('.home').click(function(e){
    $(document).scrollTop(0)
  });

$('.edu').click(function(e){
    $(document).scrollTop(410)
  });

$('.exp').click(function(e){
    $(document).scrollTop(820)
  });

$('.proj').click(function(e){
    $(document).scrollTop(1230)
  });

$('.rand').click(function(e){
    $(document).scrollTop(1640);
});