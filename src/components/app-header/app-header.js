import React from 'react';
import './app-header.css';

const AppHeader =() => {
  
    return(
        <div className='wrap-header-section'>
            <h2 className='first-section'>Раздел папок</h2>
            <h2 className='second-section'>Оглавление задач</h2>
            <h2 className='third-section'>Детали задач</h2>
        </div>
        
    );
}

export default AppHeader;