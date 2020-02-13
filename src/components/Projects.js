import React, { useState } from 'react';
import { useSelectedProjectValue, useProjectsValue } from '../context';
import IndividualProject from './IndividualProject';

const Projects = ({ activeValue = true }) => {
    const [active, setActive] = useState(activeValue);
    const { setSelectedProject } = useSelectedProjectValue();
    const { projects } = useProjectsValue();

    return (
        projects &&
        projects.map(project => (
            <li
                key={project.projectId}
                data-doc-id={project.projectId}
                data-testid="project-action"
                className={active === project.projectId ? 'active sidebar__project' : 'sidebar__project'}
                onKeyDown={() => {
                    setActive(project.projectId);
                    setSelectedProject(project.projectId);
                }}
                onClick={() => {
                    setActive(project.projectId);
                    setSelectedProject(project.projectId);
                }}
            >
                <IndividualProject project={project}></IndividualProject>
            </li>
        ))
    );
};

export default Projects;