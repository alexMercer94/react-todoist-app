import { collatedTasks } from '../constants';

export const collatedTasksExist = seletedProject => collatedTasks.find(task => task.key === seletedProject);
