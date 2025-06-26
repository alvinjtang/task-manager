import React, { useState } from 'react';
import { useTasks, TaskType } from '../contexts/TasksContext';

const Task = ({ task }: { task: TaskType }) => {
    const { removeTask, toggleTask, updateTask } = useTasks();
    const [inputValue, setInputValue] = useState(task.title);
    const textColor = task.completed ? 'text-gray-500' : 'text-white';

    return (
        <li className="flex gap-2 items-center">
            <input
                type="checkbox"
                checked={task.completed}
                onClick={() => toggleTask(task.id)}
                className="w-4 h-4"
            />
            <input
                type="text"
                value={task.title || inputValue}
                className={`flex-1 focus:outline-none ${textColor}`}
                disabled={task.completed}
                onChange={(e) => {
                    setInputValue(e.target.value)
                    updateTask(task.id, e.target.value)
                }}
            />
            <button
                onClick={() => removeTask(task.id)}
                className="bg-none text-bold text-2xl rounded-full"
            >
                X
            </button>
        </li>
    )
}

export default Task;