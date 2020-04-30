// Third part

$('h1').html('This is done by <em>Javascript!</em>');

$('h2').toggleClass ('blue');
// Masodszor leirva kiveszi a class-ot
$('h2').toggleClass ('blue');

let name ='Adam';
age = 34;

function myLittleFunction() {
    $('main').append('<p>A p is appended in the main</p>');
    $('p').css('border', '1px solid red');
    $('p').css('padding', '10px');
}

myLittleFunction();
myLittleFunction();

$('#add').click(myLittleFunction);
$('#remove').click(function () {
    $('p:last-child').remove();
});


console.log('Script file is loaded.');

//Single line comment

/* 
Multiple
lines
of comments
*/

