<script setup>

const imgs = {
    img1:"https://shuffle.dev/flaro-assets/logos/brands/logo-xxl-light.png",
    img2:"https://shuffle.dev/flaro-assets/logos/brands/logo-xxl-light2.png",
    img3:"https://shuffle.dev/flaro-assets/logos/brands/logo-xxl-light3.png",
    img4:"https://shuffle.dev/flaro-assets/logos/brands/logo-xxl-light4.png",
    img5:"https://shuffle.dev/flaro-assets/logos/brands/logo-xxl-light4.png",
    img6:"https://shuffle.dev/flaro-assets/logos/brands/logo-xxl-light4.png",
    img7:"https://shuffle.dev/flaro-assets/logos/brands/logo-xxl-light4.png",
    img8:"https://shuffle.dev/flaro-assets/logos/brands/logo-xxl-light8.png",

}

</script>

<template>

<div class=" flex flex-col items-center my-20">
    <h1 class=" text-4xl font-bold ">Sponsoren</h1>
    <p class=" text-[18px] text-center w-[80%]">Ohne unsere Sponsoren wäre vieles 
        nicht möglich. Wenn auch ihr Unternehmen den Hagenow SV unterstützen möch
        te, wenden sie gerne an den Vorstand.</p>
</div>

<div class=" flex gap-20 items-center justify-center flex-wrap">
    <img class=" p-5" :src="imgs.img1" alt="">
    <img class=" p-5" :src="imgs.img2" alt="">
    <img class=" p-5" :src="imgs.img3" alt="">
    <img class=" p-5" :src="imgs.img4" alt="">
</div>
<div class="hidden md:flex gap-12 items-center justify-center flex-wrap ">
    <img class=" p-5" :src="imgs.img5" alt="">
    <img class=" p-5" :src="imgs.img6" alt="">
    <img class=" p-5" :src="imgs.img7" alt="">
    <img class=" p-5" :src="imgs.img8" alt="">
</div>


</template>