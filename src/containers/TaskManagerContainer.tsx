import React from 'react'
import { useTasks, TaskType } from '../contexts/TasksContext';
import TaskList from '../components/TaskList';

const TaskManagerContainer = () => {
    const { tasks, addTask, clearCompletedTasks } = useTasks();
    console.log(tasks);

    const getCompletedTasks = () => {
        return tasks.filter((task: TaskType) => task.completed);
    }

    return (
        <div className="flex flex-col w-screen justify-center items-center">
            <div className="w-4/6 flex flex-col flex-start gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-center">Task Manager</h1>
                </div>
                <TaskList
                    header="To Do"
                    tasks={tasks.filter((task: TaskType) => !task.completed)}
                />

                <button
                    className="text-left text-gray-500"
                    onClick={() => addTask('')}
                >
                    Add Task
                </button>

                <hr />

                <TaskList
                    header="Completed"
                    tasks={getCompletedTasks()}
                />
            
                {getCompletedTasks().length > 0 && <button
                    className="text-left text-gray-500"
                    onClick={() => clearCompletedTasks()}
                    disabled={getCompletedTasks().length === 0}
                >
                    Clear all completed tasks
                </button>}
            </div>
        </div>
    )
}

export default TaskManagerContainer