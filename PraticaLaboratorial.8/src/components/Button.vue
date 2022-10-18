<template>
    <button :class="getStyle" @click="clickEvent">{{name ?? ""}}</button>   
  </template>

  <script>
  export default {
   props:{
      name: String,
      styles: String,
      clickEvent: Function
   },
   computed: {    //Sempre que é necessário retornar texto para inserir dentro do componente, deve ser utilizada as computed props (é mais perfomatica e não gera cache)
      getStyle() {
        if(this.styles === "first") {
          return "bg-blue-500 hover:bg-blue-400 text-white"
        }
        if(this.styles === "second") {
          return "bg-red-500 hover:bg-red-400 text-white"
        }
        else {
          return "bg-gray-500 hover:bg-gray-400 text-white"
        }
      }
   }
  }
  
  </script>
  <style scoped>
  </style>