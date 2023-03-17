function calcular(tipo, valor) {
    if (tipo === 'acao') {

        if (valor === 'c') {
            //limpar visor
            document.getElementById('res').value = ''
        }

        if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            document.getElementById('res').value += valor
        }

        if (valor === '=') {
            var valorCampo = eval(document.getElementById('res').value)
            document.getElementById('res').value = valorCampo
        }

    } else if (tipo === 'valor') {
        document.getElementById('res').value += valor
    }
}