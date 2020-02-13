import { collatedTasks } from '../constants';

export const getTitle = (projects, projectId) =>
    projects.find(project => {
        console.log('GET-TITLE');
        console.log(project);
        return project.projectId === projectId;
    });

export const getCollatedTitle = (projects, key) =>
    projects.find(project => {
        console.log('GET-COLLATED-TITLE');
        console.log(project);
        return project.key === key;
    });

export const collatedTasksExist = seletedProject => {
    console.log('COLLATED-TASKS-EXITS');
    console.log(seletedProject);
    console.log(collatedTasks.find(task => task.key === seletedProject));
    return collatedTasks.find(task => task.key === seletedProject);
};

export const generatePushId = (() => {
    const PUSH_CHARS = '-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz';
    const lastRandChars = [];

    return function() {
        let now = new Date().getTime();
        const timeStampChars = new Array(8);

        for (var i = 7; i >= 0; i--) {
            timeStampChars[i] = PUSH_CHARS.charAt(now % 64);
            now = Math.floor(now / 64);
        }

        let id = timeStampChars.join('');

        for (i = 0; i < 12; i++) {
            id += PUSH_CHARS.charAt(lastRandChars[i]);
        }

        return id;
    };
})();
