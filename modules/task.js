class Task{
    constructor(id, name, category, check, date){
        this.id = id;
        this.name = name;
        this.category = category;
        this.check = check;
        this.date = date;
    }
    
    edit(newName){
        this.name = newName;
    }
    erase(){

    }
}