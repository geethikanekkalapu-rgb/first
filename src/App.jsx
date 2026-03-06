import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Analytics from "./Analytics";
import Settings from "./Settings";

function App() {

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <BrowserRouter>

      <div className={darkMode ? "dark" : "light"}>

        <div className="container">

          <h1>Task Manager</h1>

          <nav>
            <Link to="/">Home</Link>
            <Link to="/analytics">Analytics</Link>
            <Link to="/settings">Settings</Link>
          </nav>

          <Routes>

            <Route
              path="/"
              element={<Home tasks={tasks} setTasks={setTasks} />}
            />

            <Route
              path="/analytics"
              element={<Analytics tasks={tasks} />}
            />

            <Route
              path="/settings"
              element={
                <Settings
                  darkMode={darkMode}
                  setDarkMode={setDarkMode}
                />
              }
            />

          </Routes>

        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;