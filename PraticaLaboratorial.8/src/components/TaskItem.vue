<template>
    <p>______________________________________________________________________________________</p>
    <li class="flex gap-36 place-content-between">
        <input type="checkbox" @input="(e)=> taskChecked(e,task.id)">
        <p :class="taskDone(task.isCompleted)">{{task.description ?? "" }}</p>
            <Button  :class="'p-2 rounded-md'" :name="'Details'" :styles="'first'" :clickEvent="click" />
    </li>
</template>


<script>
import { mapState, mapActions } from 'pinia';
import { taskStore } from '../store/tasks'
import Button from './Button.vue';

export default {
    components: { 
        Button 
    },

    props: {
        task: Object,
        click: Function,
    },

    methods: {
        taskDone(taskDone) {
            if (taskDone) {
                return "line-through";
            }
            else {
                return "";
            }
        },

        taskChecked(e, taskId) {
            const newTask = this.tasks.map((task) => {
                if(task.id === taskId){
                    return{
                        ...task, 
                        isCompleted: e.target.checked
                    }
                }

                return {
                    ...task
                }
            })

            this.setTasks(newTask)

            this.setTasksFilter(newTask)
        },

        ...mapActions(taskStore, ["setTasks", "setTasksFilter"])
    },
    

    computed: {
        ...mapState(taskStore, ["tasks", "filterTask"])
    }
   
}

</script>

