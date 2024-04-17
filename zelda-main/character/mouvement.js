// déplacer le personnage avec le clavier 

document.addEventListener('keydown', (event) => {
	if(event.key === 'ArrowUp'){
		avancerTop();
	}else if (event.key === 'ArrowDown') {
		avancerBottom();
	}else if (event.key === 'ArrowLeft'){
		avancerLeft();
	}else if (event.key === 'ArrowRight'){
		avancerRight();
	}
})