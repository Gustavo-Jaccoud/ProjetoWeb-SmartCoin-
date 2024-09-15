function calcularJuros() {
    const valorInicial = parseFloat(document.getElementById('valorInicial').value.replace('R$', '').trim());
    const valorMensal = parseFloat(document.getElementById('valorMensal').value.replace('R$', '').trim());
    const taxaJuros = parseFloat(document.getElementById('taxaJuros').value.replace('%', '').trim()) / 100;
    const periodo = parseInt(document.getElementById('periodo').value.trim());

    if (isNaN(valorInicial) || isNaN(valorMensal) || isNaN(taxaJuros) || isNaN(periodo)) {
        document.getElementById('resultado').innerText = 'Por favor, preencha todos os campos corretamente.';
        return;
    }

    let montante = valorInicial;
    for (let i = 0; i < periodo; i++) {
        montante = (montante + valorMensal) * (1 + taxaJuros);
    }

    document.getElementById('resultado').innerText = `Montante Final: R$ ${montante.toFixed(2)}`;
}

function limparCampos() {
    document.getElementById('valorInicial').value = '';
    document.getElementById('valorMensal').value = '';
    document.getElementById('taxaJuros').value = '';
    document.getElementById('periodo').value = '';
    document.getElementById('resultado').innerText = '';
}