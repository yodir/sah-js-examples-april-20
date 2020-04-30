// Third part

$('h1').html('This is done by <em>Javascript!</em>');

$('h2').toggleClass ('blue');
// Masodszor leirva kiveszi a class-ot
$('h2').toggleClass ('blue');

let name ='Adam';
age = 34;

function myLittleFunction() {
// condition: number of pieces smaller than 5
    if ($('p').length < 5) {
    $('main').append('<p>A p is appended in the main</p>');
} else {
  console.log('We reached the maximum');
}
    $('p').css('border', '1px solid red');
    $('p').css('padding', '10px');
}

myLittleFunction();
myLittleFunction();

$('#add').click(myLittleFunction);
$('#remove').click(function () {
    $('p:last-child').remove();
});


//Fourth part

if (conditions that true or false) {
// condition true
} else {
    // condition false
}


console.log('Script file is loaded.');

//Single line comment

/* 
Multiple
lines
of comments
*/



let colors = ['orange', 'yellow,' 'blue', 'lime', 'magenta'];

$('#box-container').append('<div class="box"></div>');
$('.box:last-child').css('background', colors[0]);
$('#box-container').append('<div class="box"></div>');
$('.box:last-child').css('background', colors[1]);
$('#box-container').append('<div class="box"></div>');
$('.box:last-child').css('background', colors[2]);
$('#box-container').append('<div class="box"></div>');
$('.box:last-child').css('background', colors[3]);
$('#box-container').append('<div class="box"></div>');
$('.box:last-child').css('background', colors[4]);
