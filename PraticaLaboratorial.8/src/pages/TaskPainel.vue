<template>
    <div>
        <Button :name="'Por Concluir'" :styles="'first'" :clickEvent="() => estado('Por Concluir')" />
        <Button :name="'Completas'" :styles="'first'" :clickEvent="() => estado('Completas')" />
        <Button :name="'Criar'" :styles="'first'" :clickEvent="createTaskLink" />
        <TaskList />
    </div>
</template>

<script>
import Button from '../components/Button.vue'
import TaskList from '../components/TaskList.vue';

export default {
    components: {
    Button,
    TaskList
},

    methods: {
        estado(msg) {
            console.log(msg)
        },

        createTaskLink() {
            this.$router.push({
                path: "/form"
            })
        }
    },
}
</script>
