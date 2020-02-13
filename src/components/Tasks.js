import React, { useEffect, useState } from 'react';
import Checkbox from './Checkbox';
import { collatedTasks } from '../constants';
import { getTitle, getCollatedTitle, collatedTasksExist } from '../helpers';
import { useTasks } from '../hooks';
import { useSelectedProjectValue, useProjectsValue } from '../context';
import AddTask from './AddTask';

const Tasks = () => {
    const { selectedProject } = useSelectedProjectValue();
    const { projects } = useProjectsValue();
    const { tasks } = useTasks(selectedProject);

    console.log(tasks);
    console.log(selectedProject);

    let projectName = '';
    if (collatedTasksExist(selectedProject) && selectedProject) {
        projectName = getCollatedTitle(collatedTasks, selectedProject).name;
    }

    if (projects && projects.length > 0 && selectedProject && !collatedTasksExist(selectedProject)) {
        projectName = getTitle(projects, selectedProject).name;
    }

    useEffect(() => {
        document.title = `${projectName}: Todoist`;
    });

    return (
        <div className="tasks" data-testid="tasks">
            <h2 data-testid="project-name">{projectName}</h2>
            <AddTask></AddTask>
            <ul className="tasks__list">
                {tasks.map(task => (
                    <li key={`${task.id}`}>
                        <Checkbox id={task.id}></Checkbox>
                        <span>{task.task}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tasks;
