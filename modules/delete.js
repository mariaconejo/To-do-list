import{remove} from './localStorage.js';

// funcion que muestra el y esconde el boton borrar todo
function showDelete(listItems, deleteAll){
    if (listItems.length > 0) {
        deleteAll.classList.remove('task_close-js');
    }else{
        deleteAll.classList.add('task_close-js');
    }
}

// funcion que borra todas las tareas realizadas
function deleteAllCheck(deleteAll, checkBox, listItems){
    deleteAll.addEventListener('click', (e) =>{
        for (let i = 0; i < checkBox.length; i++) {
            if (checkBox[i].checked == true) {
                listItems[i].remove();
                remove(checkBox[i].getAttribute('data-id'));
            }
        }
    })
}
// funcion que borra cada tarea
function deleteTask(deleteBtn, listItems){
    let arraylength = deleteBtn.length;
    for (let i = 0; i < arraylength; i++) {
        deleteBtn[i].addEventListener('click', (e) =>{
        e.preventDefault();
        console.log(i)
        remove(deleteBtn[i].getAttribute('data-id'));
        listItems[i].remove();
        window.location.reload();
    })
    }
}

export{
    deleteTask,
    showDelete,
    deleteAllCheck
}