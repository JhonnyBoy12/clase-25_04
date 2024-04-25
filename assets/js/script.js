$("document").ready(function(){


    let numero1= 0; 
    let numero2= 0; 
    let resultado=0;

    $("#btnSumar").click(function(){

        $("#error1").text("")
        $("#error2").text("")
        $("#resultado").text("")

        numero1= $("#numero1").val();


        if(numero1 === ""){
            $("#error1").text("Debe Agregar el primer numero")
            $("#error1").css("color", "red");
            return;
        }
        if (!/^\d+$/.test(numero1)){
            $("#error1").text("Solo debe ingresar numeros");
            $("#error1").css("color","red")
            return;
            
        }
        

        numero2= $("#numero2").val();


        if(numero2 === ""){
            $("#error2").text("Debe Agregar el segundo numero")
            $("#error2").css("color", "red");
            return;
        }

        if (!/^\d+$/.test(numero2)){
            $("#error2").text("Solo debe ingresar numeros");
            $("#error2").css("color","red")
            return;
            
        }

        resultado = parseInt(numero1)+ parseInt(numero2);
        $("#resultado").text(resultado);
        $("#resultado").css("fontSize","2rem");
        limpiar();

    });

    $("#btnRestar").click(function(){
        $("#error1").text("")
        $("#error2").text("")
        $("#resultado").text("")

        numero1= $("#numero1").val();

        if (numero1 === ""){
            $("#error1").text("Ingrese primer numero")
            $("#error1").css("color","red")
            return;
            
        }

        ////EXPRESIONES REGULARES PARA ACEPTAR SOLO NUMEROS
        if (!/^\d+$/.test(numero1)){
            $("#error1").text("Solo debe ingresar numeros");
            $("#error1").css("color","red")
            return;
            
        }


        numero2= $("#numero2").val();

        if (numero2 === ""){
            $("#error2").text("Ingrese segundo numero")
            $("#error2").css("color","red")
            return;
        }
        if (!/^\d+$/.test(numero2)){
            $("#error2").text("Solo debe ingresar numeros");
            $("#error2").css("color","red")
            return;
            
        }
        resultado =parseInt(numero1)-parseInt(numero2);
        $("#resultado").text(resultado);
        $("#resultado").css("fontSize","color","green")
        limpiar();


    })

    function limpiar(){
        $("#numero1").val("");
        $("#numero2").val("");

    }


});