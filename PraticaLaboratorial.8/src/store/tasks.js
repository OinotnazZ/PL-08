import {defineStore} from "pinia";


//
export const taskStore = defineStore ("task" ,{
    state: () => {
        return {
            tasks: [],
        };
    },

    actions: {
        addTask(task) {
            const newTask = {
                ...task,
            };

            this.tasks.push(newTask);

            localStorage.setItem("task", JSON.stringify(this.tasks));
        },

        setTasks(tasks) {
            this.tasks = tasks;
        },
    }
});