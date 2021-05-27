import React from "react";
import App from "./App";

function Fruit(props) {
    let [counter, setCounter] = React.useState(0);
    //const [aardbeiCounter, setAardbeiCounter] =  React.useState(0)
    function changeCounterUp (number) {
        props.setAardbeiCounter(props.aardbeiCounter + number);
    }

    function changeCounterDown (number) {
        props.setAardbeiCounter(props.aardbeiCounter - number);
        if (props.aardbeiCounter === 0) {
            props.setAardbeiCounter(0)
        }
    }

    return <div className={props.fruitName}>
        <h2>
            <img src={props.fruitImage} alt={props.fruitName}/> {props.fruitName}:
            <button onClick={() => changeCounterDown(1)}>-</button>
            {props.aardbeiCounter}
            <button onClick={() => changeCounterUp(1)}>+</button>
        </h2>
    </div>
}

export default Fruit;