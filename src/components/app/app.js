import React from 'react'
import Todolist from '../todo-list/todo-list.js'
import '../app/app.css'
import AppHeader from '../app-header/app-header.js';
import AddFolder from '../add-folder/add-folder.js';
import Details from '../details-todolist/details-todolist.js'

const App  =()=>{

    const todoDate = [
        {label: 'drind water', important: false, id: 1},
        {label: 'love react', important: true, id: 2},
        {label: 'take care', important: false, id: 3}
    ];
    
  
        return(
            <div className="todo-app">
                <AppHeader />
                <div className="content">
                    <AddFolder />
                    <Todolist  todos = {todoDate}/>
                    <Details />
                </div>
                
            </div>
        )
    }
export default App;

