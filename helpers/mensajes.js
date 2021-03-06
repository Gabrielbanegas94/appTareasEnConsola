const { resolve } = require('path');

require('colors');


const mostrarMenu = () => {

    return new Promise(resolve => {

        console.clear();
        console.log('========================'.blue);
        console.log(' Sellecione una opcion '.green);
        console.log('========================\n'.blue);

        console.log(`${'1.'.green } Crear tarea`);
        console.log(`${'2.'.green } Listar tareas`);
        console.log(`${'3.'.green } Listar tareas completadas`);
        console.log(`${'4.'.green } Crear tarea`);
        console.log(`${'5.'.green } Crear tarea`);
        console.log(`${'6.'.green } Crear tarea`);
        console.log(`${'0.'.green } Salir \n`);

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });


        readline.question('Sellecione una opcion:', (opt) => {
            readline.close();
            resolve(opt);
        })
    });


}
const pausa = () => {

    return new Promise(resolve => {

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question(`\n Presione ${'Enter'.green} para continuar \n`, (opt) => {
            readline.close();
            resolve();
        })
    });
}

module.exports = {
    mostrarMenu,
    pausa
}