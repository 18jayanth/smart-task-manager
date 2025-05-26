import React from 'react';
import { useTaskStore } from '../store/taskStore';

function TaskList() {
  const { tasks, addTask } = useTaskStore();

  return (
    <div>
      <button onClick={() => addTask('New Task')}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
