import React, {PureComponent} from 'react';
import './InputSearch.css'

function InputSearch(props) {
    return (
        <div className='InputSearch'>
            <input className='InputSearch__input' type='text'
                   onInput={props.handleInput}
                   placeholder='Поиск стран'
            />
        </div>
    );
}

InputSearch.propTypes = {};

export default InputSearch;