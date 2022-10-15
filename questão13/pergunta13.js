function isCenteredtriangular(N)
{
    var K = (-3
               + Math.sqrt(24 * N - 15))
              / 6;
 
    
    return (K - parseInt(K)) == 0;
}
 

var N = 85;
if (isCenteredtriangular(N)) {
    document.write("Sim");
}
else {
    document.write("Não");
}
 