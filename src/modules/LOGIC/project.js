//create Projects factory
const Projects =function() { 
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

  export default Projects;
  