var arrSequencia    = [N, 1];
      var sequencia       = 0;
      var numPares        = 0;
      var numImpares      = 0;
      var somaPares       = 0;
      var proximoElemento = 0;
      do {
        sequencia++
        proximoElemento = arrSequencia[sequencia] + arrSequencia[sequencia-1];
        proximoElemento < 50000 ? (
          arrSequencia.push(proximoElemento),
          proximoElemento % 2 == 0 ? 
            ( numPares  ++ , 
              somaPares += proximoElemento )
            : numImpares ++ )
        : false;
        } while  (proximoElemento < 50000);
      document.write("Sequencia de números : " + arrSequencia.join(' / ') + "<br><br>");
      document.write("Quantidade de números pares : " + numPares + "<br>");
      document.write("Quantidade de números impares : " + numImpares + "<br>");
      document.write("Somatórios dos números pares : " + somaPares)