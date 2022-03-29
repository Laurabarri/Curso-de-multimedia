var galeria =[
    "img/001.jpg",
    "img/002.jpg", 
    "img/003.jpg", 
    "img/004.jpg"
]

var cuentafotos = 1;

function siguiente(){
    document.getElementById('fotico').src= galeria[cuentafotos];
    cuentafotos += 1;

    if (cuentafotos > galeria.length-1) {
        cuentafotos = 0;
      }

      console.log(cuentafotos);
      console.log(galeria.length-1);
      console.log(galeria[cuentafotos]);

}
function anterior(){
    document.getElementById('fotico').src= galeria[cuentafotos];
    cuentafotos -= 1;

    if (cuentafotos < 0) {
        cuentafotos = galeria.length-1;
      }

      console.log(cuentafotos);
      console.log(galeria.length-1);
      console.log(galeria[cuentafotos]);

}