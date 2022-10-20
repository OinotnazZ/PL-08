<template>
    <div>
        <Button :name="'Incomplete Tasks'" :styles="'first'" :clickEvent="taskNotCompletedFilter" />
        <Button :name="'Complete Tasks'" :styles="'first'" :clickEvent="taskCompletedFilter" />
        <Button :name="'Tasks'" :styles="'first'" :clickEvent="allTasks" />
        <Button :name="'Create Task'" :styles="'first'" :clickEvent="createTaskLink" />
        <TaskList />
    </div>
</template>

<script>
import Button from '../components/Button.vue'
import TaskList from '../components/TaskList.vue';
import {mapActions, mapState} from 'pinia';
import {taskStore} from '../store/tasks';

export default {
    components: {
    Button,
    TaskList
},
    computed:{
        ...mapState(taskStore, ["setTaskFilter", "tasks"])
    },

    methods: {

        createTaskLink() {
            this.$router.push({
                path: "/form"
            })
        },

        taskCompletedFilter(){
            const taskFilter = this.tasks.filter((task) => task.isCompleted)

            this.setTasksFilter(taskFilter)
        },

        taskNotCompletedFilter(){
            const taskFilter = this.tasks.filter((task) => !task.isCompleted)

            this.setTasksFilter(taskFilter)
        },

        allTasks(){
            this.setTasksFilter([...this.tasks])
        },


        ...mapActions(taskStore, ["setTasksFilter"]) //Acesso a todas as actions da Store. 1ª param é a funçao principal

    },
}
</script>
