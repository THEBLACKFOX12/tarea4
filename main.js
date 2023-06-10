
// //alert("hola mundo")
// var nombreUS = prompt("cual es tu nombre");

// //alert(nombreUS + "Bienvenido ")

// var numero = parseInt(prompt("ingresa un numero"))
// var numero2 = parseInt(prompt("imgresa otro numero"))

// var suma = numero + numero2;
// alert("la suma de los numeros es:"+ suma)
personajes(mostrarDatos);
function personajes(done){

    const url ='https://rickandmortyapi.com/api/character';

    fetch(url)
        .then(resp => resp.json())
        .then(data => done(data))
        .catch(Error => console.log(Error))
        .finally(() => console.log('finalizo'));
}
function mostrarDatos(data) {
    console.log(data.results);
    const results = data.results;
    const section = document.querySelector('.section');
    let html = '';
    results.forEach(element => {
        html += `
        <div class="card">
        <img src="${element.image}" alt="${element.name}">
        <h2>${element.name}</h2>
        <p>${element.species}</p>
        </div>
        `
    });
    section.innerHTML = html;
}

obtenerDatos(mostrarDatos);