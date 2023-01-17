import React from "react";

const TodoLists = ({todolists}) => {
    return (
        <div className="todolists">
            <ul>
                {/* todolists 배열 .map으로 돌리기 */}
                {todolists.map(lis => <li key={lis.id}>{lis.text}</li>)}
            </ul>
        </div>
    )
}

export default TodoLists;