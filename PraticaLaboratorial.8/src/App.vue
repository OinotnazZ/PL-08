<template>
  <h1 class="text-center font-semibold text-4xl mt-3">Prática Laboratorial 08</h1>
<router-view></router-view>
</template>

<script>

import {taskStore} from "./store/tasks";
import  {mapActions} from "pinia";

export default {
  mounted() {
    const localStorageTasks = localStorage.getItem("task")

    if(!localStorageTasks){  //verifica se LStorage está vazio, e não passa para a conversao abaixo
      return
    }

    const localStorageConvert = JSON.parse(localStorageTasks) //conversão 

    this.setTasks(localStorageConvert)
    this.setTasksFilter(localStorageConvert)
  },

  methods: {
    ...mapActions(taskStore, ["setTasks", "setTasksFilter", "editTasks"])
  },
}

</script>

