var div = document.getElementById('edu-content');

function createSlide(school, yrSt, yrEnd){
  var slide = document.createElement('div');
  slide.id = school;
  slide.className = 'edu slide';
  div.append(slide);

  var info = document.createElement('div');
  info.id = school+'-info';
  info.className = 'slide-info';
  slide.append(info);

  var title = document.createElement('div');
  title.className = 'slide-title';
  title.innerText = school + " University";
  info.append(title);

  var years = document.createElement('div');
  years.classname = 'subtitle';
  years.innerText = '(August ' + yrSt + ' - May ' + yrEnd + ')';
  info.append(years);

  var details = document.createElement('div');
  details.className = 'slide-details';
  details.id = school+'-details';
  info.append(details);
}

var columbia = createSlide('Columbia',2016,2018);
var willamette = createSlide('Willamette',2013,2016);

function addMajor(univ,maj,cw,majMin){
  var majorTitle = document.createElement('div');
  majorTitle.className = 'major-title';
  majorTitle.innerText = (majMin) ? 'Major: ' + maj : 'Minor: ' + maj;

  var coursework = document.createElement('div');
  coursework.className = 'coursework';
  coursework.innerText = 'Coursework: ' + cw;
  majorTitle.append(coursework);
  document.getElementById(univ+'-details').append(majorTitle);
}

addMajor('Willamette', 'Physics', 'Classical Mechanics, Quantum Mechanics, Electromagnetics, Cosmology', true);
addMajor('Willamette', 'Computer Science', 'Data Structures, Simulation of Computer and Natural Systems, Machine Learning', false);
addMajor('Willamette', 'Mathematics', 'Linear Algebra, Differential Equations', false);

addMajor('Columbia', 'Electrical Engineering', 'Electronic Circuits, Communication Systems, Digital Systems, Fundamentals of Computer Systems, Solid State Devices & Materials', true);

$(document).ready(function(){
    $('.edu').slick({
      dots: true,
      autoplay: true,
      autoplaySpeed: 4324
    });
  });