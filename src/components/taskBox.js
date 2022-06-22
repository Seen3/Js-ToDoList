import './styles/taskBox.css'
import trash from '../svg/trash-can.png'
function taskbox(task)
{
    const taskComponent=document.createElement('div');
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

    deleteButton.appendChild(img);
    innerBox.appendChild(taskText);
    innerBox.appendChild(deleteButton);
    taskComponent.appendChild(innerBox);
    return taskComponent;
}
export default taskbox;