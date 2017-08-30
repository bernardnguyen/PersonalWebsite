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
addParagraph(desktop, 'After a semester of fixing laptops, I was ready to tackle one of my long-time goals: building my own computer. This was something I\'ve always wanted to do, and I finally had the confidence, capital, and skills to make the investment. I couldn\'t just build any old computer, though. As a Mac user, I wanted to run OS X, but also wanted Windows to play games that weren\'t available for the Mac platform. "Why stop there?" I asked myself. I attempted to triple-boot Linux as well, but eventually scrapped it as Linux required special drivers to be used with my Nvidia graphics card. Regardless, if you ask anybody that knows me, this computer is my baby and I love it more than any of my other possessions.');

addProject('coffee', 'A Simple Coffee Table', '(February 7, 2016)');
var coffee = document.getElementById('coffee-details');
addParagraph(coffee, 'The house we were renting in Oregon was unfurnished. This was very new to me, as a college student where all my previous dwellings had a bed, dresser, and desk included. As someone planning to move to New York in a year, I decided to buy the cheapest furniture possible, which included a shelf/dresser made of cinder blocks and some smooth MDF boards.');
addParagraph(coffee, 'Our living room, however, was pretty nice. I had installed a ceiling-mounted projector with a tablecloth screen and a nice bluetooth speaker setup. Our couch was comfortable, but fairly small for four roommates. We were in desparate need of a footrest/coffee table, and cinderblocks/plywood just wasn\'t going to cut it. So I went to Home Depot and made a table out of a couple 2x4s and a pack of outdoor balusters.');

addProject('research', 'Searching for a Discovery', '(May 2016)');
var research = document.getElementById('research-details');
addParagraph(research, 'In my final year at Willamette, I took a class called Advanced Data Analysis and Simulation (ADAS), where we learned to use Python to crunch numbers and process data from physics experiments. The course was taught by one of my advisors and favorite professors, Dr. Rick Watkins. The final project involved students working on independent projects to showcase what they\'ve learned, but I had no idea what I wanted to do. So when Dr. Watkins approached me with a project to assist with his research, I was ecstatic. He was studying a pulsating variable star, which expanded and contracted with fairly irregular frequency.');
addParagraph(research, 'Pulsating stars usually oscillate fairly regularly with a single fundamental frequency, but rarely oscillate with two different fundamental frequencies (and linear combinations of those two). The star that Dr. Watkins was studying oscillated with at least THREE different fundamental frequencies. My task was to use his data and Fourier analysis to try and find a fourth fundamental frequency, which would have made the star the first discovery of its kind. Using Fourier transforms, I wrote an algorithm to determine whether each new frequency was a fundamental frequency, or simply a linear combination of known fundamental frequencies. Unfortunately I found that the star only oscillated with the three known fundamental frequencies, but working with Dr. Watkins was still a fun and educational experience to end my Willamette career.');

addProject('pi', 'Visualizing the Simulation of Pi','(Sometime in March 2017)');
var pi = document.getElementById('pi-details');
addParagraph(pi, 'I was bored one day, procrastinating on an assignment, and decided to write a Java app to simulate pi. This was something Professor Levenick once did during a lecture in his simulations class at Willamette. The basic idea is to randomly throw "darts" at a square board, and find the percentage of dots that land within the circle. Because the area of a circle is $$\\pi r^2,$$ and the square\'s area is $$2r \\cdot 2r = 4r^2,$$ the percentage of dots that land within the circle is $$Ratio = \\frac{\\pi r^2}{4 r^2} = \\frac{\\pi}{4},$$ so $$\\pi = 4 \\cdot Ratio.$$');
addParagraph(pi, 'The app starts with an empty square, then "darts" that land within the circle are a light green, and dots outside are a darker teal. The total number of "darts" are displayed on the top right, along with the current value of pi.')

addProject('balloons', 'A Cloud Chamber for Space', '(Spring 2017)');
var balloon = document.getElementById('balloons-details');
addParagraph(balloon, 'Every friday afternoon during my spring semester at Columbia University was spent attending Columbia Space Initiative (CSI) meetings, and participating with the high-altitude balloons team. Our goal was to design a cloud chamber, a device to visualize ionized radiation, and attach it to our balloon to record video of the device in space.');
addParagraph(balloon, 'A large part of my participation was with the Arduino payload, with which we wanted to use sensors and a real-time clock to record environmental data around the balloon. Through this process, I learned to code using Arduino and the various sensor libraries, as well as practiced my soldering skills (which I still need to work a lot on).');
addParagraph(balloon, 'Unfortunately, the construction of the cloud chamber wasn\'t lining up with our timeline, and we quickly pivoted to sending up a cup anemometer instead. Unfortunately again, weather conditions during our projected launch date prohibited us from launching that payload as well (the balloon would\'ve landed in the ocean), and we had to postpone both launches to the coming school year. Either way, I look forward to working with this team again and hopefully pulling off both launches, as well as a potential third, before the school year ends.')


addProject('beer', 'Brewing My Own', '(Summer 2017)');
var beer = document.getElementById('beer-details');
addParagraph(beer, 'My love of beer can probably be attributed to my cousin, Kenji. This summer, I recall waking up from a dream in which myself and two of my Columbia friends opened a brewery called "Engibeers" (because we\'re engineers... get it? Haha, GOOD one.). It started out as a joke, but I figured it\'d be fun. Why not brew my own?');
addParagraph(beer, 'After doing some minimal research (mostly on reddit\'s brewing subreddit), I decided to purchase a well-recommended kit and brew my own beer. I read that my first batch would likely be bad, and that I should brew a beer that I like, rather than one that may be a little easier. I chose Brooklyn Brewshop\'s chocolate maple porter, a dark beer I would most likely enjoy.');
addParagraph(beer, 'As expected, I didn\'t like my first brew. Though everyone told me it wasn\'t bad, I found the beer to be slightly sour. I described it as "It\'s not bad, but if I tried a six-pack, I probably wouldn\'t buy it again." The beer on its own isn\'t anything to rave about, but that was easily fixed by making chocolate maple porter floats (with vanilla or coffee ice cream). Yum.')

addProject('runaway', 'My First Website', '(Summer 2017)');
var run = document.getElementById('runaway-details');
addParagraph(run, 'Part of the Codesmith Summer Academy of Code was using everything we learned in the first four days to make a final project in the final three days. Because Codesmith emphasized pair programming as a learning tool, we also did the final project with a partner. My partner, Caitlin Westerfield, is an avid runner and frequently uses a website called "mapmyrun". We decided to make a similar application, which would help us practice implementing the Google Maps API.');
addParagraph(run, 'We decided to make an app that would not only allow you to plan your route, but would allow you to animate Google\'s Street View to visualize the run ahead of time. The problem we faced was that Google\'s Street View took forever to load, and we had to choose between loading a new screen every 5 seconds or having the animation be mostly black until the end. I chose neither option, and instead decided to include arrows that allowed the user to jump between their waypoints instead.');
addParagraph(run, 'We were planning on implementing Firebase to allow users to sign in and save their routes, but having only three days, eventually ran out of time. The app isn\'t something I\'m passionate about, and likely won\'t complete, but making Run-A-Way with Caitlin was fun, and I definitely learned a lot.');
var link = document.createElement('div');
link.innerHTML = hyperlink('Run-A-Way', 'https://run-a-way.herokuapp.com') + ' should still be live, but its bugs are probably permanent. (Just hit "Sign in." None of the database functionality is live.) Sorry!';
run.append(link);

addProject('connect', 'Solving Connect 4', '(In Progress)');
var connect = document.getElementById('connect-details');
addParagraph(connect, 'In my final semester at Willamette University, I took a machine learning class. One of the assignments during that class was to make a game against a computer that would get better as we played. One of my upcoming projects is to combine machine learning and web development to make a Connect 4 bot online.');
addParagraph(connect, 'My goal is to have a user play against the machine that will slowly get better. Users can choose between playing against various bots, including a "RandomIdiot", a "MiniMax" strategist, a trained neural network "Master", and a brand new neural network "Dummy".');
var link = document.createElement('div');
link.innerHTML = hyperlink('Connect4Bot', 'https://bernardquynguyen-connect4bot.herokuapp.com') + ' is now live. Currently, the only functional bot is the RandomIdiot, so have fun winning!'
connect.append(link);





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

function hyperlink(str, link){
    var text = str;
    return text.link(link);
}

}