//LOGIC
//create Projects lists
export default function Projects() { 
    const projects_list = [];
    Projects.numInstances = (Projects.numInstances || 0)+1;

    //add a todo list
    const addToDo = function(newItem){
        projects_list.push(newItem);
        return(projects_list)
    };
     //decreases the amount of ToDo list's exist if a ToDo list is deleted
    const dispose = function(){
        return(Projects.numInstances -= 1)
    }
    
    //remove a todo list
    const removeToDofromProjects = function(item_to_remove){
        for (let i =0; i<projects_list.length; i++){
            if(projects_list[i].title.toLowerCase() == item_to_remove.toLowerCase()){
                projects_list.splice(i,1);
                console.log("item removed: "+ item_to_remove)
            }
         };
        return(projects_list)
    };
    //get todo titles within a particular project
    const get_project_names = function(){
        const project_titles = [];
        for (let i =0; i<projects_list.length; i++){
            project_titles.push(projects_list[i].title)
        }
        return(project_titles)
    }
    
    return { projects_list, addToDo, removeToDofromProjects ,get_project_names, dispose };
  }; 


//create todo lists
export default function ToDo(title){ 
    
    const things_to_do = [];
    ToDo.numInstances = (ToDo.numInstances || 0)+1;


    //decreases the amount of ToDo list's exist if a ToDo list is deleted
    const dispose = function(){
        return(ToDo.numInstances -= 1)
    }
    
    //add an item to a todo list
    const addItem = function(newItem){
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
    const removeItem = function(item_to_remove){
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

    return {title, things_to_do, addItem, removeItem, remove_all_items_in_list,dispose};
  }; 


export default function Notes(){
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

// create inidividual todo list items
export default function todo_list_item(title, description, dueDate, priority, project){
    project = null;
    return{title,description,dueDate, priority, project}
};


//create individual notes
export default function note(title, description,type){
    return {title, description,type}
}

export default function merge_all_projects(){
    let all_todo_items=[]
    for(let i=0; i< myProjects.projects_list.length; i++){
        //console.log(myProjects.projects_list[i].title);
        //console.log(myProjects.projects_list[i].things_to_do.length)
        for(let j=0; j< myProjects.projects_list[i].things_to_do.length; j++){
            //console.log(myProjects.projects_list[i].things_to_do.length)
            all_todo_items.push(myProjects.projects_list[i].things_to_do[j]);
        };
    };
    console.log(all_todo_items)
    return(all_todo_items)
};



export default function arrange_by_time(){
    let all_todo_items = merge_all_projects();
    var dueToday = [];
    var dueTomorrow= [];
    var dueSomeday = [];
    for(let i=0; i<all_todo_items.length; i++) {
        if (all_todo_items[i].dueDate.toLowerCase() =='today'){
            dueToday.push(all_todo_items[i]);
        }
        else if (all_todo_items[i].dueDate.toLowerCase() == 'tomorrow'){
            dueTomorrow.push(all_todo_items[i]);
        }
        else{
            dueSomeday.push(all_todo_items[i]);
        }
        
    }
    return{dueToday,dueTomorrow,dueSomeday}
}

export default function reprioritize(list_of_things){
    var sorted_by_priority=[];
    var mapped_list=[];
    var low_priority=[];
    var medium_priority=[];
    var high_priority=[];
 
    for(let i=0; i<list_of_things.length;i++){
        if(list_of_things[i].priority == "low"){
            low_priority.push(list_of_things[i])

        }
        if(list_of_things[i].priority == "medium"){
            medium_priority.push(list_of_things[i])

        }
        if(list_of_things[i].priority == "high"){
            high_priority.push(list_of_things[i])

        }
    }
    mapped_list.push(high_priority)
    mapped_list.push(medium_priority)
    mapped_list.push(low_priority)
    sorted_by_priority=mapped_list.flat();

    return(sorted_by_priority);
}


//initialize logic
//export default {Projects, Notes, ToDo, todo_list_item, note, arrange_by_time, reprioritize, merge_all_projects}