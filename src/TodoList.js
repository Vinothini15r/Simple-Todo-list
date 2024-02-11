// TodoList.js
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, onToggleCompletion, onRemoveTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TodoItem key={index} task={task} index={index} onToggleCompletion={onToggleCompletion} onRemoveTask={onRemoveTask} />
      ))}
    </ul>
  );
};

export default TodoList;
