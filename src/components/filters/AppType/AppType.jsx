import React, {PureComponent} from "react";
import {connect} from "react-redux";
import './AppType.css';
import CheckboxList from "../CheckboxList/CheckboxList";
import {changeSelectType} from "../../../store/actions/types";

class AppType extends PureComponent {
// Получапть список из стора

    preparingData = () => {
        const typeList = this.props.getTypes
        const dataWithRenamedField = typeList.map((typeItem)=> {
            const {name: label, ...other} = typeItem
            return {
                label,
                ...other
            }
        })
        return dataWithRenamedField;
    }

    handleInputChange = (item, index) => {
        this.props.changeSelectTypes(item.target.checked, index)
    }

    render() {
        return (
            <div>
                <h3>Тип</h3>
                <CheckboxList list={this.preparingData()} handleInputChange={this.handleInputChange} />
            </div>

        );
    }


}

const mapStateToProp = (state) => {
    return {
        getTypes: state.types.typeList
    }
}

const mapDispatchToProp = (dispatch) => {
    return {
        changeSelectTypes: (isChecked, index) => dispatch(changeSelectType(isChecked, index))
    }
}

export default connect(mapStateToProp, mapDispatchToProp)(AppType);
