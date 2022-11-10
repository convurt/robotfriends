import React from "react";

// children is a prop that is passed in from the parent component that can wrap components
const Scroll = (props) => {
    return (
        <div style={{overflowY: "scroll", border: "1px solid black", height: "800px"}}>
            {props.children}
        </div>
    );
}

export default Scroll;