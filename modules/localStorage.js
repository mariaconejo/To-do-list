import{addTask} from './addTask.js';
import{updateTime} from './updateTime.js';

let history = localStorage;

// funcion que agrega al localstorage
function add (item){
    history.setItem(`${item.id}`, JSON.stringify(item));
}

// funcion que trae lo que esta guardado en el localstorage
function refresh (){
    for (let i = 0; i < history.length; i++) {
        let element = JSON.parse(history.getItem(history.key(i))),
        date = new Date(element.date);
        addTask(element, date, element.check);
    }
    updateTime();
}

// funcion que elimina tarea de localstorage
function remove (id){
    history.removeItem(id);
}

export{
    add,
    refresh,
    remove
}