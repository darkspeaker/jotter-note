import React from 'react';
import '../todo-list/todo-list.css'

const Todolist =() =>{
    return(
        <form   className="item-add-form d-flex wrap-content border border-secondary">
            <input type="text"
                    className="form-control input-text"
                    placeholder="Введите ваши задачи"/>
            <button 
                className="btn btn-outline-primary btn-list">
                OK
            </button>
        </form>
    )
}
export default Todolist;