import taskbox from './components/taskBox';
import taskInput from './components/taskInput';
import './style.css'

let listOfTasks=[];
const content=document.createElement('div');


content.appendChild(taskInput(listOfTasks));


document.body.appendChild(content);