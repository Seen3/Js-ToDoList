import './styles/taskBox.css'
import trash from '../svg/trash-can.png'
function taskbox(task,listOfTasks)
{
    const taskComponent=document.createElement('div');
    taskComponent.id=task.id;
    const innerBox=document.createElement('div');
    const deleteButton=document.createElement('div');
    const img=document.createElement('img');
    img.src=trash;
    img.alt=`trash-icon`;
    img.classList.add('trash-icon');
    deleteButton.classList.add('delete-button');
    innerBox.classList.add('task-list-box');
    const taskText=document.createElement('p');
    taskText.classList.add('text');
    taskText.innerText=task['task'];
    const timeStamp=document.createElement('p');
    timeStamp.classList.add('text');
    timeStamp.innerText=task['time'];
    if (!task['due'])
    {
        innerBox.classList.add('time-false');
    }
    else{
        innerBox.classList.add('time-true');
    }
    deleteButton.appendChild(img);
    deleteButton.addEventListener('click',event=>{
        let id=event.target.parentElement.parentElement.parentElement;
        console.log("Deleted element has id ",id);
        event.target.parentElement.parentElement.remove();
        listOfTasks.splice(listOfTasks.findIndex(a => a.id === id) , 1);
        event.target.parentElement.parentElement.remove();
        
    })
    innerBox.appendChild(taskText);
    innerBox.appendChild(timeStamp);
    innerBox.appendChild(deleteButton);
    taskComponent.appendChild(innerBox);
    return taskComponent;
}
export default taskbox;