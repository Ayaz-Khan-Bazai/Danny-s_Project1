<script setup>
import { ref } from "vue";

const nums = ref([1,2,3]);

</script>

<template>
<div>
    <div class=" flex w-full bg-black p-20 text-gray-400 justify-between flex-wrap">
        <div class=" flex flex-col gap-10 w-[300px]">
            <div>
                <img src="https://static.shuffle.dev/uploads/files/78/780ff8c7a852225fd9f6ce99d19a9bdb857b333a/hagenowesv.png" alt="">
            </div>
            <p class=" ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus interdum facilisis odio scelerisque vel neque.</p>
            <div>
                <i class=" text-[20px] mx-2 fa-brands fa-facebook"></i>
                <i class=" text-[20px] mx-2 fa-brands fa-instagram"></i>
            </div>
        </div>
        
        
        <div class=" flex gap-40 flex-wrap">
            <ul v-for="num in nums" class=" flex flex-col gap-3">
                <li class=" text-[18px]">Abteilungen</li>
                <li class=" text-white text-[18px]">Fussball</li>
                <li class=" text-white text-[18px]">Handball</li>
                <li class=" text-white text-[18px]">Leichtathletik</li>
                <li class=" text-white text-[18px]">Kegeln</li>
            </ul>
        </div>
    </div>


    <h1 class=" bg-black text-white text-center border-t-[1px] border-t-gray-900 py-5">© 2025 Hagenower SV e.V.</h1>

</div>

</template>