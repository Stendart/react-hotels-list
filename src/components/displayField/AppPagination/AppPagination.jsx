import './AppPagination.css'

import React, {PureComponent} from 'react';

function AppPagination(props) {
    return (
        <div className={'AppPagination ' + props.className}>
            <button className='AppPagination__btn' onClick={props.prevClick}>Назад</button>
            <input className='AppPagination__page-display' type="text" disabled value={`${props.value} / ${props.countPage}` }/>
            <button className='AppPagination__btn' onClick={props.nextClick}>Вперёд</button>
        </div>
    );
}


export default AppPagination;