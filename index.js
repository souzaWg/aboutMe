var buttonSod = document.querySelector('#btnSodie');
var buttonCob = document.querySelector('#btnCobasi');
var sodBox = document.querySelector('#box');
var cobBox = document.querySelector('#box2');

addSodie();
remSodie();

addCob();
remCob();


function addSodie(){
	buttonSod.addEventListener('click',function(){
		sodBox.classList.add('fade');
	})
}

function remSodie(){
	buttonCob.addEventListener('click',function(){
		sodBox.classList.remove('fade');
	})
}

function addCob(){
	buttonCob.addEventListener('click',function(){
		cobBox.classList.add('fade2');
	})
}

function remCob(){
	buttonSod.addEventListener('click',function(){
		cobBox.classList.remove('fade2');
	})
}

