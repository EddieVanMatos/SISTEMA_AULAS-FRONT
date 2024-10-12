function criarAtividade(atividade) {
    fetch('/api/atividades', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(atividade)
    }).then(response => {
        if (response.ok) {
            alert("Atividade criada com sucesso!");
        }
    });
}
document.getElementById('form-atividade').addEventListener('submit', function(e) {
    e.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const enunciado = document.getElementById('enunciado').value;

    const atividade = {
        titulo: titulo,
        enunciado: enunciado
    };

    fetch('/api/atividades', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(atividade)
    }).then(response => {
        if (response.ok) {
            alert("Atividade criada com sucesso!");
        }
    });
});

