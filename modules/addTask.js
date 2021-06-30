import{list} from './util.js';
import{timeAgo} from './timeAgo.js';
let chores = './img/house.png',
school = './img/book.png',
shop = './img/cart.png',
edit = './img/edit.png',
erase = './img/trash.png';

// funcion para escoger la categoría
function chooseCategory(category){
    let choose ;
    if (category == 'tarea') {
        choose = chores;
    }else if (category == 'escuela') {
        choose = school;
    }else if (category == 'compra') {
        choose = shop;
    }
    return choose;
}

// funcion que retorna si la tarea esta realizada o no
function choosechecked(item){
    let inputCheck = !item.check ? `<input type="checkbox" class="checkbox_item-js" id="checkbox-${item.id}" data-id="${item.id}" data-category="${item.category}" data-date="${item.date}" data-name="${item.name}" >` : `<input type="checkbox" class="checkbox_item-js" id="checkbox-${item.id}" data-id="${item.id}" data-category="${item.category}" data-date="${item.date}" data-name="${item.name}" checked>`;
    return inputCheck;
}

// funcion que agrega la tarea al DOM
function addTask(item, time){
    let choose = chooseCategory(item.category),
    inputCheck = choosechecked(item),
    pastTime = timeAgo(time),
    taskItem = document.createElement('li'),
    taskContent = `
        <img src="${choose}" alt="categoria">
        ${inputCheck}
        <label class="task_name-js" for="checkbox-${item.id}" data-id="${item.id}">${item.name}</label>
        <input class="edit_btn-js" type="image" src="${edit}" alt="editar" data-id="${item.id}" data-category="${item.category}" data-date="${item.date}">
        <input class="delete_btn-js" data-id="${item.id}" type="image" src="${erase}" alt="borrar" >
        <p data-time="${item.date}" class="time_test-js">${pastTime}</p>
    `;
    taskItem.setAttribute('data-id', `${item.id}`);
    taskItem.setAttribute('data-category', `${item.category}`);
    taskItem.innerHTML = taskContent;
    list.appendChild(taskItem);
}

export{
    addTask
}