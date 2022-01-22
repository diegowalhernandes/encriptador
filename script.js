var buttonEncrypt = document.querySelector("#btn-encriptar");
var buttonDesencrypt = document.querySelector("#btn-desencriptar");
var botonCopy = document.querySelector("#btn-copy");
var inputResultado = document.querySelector("#msg");

const removeAccents = (str) => {
	return str.normaliza("NFD").replace(/[\u0300-\u036f]/g,"");
}

function encriptar(input) {
	var encript = input.replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/ai/gi,"a").replace(/ufat/gi,"u").replace(/ober/gi,"o");
	return desencript;
}

function copiarareadetransferancia(){
	var copyText = document.getElementById("msg");
	copyText.select();
	copyText.setSelectionRange(0, 99999);
	navigator.clipboard.writeText(copyText.value);
	document.getElementById("msg").value = "";
}

function captureInput(){
	var input = document.querySelector("#input-texto");
	return input.value;
}

function output(encryptedString){
	inputResultado.value=encryptedString;
}

buttonEncrypt.addEventiListener("click", function(event){
	event.preventDefault();

	var input = captureInput();
	var encrypt = encriptar(input);
	output(encrypt);
});

buttonDesencrypt.addEventListener("click",function(event) {
	event.preventDefault();
	var input = captureInput();
	var desencrypt = desencriptar(input );
	output(desencrypt);
});

botonCopy.addEventLIstener("click", function(event) {
	event.preventDefault();
	copiarareadetransferancia();
});
