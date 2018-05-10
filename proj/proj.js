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
 * CONNECT 4
 * 
 */

addProject('overview', 'Overview', '');
var overview = document.getElementById('overview-details');
addParagraph(overview, 'This page contains a summary of all sorts of projects, not necessarily technology-related. Scroll down to read about my experiences building anything from a computer to a coffee table to various apps.');

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
addParagraph(connect, 'In my final semester at Willamette University, I took a machine learning class. One of the assignments during that class was to make a game against a computer that would get better as we played. One of my upcoming project goals is to combine machine learning and web development to make a Connect 4 bot online.');
addParagraph(connect, 'Users can choose between playing against various bots, including a "RandomIdiot", a "Minimax" strategist, a trained neural network "Master", and a brand new neural network "Dummy". The "Master" and "Dummy" will improve with play, but the "RandomIdiot" and "Minimax" bots will not.');
var link = document.createElement('div');
link.innerHTML = 'You can play against the bots at ' + hyperlink('Connect4Bot', 'https://bernardquynguyen-connect4bot.herokuapp.com') + '. The bots available to play against right now are RandomIdiot and Minimax. The RandomIdiot chooses a column at random to place his pieces. (Have fun winning!)'
connect.append(link);
addParagraph(connect, 'Minimax is slightly more complicated. The minimax algorithm assumes both players are "perfect" players. It builds a game tree based on the current board and looks at every possibility 4 moves into the future. The algorithm minimzes your gains, while maximizing its own. Using alpha-beta pruning, I was able to eliminate redundant branches of the game tree and increase the bot\'s scope to 5 moves into the future rather than 4. In order to evaluate how good the individual boards are, I first built a weight system that evaluated positional advantage. To do this, I made a Gaussian array centered at the lower center of the board. This encourages the bot to play towards the center, rather than the edges (where there are less opportunities to connect 4 discs). The bot then checks for links of 3 discs, and links of 4, each with increasing weight. (These prioritize connecting pieces over positional advantage).')

addProject('iris', 'Biometric Iris Scanner', 'December 2017');
var iris = document.getElementById('iris-details');
addParagraph(iris, 'For our final project in my digital signals processing course, we decided to implement a biometric iris scanner in MATLAB. The major steps of a secure biometric iris scanner include segmentation of the iris, feature extraction, encoding, and comparison. In order to segment the iris, we first identified the circles that correspond to the iris and the pupil. After removing the pupil and extraneous surroundings from the image, we normalized the "donut" shaped iris into a rectangle. Then we encoded the information using a 2D Gabor filter and saved the binary data as a small matrix. This sample could then be compared to other binary samples using various methods including the hamming distance or the correlation between two samples.')
addParagraph(iris, 'Because we were limited by our hardware (i.e. the lack of an infrared camera for quality images without extranneous reflections), we weren\'t able to implement a perfect scanner. Our threshold for a positive match was fairly low (70% match), and we still got a few false negatives. That being said, we consider our project to be a success because there were no false positives, which is more important in a secure biometric system.')


addProject('ethanol', 'Capacitive Ethanol Sensor', 'Spring 2018');
var ethanol = document.getElementById('ethanol-details');
addParagraph(ethanol, 'Graduating seniors of Columbia\'s School of Engineering and Applied Science are required to do a senior design project to showcase what they\'ve learned throughout the years. My group of electrical engineers decided to do something nobody\'s done before - a consumer-oriented capacitive ethanol sensor for adult beverages. This idea was based on the flex fuel sensors used in the automotive industry, where capacitive measurements are used to measure the ethanol content in gasohol (gasoline and alcohol). Existing ethanol sensors are large, expensive, and work on the principle of mass resonance, measuring the ethanol content of a water-ethanol solution based on the density differences. This requires that the solution be made of only water and ethanol, which is unreasonable for a mixed drink which may contain many different ingredients. Our capacitive method, however, solved this issue as the dielectric constant of water and juices are very similar.');
addParagraph(ethanol, 'Constructing our device required quite a broad set of expertise. We implemented a capacitive measuring circuit based on a fast-switching voltage divider between our probe and a known capacitance. In order to prevent noise from any parisitic capcitances, we also needed to control our power supply with a precise voltage regulator. We also used a microcontroller and small display to manage the user interface of the device. The final enclosure was designed using CAD and 3D-printed using a stereolithography printer. Constructing the probe required machining expertise, including a band saw and drill press, as well as the use of a thermal evaporator to deposit a conformal parylene coating.');
addParagraph(ethanol, 'My main contribution to this project was the design and machining of our cylindrical probe. I decided to construct the probe using a thick, low-gauge wire, as well as a copper drinking straw. I attached each of these pieces to male and female copper plumbing couplings, which allowed us to remove the probe and evacuate any residual solution between measurements. We also coated the probes in parylene-C, which served several purposes including oxidation prevention, limiting of the conductance in solution, and a thin hydrophobic coating which prevented trapped solution by capillary action.');
addParagraph(ethanol, 'The capacitance of such a concentric cylindrical probe is $$C = \\frac{k\\epsilon_0 \\cdot 2\\pi l}{ln(\\frac{b}{a})},$$ where l is the length of the probe, b is the radius of the outer circle, a is the radius of the inner circle, and k is the relative permittivity of the dielectric in between the two plates. Because the geometry of our probe was always constant, our device effectively measured k in order to determine how much ethanol is in our beverage. Our circuit measured the capacitance by tracing the peaks of an oscillating signal, then outputed a DC voltage corresponding to the average of those peaks. Our signal voltage was $$V_{sig} = V_{reference}(1-\\frac{C_{fixed}}{C_{fixed}+C_{probe}}),$$ where the reference voltage was half the supply voltage (2.5 V in our case). We approximated the output to be linear with alcohol by volume (it wasn\'t), and succesfully measured ABV within 5% after a 2-step calibration process.')
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