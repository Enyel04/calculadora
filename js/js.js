
function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function numero(number) {
  let input = document.querySelector(".texto");
  let currentValue = input.value.trim();

  // Verificar si el campo de texto está vacío o solo contiene el número cero
  if (currentValue === "" || currentValue === "0") {
    input.value = formatNumber(number);
  } else {
    let updatedValue = currentValue.replace(/\,/g, "") + number;
    input.value = formatNumber(updatedValue);
  }
}
function calc() {
    let campoTexto= document.querySelector (".texto");
    let campo2= document.querySelector("#resultado");
    let expresion= campoTexto.value.replace(/\,/g, "");
    let resultado= eval(expresion);
    return campo2.value=formatNumber(resultado);
   
}

function simb(number) {
    var campoTexto = document.querySelector(".texto");
    var expresion = campoTexto.value;
    // Verificar si la expresión ya contiene un símbolo de suma al final
    if (expresion.endsWith('+')) {
      return; // No agregar otro símbolo de suma
    }
    // Agregar el número o símbolo al campo de texto
    if (expresion.endsWith('-')) {
        return; // No agregar otro símbolo de suma
      }
    if (expresion.endsWith('*')) {
        return; // No agregar otro símbolo de suma
     }
     if (expresion.endsWith('/')) {
        return; // No agregar otro símbolo de suma
     }
     if (expresion.endsWith('.')) {
      return; // No agregar otro símbolo de suma
   }
   if (expresion.endsWith('%')) {
    return; // No agregar otro símbolo de suma
 }
    
   campoTexto.value += number;

}

function raizcu() {
  let raiz=document.querySelector("#campo");
  let expresion=raiz.value;
  let campo2=document.querySelector("#resultado");

  if (expresion==="") {
    return;
  }
  let resultado= eval(expresion);
  cal =Math.sqrt(resultado);
  console.log(raiz.value);
 campo2.value=cal =formatNumber(cal);
}


function quitar() {
   let input= document.querySelector("#campo");
   input.value= input.value.slice (0,-1);
    
}


