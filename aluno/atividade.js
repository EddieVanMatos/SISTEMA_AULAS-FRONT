// Carregar atividades do backend
document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/atividades')
        .then(response => response.json())
        .then(data => {
            const listaAtividades = document.getElementById('listaAtividades');
            data.forEach(atividade => {
                const atividadeElement = document.createElement('div');
                atividadeElement.innerHTML = `
                    <h2>${atividade.titulo}</h2>
                    <p>${atividade.enunciado}</p>
                `;
                listaAtividades.appendChild(atividadeElement);
            });
        })
        .catch(error => console.error('Erro ao carregar atividades:', error));
});
