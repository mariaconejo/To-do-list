const list = document.querySelector('#task-list'),
formCreator = document.querySelector('#create-task'),
selectCategory = document.querySelector('.create-select'),
deleteBtn = document.getElementsByClassName('delete_btn-js'),
closeBtn = document.querySelector('.close-btn'),
editForm = document.querySelector('#edit-task'), 
editBtn = document.getElementsByClassName('edit_btn-js'),
checkBox = document.getElementsByClassName('checkbox_item-js'),
listItems = document.getElementsByTagName('li'),
deleteAll = document.querySelector('.delete_all-js');


export {
    list,
    formCreator,
    selectCategory,
    deleteBtn,
    closeBtn,
    editForm,
    editBtn,
    checkBox,
    listItems,
    deleteAll
};
