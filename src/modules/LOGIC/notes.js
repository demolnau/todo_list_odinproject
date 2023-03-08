//create Notes factory
const Notes = function(){
    const notes_list=[];
    const addItem = function(newItem){
        notes_list.push(newItem);
        return(notes_list)
    };
    const removeItem = function(item_to_remove){
        for (let i =0; i<notes_list.length; i++){
            if(notes_list[i].title.toLowerCase() == item_to_remove.toLowerCase()){
                notes_list.splice(i,1);
                console.log("item removed: "+ item_to_remove)
            }
         };
        return(notes_list)
    };
    const getType = function(note){
        return(note.type)
    }
    return{ notes_list, addItem, removeItem, getType}
}


export default Notes;

