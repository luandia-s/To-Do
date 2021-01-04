const date = new Date()
const dates = new Array('domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta','sábado')
const months = new Array("Janeiro", "Fevereiro", "Março", "Abril",      "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro")

document.getElementById("day").innerHTML = date.getDate() > 9 ? date.getDate() : '0' + date.getDate()
document.getElementById("month").innerHTML = months[date.getMonth()]
document.getElementById("year").innerHTML = date.getFullYear()
document.getElementById("day-week").innerHTML = dates[date.getDay()]

console.log(date.getDate())
console.log(date.getDay())
console.log(date.getFullYear())

const tasks = []

const idGenerate = () => {
    const id = Math.floor(Math.random() * (100 - 1) + 1)
    console.log(id)
}

function newTask() {
    let task = {
        id: idGenerate(),
        data: {
            title: titleTask,
            description: taskDescription
        }
    }
    tasks.push(task)
    creatTaskInHtml()
}

const creatTaskInHtml = () => {
    let listTasks = document.getElementById('#tasks')
    tasks.forEach(item => {
        let task = document.createElement('div')
        let taskTitle = document.creatElement('h3')
        let taskDescription = document.creatElement('div')
        let deleteTask = document.creatElement('span')
        let textTitleTask = document.createTextNode(item.data.title)
        let textDescriptionTask = document.createTextNode(item.data.description)
    
        task.setAttribute('id-data', task.id)
        task.setAttribute('class', 'task')
        taskTitle.setAttribute('class', 'task-title')
        taskDescription.setAttribute('class', 'task-description')
        deleteTask.setAttribute('id-data', item.id)
        deleteTask.setAttribute('class', 'close')
        deleteTask.setAttribute('onclick', 'deleteTask(this)')
        deleteTask.innerHTML = 'x'

        task.appendChild(taskTitle)
        task.appendChild(taskDescription)
        task.appendChild(deleteTask)
        listTasks.appendChild(task)
    })
}