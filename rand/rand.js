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
addParagraph(haha, 'HAHAHAHAHA & FAMILY');

var family = document.createElement('div');
family.className = 'slideshow';
div.append(family);

addSlide(family, 'christmas', 'Half of my mom\'s side of the family. (Christmas 2012)');
addSlide(family, 'wedding', 'Some of my cousins with our grandma at another cousin\'s wedding. (Summer 2014)');



/****    DOGS     ****/

picWithText('dogs', true, true, 'DOGE');


/****    BALD    ****/

picWithText('bald', true, false, 'BALD');



/****    DOLLAR    ****/

picWithText('dollar', false, true, 'DOLLAR');



/****    FRACTAL   ****/

picWithText('fractal', true, true, 'FRACTALS');


/****    POKER     ****/

picWithText('poker', true, false, 'POKER');


/****    PICTURES SLIDESHOW   *****/

var details = document.createElement('div');
details.className = 'details';
div.append(details);
var picsIntro = document.createElement('div');
picsIntro.className = 'paragraph';
details.append(picsIntro);
addParagraph(picsIntro, 'HERE ARE SOME PICTURES');

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