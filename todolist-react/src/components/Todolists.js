import React from 'react';

const Todolists = ({todoLists, delTodoLists, onIsDoneToggle}) => { //부모요소에서 자식컴포넌트로 props로 전달받겠다
    return (
        <div>
            <ul className="todoLists">
                {todoLists.map(todo=><li key={todo.id} style={{color: todo.isDone ? '#ccc' : "#333"}}>
                <span onClick={()=>onIsDoneToggle(todo.id)}>{todo.text}</span>
                <button onClick={()=>delTodoLists(todo.id)}>X</button></li>)}
                {/* delTodoLists(todo.id) 이렇게 넣으면 호출 함수자체가 들어가야함 */}
            </ul>
        </div>
    );
};

export default Todolists;