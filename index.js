let tasks = [
    {id: 1, description:'Implementar tela de listagem de tarefas', label:'frontend'},
    {id: 2, description:'Criar endpoint para cadastro de tarefas', label:'backend'},
    {id: 3, description:'Implementar protótipo da listagem de tarefas', label:'ux'},
]

const createTaskListItem = (task)=>{
        const list = document.getElementById('todo-list')       /* UL */
        const getButton = document.getElementById('save-task')  /* Botão que adiciona task*/
        const li = document.createElement('li')                 /* LI principal */
        const liLabel = document.createElement('li')            /* LI secundária do Grid */
        const doneButton = document.createElement('button')     /* Botão concluir task */
        const span = document.createElement('span')             /* Span description */
        const timeDate = document.createElement('span')         /* Span DATA */

        li.id = task.id

        span.textContent = task.description
        const pLabel = document.createElement('p');
        pLabel.textContent = task.label;
        liLabel.appendChild(pLabel);
        
        doneButton.textContent = 'Concluir'

        getButton.onclick = function() {
            pegaData(timeDate);
        };

        list.appendChild(li)
        li.appendChild(span)
        li.appendChild(liLabel)
        li.appendChild(doneButton)
        liLabel.appendChild(timeDate)
}

const getNewTaskId = () =>{
    const lastId = tasks[tasks.length -1]?.id
    return lastId ? lastId + 1 : 1
}

const getNewTaskData = (event) => {
    const description = event.target.elements.description.value
    const etiqueta = event.target.elements.etiqueta.value
    const id = getNewTaskId()

    return {id,description,etiqueta}
}

const createTask = (event) =>{
    event.preventDefault()

    const getNewTaskData = getNewTaskData(event)
    
    tasks = [
        ...tasks,
        {id:getNewTaskData.id,description:getNewTaskData.description,label:getNewTaskData.etiqueta}
    ]
}


window.onload = function (){

    const form = document.getElementById('create-todo-form')
    form.addEventListener('submit',createTask)

    tasks.forEach((task)=>{
        
        createTaskListItem(task)
        
        
    })
}

function pegaData(timeDate) {
    let data = new Date()

    let dia    = data.getDate()
    let mes     = data.getMonth()+1
    let ano     = data.getFullYear()

    let str_hora = dia + '/' + mes + '/' + ano
    timeDate.innerHTML = "Criado em: " + str_hora
}