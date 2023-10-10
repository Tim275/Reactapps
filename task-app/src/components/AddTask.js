export const AddTask = ({tasklist,setTaskList,task,setTask}) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
if(task.id){
const date = new Date();
const updatedTasklist = tasklist.map((todo) => (
todo.id === task.id ? {id: task.id, name: e.target.task.value, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` } : {...todo}
));
setTaskList(updatedTasklist);
setTask({});
}else {

    const date = new Date();
    const newTask = {
      id: date.getTime(),
      name: e.target.task.value,
      time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
    }
    setTaskList([...tasklist,newTask]);  
    setTask({});
  }
}

return (
<section className= "addTask"> 
<form onSubmit = {handleSubmit}>
<input 
type = "text" 
name = "task" 
value = {task.name || ""} 
autoComlete="off" 
placeholder ="add task" 
max lenght= "25"
onChange= {e => setTask({...task,name: e.target.value} )}  /> 
<button type = "submit" >{task.id ? "Edit": "Add"} </button>
   </form>
</section>
  );
}


export default AddTask;