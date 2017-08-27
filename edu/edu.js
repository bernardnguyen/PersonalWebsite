if (typeof document != 'undefined'){

var div = document.getElementById('main');

addSchool('Mission San Jose High School', '(September 2009-June 2013)', 'Fremont, CA', true);
addSchool('Willamette', '(August 2013-May 2016)','Salem, OR');
addSchool('Columbia', '(August 2016-May 2018)','New York City, NY');

var wilDets = document.getElementById('Willamette-details');
var colDets = document.getElementById('Columbia-details');

addParagraph(wilDets, 'After high school, I attended Willamette University in Salem, OR. The main reason I chose Willamette University was to participate in the 3-2 engineering program Willamette had to offer. In this program, students from small liberal arts colleges are offered the opportunity to receive a second degree in engineering that wouldn\'t have been possible otherwise. I declared my major in physics by my second year, and added on minors in computer science and mathematics later on.');
addParagraph(wilDets, 'One of my favorite classes offered by Willamette\'s physics department was cosmology. Though the math behind Lorentz transformations and tensor equations were difficult to grasp at first, the concepts regarding general relativity, black holes, and the big bang were incredibly fascinating. Another class I really enjoyed from my time at Willamette was machine learning, greatly due to my professor incorporating game theory into the course. In my third year, I took a lab-centered course called Advanced Techniques in Experimental Physics (ATEP). This was by far my favorite course, where 3-week units were split into exploring and experimenting with the research being conducted by the department\'s various professors. Some topics included biological physics, optics, electronics, and cosmology. Though exploring different fields of physics was fascinating, I had already set my mind on pursuing electrical engineering.');
addParagraph(wilDets, 'If I had to choose the experience from Willamette that impacted my life the most, it was my employment with the IT department, WITS. I\'d argue that more of my time was spent in the WITS offices than class: working, helping out, or even just hanging out. Originally I took the job wanting to learn a valuable life skill: how to fix a computer. After a couple shifts, however, I started to realize how much I loved learning new skills on the job. Working for WITS was my first experience of hands-on learning, and it also provided me with my first experience of work culture. I enjoyed going to work every day, not only because of the new skills to be learned or the exciting problems to be solved throughout the day, but also because I genuinely enjoyed spending time with the people I worked with. It was my experience with WITS that solidified not only my desire to work with technology in the future, but also my desire to find a work environment where I can be a part of a team solving problems bigger than myself.');

addParagraph(colDets, 'The day I got into Columbia was one of the more exciting days of my life. After screwing up my grades in high school, I felt a sort of validation after seeing my name on an acceptance letter from an ivy-league school. After all, this was the type of school my parents have been talking about my whole life. The type of school that could set me up for the rest of my life.');
addParagraph(colDets, 'Switching from physics to electrical engineering was quite the daunting challenge. Prior to Columbia, I had only one experience of electrical engineering: the introductory course required to be accepted into the program. I thoroughly enjoyed taking a course in Solid State Devices & Materials, as it reminded me of physics and the electronics lab we completed in ATEP back at Willamette. Another course I really enjoyed was Introduction to Communication Systems with Professor Kalet. I found his lectures to be interesting and engaging, as we learned about the engineering ingenuity behind various methods of modulation.');
addParagraph(colDets, 'In my second semester at Columbia, I also started to participate much more in the engineering space club, Columbia Space Initiative (CSI). I joined the high-altitude balloons team and looked forward to weekly collaborations to design and build our payload (originally a cloud chamber). One of the payloads I participated a lot in was the Arduino package which included various sensors and a real-time clock to collect live environmental data of the flight. Although weather conditions forced us to postpone our launch to the fall, I feel that I learned a lot from developing the Arduino payload and look forward to what we can accomplish next year.');



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