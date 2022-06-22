import './styles/taskInput.css'
import taskbox from './taskBox';
function taskInput(listOfTasks) {
    const wrapper=document.createElement('div');
    wrapper.classList.add('wrapper');
    const taskAdd = document.createElement('div');
    taskAdd.classList.add('task-add');
    const taskInputName = document.createElement('input');
    taskInputName.placeholder = "Enter Task Here";
    taskInputName.id = "input-task";
    taskAdd.appendChild(taskInputName);
    const buttonAdd = document.createElement('div');
    buttonAdd.innerText = 'Add';
    buttonAdd.classList.add('add-button');
    const elements = document.createElement('div');
    buttonAdd.addEventListener('click', () => {
        elements.innerHTML = null;
        const input = document.getElementById('input-task')
        let task = input.value;
        input.value = "";
        listOfTasks.push({ 'task': task });
        listOfTasks.forEach(task => {
            const taskComponent = taskbox(task);
            task['id'] = elements.childNodes.length;
            elements.appendChild(taskComponent);
            console.log(task);
        });
        wrapper.appendChild(elements);
    })
    wrapper.appendChild(taskAdd);
    taskAdd.appendChild(buttonAdd);
    return wrapper;
}
export default taskInput;