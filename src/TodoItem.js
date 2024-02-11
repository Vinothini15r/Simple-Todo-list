// TodoItem.js
import React from 'react';

const TodoItem = ({ task, index, onToggleCompletion, onRemoveTask }) => {
  return (
    <li className={task.completed ? 'completed' : ''} onClick={() => onToggleCompletion(index)}>
      <span>{task.text}</span>
      <button onClick={() => onRemoveTask(index)}>Remove</button>
    </li>
  );
};

export default TodoItem;
