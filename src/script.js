function converter() {
    // Obter o valor em centímetros
    var centimetros = parseFloat(document.getElementById('centimetros').value);

    // Converter para quilômetros
    var quilometros = centimetros / 100000;

    // Exibir o resultado
    document.getElementById('resultado').innerHTML = centimetros
}