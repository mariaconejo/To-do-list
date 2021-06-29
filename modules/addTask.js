import{list, chores, school, shop, edit, erase} from './modules/util.js';

function chooseCategory(category){
    let choose ;
    if (category == 'Tareas') {
        choose = chores;
    }else if (category == 'Escuela') {
        choose = school;
    }else if (category == 'Compras') {
        choose = shop;
    }
    return choose;
}

function choosechecked(checked, id){
    let inputCheck = checked ? `<input type="checkbox" id="checkbox-${id}" data-id="${id}">` : `<input type="checkbox" id="checkbox-${id}" data-id="${id}" checked>`;

    return inputCheck;
}

function addTask(category, name, id, time, checked = false){
    let choose = chooseCategory(category),
    inputCheck = choosechecked(checked, id),
    taskItem = document.createElement('li').setAttribute('data-id', `${id}`),
    taskContent = `
        <img src="${choose}" alt="categoria">
        ${inputCheck}
        <label for="checkbox-${id}">${name}</label>
        <input type="image" src="${edit}" alt="editar">
        <input type="image" src="${erase}" alt="borrar">
        <p>${time}</p>
    `;
    taskItem.inneHTML = taskContent;
    list.appendChild(taskItem);
}

export{
    addTask
}