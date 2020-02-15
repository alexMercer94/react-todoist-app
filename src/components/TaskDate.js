import React from 'react';
import moment from 'moment';
import { FaSpaceShuttle, FaSun, FaRegPaperPlane } from 'react-icons/fa';

const TaskDate = ({ setTaskDate, showTaskDate, setShowTaskDate }) =>
    showTaskDate && (
        <div className="task-date" data-testid="task-date-overlay">
            <ul className="task-date__list">
                <li>
                    <div
                        onClick={() => {
                            setShowTaskDate(false);
                            setTaskDate(moment().format('DD/MM/YYYY'));
                        }}
                        onKeyDown={() => {
                            setShowTaskDate(false);
                            setTaskDate(
                                moment()
                                    .add(1, 'day')
                                    .format('DD/MM/YYYY')
                            );
                        }}
                        data-testid="task-date-overlay"
                        tabIndex={0}
                        aria-label="Select today as the task date"
                        role="button"
                    >
                        <span>
                            <FaSpaceShuttle />
                        </span>
                        <span>Today</span>
                    </div>
                </li>
                <li>
                    <div
                        onClick={() => {
                            setShowTaskDate(false);
                            setTaskDate(moment().format('DD/MM/YYYY'));
                        }}
                        onKeyDown={() => {
                            setShowTaskDate(false);
                            setTaskDate(
                                moment()
                                    .add(1, 'day')
                                    .format('DD/MM/YYYY')
                            );
                        }}
                        data-testid="task-date-tomorrow"
                        tabIndex={0}
                        aria-label="Select tomorrow as the task date"
                        role="button"
                    >
                        <span>
                            <FaSun></FaSun>
                        </span>
                        <span>Today</span>
                    </div>
                </li>
                <li>
                    <div
                        onClick={() => {
                            setShowTaskDate(false);
                            setTaskDate(moment().format('DD/MM/YYYY'));
                        }}
                        onKeyDown={() => {
                            setShowTaskDate(false);
                            setTaskDate(
                                moment()
                                    .add(7, 'days')
                                    .format('DD/MM/YYYY')
                            );
                        }}
                        data-testid="task-date-next-week"
                        tabIndex={0}
                        aria-label="Select next week as the task date"
                        role="button"
                    >
                        <span>
                            <FaRegPaperPlane></FaRegPaperPlane>
                        </span>
                        <span>Next Week</span>
                    </div>
                </li>
            </ul>
        </div>
    );

export default TaskDate;
