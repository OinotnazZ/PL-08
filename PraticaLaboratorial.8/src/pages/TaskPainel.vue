<template>
    <div class="flex justify-center mt-10">
        <div class="p-10 bg-black text-white rounded-md">
            <div class="flex gap-5">
                <Button :class="'p-4 rounded-md'" :name="'Incompleted Tasks'" :styles="'first'" :clickEvent="taskNotCompletedFilter" />
                <Button :class="'p-4 rounded-md'" :name="'Completed Tasks'" :styles="'first'" :clickEvent="taskCompletedFilter" />
                <Button :class="'p-4 rounded-md'" :name="'All Tasks'" :styles="'first'" :clickEvent="allTasks" />
                <Button :class="'p-4 rounded-md'" :name="'Create Task'" :styles="'first'" :clickEvent="createTaskLink" />
            </div>
            <div class="flex justify-center mt-5">
                <TaskList />
            </div>
        </div>
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
