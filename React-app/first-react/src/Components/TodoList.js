import { useState } from 'react';
import React from "react";
import { TodoCell } from './TodoCell';
import { TodoForm } from './TodoForm';

export const TodoList = () => {
    const [todoList, setTodoList] = useState([]);

    const addTodo = content => {
        let today = new Date();
        setTodoList([...todoList, {title: content, date: today.toLocaleDateString()}]);
    }

    return (
        <div className='todo-list'>
            <TodoForm addTodo={addTodo} />
            {todoList.map((todo, index) => {
                return <TodoCell title={todo.title} date={todo.date} key={index}></TodoCell>
            })}
        </div>
    )
}