import { add } from './localStorage.js';
import{editForm} from './util.js';
import Task from './task.js';

let modal = document.querySelector('.modal-background'),
todoList = document.querySelector('.task'),


function editModal(){
    modal.classList.add('modal_open-js');
    todoList.classList.add('task_close-js');
    
}

function closeModal(){
    modal.classList.remove('modal_open-js');
    todoList.classList.remove('task_close-js');
}

function rewrite(text, id, category, date){
    let convertDate = new Date(date),
    newTask = new Task(id, text, category, convertDate);
    add(item);

}


export{
    editModal,
    closeModal
}