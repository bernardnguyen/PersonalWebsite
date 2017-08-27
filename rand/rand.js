if (typeof document != 'undefined'){

var div = document.getElementById('main');

/* 

Guitar - main image
Family - Description
Family - Picture Slideshow
Dogs - Left & Right
Bald - Left
Dollar - Right
Fractal - Left & Right
Poker - Left
Final Picture Slideshow

*/

/**** FAMILY *****/

addHeader('laughing');
var haha = document.getElementById('laughing-details');
addParagraph(haha, 'I come from a very large extended family. My father had 11 siblings, and my mother had 8. I personally have 3 siblings: an older sister, an older brother, and a younger sister. In my free time, I like to play guitar, especially with my siblings and cousins. I also love watching basketball, playing basketball, playing poker, studying the game of poker, and bowling. A typical night in Fremont involves one of bowling, poker, or board games with my friends. As you can probably tell, this is a page dedicated to the random things that make up someone\'s (specifically my) life.');

var family = document.createElement('div');
family.className = 'slideshow';
div.append(family);

addSlide(family, 'christmas', 'Half of my mom\'s side of the family. (Christmas 2012)');
addSlide(family, 'wedding', 'Some of my cousins with our grandma at another cousin\'s wedding. (Summer 2014)');



/****    DOGS     ****/

picWithText('dogs', true, true, 'I grew up with our dog, Caramel (left), who we got when I was in third grade. My older sister got Bubba (right) in the summer of 2016, and cute as he may be, he\'s terrorized my parents ever since.');


/****    BALD    ****/

picWithText('bald', true, false, 'In my freshman year of high school, I tried to cut my own hair for the first time. Long story short: it didn\'t go well. I ended up shaving my head, and this picture was taken about a month later.');



/****    DOLLAR    ****/

picWithText('dollar', false, true, 'As a senior in high school, my government teacher, Mrs. Honeycutt had us write a letter to ourselves that she\'d send out 4 years later. I didn\'t take the assignment seriously, but it was pretty funny when I received a letter 4 years later with $1 inside. Thanks, man.');



/****    FRACTAL   ****/

picWithText('fractal', true, true, 'During my sophomore year at Willamette University, the math department participated with 19 other organizations around the world to make a fractal cube out of business cards. The entire university participated, with students, faculty, and staff constructing cubes during class, at work, etc. Each cube was made of 6 business cards, and it took 20 smaller cubes to make one of the next size up. We made a giant cube 4 levels large. The only reason I\'m in the picture on the right is because my friend (and CS TA) organized the event, and she would only sign off on my lab early if I helped in the final construction of the fractal cube.');


/****    POKER     ****/

picWithText('poker', true, false, 'Summers spent in Fremont consist of my friends and I playing poker about once a week. This picture shows the craziest hand I\'ve ever witnessed. First a friend went all-in pre-flop with pocket 2s. Unfortunately, he was quickly called by another friend with pocket As, and another friend with pocket Ks. The flop came KA2, and everyone had flopped a set. The turn was an irrelevant Q, and the winner appeared to be set. On the river, my friend got his fourth 2, and took the hand.');


/****    PICTURES SLIDESHOW   *****/

var details = document.createElement('div');
details.className = 'details';
div.append(details);
var picsIntro = document.createElement('div');
picsIntro.className = 'paragraph';
details.append(picsIntro);
addParagraph(picsIntro, 'I\'ve lived in very different places over the past few years. Fremont, CA: a suburb of a fairly large city, San Jose. Then I moved to Salem, OR: Oregon\'s capital, but a fairly small city with lots of natural attractions nearby. New York City is obviously a very large city, and something that took a little getting used to. My biggest takeaway from my travels is that the world is a beautiful place, whether it be natural or man-made. Below are some of my favorite pictures from around the world.');

var pictures = document.createElement('div');
pictures.className = 'slideshow';
div.append(pictures);

addSlide(pictures, 'cruz', 'A beach along Highway 1 -- Santa Cruz, CA (Summer 2014)');
addSlide(pictures, 'rocks', 'Willamette River -- Salem, OR (Fall 2015)');
addSlide(pictures, 'sunrise', 'Sunrise from my house in Oregon -- Salem, OR (Spring 2016)');
addSlide(pictures, 'breakneck', 'Breakneck Ridge -- Phillipstown, NY (Fall 2016)');
addSlide(pictures, 'midtown', 'A view of Time Square from a rooftop bar -- New York, NY (Fall 2016)');
addSlide(pictures, 'jersey', 'A New Jersey sunset from Carlton Arms (A Columbia residence) -- New York, NY (Fall 2016)');
addSlide(pictures, 'timesquare', 'Times Square -- New York, NY (Fall 2016)');
addSlide(pictures, 'mudd', 'The view from a Columbia University rooftop -- New York, NY (Winter 2016)');
addSlide(pictures, 'sunset', 'A beautiful sunset -- Black Point, Bahamas (Winter 2016)');
addSlide(pictures, 'cave', 'Looking out from a cave on the beach -- Black Point, Bahamas (Winter 2016)');
addSlide(pictures, 'sunsethouse', 'A house overlooking the sunset -- Black Point, Bahamas (Winer 2016)');
addSlide(pictures, 'sandcastle', 'A beautiful sand-castle house on a cliff -- Black Point, Bahamas (Winter 2016)');
addSlide(pictures, 'lizard', 'A lizard chilling on the deck -- Black Point, Bahamas (Winter 2016)');
addSlide(pictures, 'snowday', 'No school on a snow day. We played football instead -- New York, NY (Spring 2017)');
addSlide(pictures, 'columbiasnow', 'Low Library covered in snow -- New York, NY (Spring 2017)');
addSlide(pictures, 'goldengate', 'Golden Gate Bridge from Land\'s End -- San Francisco, CA (Summer 2017)');















$(document).ready(function(){
    $('.slideshow').slick({
      dots: true,
      autoplay: true,
      autoplaySpeed: 4000
    });
  });

/************ FORMATTING *************/


function picWithText (name, left, right, description){
    var box = document.createElement('div');
    box.className = 'details sidePic';
    div.append(box);

    if (left){
        var image = document.createElement('div');
        image.id = name+'-left';
        image.className = 'leftRight';
        box.append(image);
    }
    
    var details = document.createElement('div');
    details.className = 'sideText';
    box.append(details);

    var paragraph = document.createElement('div');
    paragraph.className = 'sideParagraph';
    paragraph.innerText = description;
    details.append(paragraph);

    if (right) {
        var image = document.createElement('div');
        image.id = name+'-right';
        image.className = 'leftRight';
        box.append(image);
    }
}

function addHeader(id){
    var image = document.createElement('div');
    image.id = id;
    image.className = 'image';
    div.append(image);

    var box = document.createElement('div');
    box.className = 'details';
    div.append(box);

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

function addSlide(box, name, description){
    var slide = document.createElement('div');
    slide.className = 'picWithDescription';
    slide.id = name;

    var text = document.createElement('div');
    text.className = 'description';
    text.innerText = description;

    slide.append(text);
    box.append(slide);
}


}