const fs = require('fs');

const crearalumne = (nom = 'no_name', hores = '0') => {
    let sortida = '';
    sortida = `Alumne: ${nom} :: Hores: ${hores}`;

    fs.writeFileSync('Alumne', sortida);
};

const crearFitxer = (nom, hores) => {
    let data = '';
    fs.writeFile(`${nom}-${hores}.txt`, data, (err) => {
        if(err) throw console.log(err);
        console.log("Guardat");
        let sortida = '';
        sortida = `Alumne: ${nom} :: Hores: ${hores}`;
    
        fs.writeFileSync('Alumne', sortida);
    })
};




module.exports = {
    crearalumne,
    crearFitxer,
};