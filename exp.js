var div = document.getElementById('exp-content');

function createSlide(id, job, company, time){
    var slide = document.createElement('div');
    slide.id = id;
    slide.className = 'exp slide';
    div.append(slide);

    var info = document.createElement('div');
    info.id = id+'-info';
    info.className = 'slide-info';
    slide.append(info);

    var header = document.createElement('div');
    header.className = 'slide-title';
    header.innerText = job;
    info.append(header);

    var employer = document.createElement('div');
    employer.className = 'subtitle';
    employer.innerText = company;
    info.append(employer);

    var years = document.createElement('div');
    years.className = 'subtitle';
    years.innerText = '(' + time + ')';
    info.append(years);
}

createSlide('codesmith', 'Summer Academy of Code', 'Codesmith, LA', 'August 2017');
createSlide('witstech', 'Tech Shop Assistant', 'Willamette Integrated Technology Services (WITS)', 'August 2014 - May 2016');
createSlide('witshelp', 'Help Desk Technician', 'Willamette Integrated Technology Services (WITS)', 'December 2013 - May 2016');


function addDetails(box, text, link){
    var box = document.getElementById(box+'-info');

    var div = document.createElement('div');
    div.className = (link == null) ? 'bullets' : 'bullets hyperlink';
    div.innerText = text;

    div.addEventListener("click", function(){
        window.open(link);
    });

    box.append(div);
}

addDetails('codesmith', 'Full Scholarship Recipient');
addDetails('codesmith', '1-week crash course on full-stack web development featuring Javascript, HTML, CSS, React.JS, and Node.JS.');
addDetails('codesmith', 'Final Project (Incomplete)', 'https://run-a-way.herokuapp.com');

addDetails('witstech', 'Repair university-owned equipment');
addDetails('witstech', 'Deploy custom images and software to computers for use by students, faculty, and staff.');
addDetails('witstech', 'Assist in the construction, maintenance, and repair of various technology built into facilities across campus.');

addDetails('witshelp', 'Provide walk-in and over-the-phone tech support for the Willamette community.');
addDetails('witshelp', 'Troubleshoot and repair computers and A/V equipment.');
addDetails('witshelp', 'Deliver and set up A/V equipment for classes and university events.');
addDetails('witshelp', 'Manage equipment inventory and associated database.');
addDetails('witshelp', 'Manage, lead, and train student employees through day-to-day operations.')









$(document).ready(function(){
    $('.exp').slick({
      dots: true,
    });
  });