<template>
        <ul>
            <TaskItem v-for="task in taskFilter" 
            :key="task.id" 
            :task = "task"
            :click="() => handleClick(task.id)" 
            />
        </ul>
</template>

<script>
import TaskItem from './TaskItem.vue';
import  {mapState} from "pinia";
import {taskStore} from "../store/tasks"


export default {
    components: { 
        TaskItem 
    },

    computed: {
        ...mapState(taskStore, ["taskFilter"])
    },

    methods: {
        handleClick(id) {
            this.$router.push({
                path: `/details/${id}`
            })
        }
    },
}
</script>
