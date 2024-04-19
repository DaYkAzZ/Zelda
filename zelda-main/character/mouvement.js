function avancerRight()
{
	let zelda=document.getElementById("zelda");
	x=zelda.style.left;
	
	
	if(zelda.className=="dirDroite1")
	{
		zelda.className="dirDroite2";
		zelda.style.left=parseInt(x)+10+"px";
	}
	else if(zelda.className=="dirDroite2")
	{
		zelda.className="dirDroite3";
		zelda.style.left=parseInt(x)+10+"px";
	}
	else
	{
		zelda.className="dirDroite1";
		zelda.style.left=parseInt(x)+10+"px";
	}

	return false;
}

function avancerLeft()
{
	let zelda=document.getElementById("zelda");
	x=zelda.style.left;
	
	if(zelda.className=="dirGauche1")
	{
		zelda.className="dirGauche2";
		zelda.style.left=parseInt(x)-10+"px";
	}
	else if(zelda.className=="dirGauche2")
	{
		zelda.className="dirGauche3";
		zelda.style.left=parseInt(x)-10+"px";
	}
	else
	{
		zelda.className="dirGauche1";
		zelda.style.left=parseInt(x)-10+"px";
	}

	return false;
}

function avancerBottom()
{
	let zelda=document.getElementById("zelda");
	y=zelda.style.top;
	
	if(zelda.className=="dirBas1")
	{
		zelda.className="dirBas2";
		zelda.style.top=parseInt(y)+10+"px";
	}
	else if(zelda.className=="dirBas2")
	{
		zelda.className="dirBas3";
		zelda.style.top=parseInt(y)+10+"px";
	}
	else
	{
		zelda.className="dirBas1";
		zelda.style.top=parseInt(y)+10+"px";
	}

	return false;
}

function avancerTop()
{
	let zelda=document.getElementById("zelda");
	y=zelda.style.top;
	
	if(zelda.className=="dirHaut1")
	{
		zelda.className="dirHaut2";
		zelda.style.top=parseInt(y)-10+"px";
	}
	else if(zelda.className=="dirHaut2")
	{
		zelda.className="dirHaut3";
		zelda.style.top=parseInt(y)-10+"px";
	}
	else
	{
		zelda.className="dirHaut1";
		zelda.style.top=parseInt(y)-10+"px";
	}

	return false;
}
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

document.addEventListener('keydown', (event) => {
	if(event.key === 'a'){
			
		let ultHealth = document.getElementById('healthUlti');
		let healthBar = document.getElementById('health')

			zelda.style.backgroundPosition = "-320px -128px";
			
			ultHealth.style.display ="block";
			ultHealth.style.animation = 'healthBar 2s infinite'

			healthBar.style.animation = 'healthBar 2s infinite'

			alert('Capacité Ultime activé');
	}
})