<script setup>
import { ref } from 'vue'

const contents = ref([
    {
       info1: "Email",
       info2: "kontakt@hagenowersv.de",
    },
    {
       info1: "Email",
       info2: "kontakt@hagenowersv.de",
    },
    {
       info1: "Email",
       info2: "kontakt@hagenowersv.de",
    },
])

</script>


<template>

    <div>
        <div class=" flex m-32 gap-10 justify-center flex-wrap">
            <div v-for="content in contents" class="
             p-10 items-center gap-5 rounded-2xl flex flex-col
             w-[400px] shadow-xl/20 hover:shadow-gray-500 shadow-blue-500 hover:shadow-xl/40 duration-400 ease-in-out border-t-4 border-gray-2x00" >
                <div class=" text-2xl h-[60px] w-[60px] flex items-center justify-center border-2 border-gray-200 hover:bg-blue-600 rounded-full text-center">
                    <i class=" text-blue-500 hover:text-white fa-solid fa-envelope"></i>
                </div>
                <h1 class=" text-2xl font-bold">{{ content.info1 }}</h1>
                <h1 class=" font-bold">{{content.info2}}</h1>
            </div>
        </div>
    </div>

</template>