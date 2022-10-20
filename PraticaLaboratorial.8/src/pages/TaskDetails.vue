<template>
    <div>
        {{task?.description}}
        <form @submit.prevent="handleSubmit">
        <input type="text" name="description" :value="task?.description">
        <div class="flex gap-3 w-full my-8">
        <fieldset>
          <legend>Completa?</legend>
          <div>
            <input
              type="radio"
              id="incompleted"
              name="isCompleted"
              value="incompleted"
              class="mx-2"
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
              class="mx-2"
              :checked="task?.isCompleted"
            />
            <label for="completed">Complete</label>
          </div>
        </fieldset>
      </div>
      <Button :name="'Cancelar'" styles="third" @click="handleCancel" />
      <Button :name="'Guardar'" styles="first" type="submit"/>
      <Button :name="'Apagar'" styles="second" @click="() => deleteTask(task)"/>
    </form>
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
