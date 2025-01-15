$(document).ready(function() {

	const icon = document.getElementById('theme-toggler')

	// console.log(localStorage.darkMode)

	if (localStorage.getItem('darkMode') === undefined || localStorage.getItem('darkMode') === null){

		localStorage.setItem('darkMode', 'false')
	}

	enabletheme(icon)
    
	$('#theme-toggler').on('click', function(event){

		event.preventDefault()
		let currentMode = localStorage.getItem('darkMode');
    	let newMode = currentMode === 'true' ? 'false' : 'true';
    	localStorage.setItem('darkMode', newMode);
		enabletheme(icon)
	});

});

function enabletheme(icon){

	if(localStorage.getItem('darkMode') === 'false'){

		if (icon.classList.contains('fa-moon-o')) {
			icon.classList.remove('fa-moon-o')
			icon.classList.add('fa-sun-o')
			document.body.classList.remove('dark-mode')
		}

	} else {
		
		if (icon.classList.contains('fa-sun-o')) {
			icon.classList.remove('fa-sun-o')
			icon.classList.add('fa-moon-o')
			document.body.classList.add('dark-mode')
		}
	}
}
