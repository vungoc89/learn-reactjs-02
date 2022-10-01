import React, {useState} from 'react';
import PropTypes from 'prop-types';
import TodoList from '../components/TodoList';

TodoFeature.propTypes = {
    todoList: PropTypes.array, 

};

function TodoFeature(props) {
    const initTodoList = [
        {
            id: 1, 
            title: 'Eat',
            status: 'new',
        },
        {
            id: 2, 
            title: 'Sleep',
            status: 'completed',
        },
        {
            id: 3, 
            title: 'Code',
            status: 'new',
        },
    ];

    // Change 'todoList' thanh state
    const [todoList, setTodoList] = useState(initTodoList);

    //Khi lam viec vs state la object or array, truoc khi thay doi => phai clone 
    const handleTodoClick = (todo, idx) => {
        // clone current array to new one
        const newTodoList = [...todoList];
        // console.log(todo, idx);

        //toggle state
        const newTodo = {
            ...newTodoList[idx], // clone
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
            // status: newTodoList[idx].status === 'completed' ? 'new' : 'completed',
        };
        newTodoList[idx] = newTodo;

        //update todo list
        setTodoList(newTodoList);
    }

    // 003 Lab Filter Todo
    const [filteredStatus, setFilteredStatus] = useState('all');

    const handleShowAllClick = () => {
        setFilteredStatus('all');
    }

    const handleShowCompletedClick = () => {
        setFilteredStatus('completed');
    }

    const handleShowNewClick = () => {
        setFilteredStatus('new');
    }

    const renderedtodoList = todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status);
    console.log(renderedtodoList); 

    return (
        <div>
            <h3>Todo List</h3>
            {/* <TodoList todoList ={todoList} onTodoClick={handleTodoClick} ></TodoList> */}
            <TodoList todoList ={renderedtodoList} onTodoClick={handleTodoClick} ></TodoList>

            <div>
                <button onClick={handleShowAllClick} >Show All</button>
                <button onClick={handleShowCompletedClick} >Show Completed</button>
                <button onClick={handleShowNewClick} >Show New</button>
            </div>
        </div>
    );
}

export default TodoFeature;