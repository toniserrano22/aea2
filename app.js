require("colors");
const argv = require('./yargs').argv;
const { crearalumne, crearFitxer } = require("./alumne");
console.log(argv);

console.clear();
console.log(argv);

let param = argv._[0];
console.log(param);

switch (param) {
    case 'llistar':
        crearalumne(argv.n, argv.h );
        break;
    case "crear":
        crearFitxer(argv.n, argv.h)
        break;
    default:
        console.log ('error');

}