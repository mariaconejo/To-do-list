class Task{
    constructor(id, name, category, date, check = false){
        this.id = id;
        this.name = name;
        this.category = category;
        this.date = date;
        this.check = check;
    }
    
    edit(newName){
        this.name = newName;
    }
    erase(){

    }
}

export default Task;