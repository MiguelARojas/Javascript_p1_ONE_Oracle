
// obtenemos los valores de Pablo
var paciente = document.querySelector('#Pablo');
var tdPeso = paciente.querySelector('.info-peso');
var tdAltura = paciente.querySelector('.info-altura');
var tdImc = paciente.querySelector('.info-imc');



// obtenemos los valores de Juan
//var paciente2 = document.querySelector('#Juan');
//var tdPeso = paciente2.querySelector('.info-peso');
//var tdAltura = paciente2.querySelector('.info-altura');
//var tdImc = paciente2.querySelector('.info-imc');

// almacenamos el valor 
var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

// calculamos el IMC
var IMC = peso / (altura ** 2);


// creamos unas reglas para que no puedan ser valores fuera de rango

pesoValido = true;
alturaValido = true;


if((peso <= 0) || (peso > 150)){
    console.log("El peso se encuentra fuera de valor");
    tdImc.textContent = "Peso Incorrecto";
    pesoValido = false;
}else if ((altura < 0) || (altura > 3.00)){
    console.log("La altura se encuentra fuera de valor");
    tdImc.textContent = "Altura Incorrecta";
    alturaValido = false;
}else if (pesoValido && alturaValido){
    // asignamos el IMC para que aparezca en nuestra tabla
    tdImc.textContent = IMC;
}else{
    console.log("El IMC no se puede calcular ya que el peso o la altura no son validos")
}

