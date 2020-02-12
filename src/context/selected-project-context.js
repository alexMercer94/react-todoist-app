import React, { createContext, useContext, useState } from 'react';

export const SelectedProjectContext = createContext();
export const SelectedProjectProvider = ({ children }) => {
    const { selectedProject, setSeletecProject } = useState('INBOX');

    return (
        <SelectedProjectContext.Provider value={{ selectedProject, setSeletecProject }}>
            {children}
        </SelectedProjectContext.Provider>
    );
};

export const useSelectProjectValue = () => useContext(SelectedProjectContext);
