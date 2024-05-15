import { useState } from "react";

function ToDoList(){
  const [tasks,setTasks] = useState([ ]);
  const [newTasks,setNewTasks] = useState("");

  function handleInputChange (event){
    setNewTasks(event.target.value);
  }

  function addTask(){
    if(newTasks.trim() !== ""){
      setTasks(t =>[...t,newTasks]);
      setNewTasks("");
    }
  }

  function deleteTask(index){
    const updateTasks = tasks.filter((_,i) => i !== index);
    setTasks(updateTasks);
  }
  function moveTaskUp(index){
    if(index >0){
      const updateTasks = [...tasks];
      [updateTasks[index],updateTasks[index-1]] = [updateTasks[index-1],updateTasks[index]];
      setTasks(updateTasks);
    }
  }

  function moveTaskDown(index){
    if(index < tasks.length-1){
      const updateTasks = [...tasks];
      [updateTasks[index],updateTasks[index+1]] = [updateTasks[index+1],updateTasks[index]];
      setTasks(updateTasks);
    }
  }
  return(<div className="to-do-list">
    <h1>To-Do-List </h1>

    <div>
      <input type="text" placeholder="Enter the Todo" value = {newTasks} onChange={handleInputChange} className="input-todo"></input>
      <button className="add-button" onClick={addTask}>Add Todo</button>
    </div>

    <ol className="ol-list">
      {tasks.map((task,index) => 
      <li key={index} className="li-list">
        <span className="text">{task}</span>

        <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>

        <button className="move-button" onClick={() => moveTaskUp(index)}>👆</button>
        
        <button className="move-button" onClick={() => moveTaskDown(index)}>👇</button>
      </li>)}
    </ol>

  </div>)
}

export default ToDoList