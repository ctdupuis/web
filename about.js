console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert(`Your message is ${document.getElementById('message').value}`)
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let duck = document.getElementById('duck');

duck.addEventListener('mouseover', (e) => {
	alert("Well don't you just look FABULOUS")
})