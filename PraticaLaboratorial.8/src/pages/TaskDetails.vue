<template>
    <div>
        {{task?.description}}
        <router-link to="/">Voltar para Task Painel</router-link>
    </div>
</template>

<script>

import  {mapState} from "pinia";
import {taskStore} from "../store/tasks";

export default {
    mounted() {
        const id = this.$route.params.id
        const taskFind = this.tasks.find((task) => task.id === id) //Procura a task com o id que foi passado na rota

        this.task = {...taskFind}  //task vem do data
    },

    data(){
        return {
            task: null
        }
    },

    computed: {
        ...mapState(taskStore, ["tasks"])
    },
}
</script>
