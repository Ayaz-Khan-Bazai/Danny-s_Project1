<script setup>
import { ref } from 'vue'

const sponsors = ref([
  {
    fname: "Fussball",
    name: '05.01.2024 - Punktspiel',
    image: 'Hagenow • Full Time',
  },
  {
    fname: "Fussball",
    name: '05.01.2024 - Punktspiel',
    image: 'Hagenow • Full Time',
  },
  {
    fname: "Fussball",
    name: '05.01.2024 - Punktspiel',
    image: 'Hagenow • Full Time',
  },
  {
    fname: "Fussball",
    name: '05.01.2024 - Punktspiel',
    image: 'Hagenow • Full Time',
  },
])
</script>

<template>

<div class=" flex text-center flex-col items-center my-20">
    <h1 class=" text-4xl font-bold ">Termine</h1>
    <p class=" text-[18px] text-center ">Alle kommenden Veranstaltungen</p>
</div>

<div class="hidden lg:flex flex-col gap-8 items-center">

    <div v-for="sponser in sponsors" class=" p-5 border-2 border-gray-300 rounded-2xl items-center flex justify-between w-[600px]">
        <div class=" flex flex-col gap-2">
            <h1 class=" text-blue-800 bg-gray-100 w-fit p-1 rounded-2xl px-2">{{ sponser.fname }}</h1>
            <h1 class=" text-[20px] font-bold">{{sponser.name}}</h1>
            <h1 class=" ">{{ sponser.image }}</h1>
        </div>
        <div class=" hover:bg-blue-800 bg-blue-600 rounded-full border-2 border-solid p-2 text-white text-center ">
            <i class="fa-solid fa-arrow-right"></i>
        </div>
    </div>



</div>

<div class="hidden lg:flex flex-col items-center my-20">
    <h1 class=" text-4xl font-bold ">Termine</h1>
    <p class=" text-[18px] text-center w-[500px]">Alle kommenden Veranstaltungen</p>
</div>



</template>

