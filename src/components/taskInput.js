import './styles/taskInput.css'
import taskbox from './taskBox';
function taskInput(listOfTasks) {
    const wrapper=document.createElement('div');
    wrapper.classList.add('wrapper');
    const taskAdd = document.createElement('div');
    taskAdd.classList.add('task-add');
    const taskInputName = document.createElement('input');
    const dateInput=document.createElement('input');

    taskInputName.placeholder = "Enter Task Here";
    taskInputName.id = "input-task";
    dateInput.id="input-date";
    dateInput.type='date';
    taskAdd.appendChild(taskInputName);
    taskAdd.appendChild(dateInput);
    const buttonAdd = document.createElement('div');
    buttonAdd.innerText = 'Add';
    buttonAdd.classList.add('add-button');
    const elements = document.createElement('div');
    buttonAdd.addEventListener('click', () => {
        elements.innerHTML = null;
        const input = document.getElementById('input-task');
        const time=document.getElementById('input-date');
        let task = input.value;
        let dateOb=new Date();
        let due=false;
        let compTime=new Date(time.value);
        let timeStamp=time.value.split('-').reverse().join('-');
        let currentDate=`${dateOb.getDate()}-${dateOb.getMonth()+1}-${dateOb.getFullYear()}`;
        if (!(compTime>dateOb))
        {
            due=true;
        }

        input.value = "";
        listOfTasks.push({ 'task': task ,'time':timeStamp,'due':due});
        localStorage.setItem('list',JSON.stringify(listOfTasks));
        listOfTasks.forEach(task => {
            const taskComponent = taskbox(task,listOfTasks);
            taskComponent.id=elements.childNodes.length;
            task['id'] = elements.childNodes.length;
            elements.appendChild(taskComponent); 
        });
        wrapper.appendChild(elements);
    })
    wrapper.appendChild(taskAdd);
    taskAdd.appendChild(buttonAdd);
    return wrapper;
}
export default taskInput;