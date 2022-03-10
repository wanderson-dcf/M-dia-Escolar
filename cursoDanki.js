//Pegar os botões:
const calcularBtn = document.getElementById('calcularBtn');
const limparTela = document.getElementById('limparTela');



const nota_media = {
	nota1: 0,
	nota2: 0,
	calc_Media: function (nota1, nota2){ 
		return (this.nota1 + this.nota2) / 2
	}
	
};


function calcularFunc(){
	//pegar os inputs:
	let number1 = document.getElementById('number1').value;
	let number2 = document.getElementById('number2').value;
	let result = document.getElementById('result');
	

	//converter strings para numbers:
	let convertN1 = Number(number1);
	let convertN2 = Number(number2);
	nota_media.nota1 = convertN1;
	nota_media.nota2 = convertN2;
	
	//Fazer verificações nos campos de inputs:
	let diferenteDeVazio = convertN1 == " " || convertN2 == " ";
	let diferenteDeZero = convertN1 == 0 || convertN2 == 0;
	let maior10 = convertN1 > 10 || convertN2 > 10;

	if(diferenteDeVazio || diferenteDeZero || maior10){

		window.alert("Campos vazios ou valor inváido, verifique e tente novamente!");
	}
		
	
	//Verificação da nota média:
	let resultMedia = nota_media.calc_Media();
	if(resultMedia >= 6){
		result.innerHTML = `
		<table>
			<thead>Resultado da média:</thead>
				<tr>
					<td>Média:</td>
						<td id="resultMedia">${resultMedia}</td>
					</tr>
				<tr>
					<td>Situação:</td>
					<td id="resultState">Aprovado.</td>
				</tr>
				</table>
		`;
	}else{
		result.innerHTML = `
		<table>
			<thead>Resultado da média:</thead>
				<tr>
					<td>Média:</td>
						<td>${resultMedia}</td>
					</tr>
				<tr>
					<td>Situação:</td>
					<td>Reprovado.</td>
				</tr>
				</table>
		`;
	}
	
	


}

function limparFunc(){
	let input1 = document.getElementById('number1');
	let input2 = document.getElementById('number2');
	

	//Fazer verificações nos campos de inputs:
	if(input1.value != "" || input2.value != ""){

		input1.value = "";
		input2.value = "";

	}
}

calcularBtn.addEventListener('click', calcularFunc);
limparTela.addEventListener('click', limparFunc);