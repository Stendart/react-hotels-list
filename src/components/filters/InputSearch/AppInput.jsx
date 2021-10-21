import React from 'react';
import './InputSearch.css'

function AppInput(props) {
    return (
        <div className='AppInput.jsx'>
            <input className='AppInput.jsx__input' type='text'
                   onInput={props.handleInput}
                   placeholder={props.placeholder}
            />
        </div>
    );
}

AppInput.propTypes = {};

export default AppInput;