import{list} from './util.js';
import{timeAgo} from './timeAgo.js';
let chores = './img/house.png',
school = './img/book.png',
shop = './img/cart.png',
edit = './img/edit.png',
erase = './img/trash.png';

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

function choosechecked(checked, id){
    let inputCheck = !checked ? `<input type="checkbox" id="checkbox-${id}" data-id="${id}">` : `<input type="checkbox" id="checkbox-${id}" data-id="${id}" checked>`;

    return inputCheck;
}

function addTask(item, time, checked = false){
    let choose = chooseCategory(item.category),
    inputCheck = choosechecked(checked, item.id),
    pastTime = timeAgo(time),
    taskItem = document.createElement('li'),
    taskContent = `
        <img src="${choose}" alt="categoria">
        ${inputCheck}
        <label for="checkbox-${item.id}" data-id="${item.id}">${item.name}</label>
        <input type="image" src="${edit}" alt="editar" class="edit_btn-js" data-id="${item.id}" data-category="${item.category}" data-date="${item.date}">
        <input type="image" src="${erase}" alt="borrar" class="delete_btn-js">
        <p data-time="${item.date}" class="time_test-js">${pastTime}</p>
    `;
    taskItem.setAttribute('data-id', `${item.id}`);
    taskItem.innerHTML = taskContent;
    list.appendChild(taskItem);
}

export{
    addTask
}