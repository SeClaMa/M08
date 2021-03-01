addEventListener('load',inicializarEventos,false);
function inicializarEventos(){
    var ob=document.getElementById('boton1');
    ob.addEventListener('click', presionBoton,false);
    var ob2=document.getElementById('boton2');
    ob2.addEventListener('click', presionBoton2,false);
    var ob3=document.getElementById('boton3');
    ob3.addEventListener('click', presionBoton3,false);
}

function presionBoton(){
    getAll();
}

function presionBoton2(){
    var id = 2;
    getId(id);
}

function presionBoton3(){
    getStock();
}


function getAll(){
    $.ajax({
        url:"https://localhost:44311/api/Products",
        method: 'GET',
        dataType: 'json',
        headers: {
            'Accept':'application/json'
         },
        contentType: 'application/x-www-form-urlencoded',
        success: function (data) {
            let text="<tr>";
            data.forEach(element => {
                text = text + "</tr>" + "<td>" + element.productId + "</td>" + "<td>" + element.name + "</td>" + "<td>" + element.category + "</td>" + "<td>" + element.color + "</td>";
            });
            console.log(JSON.stringify(data));
            document.getElementById("resultados").innerHTML = text;
        },
        error:function(error){
            console.log(error);
        }
    });
}

function getId(id){
    $.ajax({
        url:"https://localhost:44311/api/Products/" + id,
        method: 'GET',
        dataType: 'json',
        headers: {
            'Accept':'application/json'
         },
        contentType: 'application/x-www-form-urlencoded',
        success: function (data) {
            let text="<tr>";
            text ="<td>" + data.productId + "</td>" + "<td>" + data.name + "</td>" + "<td>" + data.category + "</td>" + "<td>" + data.color + "</td> </tr>" ;
            
            console.log(JSON.stringify(data));
            document.getElementById("resultados").innerHTML = text;
        },
        error:function(error){
            console.log(error);
        }
    });
}

function getStock(){
    $.ajax({
        url:"https://localhost:44311/api/Products/stock",
        method: 'GET',
        dataType: 'json',
        headers: {
            'Accept':'application/json'
         },
        contentType: 'application/x-www-form-urlencoded',
        success: function (data) {
            let text="<tr>";
            data.forEach(element => {
                text = text + "</tr>" + "<td>" + element.productId + "</td>" + "<td>" + element.name + "</td>" + "<td>" + element.category + "</td>" + "<td>" + element.color + "</td>";
            });
            console.log(JSON.stringify(data));
            document.getElementById("resultados").innerHTML = text;
        },
        error:function(error){
            console.log(error);
        }
    });
}