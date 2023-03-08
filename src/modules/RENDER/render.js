import initialize_logic from "../LOGIC/initialize_logic.js";
import note from "../LOGIC/create_individual_note.js"
import Notes from '../LOGIC/notes.js'
import Projects from '../LOGIC/project.js'
import ToDo from '../LOGIC/todo.js'
import todo_list_item from '../LOGIC/create_individual_todo.js';

const myProjects = initialize_logic().myProjects;
const myNotes = initialize_logic().myNotes

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

//render modal (the plus tab)
const add_modal = function(){
    
    //render "create new note" tab in modal
    const create_note = function(){
        const notes_form = document.createElement("div")
        notes_form.style.display="flex"
        notes_form.style.flexDirection="column"
    
        const notes_title = document.createElement("input")
        notes_title.setAttribute("type","text")
        notes_title.setAttribute("placeholder","Title")
        notes_title.setAttribute("id","notes_title")
    
        notes_form.appendChild(notes_title);
    
        const notes_description = document.createElement("textarea")
        notes_description.setAttribute("type","text");
        notes_description.setAttribute("id","notes_description");
        notes_description.setAttribute("placeholder","Add description here. If you are creating a list, seperate items by a comma.")
        notes_form.appendChild(notes_description);

        const notes_select_label = document.createElement("label")
        notes_select_label.setAttribute("for","notes_type")
        notes_select_label.textContent = "select note type: ";
        notes_form.appendChild(notes_select_label);
        
        const notes_select = document.createElement("select");
        notes_select.setAttribute("id","notes_type")
        const notes_type_list = document.createElement("option");
        notes_type_list.setAttribute("value","list")
        notes_type_list.textContent = "list";
        notes_select.appendChild(notes_type_list)
        
        const notes_type_text =document.createElement("option");
        notes_type_text.setAttribute("value","text")
        notes_type_text.textContent= "text";
        notes_select.appendChild(notes_type_text)
        
        notes_form.appendChild(notes_select)
        rightside_modal.appendChild(notes_form)

        const create_button= document.createElement("button")
        create_button.setAttribute("id", "create_button")
        create_button.textContent = "Create";
        const sb = document.querySelector("#notes_type")
        const nt = document.getElementById("notes_title")
        const nd = document.getElementById("notes_description")

        create_button.onclick=function(){
            console.log("new note created");
            //console.log(notes_title.value)
            let new_note = note(`${nt.value}`,`${nd.value}`,`${sb.value}`)
            myNotes.addItem(new_note)
            addModal.style.display = "none";
            
        }
        rightside_modal.append(create_button)
    }
    //render "create new project" tab in modal
    const create_project= function(){
        const projects_form = document.createElement("div");
        projects_form.style.display = "flex";
        projects_form.style.flexDirection="column";

        const  project_title=document.createElement("input");
        project_title.setAttribute("type","text");
        project_title.setAttribute("placeholder","New project");

        projects_form.appendChild(project_title);
        rightside_modal.appendChild(projects_form);
        const create_button= document.createElement("button");
        create_button.setAttribute("id", "create_button");
        create_button.textContent = "Create";
        create_button.onclick = function(){
            console.log("adding a new project named: "+ project_title.value)
            let new_todo = new ToDo(`${project_title.value}`)
            myProjects.addToDo(new_todo)
            addModal.style.display = "none"
        }
        rightside_modal.append(create_button);
    }
    //"create a new todo list item" tab in modal 
    const create_todo =function(){
        const todo_form = document.createElement("div");
        todo_form.style.display="flex";
        todo_form.style.flexDirection="column";

        const todo_title=document.createElement("input")
        todo_title.setAttribute("type","text")
        todo_title.setAttribute("placeholder","Title")
        todo_form.appendChild(todo_title)

        const todo_description = document.createElement("textarea")
        todo_description.setAttribute("type","text");
        todo_description.setAttribute("id","todo_description");
        todo_description.setAttribute("placeholder","Details")
        todo_form.appendChild(todo_description);

      

        const priority_container = document.createElement("div")
        priority_container.style.display="flex";
        priority_container.textContent="Priority: "
        priority_container.style.fontSize = "15px"
        priority_container.style.alignContent="center";


        const low_priority = document.createElement("button")
        low_priority.textContent="low";
        low_priority.setAttribute("id","priority_btn");
        priority_container.appendChild(low_priority)
        

        const middle_priority = document.createElement("button")
        middle_priority.textContent="middle";
        middle_priority.setAttribute("id","priority_btn")
        priority_container.appendChild(middle_priority)

        const high_priority = document.createElement("button")
        high_priority.textContent="high";
        high_priority.setAttribute("id","priority_btn")
        priority_container.appendChild(high_priority)


        
        const temporal_container = document.createElement("div")
        temporal_container.style.display = "flex";
        temporal_container.textContent="When to do? "
        temporal_container.style.fontSize = "15px";
        //TODO make default time today

        const due_today= document.createElement("button");
        due_today.textContent = "Today";
        due_today.setAttribute("id","temporal_btn");
        temporal_container.appendChild(due_today);

        const due_tomorrow = document.createElement("button")
        due_tomorrow.textContent = "Tomorrow";
        due_tomorrow.setAttribute("id","temporal_btn")
        temporal_container.appendChild(due_tomorrow)

        const due_someday =document.createElement("button")
        due_someday.textContent= "Someday";
        due_someday.setAttribute("id","temporal_btn")
        temporal_container.appendChild(due_someday)
        
        let project_selection =null;
        const dropdown=document.createElement("div")
        dropdown.classList.add("dropdown")
        const dropdown_label=document.createElement("label")
        dropdown_label.textContent = "Pick a project: "
        dropdown.appendChild(dropdown_label)
        const project_dropdown_btn = document.createElement("button")
        project_dropdown_btn.classList.add("dropbtn")
        project_dropdown_btn.textContent= "Project"
        const project_dropdown_content = document.createElement("div")
        project_dropdown_content.setAttribute("id","myDropdown")
        project_dropdown_content.classList.add("dropdown-content")
        for(let i=0;i<myProjects.projects_list.length;i++){
            const proj_dropdown_btn = document.createElement("a");
            proj_dropdown_btn.setAttribute("value",`${myProjects.projects_list[i].title}`)
            proj_dropdown_btn.textContent=myProjects.projects_list[i].title
            project_dropdown_content.appendChild(proj_dropdown_btn)
            proj_dropdown_btn.onclick= function(){
                console.log("project for new todo object has been selected!");
                project_selection = myProjects.projects_list[i].title;
                project_dropdown_btn.textContent=myProjects.projects_list[i].title;
                proj_dropdown_btn.style.backgroundColor= "var(--jadeGreen)";
            }
        }
        dropdown.appendChild(project_dropdown_btn)
        dropdown.appendChild(project_dropdown_content)

        project_dropdown_btn.onclick=function(){
            project_dropdown_content.style.display = "block"
        }
        
        const create_button= document.createElement("button");
        create_button.setAttribute("id", "create_button");
        create_button.textContent = "Create";

        rightside_modal.appendChild(todo_form);
        rightside_modal.appendChild(priority_container);
        rightside_modal.appendChild(temporal_container)
        rightside_modal.appendChild(dropdown)
        rightside_modal.append(create_button);

        const priority_selection = document.querySelectorAll("#priority_btn")
        //previous_btn=null;
        
        priority_selection.forEach(function(priority_button){ 
            let previous_btn=null;
            priority_button.onclick=function(){
                priority_selection.value = priority_button.textContent;
                console.log("priority has been set to: "+ priority_selection.value)
                priority_button.style.backgroundColor="var(--jadeGreen)";
                //priority_button.classList.add("active")
                if(previous_btn!=null){
                    //previous_btn.classList.remove("active")
                    previous_btn.style.backgroundColor="var(--sageGreen)";
                }
                previous_btn=priority_button;
            }
        })
        let temporal_btn_previous=null;
        const temporal_selection = document.querySelectorAll("#temporal_btn")
        temporal_selection.forEach(function(temporal_button){
            temporal_button.onclick=function(){
                temporal_selection.value = temporal_button.textContent;
                console.log("temporal has been set to: "+ temporal_selection.value);
                temporal_button.style.backgroundColor = "var(--jadeGreen)";
                if(temporal_btn_previous!=null){
                    temporal_btn_previous.style.backgroundColor="var(--sageGreen)";
                }
                temporal_btn_previous=temporal_button;
            }
        })


        create_button.onclick=function(){
            const new_todo_item = new todo_list_item(`${todo_title.value}`,`${todo_description.value}`,`${temporal_selection.value}`,`${priority_selection.value}`)
            if (project_selection!=null){
                for (let i=0; i<myProjects.projects_list.length;i++){
                    if(myProjects.projects_list[i].title == project_selection){
                        myProjects.projects_list[i].add_todo_item(new_todo_item)
                        console.log("new item created" + new_todo_item)
                        console.log(myProjects)
                    }
                }
            }
            addModal.style.display = "none"
        }
        
    }


    // render project button on left side of modal
    const render_project_button_modal =function(){
        const project_button_modal = document.createElement("button")
        project_button_modal.setAttribute("id","project_button_modal")
        project_button_modal.textContent="Projects"
        project_button_modal.onclick=function(){
            console.log(project_active)
            if(project_active==false){
                rightside_modal.innerHTML="";
                create_project();
                project_active=true;
                todo_active=false;
                notes_active=false;
                console.log("project tab on module is now active")
            }
        }
        leftside_modal.append(project_button_modal)
    }


    //render todo button on left side of modal
    const render_todo_button_modal =function(){
        const todo_button_modal = document.createElement("button")
        todo_button_modal.setAttribute("id","todo_modal")
        todo_button_modal.textContent="Todo"
        todo_button_modal.onclick = function(){
            if (todo_active==false){
                rightside_modal.innerHTML="";
                create_todo();
                todo_active=true;
                project_active=false;
                notes_active=false;
            }
        }
        leftside_modal.append(todo_button_modal)
    }


    // render notes button on left side of modal
    const render_notes_button_modal =function(){
        const notes_button_modal = document.createElement("button")
        notes_button_modal.setAttribute("id","notes_button_modal")
        notes_button_modal.textContent="Notes"
        notes_button_modal.onclick = function(){
            console.log(notes_active==false)
            console.log("clicked notes in modal")
            if (notes_active==false){
                rightside_modal.innerHTML="";
                create_note();
                notes_active=true;
                project_active=false;
                todo_active=false;
                console.log("notes tab on modal now active")
            }
        }
        leftside_modal.append(notes_button_modal)
    }


    let todo_active=false;
    let project_active=false;
    let notes_active=false;

    console.log("clicked add modal button!")
    
    const addModal = document.createElement("div")
    addModal.setAttribute("class","modal")
    addModal.style.display = "block"

    const modal_content = document.createElement("div")
    modal_content.setAttribute("class","modal_content")

    const modal_upper = document.createElement("div")
    modal_upper.setAttribute("id","modal_upper")
    modal_upper.style.display = "flex";
    modal_upper.style.justifyContent="space-between";
    modal_upper.style.alignItems="flex-end"
    modal_upper.style.margin="2% 2% 0% 2%";
    
    const span_modal = document.createElement("span")
    span_modal.setAttribute("class","close")
    span_modal.innerHTML = "&times;";
    span_modal.onclick = function(){
        addModal.style.display = "none"
    }
     // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == addModal) {
        addModal.style.display = "none";
        }
    }

    const modal_form = document.createElement("div")
    modal_form.setAttribute("id","modal_form")
    
    
    const modal_header = document.createElement("div")
    modal_header.setAttribute("id","modal-header")
    modal_header.innerHTML = "Create new ... "

    const leftside_modal = document.createElement("div")
    leftside_modal.setAttribute("id","leftside")
    const rightside_modal = document.createElement("div")
    rightside_modal.setAttribute("id","rightside")

    render_todo_button_modal();
    render_project_button_modal();
    render_notes_button_modal();
    
    modal_upper.appendChild(modal_header)
    modal_upper.appendChild(span_modal)
    modal_content.appendChild(modal_upper)

    modal_form.appendChild(leftside_modal)
    modal_form.appendChild(rightside_modal)

    modal_content.appendChild(modal_form)
    addModal.appendChild(modal_content)
    document.body.appendChild(addModal)
    
}

//render project
const project_rendered = function(){
    //console.log("project button clicked")
    rightside.innerHTML="";
    for(let i=0; i<myProjects.projects_list.length;i++){
        const mini_project_button = document.createElement("button")
        mini_project_button.setAttribute("id","mini_project_button")
        mini_project_button.textContent=`${myProjects.projects_list[i].title}`;
        rightside.appendChild(mini_project_button);
        mini_project_button.onclick = function(){
            rightside.innerHTML="";
            todo_button_list_render(myProjects.projects_list[i].things_to_do);
        }
        
    }
}

//render a todo list
const todo_button_list_render = function(list_of_todo_items){
    console.log("todo list button clicked");
    const todo_list_start = document.createElement("ul");
    for (let i =0; i< list_of_todo_items.length ; i++){
        const todo_item = document.createElement("li");
        todo_item.textContent = `${list_of_todo_items[i].title}`;
        todo_item.classList.add("collapsible");

        const todo_content =document.createElement("div")
        todo_content.classList.add("content")

        const todo_material =document.createElement("div")
        todo_material.classList.add("material")
        todo_material.style.display="flex";
        todo_material.style.justifyContent="space-between";
        todo_material.style.paddingRight="1em";
    
        const span_modal = document.createElement("span")
        span_modal.setAttribute("class","close")
        span_modal.innerHTML = "&times;";
        span_modal.onclick = function(){
            todo_item.style.display = "none"
            for(let j=0;j<myProjects.projects_list.length;j++){
                if (myProjects.projects_list[j].title == `${list_of_todo_items[i].project}`){
                    console.log("Item to remove: " + `${list_of_todo_items[i].title}` )
                    console.log("from project: "+ `${list_of_todo_items[i].project}`)
                    console.log(myProjects.projects_list[j].remove_todo_item(`${list_of_todo_items[i].title}`))
                    
                }
                
            }
            
        }

        const todo_project =document.createElement("p");
        todo_project.textContent =`Project: ${list_of_todo_items[i].project}`;
        todo_project.style.fontStyle="italic";
        todo_project.style.color="white"

        const todo_details =document.createElement("p");
        todo_details.textContent =`${list_of_todo_items[i].description}`;

        const todo_priority =document.createElement("p")
        todo_priority.textContent =`Priority: ${list_of_todo_items[i].priority}`
        if(list_of_todo_items[i].priority == "low"){
            todo_priority.style.color = "#9CFF00"
        }
        if (list_of_todo_items[i].priority == "medium"){
            todo_priority.style.color ="#FE8B02"
        }
        if (list_of_todo_items[i].priority =="high"){
            todo_priority.style.color = "#FF3131"
        }
        

        todo_item.onclick=function(){
            this.classList.toggle("active");
            if (todo_content.style.display === "block"){
                todo_content.style.display = "none";
            }
            else{
                todo_content.style.display = "block";
            }
        }
        

        todo_material.appendChild(todo_details);
        todo_material.appendChild(todo_project);
        todo_material.appendChild(todo_priority)
        todo_material.appendChild(span_modal);

        todo_content.appendChild(todo_material);

        todo_item.appendChild(todo_content);
        todo_list_start.appendChild(todo_item);
    }
    rightside.append(todo_list_start)
  
}



//render notes tab
function render_notes(list_of_notes){
    console.log("Notes rendered")
    console.log(list_of_notes.notes_list[0].title)
    const notes_container = document.createElement("div")

    for(let i=0; i<list_of_notes.notes_list.length;i++){
        const notes_item = document.createElement("div")
        notes_item.classList.add("notes_item")

        const span_modal = document.createElement("span")
        span_modal.setAttribute("class","close")
        span_modal.innerHTML = "&times;";

        span_modal.onclick = function(){
            notes_item.style.display = "none"
            for(let k=0;k<myNotes.notes_list.length;k++){
                if (myNotes.notes_list[k].title == `${list_of_notes.notes_list[i].title}`){
                    console.log("Item to remove: " + `${list_of_notes.notes_list[i].title}`);
                    myNotes.notes_list[k].removeItem(`${list_of_notes.notes_list[i].title}`);
                }}}
        const notes_header = document.createElement("div")
        notes_header.style.display="flex"
        notes_header.style.justifyContent="space-between";
        notes_header.style.alignItems="baseline";

        const notes_item_title =document.createElement("div")
        notes_item_title.classList.add("notes_title")
        notes_item_title.textContent= `${list_of_notes.notes_list[i].title}`;
        notes_item_title.style.fontWeight="800";
        notes_header.appendChild(notes_item_title)
        notes_header.appendChild(span_modal)
        notes_item.appendChild(notes_header)

        if (list_of_notes.notes_list[i].type =="text"){
            const notes_item_description = document.createElement("div")
            notes_item_description.classList.add("notes_description")
            notes_item_description.textContent = `${list_of_notes.notes_list[i].description}`
            notes_item.appendChild(notes_item_description)
        }
        else{
            const notes_item_description = document.createElement("ul")
            var text_split = `${list_of_notes.notes_list[i].description}`.split(",")
            for(let j=0; j<text_split.length;j++){
                console.log(text_split[j]);
                const notes_list_item =document.createElement("li")
                notes_list_item.textContent=text_split[j];
                notes_item_description.appendChild(notes_list_item)
            }
            notes_item.appendChild(notes_item_description)

        }

        notes_container.appendChild(notes_item)
    }
    rightside.appendChild(notes_container)
}






    

    const container = document.createElement("div")
    container.setAttribute("id","container")
    
    const leftside = document.createElement("div")
    leftside.setAttribute("id","leftside")
    
    const rightside = document.createElement("div")
    rightside.setAttribute("id","rightside")
    

    const project_button = document.createElement("button")
    project_button.setAttribute("id","project_button")
    project_button.textContent="Projects"
    project_button.onclick = function(){
        project_rendered();
    };

    const today_button = document.createElement("button");
    today_button.setAttribute("id","today");
    today_button.textContent="Today";


    today_button.onclick = function(){
        rightside.innerHTML="";
        var items_due_today = reprioritize(arrange_by_time().dueToday);
        todo_button_list_render(items_due_today);
    }

    const tomorrow_button = document.createElement("button")
    tomorrow_button.setAttribute("id","tomorrow")
    tomorrow_button.textContent="Tomorrow"
    tomorrow_button.onclick = function(){
        rightside.innerHTML="";
        var items_due_tomorrow = reprioritize(arrange_by_time().dueTomorrow);
        todo_button_list_render(items_due_tomorrow);
    };

    const someday_button = document.createElement("button")
    someday_button.setAttribute("id","someday")
    someday_button.textContent="Someday"
    someday_button.onclick = function(){
        rightside.innerHTML="";
        var items_due_someday = reprioritize(arrange_by_time().dueSomeday);
        todo_button_list_render(items_due_someday);
    }

    const notes_button = document.createElement("button")
    notes_button.setAttribute("id","notes_button")
    notes_button.textContent="Notes"
    //notes_button.onclick = notes_rendered;
    notes_button.onclick = function(){
        rightside.innerHTML="";
        render_notes(myNotes);
    }
    
    const add_button = document.createElement("button")
    add_button.setAttribute("id","add_button")
    add_button.textContent="+"
    add_button.onclick = add_modal;
    
    
    leftside.append(today_button)
    leftside.append(tomorrow_button)
    leftside.append(someday_button)
    leftside.append(project_button)
    leftside.append(notes_button)
    leftside.append(add_button)
    
    container.append(leftside)
    container.append(rightside)
    
    document.body.appendChild(container)

export default function render(){};

