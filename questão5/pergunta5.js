let a = 20;
let b = 10;
resto = 1;
if(a>=b){
 while(resto !=0){
     resto =a%b;
     a=b;
     b=resto;
 }
}