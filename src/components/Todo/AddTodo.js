import React, {useContext, useState} from "react";
import classes from "./AddTodo.module.css";
import Button from "../UI/Button";
import { NotesContext } from "../store/todoStore";

const AddTodo = () => {
  const [todo, setTodo] = useState({title: '', task: ''});
  const ctx = useContext(NotesContext);

  const log = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // or destructure:
    // const {name, value} = e.target;
    
    setTodo(todo => ({...todo, [name]: value}));
    // console.log(todo);
  }

  const addHandler = (e) => {
    e.preventDefault();
    console.log('onsubmit form');
    ctx.addTodoItem(todo)
  }

  return (
    <form onSubmit={addHandler} className={classes.input}>
      <div>
        <label htmlFor='title'>Title</label>
        <input onChange={log} type="text" id='title' name='title'/>
      </div>
      <div>
        <label htmlFor='task'>Task</label>
        <input onChange={log} type="text" id='task' name='task'/>
      </div>
      <Button type="submit">Add Task</Button>
    </form>
  );
};

export default AddTodo;
