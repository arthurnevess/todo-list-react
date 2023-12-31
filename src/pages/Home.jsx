import { Container, List } from "@mui/material";
import React, { useState } from "react";
import Form from "../components/Form";
import TodoItem from "../components/TodoItem";

export default function Home() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {  
      setTodos([...todos, todo]);  

  };
  const deleteTodo = (id) => {
    var filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  };

  return (
    <Container maxWidth="xs" style={{marginTop: "1.5em"}}>
        <Form addTodo={addTodo} />
        <List sx={{ marginTop: "0.2em" }}>
            {todos.map((todo) => (
                <div key={todo.id} style={{ marginTop: "1em" }}>
                    <TodoItem todo={todo} deleteTodo={deleteTodo}/>
                </div>
            ))}
        </List>
    </Container>
  );
}
