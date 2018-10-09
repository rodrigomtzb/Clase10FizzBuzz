
var selected;

function selectedExercise(){
    var radios = document.getElementsByName('exercise');

    for (var i = 0, length = radios.length; i < length; i++)
    {
        if (radios[i].checked)
        {
        
            selected = radios[i].value;
           
            if( parseInt( selected ) == 1 ){
                document.getElementById("btnEjercicio").innerHTML = "Crea Piramide";
            }else if(parseInt( selected ) == 2 ) {
                document.getElementById("btnEjercicio").innerHTML = "FizzBuzz Serie";
            }
        
        break;
        }
    }

}

function ejecutaejercicio(){
    if( selected == 1 ){
        creaPiramide();
    }else if(selected == 2 ){
        fizzBuzz();
    }
}

function creaPiramide(){

    var num = document.getElementById("valuePiramide").value;
    
    if( num == "" ){

        alert( "Introduce un valor " );
        document.getElementById("contPiramide").innerHTML ="";

    }else if( isNaN( parseInt(num) ) ){

        alert( "El valor '"+num+"' no es numérico " );
        document.getElementById("contPiramide").innerHTML ="";

    }else{

            alert( "Tu piramide será de " + num + " niveles " );

            
            var niveleshtml="";
            for( x = 1; x<=parseInt(num) ; x++ ){
                
                var niveles = "";

                for( y=1; y<=x ; y++ ){
                    niveles=niveles+"*";
                }

                niveleshtml += niveles+"<br />";
                
            }
            document.getElementById("contPiramide").innerHTML = niveleshtml ;

        }

}

function fizzBuzz(){

    var num = document.getElementById("valuePiramide").value;
    
    if( num == "" ){

        alert( "Introduce un valor " );
        document.getElementById("contPiramide").innerHTML ="";

    }else if( isNaN( parseInt(num) ) ){

        alert( "El valor '"+num+"' no es numérico " );
        document.getElementById("contPiramide").innerHTML ="";

    }else{

            alert( "Tu Serie será de " + num + " valores " );

            
            var niveleshtml="";
            for( x = 0; x<=parseInt(num) ; x++ ){
                
                var niveles = "";
                var fbStr = "";
                
                if( parseInt(x)%3 == 0 && parseInt(x)%5 == 0 ){
                    fbStr ="FIZZBUZZ";
                }else if( parseInt(x)%3 == 0 ){
                    fbStr ="FIZZ";
                }else if(parseInt(x)%5 == 0 ){
                    fbStr ="BUZZ"
                }

                

                niveleshtml += x+" " +fbStr+ "<br />";
                
            }
            document.getElementById("contPiramide").innerHTML = niveleshtml ;

        }    

}