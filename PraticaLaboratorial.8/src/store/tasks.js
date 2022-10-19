import {defineStore} from "pinia";


//
export const taskStore = defineStore ("task" ,{
    state: () => {
        return {
            tasks: [],
            taskFilter:[]
        };
    },

    actions: {
        addTask(task) {

            this.tasks.push(task)

            localStorage.setItem("task", JSON.stringify(this.tasks)); //LocalStorage SETado
        },

        setTasks(tasks) {
            this.tasks = tasks;
        },

        setTasksFilter(taskFilter) {
            this.taskFilter = taskFilter;
        },

    }
});