import React from 'react';
import { FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <div className="sidebar" data-testid="sidebar">
            <ul className="sidebar__generic">
                <li data-testid="inbox">
                    <div data-testid="inbox-action" role="button">
                        <span>
                            <FaInbox />
                        </span>
                        <span>Inbox</span>
                    </div>
                </li>
                <li data-testid="today">
                    <div data-testid="today-action" role="button">
                        <span>
                            <FaRegCalendar />
                        </span>
                        <span>Today</span>
                    </div>
                </li>
                <li data-testid="next_7">
                    <div data-testid="next_7-action" role="button">
                        <span>
                            <FaRegCalendarAlt />
                        </span>
                        <span>Next 7 days</span>
                    </div>
                </li>
            </ul>
            <div className="sidebar__middle" role="button">
                <span>
                    <FaChevronDown />
                </span>
                <h2>Projects</h2>
            </div>
        </div>
    );
};

export default Sidebar;
