function paraF(){
numero= parseFloat(document.getElementById("numero").value)
let resultado = (numero * 9 / 5) + 32;
document.getElementById("resultado").textContent = resultado + " °F";


}
function paraC(){
numero= parseFloat(document.getElementById("numero").value)
let resultado = (numero - 32) * 5 / 9;
document.getElementById("resultado").textContent = resultado + " °C";


}