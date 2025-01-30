import { useState } from "react";


function ListGroup({items, heading, onSelectItem}) {


    const [index, setIndex] = useState(-1);

    

    return (
        <>
            <ul>
                <h1>{heading}</h1>
                <p>{index}</p>
                {items.map((item, index) => <li onClick={() => {setIndex(index); onSelectItem(item); }} key={item}
                    >
                {item}
                </li>
                )}
            </ul>

        </>
    )
}

export default ListGroup;