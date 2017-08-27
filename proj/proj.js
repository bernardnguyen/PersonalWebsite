if (typeof document != 'undefined'){

var div = document.getElementById('main');

/*PROJECT IDEAS:
 * 
 * Desktop
 * Coffee Table
 * Watkins research
 * CSI
 * Pi Visualizer
 * Beer
 * CONNECT 4(?)
 * 
 */

addProject('desktop', 'Building My First Computer', '(Summer 2014)');
var desktop = document.getElementById('desktop-details');
addParagraph(desktop, 'DETAILS');

addProject('coffee', 'A Simple Coffee Table', '(February 7, 2016)');
var coffee = document.getElementById('coffee-details');
addParagraph(coffee, 'DETAILS');

addProject('research', 'Searching for a Discovery', '(May 2016)');
var research = document.getElementById('research-details');
addParagraph(research, 'DETAILS');

addProject('balloons', 'A Cloud Chamber for Space', '(Spring 2017)');
var balloon = document.getElementById('balloons-details');
addParagraph(balloon, 'DETAILS');

addProject('beer', 'Brewing My Own', '(Summer 2017)');
var beer = document.getElementById('beer-details');
addParagraph(beer, 'DETAILS');

addProject('connect', 'Solving Connect 4', '(Coming Soon)');
var connect = document.getElementById('connect-details');
addParagraph(connect, 'DETAILS');








 /**************** FORMATTING ***************/

 /**************** TEXT FORMATTING FUNCTIONS *******************/

function addProject(id, name, time){
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
    title.innerText = name;
    title.className = 'title';
    header.append(title);

    var when = document.createElement('div');
    when.innerText = time;
    when.className = 'subtitle';
    header.append(when);

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