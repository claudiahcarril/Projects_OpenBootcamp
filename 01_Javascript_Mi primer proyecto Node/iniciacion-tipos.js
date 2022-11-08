// TIPOS PRIMITIVOS

//number
4

//string
"Hola mundo";
'Hola mundo';
`Hola mundo`;

// booleans
true;
false;

// nulo y undefined (Null--> valor vacío / Undefined--> valor que está sin definir)
null;
undefined;


// Similitud entre null, undefined, false, 0 --> Todas son Falsy (que la condición if no se cumpla)
if (null) {
    console.log("cumple")
} else {
    console.log("no cumple")
}

// Null no es lo mismo que undefined