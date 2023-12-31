import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {
    const [formValue, setFormValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault()

        addTodo(formValue);
        setFormValue("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='할일 입력' value={formValue} onChange={(e) => setFormValue(e.target.value)}/>
            <button type='submit' className='todo-submit-button'>확인</button>
        </form>
    )
}

export default TodoForm