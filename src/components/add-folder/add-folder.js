import React from 'react'
import '../add-folder/add-folder.css'
import AddFolderItem from '../add-folder-item/add-folder-item.js'

const AddFolder = ()=>{
    return(
        <ul>
            <li><AddFolderItem /></li>
            <li><AddFolderItem /></li>
            <li><AddFolderItem /></li>
        </ul>
    );
}
export default AddFolder;