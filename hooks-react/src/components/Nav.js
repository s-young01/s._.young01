import React from "react";

function Nav({lists}) {
    // const {lists} = props;
    // const lis = lists.map(list => <li key={list.id}>{list.title}</li>)
    return (
      <ul>
        {/* <li>menu1</li>
        <li>menu1</li>
        <li>menu1</li>
        <li>menu1</li> */}
        {lists.map(list => <li key={list.id}>{list.title}</li>)}
      </ul>
    )
}

export default Nav;