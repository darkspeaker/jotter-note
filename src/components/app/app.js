import React from 'react'
import '../app/app.css'

const App = () =>{
    return(
        <div>
            <AddDelBtn />
            <AddFolder />
        </div>
    )
}

const AddDelBtn = () =>{
    return(
        <div>
            <div className="wrap main-btn d-flex">
                <button className='btn btn-outline-primary btn-add'> Добавить заметку</button>
                <button className='btn btn-outline-primary'>Удалить заметку</button>
            </div>
          
        </div>
    )
}
const AddFolder = ()=>{
    return(
        <div className="wrap-content border border-secondary">
            <button className='btn btn-outline-secondary btn-add-folder'>Добавить папку</button>
        </div>
    )
}
export default App;