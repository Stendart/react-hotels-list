import React from 'react';
import './CheckboxList.css'

import CheckboxItem from "../CheckboxItem/CheckboxItem";

function CheckboxList(props) {
    return (
        <div className='CheckboxList'>
            {
                props.list.map((listItem, index) =>  {
                    const item = typeof listItem === 'object' ? listItem.label : listItem
                    return <CheckboxItem key={item}
                                  itemLabel={item}
                                  isChecked={listItem.isChecked}
                                  handleInputChange={(element) => props.handleInputChange(element, index)} />
                })
            }
        </div>
    );
}


export default CheckboxList;