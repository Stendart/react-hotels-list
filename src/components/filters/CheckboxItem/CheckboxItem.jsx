import React from 'react';
import './CheckboxItem.css';

function CheckboxItem(props) {
    const id = Math.random();
    return (
        <div className='CheckboxItem'>
            <input className='CheckboxItem__check'
                   id={id} type="checkbox"
                   checked={props.isChecked}
                   onChange={props.handleInputChange} />
            <label className='CheckboxItem__label' htmlFor={id}>{props.itemLabel}</label>
        </div>

    );
}


export default CheckboxItem;