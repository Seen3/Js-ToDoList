import './style.css'

let listOfTasks=[];
const content=document.createElement('div');

const buttonAdd=document.createElement('div');
buttonAdd.innerText='Add';
buttonAdd.classList.add('add-button');

//input task
const taskAdd=document.createElement('div');
const taskInputName=document.createElement('input');
taskInputName.placeholder="Enter Task Here";
taskAdd.appendChild(taskInputName);
const elements=document.createElement('div');

buttonAdd.addEventListener('click',()=>{
    elements.innerHTML=null;    
    let task=taskInputName.value;
    listOfTasks.push({'task':task});
    listOfTasks.forEach(task => {
        const taskComponent=document.createElement('div');
        taskComponent.innerText=task['task'];
        elements.appendChild(taskComponent);
    });
    content.appendChild(elements);
})
content.appendChild(taskAdd);
content.appendChild(buttonAdd);

document.body.appendChild(content);