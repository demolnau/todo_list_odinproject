import './styles.css';
//TODO break up these three logic functions and import them OR move them into the RENDERING functions
//import {merge_all_projects, reprioritize, arrange_by_time} from './modules/LOGIC/arrange.js'
import Notes from './modules/LOGIC/notes.js'
import note from './modules/LOGIC/create_individual_note.js'
import Projects from './modules/LOGIC/project.js'
import ToDo from './modules/LOGIC/todo.js'
import todo_list_item from './modules/LOGIC/create_individual_todo.js';
//why can I not import multiple functions at once?
//import {Projects, Notes, ToDo, todo_list_item, note, arrange_by_time, reprioritize, merge_all_projects} from './modules/logic.js'

//initialize logic here
function initialize_logic(){
     const myProjects = Projects();
    //create a todo list
    const errands = ToDo("errands");
    //create individual todo items
    const shovel = new todo_list_item("Shovel", "Shovel snow off driveway", "Today", "medium");
    const drive = new todo_list_item("Drive","Drive home before we are snowed in","Today","high")
    const walk_dog = new todo_list_item("Walk Dog", "Walk dog before her bladder ruptures","Today","high")
    const check_pantry = new todo_list_item("Check Pantry", "Check pantry to make sure we have enough food for a few days. Also, what happens when I write a very long description?", "Today", "medium")
    const read_all_day = new todo_list_item("Read all day","Read as many papers while staying warm", "Tomorrow", "low")
    const therapy_appt = new todo_list_item("Make a therapy appt","For the love of god, remember to make a therapy appt","Someday","high")
    //add individual items to errands
    errands.add_todo_item(shovel);
    errands.add_todo_item(drive);
    errands.add_todo_item(walk_dog);
    errands.add_todo_item(check_pantry);
    errands.add_todo_item(read_all_day);
    errands.add_todo_item(therapy_appt)
    //console.log(errands)

    //Make second project 
    const grocery_shopping = ToDo("grocery shopping")
    const apple = todo_list_item("apple", "buy 3 apples","today","low")
    const banana = todo_list_item("banana","buy 2 bananas for smoothies", "today","low")
    grocery_shopping.add_todo_item(apple)
    grocery_shopping.add_todo_item(banana)
    //make third project 
    const remodeling_bathroom = ToDo("Bathroom remodel")
    const tile = new todo_list_item("Remove tile","scrape up old tile","Tomorrow","low")
    const wallpaper = new todo_list_item("Pick wallpaper","Pick out a  floral wall paper","Tomorrow","low")
    const sketch=new todo_list_item("Sketch new floor plan","Sketch new floor plan for contractor review","Tomorrow","high")
    remodeling_bathroom.add_todo_item(tile)
    remodeling_bathroom.add_todo_item(wallpaper)
    remodeling_bathroom.add_todo_item(sketch)
    //make fourth project
    const workout_session = ToDo("Workout")
    const burpees = new todo_list_item("Burpees", "3 sets of ten", "Today", "low")
    const walk = new todo_list_item("Walk", "Walk for 30 minutes", "Today","high")
    const crunches = new todo_list_item("Crunches","3 sets of 20 crunches","Today","high")
    workout_session.add_todo_item(burpees)
    workout_session.add_todo_item(crunches)
    workout_session.add_todo_item(walk)
    //add all ToDos to my Projects
    myProjects.addToDo(errands)
    myProjects.addToDo(grocery_shopping)
    myProjects.addToDo(remodeling_bathroom)
    myProjects.addToDo(workout_session)

    //create my Notes
    const myNotes= Notes();
    const note1 = note("books to read","Iliad, Art of War, Traveler's guide to the galaxy","list")
    const note2 = note("Poetry assignment","Look up the structure of some basic poems","text")
    const note3 = note("Catscratch song", " What is the actual name of the song that makes you think of cat's yowling ", "text")
    myNotes.addItem(note1)
    myNotes.addItem(note2)
    myNotes.addItem(note3)
    
    console.log(myProjects)
    console.log(myNotes)

};


initialize_logic();