
const merge_all_projects =function(){
    let all_todo_items=[]
    for(let i=0; i< myProjects.projects_list.length; i++){
        for(let j=0; j< myProjects.projects_list[i].things_to_do.length; j++){
            all_todo_items.push(myProjects.projects_list[i].things_to_do[j]);
        };
    };
    console.log(all_todo_items)
    return(all_todo_items)
};

const arrange_by_time = function(){
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

const reprioritize = function(list_of_things){
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

export default {merge_all_projects, reprioritize, arrange_by_time};