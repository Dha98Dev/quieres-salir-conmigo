function acepto(){
const aceptado= document.getElementById('aceptado');
aceptado.style.display="block";
}
let contador=0;
function noAcepto(){
const textos=["andale di que si","porfavorsito sii","es que quiero darte duro","por favor sii","ya no des click","ya para de dar click", "de verdad ya paraaaa", "ya detenteee", "me lastimaste mi corazoncito"];

let noAceptado=document.getElementById('no');
noAceptado.innerText=textos[contador+1];
contador+=1;

}