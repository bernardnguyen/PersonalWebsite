if (typeof document != 'undefined'){

var div = document.getElementById('main');

addSchool('Mission San Jose High School', '(September 2009-June 2013)', 'Fremont, CA', true);
addSchool('Willamette', '(August 2013-May 2016)','Salem, OR');
addSchool('Columbia', '(August 2016-May 2018)','New York City, NY');

var wilDets = document.getElementById('Willamette-details');
var colDets = document.getElementById('Columbia-details');

addParagraph(wilDets, 'INTRO PARAGRAPH');
addParagraph(wilDets, 'PARAGRAPH ABOUT STUDIES AND 3-2');
addParagraph(wilDets, 'PARAGRAPH ABOUT WITS');
addParagraph(wilDets, 'SMALL PARAGRAPH ABOUT RESEARCH');

addParagraph(colDets, 'INTRO PARAGRAPH');
addParagraph(colDets, 'PARAGRAPH ABOUT EE');
addParagraph(colDets, 'SMALL PARAGRAPH ABOUT CSI');



/**************** TEXT FORMATTING FUNCTIONS *******************/

function addSchool(univ, time, location, hs=false){
    var image = document.createElement('div');
    image.id = (hs) ? 'msjhs' : univ;
    image.className = 'image';
    div.append(image);

    var box = document.createElement('div');
    box.className = 'details';
    div.append(box);

    var header = document.createElement('div');
    header.className = 'header';
    box.append(header);

    var name = document.createElement('div');
    name.innerText = (hs) ? univ : univ + ' University';
    name.className = 'title';
    header.append(name);

    var city = document.createElement('div');
    city.innerText = location;
    city.className = 'subtitle';
    header.append(city);

    var attendance = document.createElement('div');
    attendance.innerText = time;
    attendance.className = 'subtitle';
    header.append(attendance);

    var details = document.createElement('div');
    details.id = (hs) ? 'msjhs-details' : univ+'-details';
    details.className = 'paragraph';
    box.append(details);
}

function addParagraph(div, text){    
    var paragraph = document.createElement('div');
    paragraph.innerText = text;
    div.append(paragraph);
}

}