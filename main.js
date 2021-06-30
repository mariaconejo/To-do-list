import{formCreator, deleteBtn, closeBtn, editForm, editBtn, checkBox, listItems, deleteAll} from './modules/util.js';
import Task from './modules/task.js';
import{createId} from './modules/createId.js';
import{addTask} from './modules/addTask.js';
import{updateTime} from './modules/updateTime.js';
import{add, refresh} from './modules/localStorage.js';
import{executeModal, closeModal, rewrite, setName} from './modules/editModal.js';
import{changeCheck} from './modules/checkChange.js';
import{deleteTask, showDelete, deleteAllCheck} from './modules/delete.js';

// Son funciones que tiene que estar ejecutando siempre 
refresh();
executeModal(editBtn);
changeCheck(checkBox);
deleteTask(deleteBtn, listItems);
showDelete(listItems, deleteAll);
deleteAllCheck(deleteAll, checkBox, listItems);

// Funcion principal 
formCreator.addEventListener('submit',(e) => {
    
    e.preventDefault();
    let now = new Date(),
    id = createId(),
    name = formCreator.elements[0].value,
    category = formCreator.elements[1].value,
    item  = new Task(id, name, category, now),
    editBtnRefresh = document.getElementsByClassName('edit_btn-js'),
    checkRefresh = document.getElementsByClassName('checkbox_item-js'),
    deleteRefresh = document.getElementsByClassName('delete_btn-js'),
    listRefresh = document.getElementsByTagName('li');
    addTask(item, item.date);
    add(item);
    updateTime();
    executeModal(editBtnRefresh);
    changeCheck(checkRefresh);
    deleteTask(deleteRefresh, listRefresh);
    showDelete(listRefresh, deleteAll);
    deleteAllCheck(deleteAll. checkRefresh, listRefresh);
    formCreator.elements[0].value = '';
})

// cierra el modal de editar
closeBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    closeModal();
})

// edita la tarea
editForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    rewrite(editForm.elements[0].value, editForm.getAttribute('data-id'), editForm.getAttribute('data-category'), editForm.getAttribute('data-date'));
    setName(editForm);
    editForm.elements[0].value = '';
})
