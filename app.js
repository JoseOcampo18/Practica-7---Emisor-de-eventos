//var Emitter = require('./emitter');
var Emitter = require('events');
 //Sucede lo mismo en consola, solo que ahora al final nos muestra un conteo de eventos, un _maxListeners y un symbol(kCapture)

var config = require('./config.js');
//Sucede lo mismo en consola que anteriormente, solo que al mapear la funcion se evitan errores de escritura

var emtr = new Emitter();

emtr.on(config.events.GREET, () => {
    console.log('Somewhere, someone said hello.')
});

emtr.on(config.events.GREET, () => {
    console.log('A greeting ocurred!')
});

console.log('Hello!');
emtr.emit('greet');

/* En este caso el listener estaba esperando a que ocurriera un evento,
al ocurrir el evento, se activa, y es por eso que se imprimió en consola
3 mensajes de saludo(Los 3 mensajes de el codigo de arriba) */

emtr.on(config.events.JUMP, () => {
    console.log('someone jumped!');
});

console.log(emtr)
emtr.emit('jump');

/* Ahora el se imprime en consola de forma distinta, aparece Emitter{
    events{
        y aqui a aparecen los eventos pero de forma anónima
    }
} */