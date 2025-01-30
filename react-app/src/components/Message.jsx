import React, { useEffect, useState } from "react";

function Message() {

    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    }

    useEffect(() => {
        //console.log(text);
    }, [text]);

    return (
        <>
        <input type="text" value={text} onChange={handleChange} />
        <p>You Typed: {text}</p>
        </>
    )
}

export default Message;