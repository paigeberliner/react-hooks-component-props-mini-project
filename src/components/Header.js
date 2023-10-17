import React from "react";

function Header(props){
    return (
    <div>
        <header> {props.header} </header>
        <h1> {props.name} </h1>
    </div>
    )
}

export default Header;