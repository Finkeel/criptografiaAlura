// Função para criptografar o texto
function criptografar(texto) {
    const chaves = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    return texto.replace(/[eioua]/g, match => chaves[match]);
}

// Função para descriptografar o texto
function descriptografar(texto) {
    const chaves = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    return texto.replace(/enter|imes|ai|ober|ufat/g, match => chaves[match]);
}

// Função para executar a criptografia ou descriptografia
function executar() {
    const texto = document.getElementById('texto').value;
    const opcao = document.querySelector('input[name="opcao"]:checked').value;
    const resultado = opcao === 'criptografar' ? criptografar(texto) : descriptografar(texto);
    document.getElementById('resultado').innerText = resultado;
}

// Função para copiar o texto
function copiarTexto() {
    const texto = document.getElementById('resultado').innerText;
    navigator.clipboard.writeText(texto).then(() => {
        alert('Texto copiado!');
    });
}
