if (typeof document != 'undefined'){

var div = document.getElementById('main');


/*********** HELP DESK ***********/

addExperience('witshelp', 'Help Desk Technician', 'Willamette Integrated Technology Services (WITS)', '(December 2013-May 2016)');
var help = document.getElementById('witshelp-details');
addParagraph(help, 'HELP DESK STUFF');
addParagraph(help, 'HELP DESK STUFF');
addParagraph(help, 'HELP DESK STUFF');


/************* TECH SHOP **************/

addExperience('witstech', 'Tech Shop Assistant', 'Willamette Integrated Technology Services (WITS)', '(August 2014-May 2016)');
var tech = document.getElementById('witstech-details');
addParagraph(tech, 'TECH SHOP STUFF');
addParagraph(tech, 'TECH SHOP STUFF');
addParagraph(tech, 'TECH SHOP STUFF');


/************* WUSTL **************/

addExperience('wustl', 'Introduction to Electrical Engineering', 'Washington University in St. Louis', '(December 2014-January 2015)');
var wustl = document.getElementById('wustl-details');
addParagraph(wustl, 'JTERM');
addParagraph(wustl, 'JTERM');
addParagraph(wustl, 'JTERM');


/********** CODESMITH **************/

addExperience('codesmith', 'Summer Academy of Code', 'Codesmith, LA', '(August 2017)');
var code = document.getElementById('codesmith-details');
addParagraph(code, 'CODESMITH STUFF');
addParagraph(code, 'CODESMITH STUFF');
addParagraph(code, 'CODESMITH STUFF');















/**************** TEXT FORMATTING FUNCTIONS *******************/

function addExperience(id, job, employer, time){
    var image = document.createElement('div');
    image.id = id;
    image.className = 'image';
    div.append(image);

    var box = document.createElement('div');
    box.className = 'details';
    div.append(box);

    var header = document.createElement('div');
    header.className = 'header';
    box.append(header);

    var title = document.createElement('div');
    title.innerText = job;
    title.className = 'title';
    header.append(title);

    var boss = document.createElement('div');
    boss.innerText = employer;
    boss.className = 'subtitle';
    header.append(boss);

    var attendance = document.createElement('div');
    attendance.innerText = time;
    attendance.className = 'subtitle';
    header.append(attendance);

    var details = document.createElement('div');
    details.id = id+'-details';
    details.className = 'paragraph';
    box.append(details);
}

function addParagraph(div, text){    
    var paragraph = document.createElement('div');
    paragraph.innerText = text;
    div.append(paragraph);
}

}