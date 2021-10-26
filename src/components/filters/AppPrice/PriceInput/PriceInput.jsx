import React from "react";
import './PriceInput.css'


export default function priceInput (props) {

    const placeholder = props.placeholder ? props.placeholder + 'руб' : null
    return (
        <>
            <input placeholder={placeholder} value={props.value} className={props.className} onInput={props.inputHandler} />
        </>
    )
}