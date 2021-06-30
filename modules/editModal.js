import { add } from './localStorage.js';
import{editForm} from './util.js';
import Task from './task.js';

let modal = document.querySelector('.modal-background'),
todoList = document.querySelector('.task');

// funcion que ejecuta el modal
function executeModal(editBtn){
    let arraylength = editBtn.length;
    for (let i = 0; i < arraylength; i++) {
    editBtn[i].addEventListener('click', (e) =>{
        e.preventDefault();
        let id = editBtn[i].getAttribute('data-id'),
        category = editBtn[i].getAttribute('data-category'),
        date = editBtn[i].getAttribute('data-date');
        editModal(id, category, date);
    })
    }
}
// funcion de abre el modal de editar tarea
function editModal(id, category, date){
    modal.classList.add('modal_open-js');
    todoList.classList.add('task_close-js');
    editForm.setAttribute('data-id',`${id}`);
    editForm.setAttribute('data-category',`${category}`);
    editForm.setAttribute('data-date',`${date}`);
}

// funcion que cierra el modal de editar
function closeModal(){
    modal.classList.remove('modal_open-js');
    todoList.classList.remove('task_close-js');
}

// funcion que rescribe la tarea
function rewrite(text, id, category, date){
    let convertDate = new Date(date),
    newTask = new Task(id, text, category, convertDate);
    add(newTask);
    closeModal();
}

// funcion que cambia el nombre 
function setName(editForm){
    let taskName = document.getElementsByClassName('task_name-js');
    for (let i = 0; i < taskName.length; i++) { 
        if (editForm.getAttribute('data-id') == taskName[i].getAttribute('data-id')) {
            taskName[i].innerText = editForm.elements[0].value;
        }
    }
}


export{
    editModal,
    closeModal,
    rewrite,
    executeModal,
    setName
}