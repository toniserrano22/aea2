require("colors");
const fs = require("fs");

const llistarTaula = (base, limit = 10) => {
    console.log("============".green);
    console.log(`Taula del ${base}`.yellow);
    console.log("============".green);
for (let i = 0; i <= limit; i++) {
    console.log(`${base} * ${i} = ${base * i}`);
    }
};

const crearFitxer = (base, limit = 10) => {
if (!Number(base)) {
    console.log("El valor de la base ha de ser numèric");
    return;
}
let data = "";
for (let i = 0; i <= limit; i++) {
    data += `${base} * ${i} = ${base * i}\n`;
}
fs.writeFile(`Taula del ${base} amb limit ${limit}.txt`, data, (err) => {
if (err) throw Error(err);

    else console.log(`Taula del ${base} amb limit ${limit}.txt`);
});
};

module.exports = {
    llistarTaula,
    crearFitxer,
};