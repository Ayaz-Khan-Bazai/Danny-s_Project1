<script setup>
import { reactive , ref } from 'vue';

const pro = defineProps(['names'])

let username = ref('')
let useremail = ref('')
let userpassword = ref('')


</script>

<template>

<form @submit.prevent="$emit('userinfo', username , useremail , userpassword)">
    <input  class=" p-5 bg-amber-200  m-2 block" type="name" v-model="username">
    <input  class=" p-5 bg-amber-200  m-2 block" type="email" v-model="useremail">
    <input  class=" p-5 bg-amber-200  m-2 block" type="password" v-model="userpassword">
    <button class=" p-5 bg-blue-200  m-2 block"  type="submit">Hello</button>
</form>

</template>