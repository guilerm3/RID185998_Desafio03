let tasks = [
    {id: 1, description:'Implementar tela de listagem de tarefas', label:'frontend'},
    {id: 2, description:'Criar endpoint para cadastro de tarefas', label:'backend'},
    {id: 3, description:'Implementar protótipo da listagem de tarefas', label:'ux'},
    {id: 4, description:'Comer almoço', label:'frontend'},
]

window.onload = function (){
    tasks.forEach((task)=>{
        const list = document.getElementById('todo-list')
        const li = document.createElement('li')
        const button = document.createElement('button')
        const liLabel = document.createElement('li')
        const span = document.createElement('span')
        
        li.id = task.id
        span.textContent = task.description
        liLabel.textContent = task.label
        button.textContent = 'Concluir'
        list.appendChild(li)
        li.appendChild(span)
        li.appendChild(liLabel)
        li.appendChild(button)
        
    })
}