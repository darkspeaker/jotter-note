import React from 'react';
import './todo-list-item.css'

export default class TodoListItem extends React.Component {
     
    render(){
        const {label } = this.props;
        return(
            <div className='todoListItem'>
                <span className = "todo-list-item ">
                    {label}
                </span>
                <button type="button"
                    className="float-right"
                   >x
                </button>

            </div>
        );
    }
}
