const cb = require('clipboardy');
const fs = require('fs');

fs.readFile('ponto.json', function (err, data) {
    const agora = new Date();
    let ponto = JSON.parse(data);
    let hora = agora.getHours();
    if (hora < 10) {
        hora = '0' + hora;
    }
    let minuto = agora.getMinutes();
    if (minuto < 10) {
        minuto = '0' + minuto;
    }
    let horario = hora + ':' + minuto;
    let tipo;
    let novoTipo;
    let almoco;
    if (ponto.tipo === 'E') {
        tipo = 'Entrada'
        novoTipo = 'S';
        almoco = 'Volta do Almoço'
    }
    if (ponto.tipo === 'S') {
        tipo = 'Saída'
        novoTipo = 'E';
        almoco = 'Almoço'
    }
    let novoPonto = '{"nome":"' + ponto['nome'] + '","tipo":"' + novoTipo + '"}'
    ponto = tipo + ': ' + horario + ' - ' + almoco + ' - ' + ponto['nome']
    fs.writeFile('ponto.json', novoPonto, function (err) {
        if (err) throw err;
    });
    console.log(ponto)
    cb.writeSync(ponto);
});