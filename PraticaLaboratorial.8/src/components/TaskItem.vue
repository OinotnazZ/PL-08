<template>
    <li>
    <p :class="taskDone(isCompleted)">{{description ?? "" }}</p>
    <Button :name="'Detalhe'" :styles="'first'" :clickEvent="click" />
    </li>
</template>


<script>
import Button from './Button.vue';

export default {
    components: { 
        Button 
    },

    props: {
        description: String,
        isCompleted: Boolean,
        click: Function
    },

    methods: {
        taskDone(taskDone) {
            if (taskDone) {
                return "line-through";
            }
            else {
                return "";
            }
        }
    },
}

</script>

