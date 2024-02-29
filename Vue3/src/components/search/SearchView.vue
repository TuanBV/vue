<script setup>
const props = defineProps(['inputSearch']);
const emits = defineEmits(['update:inputSearch']);

</script>

<template>
    <input type="text"
        class="h-full border-[1px] rounded-[50px] w-[300px]"
        :value="props.inputSearch"
        @input="emits('update:inputSearch', $event.target.value)"
    >
</template>

<style scoped>
input {
    cursor: pointer;
    padding: 0 20px;
}

input:hover,
input:focus,
input:active,
input:focus-within {
    border: 1px solid #0099FF;
    outline: none;
    box-shadow: 0px 0px 15px -5px #0099FF;
}

</style>
