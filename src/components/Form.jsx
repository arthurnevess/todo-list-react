import React, { useState } from 'react'
import { Paper, Button, TextField } from "@mui/material";

export default function Form({  addTodo }) {
    const [text, setText] = useState(null);
    const [id, setId] = useState(0);

    const todoCreate = (text) => {
        const todoObj = {text: text, id: id};
        setId(id + 1);
        addTodo(todoObj);
        document.getElementById("outlined-basic").value = null;
    }

  return (
    <Paper style={{ padding: "1em" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
            <TextField id="outlined-basic" label="Tarefa" variant="outlined" onChange={(e)=> setText(e.target.value)} fullWidth />
            <Button style={{ padding: "1em", marginLeft: "1em" }} variant="text" onClick={ () => todoCreate(text)}>Add</Button>
        </div>
    </Paper>
  )
}
