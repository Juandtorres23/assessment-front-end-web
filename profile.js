console.log('Hello World!');


function colorBtn() {
    alert('My favorite color is Blue!');
}
function placeBtn() {
    alert('My favorite place to be is in my gaming chair!');
}
function ritualBtn() {
    alert('My favorite ritual is listening to music while I meditate!');
}



let color = document.querySelector('#color');
let place = document.querySelector('#place');
let ritual = document.querySelector('#ritual');



color.addEventListener('click', colorBtn);
place.addEventListener('click', placeBtn);
ritual.addEventListener('click', ritualBtn);