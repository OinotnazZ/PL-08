<template>
  <div class="flex justify-center mt-10">
    <form  class="bg-black text-white p-10 rounded-lg" @submit.prevent="handleSubmit">
    <label>Insert Task Description: </label>
    <input class="ml-4 h-7 rounded-sm text-black" type="text" name="description">
    <p>_______________________________________________________</p>
    <div class="flex gap-3 w-full my-10 justify-start">
        <fieldset>
          <legend class="mb-1">Task Completed?</legend>
          <div class="mb-2">
            <input
              type="radio"
              id="incompleted"
              name="isCompleted"
              value="incompleted"
              class="mr-2"
              checked
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
            />
            <label for="completed">Complete</label>
          </div>
          <p>_______________________________________________________</p>
        </fieldset>
      </div>
      <div class="flex justify-end gap-4">
        <Button :class="'p-2 rounded-md'" :name="'Cancel'" styles="second" clickEvent="handleCancel" />
        <Button :class="'p-2 rounded-md'" :name="'Save'" styles="first" type="submit"/>
      </div>
    </form>
  </div>
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
                alert('Error, insert a description')
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