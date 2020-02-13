import React, { useState } from 'react';
import { FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar } from 'react-icons/fa';
import { useSelectedProjectValue } from '../../context';
import Projects from '../Projects';
import AddProject from '../AddProject';

const Sidebar = () => {
    const { setSelectedProject } = useSelectedProjectValue();
    const [active, setAcive] = useState('inbox');
    const [showProjects, setShowProjects] = useState(true);

    return (
        <div className="sidebar" data-testid="sidebar">
            <ul className="sidebar__generic">
                <li data-testid="inbox" className={active === 'inbox' ? 'active' : undefined}>
                    <div
                        data-testid="inbox-action"
                        role="button"
                        onClick={() => {
                            setAcive('inbox');
                            setSelectedProject('INBOX');
                        }}
                    >
                        <span>
                            <FaInbox />
                        </span>
                        <span>Inbox</span>
                    </div>
                </li>
                <li data-testid="today" className={active === 'today' ? 'active' : undefined}>
                    <div
                        data-testid="today-action"
                        role="button"
                        onClick={() => {
                            setAcive('today');
                            setSelectedProject('TODAY');
                        }}
                    >
                        <span>
                            <FaRegCalendar />
                        </span>
                        <span>Today</span>
                    </div>
                </li>
                <li data-testid="next_7" className={active === 'next_7' ? 'active' : undefined}>
                    <div
                        data-testid="next_7-action"
                        role="button"
                        onClick={() => {
                            setAcive('next_7');
                            setSelectedProject('NEXT_7');
                        }}
                    >
                        <span>
                            <FaRegCalendarAlt />
                        </span>
                        <span>Next 7 days</span>
                    </div>
                </li>
            </ul>
            <div className="sidebar__middle" role="button" onClick={() => setShowProjects(!showProjects)}>
                <span>
                    <FaChevronDown className={!showProjects ? 'hidden-projects ' : undefined} />
                </span>
                <h2>Projects</h2>
            </div>
            <ul className="sidebar__projects">{showProjects && <Projects />}</ul>
            {showProjects && <AddProject />}
        </div>
    );
};

export default Sidebar;
