var div = document.getElementById('edu-content');

var columbia = document.createElement('div');
columbia.id = 'columbia';
columbia.className = 'edu slide';
div.append(columbia);

var willamette = document.createElement('div');
willamette.id = 'willamette';
willamette.className = 'edu slide';
div.append(willamette);

$(document).ready(function(){
    $('.edu').slick({
      dots: true
    });
  });