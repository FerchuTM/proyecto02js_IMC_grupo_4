function Imc(){
    let nombre=document.getElementById("nombre").value;
    let apellido=document.getElementById("apellido").value;
    let altura=parseFloat(document.getElementById("altura").value);
    let peso=document.getElementById("peso").value;
    let suma=peso/Math.pow(altura,2);
    const resultadoImc=document.getElementById("resultado");
    
    if(suma<18.5){
        resultadoImc.textContent=nombre+" "+apellido+" "+"su IMC es  "+suma +" que es Bajo peso";
    }else if(suma>18.5 && suma <24.9){
        resultadoImc.textContent=nombre+" "+apellido+" "+"su IMC es  "+suma+" que es Peso saludable";
    }else if (suma>25.0 &&suma <29.9 ){
        resultadoImc.textContent=nombre+" "+apellido+" "+"su IMC es  "+suma+" que es SobrePeso";
    }else if (suma >30.0){
        resultadoImc.textContent=nombre+" "+apellido+" "+"su IMC es  "+suma+" que es Obesidad";
    }
}