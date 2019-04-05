import React from 'react';
import './todo-list-item.css'

const TodoListItem = ({label, important = false}) => {

    return(
        <div className='todoListItem'>
            <span className = "todo-list-item ">
                {label}
            </span>
            
            <button type="button"
            className="float-right buttonn">x
            </button>
        </div>
    );
}

export default TodoListItem;