const date = new Date()
const dates = new Array('domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta','sábado')
const months = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro")
const spanClose = document.getElementById('close')
const openModal = document.getElementById('open-modal')
let modal = document.getElementById('modal')
let listTasks = document.getElementById('tasks')


document.getElementById("day").innerHTML = date.getDate() > 9 ? date.getDate() : '0' + date.getDate()
document.getElementById("month").innerHTML = months[date.getMonth()]
document.getElementById("year").innerHTML = date.getFullYear()
document.getElementById("day-week").innerHTML = dates[date.getDay()]

let tasks = []

spanClose.addEventListener("click", () => {
    modal.classList.remove('active')
})

openModal.addEventListener('click', () => {
    modal.classList.add('active')
})

const idGenerate = () => {
    return Math.floor(Math.random() * (100 - 1) + 1)
}

function newTask() {
    titleTask = document.getElementById('titleTask').value
    taskDescription = document.getElementById('descriptionTask').value
    let task = {
        id: idGenerate(),
        data: {
            title: titleTask,
            description: taskDescription
        }
    }
    tasks.push(task)
    modal.classList.remove('active')
    titleTask = document.getElementById('titleTask').value = ''
    taskDescription = document.getElementById('descriptionTask').value = ''
    updateScreen()
}

const updateScreen = () => {
    
    listTasks.innerHTML = ""
    tasks.forEach(item => {
        let task = document.createElement('div')
        let taskTitle = document.createElement('h3')
        let taskDescription = document.createElement('div')
        let taskDelete = document.createElement('button')
        let textTitleTask = document.createTextNode(item.data.title)
        let textDescriptionTask = document.createTextNode(item.data.description)
    
        task.setAttribute('id-data', item.id)
        task.setAttribute('class', 'task')
        taskTitle.setAttribute('class', 'task-title')
        taskDescription.setAttribute('class', 'task-description')
        taskDelete.setAttribute('id-data', item.id)
        taskDelete.setAttribute('class', 'close')
        taskDelete.setAttribute('onclick', 'deleteTask(this)')
        taskDelete.innerHTML = 'x'

        taskTitle.appendChild(textTitleTask)
        taskDescription.appendChild(textDescriptionTask)

        task.appendChild(taskTitle)
        task.appendChild(taskDescription)
        task.appendChild(taskDelete)
        listTasks.appendChild(task)
    })
}

function deleteTask(element) {
    console.log(element.getAttribute('id-data'))
    tasks = tasks.filter(task => task.id != element.getAttribute('id-data'))
    updateScreen()
}