window.onload =  function Calc(){
      let valor1 = parseInt(prompt('Digite o primeiro numero:'));
      let valor2 = parseInt(prompt('Digite o segundo numero: '));
      let resultado, resultado2, resultado3, resultado4;

      resultado1 = valor1 + valor2;
      resultado2 = valor1 - valor2;
      resultado3 = valor1 * valor2;
      resultado4 = valor1 / valor2;

          alert(
                "A + B:  " + " "  + resultado1 + "\n" +
                "A - B:  " + " "  + resultado2 + "\n"  +
                "A * B:  " + " "  + resultado3 + "\n" +
                "A / B:  " + " "  + resultado4  );
          
     }
    

     
