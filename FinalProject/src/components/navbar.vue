<script setup>
import { ref } from 'vue'

const showModal = ref(false)
const open = ref(false)

let showNav = () =>{
    open.value = !open.value
}

</script>

<template>
    <div class="p-10 lg:w-[99vw] px-20 items-center flex content-start justify-between lg:flex-row lg:justify-between text-[17px] text-black">
        
        <div class=" w-[150px] lg:w-[200px]">
            <img src="https://static.shuffle.dev/uploads/files/78/780ff8c7a852225fd9f6ce99d19a9bdb857b333a/hagenowesv.png"
                alt="">
        </div>

        <div class=" lg:gap-8 lg:flex-row gap-4 hidden lg:flex  items-center">
            
            <div class=" text-[18px] lg:text-[20px] lg:font-semibold flex gap-6 xl:gap-10 ">
                <RouterLink @click=""  to="/" >Home</RouterLink>
                <RouterLink @click=""  to="/FootBall">Football</RouterLink>
                <RouterLink @click=""  to="/HandBall">Handball</RouterLink>
                <RouterLink @click=""  to="/about">About</RouterLink>
                <RouterLink @click=""  to="/Contact">Contact</RouterLink>
                <RouterLink @click=""  to="/Content">Contents</RouterLink>
            </div>

            <button class=" text-[18px] bg-[#4f46e5] p-3 lg:px-5 py-2 rounded-[10px] text-white hover:bg-blue-700">
                Kontakt
            </button>
        </div>

        <span @click="showNav" class=" lg:hidden bg-[#4f46e5] p-4  rounded-full">
            <i class="fa-solid fa-bars"></i>
        </span>

        <div v-if="open" class=" h-fit py-10 overflow-hidden shadow-xl shadow-blue-950 absolute gap-14 left-2 top-20 px-30 lg:hidden bg-purple-200 flex justify-center flex-col">
                <RouterLink @click=""  to="/" >Home</RouterLink>
                <RouterLink @click=""  to="/FootBall">Football</RouterLink>
                <RouterLink @click=""  to="/HandBall">Handball</RouterLink>
                <RouterLink @click=""  to="/about">About</RouterLink>
                <RouterLink @click=""  to="/Contact">Contact</RouterLink>
                <RouterLink @click=""  to="/Content">Contents</RouterLink> 
            <button class=" text-[18px] bg-[#4f46e5]  px-5 py-2 rounded-[10px] text-white">Kontakt</button>
        </div>

    </div>

</template>