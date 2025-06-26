import React from 'react'
import { TaskType } from '../contexts/TasksContext'
import Task from './Task'

const TaskList = ({ header, tasks }: { header: string, tasks: TaskType[] }) => {
    return (
        <>
            <h2 className="text-lg font-bold">{header} - {tasks.length} items:</h2>
            <ul>
                {tasks.map(task => {
                    return (
                        <Task task={task} />
                    )
                }
                )}
            </ul>
        </>
    )
}

export default TaskList