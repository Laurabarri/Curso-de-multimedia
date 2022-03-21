var personajes = [

    [
        "Albus Dumbledore",
        "Director de Hogwarts. El mago más poderoso que ha existido. A medida que Harry crezca, le irá pasando las claves para vencer a Voldemort.",
        "img/albusdumbledore.jpg"
    ],

    [
        "Harry Potter",
        "El elegido. A los 11 descubre que es mago, que estudiará en Hogwarts y que Lord Voldemort asesinó a sus padres cuando él era un bebé.",
        "img/harrypotter.jpg"
    ],

    [
        "Draco Malfoy",
        "Procede de una rica familia de magos con querencia por las artes oscuras. Desde el primer día, Harry y él se declaran enemistad eterna.",
        "img/dracomalfoy.jpg"
    ],

    [
        "Hermione Granger",
        "La eterna amiga de Harry y Ron es toda una empollona. De no ser por sus conocimientos, las aventuras de Harry habrían sido diferentes.",
        "img/hermionegranger.jpg"
    ],

    [
        "Ron Weasley",
        "El sexto de los siete hermanos Weasley. Empieza en Hogwarts a la vez que Harry. Coinciden en el tren y se hacen inseparables.",
        "img/ronweasley.jpg"
    ],

    [
        "Rubeushagrid",
        "Enorme guardabosques de Hogwarts. Siente debilidad por los animales fieros y temibles. Por sus venas corre sangre de gigante.",
        "img/rubeushagrid.jpg"
    ]
];


/*let texto = "";

for (let i = 0; i < personajes.length; i++) {
    texto += "<li>"
    texto += '<img src="' + personajes[i] + '">';
    texto += "</li>";
}

document.getElementById('listado').innerHTML = texto;
*/

let texto = "";

for (let i = 0; i < personajes.length; i++) {
	texto += "<li>";
	texto += '<img src="' + personajes[i][2] + '">';
	texto += "<h2>" + personajes[i][0] + "</h2>";
	texto += "<p>" + personajes[i][1] + "</p>";
	texto += "</li>";
}

document.getElementById("listado").innerHTML = texto;

