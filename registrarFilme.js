const url = 'http://localhost:3000/Diretor';


async function insereDado(e) {
    e.preventDefault(); 
    
    const input = document.querySelector("#nome");
    const nome = input.value.trim(); 
    
    if (!nome) {
        alert("O nome do diretor é obrigatório.");
        return;
    }

    try {
        
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
                nome: input.value
            })
        });

        const data = await response.json();
        console.log('Diretor registrado com sucesso:', data);
        input.value = 'nome'; 
    } catch (error) {
        console.error('Erro ao inserir o diretor:', error);
    }
}

async function carregaDados(e) {
    e.preventDefault(); 

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        const geradorDiretor = document.getElementById('diretorid');
       
        geradorDiretor.innerHTML = data.map(item => {
            return `
                <div class="diretorid">
                    <h2>${item.nomeDiretor}</h2>
                </div>
            `;
        }).join(''); 
    } catch (error) {
        console.error('Erro ao carregar os dados:', error);
    }
}




document.querySelector('#form-diretor').addEventListener('submit', insereDado);
document.getElementById('load').addEventListener('click', carregaDados);
