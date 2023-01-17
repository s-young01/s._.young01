import React from "react";
import Nav from './Nav'

function Header({lists}) {
    // const {lists} = props;
    return (
      <header>
        <h1>Green</h1>
        {/* Nav컴포넌트로 props를 전달해줌 */}
        <Nav lists={lists}/>
      </header>
    )  
}

export default Header;
  