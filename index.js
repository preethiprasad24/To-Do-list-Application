


document.addEventListener('DOMContentLoaded',()=>{
const taskInput=document.getElementById('task-input');
const addTaskBtn=document.getElementById('add-task-btn');
const taskList=document.getElementById('task-list');
const para=document.querySelector(".para")
const todosContainer=document.querySelector(".todos-container")

const emptypara=()=>{
    para.style.display=taskList.children.length===0 ?'block':'none';
    todosContainer.style.width=taskList.children.length>0?'100%':'50%';
};

//adding task to list
const addTask = (event) =>{
    event.preventDefault();
    const taskText =taskInput.value.trim()
    if(!taskText){
        return;}

//creating list and adding task
const li = document.createElement('li');
li.innerHTML=`
     
    <span>${taskText}</span>
     <div class="task-button">
    <button class="edit-btn"><i
    class="fa-solid fa-pen"></i></button>
    <button class="delete-btn"><i
    class="fa-solid fa-trash"></i></button>
    </div>
    `;


    const editBtn=li.querySelector('.edit-btn');


 editBtn.addEventListener('click',()=>{
  if(Text){
    taskInput.value=li.querySelector('span').textContent;
    li.remove();
    emptypara();
  }

 })

li.querySelector('.delete-btn').addEventListener('click',()=>{
        li.remove();
        toggleEmptyState();
})

taskList.appendChild(li);
taskInput.value='';
emptypara();
};

// adding function to button
addTaskBtn.addEventListener('click',addTask);
taskInput.addEventListener('keypress',(e)=>{
if(e.key==='Enter'){
    addTask(e);}

})
});





