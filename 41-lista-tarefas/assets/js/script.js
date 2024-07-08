 const inputTarefa = document.querySelector('.input-tarefa');
 const btnTarefa = document.querySelector('.btn-tarefa');
 const tarefas = document.querySelector('.tarefas');
 
function criarLi() {
    const li = document.createElement('li');
    return li;
}

function criarBtApagar(li) {
    // criar espaço entre li e botão apagar
    li.innerText += ' ';

    //criar botão apagar
    const btApagar = document.createElement('button');
    btApagar.setAttribute('class', 'bt-apagar');
    btApagar.setAttribute('title', 'Apagar esta tarefa');
    btApagar.innerText = 'Apagar';

    // adicionar botão apagar no li
    li.appendChild(btApagar);
}

function criarTarefa(textoInput) {
    //criar tarefa
    const li = criarLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);

    // limpar o input após criar a tarefa
    inputTarefa.value = '';
    inputTarefa.focus(); // ativar o foco no input após adicionar tarefa

    //adicionar botão apagar
    criarBtApagar(li);

    // salvar tarefas
    salvarTarefas();
}

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        // selecionar texto
        let tarefaTexto = tarefa.innerText;
        // apagar palavra "Apagar" do bt
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); // trim - remove espaços em branco sobrando
        listaDeTarefas.push(tarefaTexto);
    }

    // converter array para JSON
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    
    // salvar o JSON no navegador com o nome 'tarefas' para poder acessá-lo por esse nome depois
    localStorage.setItem('tarefas', tarefasJSON);

    /*
        Para acessar o localStorage
        devTools > ">>" > Aplication > Local Storage > document
    */
}

inputTarefa.addEventListener('keypress', (tecla) => {
    if (tecla.keyCode === 13) {
        // checar se o input está vazío, se tiver não executara a função
        if (!inputTarefa.value) return;
        // input preenchido execulta a função
        criarTarefa(inputTarefa.value);
    }
});

btnTarefa.addEventListener('click', () => {
    // checar se o input está vazío, se tiver não executara a função
    if (!inputTarefa.value) return;
    // input preenchido execulta a função
    criarTarefa(inputTarefa.value);
});

document.addEventListener('click', (el) => {
    const elemento = el.target;
    
    if (elemento.classList.contains('bt-apagar')) {
        //remover o elemento pai do button
        elemento.parentElement.remove();
        
        // Salvar novamente a lista de tarefas para atualizar o JSON
        salvarTarefas();
    }
});

// colocar de volta na lista as tarefas que estão salvas no Local Storage
function adicionaTarefasSalvas() {
    // acessar o nome 'tarefas' criado anteriormente na função salvarTarefas()
    const tarefas = localStorage.getItem('tarefas');

    // converter JSON para array
    const listaDeTarefas = JSON.parse(tarefas);

    // adicionar itens da lista na ol de tarefas
    for (let tarefa of listaDeTarefas) {
        criarTarefa(tarefa);
    }
}
adicionaTarefasSalvas();
