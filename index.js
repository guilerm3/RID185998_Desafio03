let tasks = [
    {id: 1, description:'Implementar tela de listagem de tarefas', etiqueta:'frontend'},
    {id: 2, description:'Criar endpoint para cadastro de tarefas', etiqueta:'backend'},
    {id: 3, description:'Implementar protótipo da listagem de tarefas', etiqueta:'ux'},
]
let completedTasksCount = 0;

const createTaskListItem = (task)=>{
        const list = document.getElementById('todo-list')       /* UL */
        const getButton = document.getElementById('save-task')  /* Botão que adiciona task */
        const li = document.createElement('li')                 /* LI principal */
        const liLabel = document.createElement('li')            /* LI secundária do Grid */
        const doneButton = document.createElement('button')     /* Botão concluir task */
        const span = document.createElement('span')             /* Span description */
        const timeDate = document.createElement('span')         /* Span DATA */

        li.id = `${task.id}-li-principal`
        span.id = `${task.id}-span-description`

        span.textContent = task.description
        const pLabel = document.createElement('p');
        pLabel.textContent = task.etiqueta;
        liLabel.appendChild(pLabel);
        
        doneButton.id = `${task.id}-done-button`
        doneButton.textContent = 'Concluir'
        doneButton.onclick = () => removeDoneTasks(task.id)

        getButton.onclick = pegaData(timeDate)

        list.appendChild(li)
        li.appendChild(span)
        li.appendChild(liLabel)
        li.appendChild(doneButton)
        liLabel.appendChild(timeDate)

}

const removeDoneTasks = (taskId) =>{
    tasks = tasks.filter(({ id }) => parseInt(id) !== parseInt(taskId))

    document.getElementById(`${taskId}-li-principal`).removeChild(document.getElementById(`${taskId}-done-button`))
    const img = document.createElement('img')
    img.src = 'img/done.svg'
    img.id = 'done-img'
    const taskLi = document.getElementById(`${taskId}-li-principal`)
    taskLi.appendChild(img)

    const span = document.getElementById(`${taskId}-span-description`)
    span.style.cssText = 'color:#8F98A8; text-decoration: line-through;'
    
    completedTasksCount++
    taskCounter(completedTasksCount)
}

const taskCounter = (count)=>{
    const counter = document.getElementById('task-counter')
    counter.innerHTML = `${count} tarefas concluída`
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

    const taskData = getNewTaskData(event)
    createTaskListItem(taskData)
    
    tasks = [
        ...tasks,
        {id:taskData.id,description:taskData.description,label:taskData.etiqueta}
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
    const data = new Date()

    let dia    = data.getDate()
    let mes     = data.getMonth()+1
    let ano     = data.getFullYear()

    let str_hora = dia + '/' + mes + '/' + ano
    timeDate.innerHTML = "Criado em: " + str_hora
}
