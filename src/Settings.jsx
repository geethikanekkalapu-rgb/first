import React from "react";

function Settings({darkMode, setDarkMode}) {

  return (

    <div>

      <h2>Settings</h2>

      <button onClick={()=>setDarkMode(!darkMode)}>
        Toggle {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

    </div>

  );
}

export default Settings;
