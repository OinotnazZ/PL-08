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

        editTasks(newTask){
            this.tasks.forEach((task) => {
                if(task.id === newTask.id){ 
                    task.description = newTask.description
                    task.isCompleted = newTask.isCompleted
                }
            })

            this.taskFilter = [...this.tasks]

            localStorage.setItem("task", JSON.stringify(this.tasks))
        },

        setDeleteTask(id) {
            const indexTask = this.tasks.findIndex((task) => task.id === id)  //indice do array

            this.tasks.splice(indexTask, 1)
            this.taskFilter = [...this.tasks]

            localStorage.setItem("task", JSON.stringify(this.tasks))
        }

    }
});