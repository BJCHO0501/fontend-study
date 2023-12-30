import React, { useState } from 'react';
import TodoCell from './TodoCell';
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from 'uuid'
uuidv4();

export const TodoList = () => {
    const [todoList, setTodoList] = useState([]);

    const addTodo = content => {
        const today = new Date();
        setTodoList([...todoList, {title: content, date: today.toLocaleDateString(), id: uuidv4()}]);
    }

    return (
        <div className='todo-list'>
            <TodoForm addTodo={addTodo} />
            {todoList.map((todo) => {
                return <TodoCell title={todo.title} date={todo.date} key={todo.id}></TodoCell>
            })}
        </div>
    )
}