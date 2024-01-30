const fs = require('fs');

let type_dir = `${__dirname}/types`
let types = fs.readdirSync(type_dir).filter( folder => ( folder != "_funkydir" ) );

types.forEach( (folder) => {
    require(`./types/${folder}`);
});
