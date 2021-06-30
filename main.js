import{formCreator, editBtn, deleteBtn, closeBtn, editForm} from './modules/util.js';
import Task from './modules/task.js';
import{createId} from './modules/createId.js';
import{addTask} from './modules/addTask.js';
import{updateTime} from './modules/updateTime.js';
import{add, refresh} from './modules/localStorage.js';
refresh();

formCreator.addEventListener('submit',(e) => {
    e.preventDefault();
    let now = new Date(),
    id = createId(),
    name = formCreator.elements[0].value,
    category = formCreator.elements[1].value,
    item  = new Task(id, name, category, now );

    addTask(item, item.date);
    
    formCreator.elements[0].value = '';

    add(item);
    updateTime();
})
console.log(editBtn);
for (let i = 0; i < editBtn.length; i++) {
    editBtn[i].addEventListener('click', (e) =>{
        e.preventDefault();
        let id = editBtn[i].getAttribute('data-id'),
        category = editBtn[i].getAttribute('data-category'),
        date = editBtn[i].getAttribute('data-date');
        editModal();
        editForm.setAttribute('data-id',`${id}`);
        editForm.setAttribute('data-category',`${category}`);
        editForm.setAttribute('data-date',`${date}`);
    })
    
}

closeBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    closeModal();
})

/*editForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    rewrite(editForm.elements[0].value, editForm.getAttribute('data-id'), editForm.getAttribute('data-category'), editForm.getAttribute('data-date'));
    editForm.elements[0].value = '';
})*/