
document.body.style.background = 'black';

function calculadora(){
  const operacao = Number(prompt('Escolha a operação:\n1 - Soma(+)\n2 - subtração(-)\n3 - Multiplicação(*)\n4 - Divisão(/)\n5 - Divisão Inteira(%)\n 6 - Ponteciação(**)'));

  if(!operacao || operacao >= 7){
    alert("Operação Invalida");  
    calculadora();
  }else{
    let n1 = Number(prompt("Primeiro valor: "));
    let n2 = Number(prompt("Segundo valor:"));
    let resultado;
    
    if(!n1 || !n2){
      alert("ERRO - Parâmetros Inválidos")
      calculadora();  
    }else{
      function soma(){
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`)
        novaOperacao();
      }
      function subtracao(){
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`)
        novaOperacao();
      }function multi(){
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`)
        novaOperacao();
      }function divi(){
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`)
        novaOperacao();
      }function diviInteira(){
        resultado = n1 % n2;
        alert(`O resto da divisão entre ${n1} e ${n2} é igual a: ${resultado}`)
        novaOperacao();
      }function pont(){
        resultado = n1 ** n2;
        alert(`${n1} elevado a ${n2} é igual a: ${resultado}`)
        novaOperacao();
      }
      
      function novaOperacao(){
        let opcao = prompt('Nova operação?\n1 - Sim\n2 - Não');
        if(opcao == 1)
        {
          calculadora();
        }else if(opcao == 2){
          alert('Até a proxima!');
        }else{
          alert('Digite a numeração correta');
          novaOperacao();
          }
    }
    }
    
    switch (operacao) {
      case 1: 
      soma();
      break;
      case 2:
        subtracao();          
      break;
      case 3:
        multi();     
      break;
      case 4:
        divi();    
      break;
      case 5:
        diviInteira();     
      break;
      case 6:
        pont();    
      break;    
    }    
}
}
calculadora();
