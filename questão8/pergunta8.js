let exame_01 = 70;
let exame_02 = 50;
let exame_03 = 90;
let exame_04 = 100;
let exame_05 = 0;



if (exame_01>=70 && exame_02>=70 && exame_03>=70 && exame_04>=70 &&exame_05>70){
    document.write("A _ PASSOU EM TODOS OS EXAMES");
}
else if (exame_01>=70 && exame_02>=70 && exame_03<70 && exame_04>=70 &&exame_05<70){
    document.write("B_ PASSOU NOS EXAMES 01,02,04 e NÂO PASSOU NOS EXAMES 03 e 05");
}
else if (exame_01>=70 && exame_02>=70 && exame_03>=70 && exame_04>=70 &&exame_05<70){
    document.write("C_ PASSOU NOS EXAMES 01,02,03,04 e NÂO PASSOU NO EXAMES 05");
}
else{
    document.write("D_ REPROVADO");
}