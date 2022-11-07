function PruebaNodejs(number){

    console.log('Hola mundo! Me has pasado por parametro el número ' + number);
}
//TEXTO DE PRUEBA 2
function exec() {
    for (let index = 0; index < 100; index++) {
        PruebaNodejs(index);
    }
}

exec();