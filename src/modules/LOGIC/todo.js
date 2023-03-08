//create todo lists as a factory
export default function ToDo(title) { 
    const things_to_do = [];
    ToDo.numInstances = (ToDo.numInstances || 0)+1;
  
    //add an item to a todo list
    const add_todo_item = function(newItem){
        const transformedItem = assign_project_value(newItem);
        //console.log(transformedItem);
        things_to_do.push(transformedItem);
        return(things_to_do)
    };

    const assign_project_value = function(newItem){
        newItem.project = title;
        return(newItem)
        //TODO move this to be a property of the todo item
    }

    //remove an item from a todo list
    const remove_todo_item = function(item_to_remove){
        for (let i =0; i<things_to_do.length; i++){
            if(things_to_do[i].title.toLowerCase() == item_to_remove.toLowerCase()){
                things_to_do.splice(i,1);
                console.log("item removed: "+ item_to_remove)
            }
         };
        return(things_to_do)
    };

    const remove_all_items_in_list = function(){
        for (let i=things_to_do.length; i > 0 ; i--){
            //console.log(things_to_do.length)
            things_to_do.pop();
         };
        console.log("All items from todo list " + title + " have been removed")
        console.log(things_to_do)
        console.log("length of todo list is now "+ things_to_do.length)
        return(things_to_do)
    }


    return {title, things_to_do, add_todo_item, remove_todo_item, remove_all_items_in_list};
  }; 


  
//export default {ToDo};