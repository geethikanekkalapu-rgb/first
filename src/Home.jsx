import React, { useState } from "react";
import { TextField, Button, List, ListItem, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function Home({ tasks, setTasks }) {

  const [task, setTask] = useState("");
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);

  const addTask = () => {

    if(task==="") return;

    if(editingId){
      setTasks(tasks.map(t =>
        t.id === editingId ? {...t, text: task} : t
      ));
      setEditingId(null);
    } else {
      const newTask = {
        id: Date.now(),
        text: task,
        completed:false
      };
      setTasks([...tasks,newTask]);
    }

    setTask("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const editTask = (t) => {
    setTask(t.text);
    setEditingId(t.id);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t =>
      t.id === id ? {...t, completed: !t.completed} : t
    ));
  };

  const filteredTasks = tasks.filter(t =>
    t.text.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div>

      <h2>Manage Tasks</h2>

      <TextField
        label="Search Tasks"
        variant="outlined"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        fullWidth
        style={{marginBottom:"15px"}}
      />

      <TextField
        label="Enter Task"
        variant="outlined"
        value={task}
        onChange={(e)=>setTask(e.target.value)}
      />

      <Button
        variant="contained"
        onClick={addTask}
        style={{marginLeft:"10px"}}
      >
        {editingId ? "Update" : "Add"}
      </Button>

      <List>

        {filteredTasks.map(t => (

          <ListItem
            key={t.id}
            style={{
              textDecoration: t.completed ? "line-through" : "none"
            }}
          >

            <span
              style={{flex:1,cursor:"pointer"}}
              onClick={()=>toggleTask(t.id)}
            >
              {t.text}
            </span>

            <IconButton onClick={()=>editTask(t)}>
              <EditIcon/>
            </IconButton>

            <IconButton onClick={()=>deleteTask(t.id)}>
              <DeleteIcon/>
            </IconButton>

          </ListItem>

        ))}

      </List>

    </div>
  );
}

export default Home;
