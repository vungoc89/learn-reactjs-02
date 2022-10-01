import React from 'react';
import PropTypes from 'prop-types';

import className from 'classnames';
import './styles.scss';

TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func,

};
TodoList.defaultProps = {
    todoList: [],
    onTodoClick: null, 

};

//onTodoClick la props ma component cha truyen xuong
function TodoList({todoList, onTodoClick}) {
    const handleTodoClick = (todo, idx) => {
        // Neu component cha KO truyen props xuong thi ko lam gi ca(return)
        if(!onTodoClick) return; 
        // Neu co truyen xuong thi: 
        onTodoClick(todo, idx);
    }
    return (
        <ul className='todo-list'>
            {todoList.map((todo,idx) => (
                <li 
                key={todo.id} 
                className={className({
                    'todo-item': true,
                    completed: todo.status ==='completed'})} 
                    onClick={() => handleTodoClick(todo, idx)}
                    >
                {todo.title}
                </li>
            ))}
        </ul>
    );
}

export default TodoList;