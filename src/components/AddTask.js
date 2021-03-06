import React, { useState, Fragment } from 'react';
import { FaRegListAlt, FaRegCalendarAlt } from 'react-icons/fa';
import momemt from 'moment';
import { firebase } from '../firebase';
import { useSelectedProjectValue } from '../context';
import ProjectsOverlay from './ProjectsOverlay';
import TaskDate from './TaskDate';

const AddTask = ({ showAddTaskMain = true, showShouldMain = false, showQuickAddTask, setShowQuickAddTask }) => {
    const [task, setTask] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [project, setProject] = useState('');
    const [showMain, setShowMain] = useState(showShouldMain);
    const [showProjectOverlay, setShowProjectOverlay] = useState(false);
    const [showTaskDate, setShowTaskDate] = useState(false);

    const { selectedProject } = useSelectedProjectValue();

    const addTask = () => {
        const projectId = project || selectedProject;
        let collatedDate = '';

        if (projectId === 'TODAY') {
            collatedDate = momemt().format('DD/MM/YYYY');
        } else if (projectId === 'NEXT_7') {
            collatedDate = momemt()
                .add(7, 'days')
                .format('DD/MM/YYYY');
        }

        return (
            task &&
            projectId &&
            firebase
                .firestore()
                .collection('tasks')
                .add({
                    archived: false,
                    projectId,
                    task,
                    date: collatedDate || taskDate,
                    userId: 'fnrejkfne34894798ferklfj48f489rf8934n43nf'
                })
                .then(() => {
                    setTask('');
                    setProject('');
                    setShowMain('');
                    setShowProjectOverlay(false);
                })
        );
    };

    return (
        <div className={showQuickAddTask ? 'add-task add-task__overlay' : 'add-task'} data-testid="add-task-comp">
            {showAddTaskMain && (
                <div
                    className="add-task__shallow"
                    data-testid="show-main-action"
                    onClick={() => setShowMain(!showMain)}
                    onKeyDown={() => setShowMain(!showMain)}
                    aria-label="Add task"
                    role="button"
                >
                    <span className="add-task__plus">+</span>
                    <span className="add-task__text">Add Task</span>
                </div>
            )}
            {(showMain || showQuickAddTask) && (
                <div className="add-task__main" data-testid="add-task-main">
                    {showQuickAddTask && (
                        <Fragment>
                            <div data-test-id="quick-add-task">
                                <h2 className="header">Quick Add Task</h2>
                                <span
                                    className="add-task__cancel-x"
                                    data-testid="add-task-quick-cancel"
                                    onClick={() => {
                                        setShowMain(false);
                                        setShowProjectOverlay(false);
                                        setShowQuickAddTask(false);
                                    }}
                                    onKeyDown={() => {
                                        setShowMain(false);
                                        setShowProjectOverlay(false);
                                        setShowQuickAddTask(false);
                                    }}
                                    role="button"
                                >
                                    ✖
                                </span>
                            </div>
                        </Fragment>
                    )}

                    <ProjectsOverlay
                        setProject={setProject}
                        showProjectOverlay={showProjectOverlay}
                        setShowProjectOverlay={setShowProjectOverlay}
                    ></ProjectsOverlay>
                    <TaskDate setTaskDate={setTaskDate} showTaskDate={showTaskDate} setShowTaskDate={setShowTaskDate} />
                    <input
                        className="add-task__content"
                        data-testid="add-task-content"
                        aria-label="Enter your task"
                        type="text"
                        value={task}
                        onChange={e => setTask(e.target.value)}
                    ></input>
                    <button
                        type="button"
                        className="add-task__submit"
                        data-testid="add-task"
                        onClick={() => (showQuickAddTask ? addTask() && setShowQuickAddTask(false) : addTask())}
                    >
                        + Add Task
                    </button>
                    {!showQuickAddTask && (
                        <span
                            className="add-task__cancel"
                            data-test-id="add-task-main-cancel"
                            onClick={() => {
                                setShowMain(false);
                                setShowProjectOverlay(false);
                            }}
                            onKeyDown={() => {
                                setShowMain(false);
                                setShowProjectOverlay(false);
                            }}
                            role="button"
                        >
                            Cancel
                        </span>
                    )}
                    <span
                        className="add-task__project"
                        data-testid="show-project-overlay"
                        onClick={() => setShowProjectOverlay(!showProjectOverlay)}
                        onKeyDown={() => setShowProjectOverlay(!showProjectOverlay)}
                    >
                        <FaRegListAlt />
                    </span>
                    <span
                        className="add-task__date"
                        data-testid="show-task-date-overlay"
                        onClick={() => setShowTaskDate(!showTaskDate)}
                    >
                        <FaRegCalendarAlt />
                    </span>
                </div>
            )}
        </div>
    );
};

export default AddTask;
