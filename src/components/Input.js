import React from "react";

function Input({children, ...props}) {
    return (
        <input {...props}>
            {children}
        </input>
    )
}

export default Input