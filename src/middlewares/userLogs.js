const fs = require('fs');

module.exports = function userLogs(req, res, next) {
    fs.appendFileSync('./src/logs/userLogs.txt', 'El usuario ingresó a la ruta: ' + req.url + '\n')

    next()
}