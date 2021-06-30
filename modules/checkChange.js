import{add} from './localStorage.js';
import Task from './task.js';

// funcion que guarda las tareas realizadas
function changeCheck(checkBox){
    for (let i = 0; i < checkBox.length; i++) {
        checkBox[i].addEventListener('click', (e) =>{
        let checked = checkBox[i].checked;
        rewriteChecked(checkBox[i].getAttribute('data-name'), checkBox[i].getAttribute('data-id'), checkBox[i].getAttribute('data-category'), checkBox[i].getAttribute('data-date'), checked)
    })
    }
}

// funcion que rescribe la tarea realizada
function rewriteChecked(name, id, category, date, check){
    let convertDate = new Date(date),
    newTask = new Task(id, name, category, convertDate, check);
    add(newTask);
}

export{
    changeCheck
}