<template>
    <div  class="flex justify-center mt-10">    
    <div class="p-10 bg-black text-white rounded-md">
        {{task?.description}}
        <form @submit.prevent="handleSubmit">
        <input class="mt-2 h-7 rounded-sm text-black" type="text" name="description" :value="task?.description">
        <p>_______________________________________________________</p>
        <div class="flex gap-3 w-full my-2 justify-start">
        <fieldset>
          <legend class="mb-1">Task Completed?</legend>
          <div class="mb-2">
            <input
              type="radio"
              id="incompleted"
              name="isCompleted"
              value="incompleted"
              class="mr-2"
              :checked="!task?.isCompleted"
            />
            <label for="incompleted">Incomplete</label>
          </div>
          <div>
            <input
              type="radio"
              id="completed"
              name="isCompleted"
              value="completed"
              class="mr-2"
              :checked="task?.isCompleted"
            />
            <label for="completed">Complete</label>
          </div>
          <p>_______________________________________________________</p>
        </fieldset>
        </div>
        <div class="flex justify-end gap-4">
            <Button :class="'p-2 rounded-md'" :name="'Cancelar'" styles="third" @click="handleCancel" />
            <Button :class="'p-2 rounded-md'" :name="'Guardar'" styles="first" type="submit"/>
            <Button :class="'p-2 rounded-md'" :name="'Apagar'" styles="second" @click="() => deleteTask(task)"/></div>
        </form>
    </div>
    </div>
</template>

<script>

import  {mapState, mapActions} from "pinia";
import {taskStore} from "../store/tasks";
import Button from "../components/Button.vue"

export default {

    components: { 
        Button
     },

    mounted() {
        const id = this.$route.params.id
        const taskFind = this.tasks.find((task) => task.id === id) //Procura a task com o id que foi passado na rota

        this.task = {...taskFind}  //task vem do data
    },

    data(){
        return {
            task: null,
            formData: {
                inputValue: "",
                radioValue: "incompleta"
            }
        }
    },

    computed: {
        ...mapState(taskStore, ["tasks"])
    },




     methods: {

        ...mapActions(taskStore, ["editTasks", "setDeleteTask"]),

        handleSubmit(e) {
            const description = e.target.description.value
            const isCompleted = e.target.isCompleted.value

            if(!description){
                alert('Erro, insira uma descrição')
                return
            }

            const newToDo = {
                description,
                isCompleted: isCompleted === "completed",
                id: this.$route.params.id
            }

            this.editTasks(newToDo)

            e.target.description.value = ""
            e.target.isCompleted.value = "incompleted"

            this.$router.push({
                path: "/"
            })
        },

        handleCancel() {
            this.$router.push({
                path: "/"
            })
        },

        deleteTask(task){
            if(task.isCompleted){
                alert("The task is completed, cannot be removed!")
                return
            }

            this.setDeleteTask(task.id)
            this.$router.push({path: "/"})
        }  
    }
}
</script>
