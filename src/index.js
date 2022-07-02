import taskbox from './components/taskBox';
import taskInput from './components/taskInput';
import './style.css'

let listOfTasks=[];
const content=document.createElement('div');
content.appendChild(taskInput(listOfTasks));
if(localStorage.getItem('list'))
{
    listOfTasks=JSON.parse(localStorage.getItem('list'));
    listOfTasks.forEach(task => {
        const taskComponent = taskbox(task,listOfTasks);
        taskComponent.id=content.childNodes.length;
        task['id'] = content.childNodes.length;
        content.appendChild(taskComponent); 
    });
} 







document.body.appendChild(content);