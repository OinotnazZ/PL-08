import {defineStore} from "pinia";


//
export const taskStore = defineStore ("task" ,{
    state: () => {
        return {
            tasks: [
                {
                    description: "Teste de vue",
                    isCompleted: true,
                    id: 1
                }
            ],
        };
    },

    actions: {
        addTask(task) {

            this.tasks.push(task)

            localStorage.setItem("task", JSON.stringify(this.tasks));
        },

        setTasks(tasks) {
            this.tasks = tasks;
        },
    }
});