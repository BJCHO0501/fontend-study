import React from 'react'

export const TodoCell = ({
    title,
    date
}) => {
  return (
    <div className='todo-cell'>
        <div style={{padding:"20px 0 10px 15px"}} >{title}</div>
        <div style={{padding:"0 0 20px 15px"}}>{date}</div>
    </div>
  )
}
