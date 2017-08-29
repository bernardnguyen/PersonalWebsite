var div = document.getElementById('main');

/******* ABOUT *******/
addSectionTitle('Overview');

picWithText('pf', true);
var pf = document.getElementById('pf-details');
addDescription(pf, 'My name is Bernard Nguyen, and I am currently studying to be an electrical engineer. I grew up in Fremont, CA, love to play basketball, eat good food, and play poker with my friends. I made this website to help you get to know all the little things about me.', false);


/****** EDUCATION ******/
addSectionTitle('Education');

var education = document.createElement('div');
education.className = 'slideshow';
div.append(education);

addSlide(education, 'cu');
var cu = document.getElementById('cu-details');
addDescription(cu, 'Columbia University', true);
addDescription(cu, '(August 2016-May 2018)', true);
addDescription(cu, 'Major: Electrical Engineering', true);

addSlide(education, 'wu');
var wu = document.getElementById('wu-details');
addDescription(wu, 'Willamette University', true);
addDescription(wu, '(August 2013-May 2016)', true);
addDescription(wu, 'Major: Physics', true);
addDescription(wu, 'Minors: Math and Computer Science', true);


/************** EXPERIENCE *************/
addSectionTitle('Work Experience');

var jobs = document.createElement('div');
jobs.className = 'slideshow';
div.append(jobs);

addSlide(jobs, 'helpdesk');
var help = document.getElementById('helpdesk-details');
addDescription(help, 'Help Desk Technician', true);
addDescription(help, 'Willamette Integrated Technology Services (WITS)', true);
addDescription(help, '(December 2013-May 2016)', true);

addSlide(jobs, 'techshop');
var tech = document.getElementById('techshop-details');
addDescription(tech, 'Tech Shop Assistant', true);
addDescription(tech, 'Willamette Integrated Technology Services (WITS)', true);
addDescription(tech, '(August 2014-May 2016)', true);









$(document).ready(function(){
    $('.slideshow').slick({
      dots: true,
      autoplay: true,
      autoplaySpeed: 4000
    });
  });

/******************  FORMATTING FUNCTIONS  ***************/

function picWithText (name, left){
    var box = document.createElement('div');
    box.className = 'details sidePic';
    div.append(box);

    var image = document.createElement('div');
    image.id = name;
    image.className = 'floatImage';
    
    var details = document.createElement('div');
    details.id = name + '-details';
    details.className = 'sideText';

    if (left) {
        box.append(image);
        box.append(details);
    } else {
        box.append(details);
        box.append(image);
    }
}

function addDescription(box, stuff, slide){
    var paragraph = document.createElement('div');
    paragraph.className = (slide) ? 'slideParagraph' : 'paragraph';
    paragraph.innerText = stuff;
    box.append(paragraph);
}

function addSlide(show, name){
    var slide = document.createElement('div');
    slide.className = 'slide';
    show.append(slide);

    var image = document.createElement('div');
    image.id = name;
    image.className = 'sideImage';
    
    var details = document.createElement('div');
    details.id = name + '-details';
    details.className = 'sideParagraph';

    slide.append(image);
    slide.append(details);
}

function addSectionTitle(name){
    var title = document.createElement('div');
    title.className = 'sectionTitle';
    title.innerText = name;
    div.append(title);
}