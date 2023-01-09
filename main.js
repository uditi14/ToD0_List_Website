/*window.addEventListener('load', () => {
    todo_list = JSON.parse(localStorage.getItem('todo_list')) || [];
    console.log(todo_list);

    if (todo_list != null) {
        todo_list.forEach(Element => {
            task_input=Element;
            form.submit;
        });

    }
})*/

const form = document.getElementById("new-task-box");
const input = document.getElementById("new-task-input");
const list_el = document.getElementById("tasks");
//todo_list = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const task_input = input.value;

    if (task_input) {
        //console.log("submitted");
        const task_frame = document.createElement("div");
        task_frame.classList.add("task");

        const task_frame_content = document.createElement("div");
        task_frame_content.classList.add("content");

        const task_text = document.createElement("input");
        task_text.classList.add("text");
        task_text.type = "text";
        task_text.value = task_input;
        task_text.setAttribute("readonly", "readonly");

        const task_frame_actions = document.createElement("div");
        task_frame_actions.classList.add("actions");

        const task_edit_button = document.createElement("button");
        task_edit_button.classList.add("edit");
        task_edit_button.innerHTML = "EDIT";

        const task_delete_button = document.createElement("button");
        task_delete_button.classList.add("delete");
        task_delete_button.innerHTML = "DELETE";

        task_frame.appendChild(task_frame_content); //append content to task
        task_frame_content.appendChild(task_text); //append text to content
        task_frame_actions.appendChild(task_edit_button); //append edit to actions
        task_frame_actions.appendChild(task_delete_button); //append delete to actions
        task_frame.appendChild(task_frame_actions); //append actions to a task
        list_el.appendChild(task_frame); //append single task to list of tasks

        input.value = ""; //reset value of input 

        /*todo_list.push(task_input);
        localStorage.setItem("todo_list", JSON.stringify(todo_list));*/

        //making edit function
        task_edit_button.addEventListener('click', () => {
            if (task_edit_button.innerText.toLowerCase() == "edit") {
                task_text.removeAttribute("readonly");
                task_text.focus();
                task_edit_button.innerText = "SAVE";
            } else {
                task_text.setAttribute("readonly", "readonly");
                task_edit_button.innerText = "EDIT";
            }
        });

        //making delete function
        task_delete_button.addEventListener('click', () => {
            list_el.removeChild(task_frame);
        });
    }
});

