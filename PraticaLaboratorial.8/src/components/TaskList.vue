<template>
    <ul>
        <TaskItem v-for="task in tasks" 
        :key="task.id" 
        :description="task.description"
        :isCompleted="task.isCompleted"
        :click="() => task.handleClick(task.id)" 
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
        ...mapState(taskStore, ["tasks"])
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
