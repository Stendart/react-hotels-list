import React from 'react';
import './AppInput.css'

function AppInput(props) {
    return (
        <div className='AppInput'>
            <input className='AppInput__input' type='text'
                   type={props.type || "text"}
                   onInput={props.handleInput}
                   placeholder={props.placeholder}
                   value={props.value || ''}
            />
        </div>
    );
}

AppInput.propTypes = {};

export default AppInput;