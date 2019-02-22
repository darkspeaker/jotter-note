import React from 'react'
import AddFolder from '../add-folder/add-folder.js'
import Todolist from '../todo-list/todo-list.js'
import '../app/app.css'

export default class App extends React.Component{
  
    addFolderItem = () =>{
        console.log('asdfasdf');
    }
    render(){
        return(
            <div>
                <AddDelBtn />
                        <div >
                            <div className="wrap-data d-flex">
                                <AddFolder  className=""/>
                                <Todolist  />
                                <AddFolder  className=""/>
                            </div>
                        </div>
                        
                </div>
        )
    }
}

const AddDelBtn = () =>{
    return(
        <div>
            <div className="wrap main-btn d-flex">
                <button className='btn btn-outline-primary btn-add'> Добавить заметку</button>
                <button 
                 className='btn btn-outline-primary'
                >
                    Удалить заметку
                </button>
            </div>
          
        </div>
    )
}

