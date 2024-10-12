fetch('/api/aulas')
    .then(response => response.json())
    .then(data => {
        // Renderizar as aulas na tela
    });
    fetch('/api/aulas')
    .then(response => response.json())
    .then(aulas => {
        const listaDeAulas = document.getElementById('lista-de-aulas');
        aulas.forEach(aula => {
            const aulaElement = document.createElement('div');
            aulaElement.innerHTML = `<h3>${aula.nome}</h3><p>${aula.descricao}</p>`;
            listaDeAulas.appendChild(aulaElement);
        });
    });

