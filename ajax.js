//console.log("Correcto");
$(document).ready(function(){
    $("#boton1").click(function(){
        $.get("datos.txt", function(dato, status, xhr){
            console.log("mensaje: "+ dato + "\nStatus: " + " " + xhr.status);

        })
    })

    $("#boton2").click(function(){
        $.get('catalogo.json', function(datos){
            //console.log(datos);
            if($('#tabla').is(":empty")){
                $.each(datos, function(index, obj){
                    console.log(datos);
                    $("#tabla").append(obj.titulo + ' ' + obj.artista + '<br/>');
                })
            }
            
        });
    
    });
})

/* document.querySelector('#boton2').addEventListener('click', traerDatos);

function traerDatos(){
    //console.log('dentro de la función');

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'catalogo.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            //console.log(this.responseText);
            let datos= JSON.parse(this.responseText);
            console.log(datos);

            let res = document.querySelector('#res');
            res.innerHTML = '';

            for(let item of datos){
                //console.log(item.artista);
                res.innerHTML += `
                <tr>
                    <td>${item.titulo}</td>
                    <td>${item.artista}</td>
                </tr>
                `
            }
        }
    }
} */