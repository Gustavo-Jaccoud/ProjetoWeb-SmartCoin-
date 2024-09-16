function calcular() {
    const salario = parseFloat(document.getElementById('salario').value);
    const gastos = {
        'CustosFixos': parseFloat(document.getElementById('gastoCustosFixos').value),
        'Conforto': parseFloat(document.getElementById('gastoConforto').value),
        'Metas': parseFloat(document.getElementById('gastoMetas').value),
        'Prazeres': parseFloat(document.getElementById('gastoPrazeres').value),
        'LiberdadeFinanceira': parseFloat(document.getElementById('gastoLiberdadeFinanceira').value),
        'Conhecimento': parseFloat(document.getElementById('gastoConhecimento').value)
    };

    const totalGasto = Object.values(gastos).reduce((acc, val) => acc + val, 0);
    document.getElementById('totalGasto').textContent = `R$ ${totalGasto.toFixed(2)}`;

    const utilizado = (totalGasto / salario) * 100;
    document.getElementById('utilizado').textContent = `${utilizado.toFixed(2)}%`;

    const percentuais = {
        'CustosFixos': 0.40,
        'Conforto': 0.15,
        'Metas': 0.05,
        'Prazeres': 0.10,
        'LiberdadeFinanceira': 0.25,
        'Conhecimento': 0.05
    };

    Object.keys(gastos).forEach((key) => {
        const gasto = gastos[key];
        const devoGastar = salario * percentuais[key];
        const utilizadoPorcentagem = (gasto / devoGastar) * 100;
        const totalPorcentagem = (gasto / totalGasto) * 100;

        document.getElementById(`devoGastar${key}`).textContent = `R$ ${devoGastar.toFixed(2)}`;
        document.getElementById(`utilizado${key}`).textContent = `${utilizadoPorcentagem.toFixed(2)}%`;
        document.getElementById(`total${key}`).textContent = `${totalPorcentagem.toFixed(2)}%`;

        if (utilizadoPorcentagem > 100) {
            document.getElementById(`utilizado${key}`).classList.add('red');
            document.getElementById(`utilizado${key}`).classList.remove('green');
        } else {
            document.getElementById(`utilizado${key}`).classList.add('green');
            document.getElementById(`utilizado${key}`).classList.remove('red');
        }
    });
}