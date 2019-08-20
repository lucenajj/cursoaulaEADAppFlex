/**
 * JS - Aula 05 Calculadora de Combustível!
 * @author Alan Lucena
 */
var etanol, gasolina

function calcular() {
    etanol = parseFloat(frmFlex.txtAlcool.value.replace(",","."));
    gasolina = parseFloat(frmFlex.txtGasolina.value.replace(",","."))

    if(etanol < 0.7 * gasolina){
        document.getElementById("status").src='etanol.png'
    }else{
        document.getElementById("status").src='gasolina.png'
    }
}
    function redefinir(){
        document.getElementById("status").src='neutro.png'
}



