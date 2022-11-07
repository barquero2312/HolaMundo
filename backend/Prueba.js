function PruebaNodejs(number){

    console.log('Hola mundo! Me has pasado por parametro el número ' + number);
}

function exec() {
    for (let index = 0; index < 100; index++) {
        PruebaNodejs(index);
    }
}

exec();