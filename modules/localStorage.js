import{addTask} from './addTask.js';

let history = localStorage,
saveItems = [];

function add (item){
    history.setItem(`${item.id}`, JSON.stringify(item));
}

function refresh (){
    for (let i = 0; i < history.length; i++) {
        let element = JSON.parse(history.getItem(history.key(i))),
        date = new Date(element.date);
        addTask(element, date);
    }
}

function edit(){
    
}

export{
    add,
    refresh,
}