const opts = {
    nom: {
        demand: true,
        alias: "n",
        default: "no_name",
    },
    hores:{
        alias: "h",
        default: 0,
    },
};

const argv = require("yargs")
            .command("llistar", "Imprimeix en consola l'alumne amb les hores",opts)
            .command("crear", "genera un fitxer amb l'alumne i les hores'",opts)
            .help().argv;

module.exports = {
    argv,
};