function createId(){
    let listObject = document.querySelectorAll('li'),
    newId;
    for (let i = 0; i < listObject.length; i++) {
        let id = listObject[i].getAttribute('data-id');
        if(i != id){
            
            newId = i;
        }
    }
    return newId;
}

export{
    createId
}