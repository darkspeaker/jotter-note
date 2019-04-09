import React from 'react'
//import Todolist from '../components/todo-list/todo-list.js';
import '../conteiners/app.css';
import NoteList from '../components/note-list'
import AppHeader from '../components/app-header/app-header.js';
import FolderList from '../components/add-folder.js';
import NoteArea from '../components/note-area.js'
//import Details from '../components/details-todolist/details-todolist.js'

export default class App extends React.Component{

    render(){
        return(
            <div className="todo-app">
                <AppHeader />
                <div className="row wrapper">
                    <FolderList />
                    <NoteList />
                    <NoteArea />
                </div>
            </div>
        )
    }
}

