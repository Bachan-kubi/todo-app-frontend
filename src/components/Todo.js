import React from 'react';
import {BiEdit} from 'react-icons/bi';
import {AiFillDelete} from 'react-icons/ai';
import './todo.css';

const Todo = ({text, updateMode, deleteTodo}) => {
    // console.log(updateMode);
    return (
        <div className='todo'>
            <div className='text'><h4>{text}</h4></div>
            <div className='icons'>
                <BiEdit className='icon' onClick={updateMode}/>
                <AiFillDelete className='icon' onClick={deleteTodo} />
            </div>
        </div>
    );
};

export default Todo;