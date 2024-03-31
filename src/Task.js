import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleComplete, deleteTodo } from "./Todo";

const Task = () => { 
  
  // Initialize state for the input field
  const [text, setText] = useState("");

  // Access the todos from the Redux store
  const todos = useSelector((state) => state.todos);

  // Get a reference to the dispatch function from the Redux store
  const dispatch = useDispatch();

  // Handle changes to the input field
  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  // Add a new todo to the store
  const handleAddTodo = () => {
    if (text) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  // Toggle the completed status of a todo in the store
  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  // Delete a todo from the store
  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#2C7865",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >  
   
      <div
        style={{
          backgroundColor: "white",
          height: 500,
          width: 500,
          overflowY:'scroll',
          scrollbarWidth: "thin",
          scrollbarColor: "#2C7865 #FFFFFF",
          borderRadius:10
        }}
      >
      <div style={{textAlign:'center'}}>
    <h2 style={{fontWeight:'bold'}}>TODO APP</h2>
   </div>
     
       <div style={{
        backgroundColor:'#B4B4B8',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        padding:10,
        margin:10,
        borderRadius:10
       }}>
       <input  style={{
        outline:'none',
        width:300,
       padding:10,
   border:'none'

      }} type="text" value={text} onChange={handleInputChange} />{" "}
      <button
      style={{
        padding:8,
        marginLeft:10,
        border:'none',
        fontWeight:'bold',
        fontSize:16,
        cursor:'pointer',
        backgroundColor: "#2C7865",
        color:'white'
      }}
      onClick={handleAddTodo}> Add Todo </button>
       </div>
    
      <ul style={{
        listStyle:'none',
       
      }}>
      {" "}
      {todos.map((todo) => (
    
        <li
          key={todo.id}
          style={{
            textDecoration: todo.completed? "line-through" : "none",
            marginBottom:10,
            textTransform:'uppercase',
           textAlign:'center',
           fontWeight:'bolder'
          }}
        >
          {todo.text}
          <button style={{
            padding:8,
            marginLeft:10,
            border:'none',
            fontWeight:'bold',
            fontSize:16,
            cursor:'pointer',
            backgroundColor: "#2C7865",
            color:'white'
          }} onClick={() => handleToggleComplete(todo.id)}>
           
            {todo.completed? "Mark Incomplete" : "Mark Complete"}
          </button>
          <button style={{
            padding:8,
            marginLeft:10,
            border:'none',
            fontWeight:'bold',
            fontSize:16,
            cursor:'pointer',
            backgroundColor: "#FF204E",
            color:'white'
          }} onClick={() => handleDeleteTodo(todo.id)}>
            
            Delete
          </button>
        </li>
        
      ))}
    </ul>
      
      </div>
    </div>
  );
};

export default Task;