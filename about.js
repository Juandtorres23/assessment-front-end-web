console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form has been submited successfully');
}

function imgCompliment() {

	alert('Your good looking!');
}

let form = document.querySelector('#contact');
let ducky = document.querySelector('#ducky');
console.log(ducky)

form.addEventListener('submit', handleSubmit);

ducky.addEventListener('mouseover', imgCompliment);

