import{add} from './localStorage.js';
import Task from './task.js';

function changeCheck(checkBox){
    for (let i = 0; i < checkBox.length; i++) {
        checkBox[i].addEventListener('click', (e) =>{
        let checked = checkBox[i].checked;
        rewriteChecked(checkBox[i].getAttribute('data-name'), checkBox[i].getAttribute('data-id'), checkBox[i].getAttribute('data-category'), checkBox[i].getAttribute('data-date'), checked)
    })
    }
}

function rewriteChecked(name, id, category, date, check){
    let convertDate = new Date(date),
    newTask = new Task(id, name, category, convertDate, check);
    add(newTask);
}

export{
    changeCheck
}