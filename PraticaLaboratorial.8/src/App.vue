<template>
  <div class=" w-screen h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
    <h1 class="text-center font-semibold text-4xl pt-10 text-white">Prática Laboratorial 08</h1>
    <router-view></router-view>
  </div>

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

