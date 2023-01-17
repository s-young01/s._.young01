import React from "react";

const HeaderInput = ({inputText, onChange, onAdd}) => {
    return (
        <div className="headerinput">
            <h2>ToDoList</h2>
            <input value={inputText} onChange={onChange}/>
            <button onClick={onAdd}>+</button>
        </div>
    )
}

export default HeaderInput;