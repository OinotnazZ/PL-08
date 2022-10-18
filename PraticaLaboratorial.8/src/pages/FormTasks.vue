<template>
    <form @submit.prevent="handleSubmit">
    <input type="text" name="description">
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
              checked
            />
            <label for="incompleted">incompleta</label>
          </div>
          <div>
            <input
              type="radio"
              id="completed"
              name="isCompleted"
              value="completed"
              class="mx-2"
            />
            <label for="completed">Completa</label>
          </div>
        </fieldset>
      </div>
      <Button :name="'Cancelar'" styles="second" clickEvent="handleCancel" />
      <Button :name="'Guardar'" styles="first" type="submit"/>
    </form>
</template>

<script>
import Button from '../components/Button.vue';
import {v4 as uuid} from 'uuid';
import { mapActions } from 'pinia';
import {taskStore} from "../store/tasks";

export default {
    components: { 
        Button
     },

     data() {
            return {
                formData: {
                inputValue: "",
                radioValue: "incompleta"
            }
        }
     },

     methods: {
        ...mapActions(taskStore, ["addTask"]),

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
               id: uuid()
            }

            this.addTask(newToDo)

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
        }
     },
}
</script>

<style scoped>

</style>