//LOGIC


//create Todo lists


const Project =function() { 
    const things_to_do = [];
    const addItem = function(newItem){
        things_to_do.push(newItem);
        return(things_to_do)
    };
    const removeItem = function(item_to_remove){
        for (let i =0; i<things_to_do.length; i++){
            if(things_to_do[i].title.toLowerCase() == item_to_remove.toLowerCase()){
                things_to_do.splice(i,1);
                console.log("item removed: "+ item_to_remove)
            }
         };
        return(things_to_do)
    };

    return {things_to_do, addItem, removeItem};
  }; 

const ToDo = function() { 
    const things_to_do = [];
    const addItem = function(newItem){
        things_to_do.push(newItem);
        return(things_to_do)
    };
    const removeItem = function(item_to_remove){
        for (let i =0; i<things_to_do.length; i++){
            if(things_to_do[i].title.toLowerCase() == item_to_remove.toLowerCase()){
                things_to_do.splice(i,1);
                console.log("item removed: "+ item_to_remove)
            }
         };
        return(things_to_do)
    };
    const reprioritize = function(){
        // TODO
        //change the priorities of the items if an item is removed
        return(things_to_do)
    }
    return {things_to_do, addItem, removeItem, reprioritize};
  }; 




// create inidividual todo list items
const todo_list_item = function(title, description, dueDate, priority){
    return{title,description,dueDate, priority}
};



//TESTING
const defaultProject = Project();
const errands = ToDo()

const shovel = new todo_list_item("Shovel", "Shovel snow off driveway", "Today", 3);
const drive = new todo_list_item("Drive","Drive home before we are snowed in","Today",1)
const walk_dog = new todo_list_item("Walk Dog", "Walk dog before her bladder ruptures","Today",2)
const check_pantry = new todo_list_item("Check Pantry", "Check pantry to make sure we have enough food for a few days", "Today", 4)
const read_all_day = new todo_list_item("Read all day","Read as many papers while staying warm", "Tomorrow", 5)

errands.addItem(shovel);
errands.addItem(drive);
errands.addItem(walk_dog);
errands.addItem(check_pantry)
errands.addItem(read_all_day);
//console.log(errands.things_to_do)
/*
console.log("Now lets remove an item")
errands.removeItem("Walk dog")
console.log(errands.things_to_do)
*/
console.log(defaultProject.things_to_do)
defaultProject.addItem(errands);
console.log(defaultProject.things_to_do)

//Make second project 
const life_goals = Project();
const daily_goals = ToDo(life_goals)
const long_term = ToDo(life_goals)





/*
//MAKE IT A CLASS
class Project{
    constructor(){
        this.things_to_do = [];
    }
    addItem(newItem){
        this.things_to_do.push(newItem);
        return(this.things_to_do)
    };
    removeItem(item_to_remove){
        for (let i =0; i<this.things_to_do.length; i++){
            if(this.things_to_do[i].title.toLowerCase() == item_to_remove.toLowerCase()){
                this.things_to_do.splice(i,1);
                console.log("item removed: "+ item_to_remove)
            }
         };
        return(this.things_to_do)
    };
}
class Todo extends Project{}

const todo_list_item = function(title, description, dueDate, priority){
    return{title,description,dueDate, priority}
};
//TESTING FOR IF CLASS
const defaultProject = new Project();
const errands = new Todo();
defaultProject.addItem(errands);
const shovel = new todo_list_item("Shovel", "Shovel snow off driveway", "Today", 3);
const drive = new todo_list_item("Drive","Drive home before we are snowed in","Today",1)
const walk_dog = new todo_list_item("Walk Dog", "Walk dog before her bladder ruptures","Today",2)
const check_pantry = new todo_list_item("Check Pantry", "Check pantry to make sure we have enough food for a few days", "Today", 4)
const read_all_day = new todo_list_item("Read all day","Read as many papers while staying warm", "Tomorrow", 5)
errands.addItem(shovel);
errands.addItem(drive);
errands.addItem(walk_dog);
errands.addItem(check_pantry)
errands.addItem(read_all_day);
errands.removeItem("Walk dog")

console.log(defaultProject.things_to_do)


*/



