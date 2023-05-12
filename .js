//desciplina: script para web
//autor:  Lincoln Reimberg
//data: 10/09/2022
//calcular aumento salarial

//ler os dados

var nome = prompt('digite o seu nome: ')
var salario = prompt('digite seu salario: ')
//verificar se tem aumento

if(salario <= 2424){
    alert('você terá direito a aumento de salario! ')
}else{alert('você não terá direito a aumento de salario! ')}

var novosalario = salario * 1.06;
alert("seu novo salario é de : " + novosalario)

//mostrar o resultado