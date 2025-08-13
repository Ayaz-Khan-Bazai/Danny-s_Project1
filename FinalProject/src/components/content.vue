<script setup>

const imgs = [
    "https://static.shuffle.dev/uploads/files/78/780ff8c7a852225fd9f6ce99d19a9bdb857b333a/302146807-504349375026474-9180619361701363663-n.png",
    "https://shuffle.dev/flaro-assets/images/blog/blog-avatar.png",
    "https://shuffle.dev/flaro-assets/images/blog/blog2.png",
]
import { ref, onMounted } from 'vue'

const showModal = ref(false)
const showModal2 = ref(false)
const showModal3 = ref(false)
const showModal4 = ref(false)

const data = ref({}) // ✅ default value prevents null errors

// let url = 'http://localhost:1337/api/cards?populate=*'
let url = 'http://localhost:1337/api/cards?populate=*&sort=order:asc'


const getdata = async () => {
    const res = await fetch(url)
    const json = await res.json()
    data.value = json
    console.log(data.value.data[0]);
    //   console.log(data.value.data[0].title);
    console.log(data.value.data[0].image[0].url);

}

onMounted(getdata)
</script>


<template>

    <div class=" flex flex-col items-center w-100%">
        <h1 class="text-4xl md:text-5xl font-bold relative">Aktuelles</h1>
        <h1 class=" text-{15px} ">aus allen Abteilungen</h1>
    </div>
    <div class=" relative flex flex-col md:flex-wrap">

        <div class="flex lg:flex-row flex-col text-center lg:items-start items-center">
            <div class=" flex flex-col w-[70vw] md:w-[50vw] gap-3 p-7  items-center lg:items-start">

                <div class="overflow-hidden rounded-xl h-[250px] w-full">
                    <img v-if="data && data.data"
                        class="w-full h-full transform hover:scale-105 transition ease-in-out duration-1000 rounded-2xl object-cover object-center"
                        :src="`http://localhost:1337${data.data[0].image[0].url}`" alt="">
                </div>

                <h1 v-if="data && data.data">  {{ data.data[0].title }}  </h1>

                <h1 v-if="data && data.data" class=" text-start text-[20px] font-bold w-[50%]">   {{ data.data[0].descrpition }}   </h1>

                <div @mouseenter="showModal = true" @mouseleave="showModal = false"
                    class=" p-4 bg-white rounded-xl shadow hover:shadow-lg transition w-fit flex gap-3 font-bold my-3">
                    <img :src="imgs[1]" alt="">
                    <h1 class="">Wade Warren</h1>
                </div>



                <!-- v-if="showModal"  -->
                <div v-if="showModal"
                    class=" text-center  flex flex-col items-center top-[350px] left-[250px] mt-2 w-[250px] text-white bg-gray-900 h-[180px] p-4 rounded-2xl shadow-lg z-10 absolute ">
                    <div class=" h-[100px] w-[100px] ">
                        <img class=" rounded-2xl"
                            src="https://www.shutterstock.com/image-photo/close-head-shot-portrait-preppy-600nw-1433809418.jpg"
                            alt="">
                    </div>
                    <p class="font-semibold">Writer</p>
                    <p class="text-sm text-gray-300">This sponsor supports football team. Thank you!</p>
                </div>
            </div>


            <!-- first card end -->
        
            <div class=" flex lg:flex-row flex-col w-[50vw] gap-3 p-7 items-center lg:items-start text-center">
                <div class="overflow-hidden rounded-xl w-[240px] lg:w-[170px] h-[170px]">
                    <img v-if="data && data.data"
                        class="transform hover:scale-105 transition ease-in-out duration-1000 rounded-2xl"
                        :src="`http://localhost:1337${data.data[1].image[0].url}`" alt="">
                </div>

                <div class=" flex flex-col gap-3 items-center lg:items-start">
                    <h1 v-if="data && data.data">
                        {{ data.data[1].title }}
                    </h1>
                    <h1 v-if="data && data.data" class=" text-[20px] font-bold w-[50%]">
                        {{ data.data[1].descrpition }}
                    </h1>


                    <div @mouseenter="showModal2 = true" @mouseleave="showModal2 = false"
                        class=" p-4 bg-white rounded-xl shadow hover:shadow-lg transition w-fit flex gap-3 font-bold my-3">
                        <img :src="imgs[1]" alt="">
                        <h1>Bessie Cooper</h1>
                    </div>
                </div>

            </div>
        </div>


        <!-- Hover 2 -->
        <div v-if="showModal2"
            class=" text-center  flex flex-col items-center top-[80px] right-[100px] mt-2 w-[250px] text-white bg-gray-900 h-[180px]  p-4 rounded-2xl shadow-lg z-10 absolute ">
            <div class=" h-[100px] w-[100px] ">
                <img class=" rounded-2xl"
                    src="https://www.shutterstock.com/image-photo/close-head-shot-portrait-preppy-600nw-1433809418.jpg"
                    alt="">
            </div>
            <p class="font-semibold">Writer</p>
            <p class="text-sm text-gray-300">This sponsor supports our local football team. Thank you!</p>
        </div>

        <!-- 2nd -->
        <div class=" flex md:flex-row flex-col items-center ">
            <div class=" flex lg:flex-row flex-col w-[50vw] gap-3 p-7 items-center lg:items-start">
                <div class="overflow-hidden rounded-xl w-[240px] lg:w-[170px] h-[170px]">
                    <img v-if="data && data.data"
                        class=" shadow-xl shadow-amber-900 transform hover:scale-105 transition ease-in-out duration-1000 rounded-2xl"
                        :src="`http://localhost:1337${data.data[2].image[0].url}`" alt="">
                </div>

                <div class=" flex flex-col gap-3 lg:items-start items-center ">
                    <h1 v-if="data && data.data">
                        {{ data.data[2].title }}
                    </h1>
                    <h1 v-if="data && data.data" class=" text-[20px] font-bold w-[50%]">
                        {{ data.data[2].descrpition }}
                    </h1>


                    <div
                        class=" p-4 bg-white rounded-xl shadow hover:shadow-lg transition w-fit flex gap-3 font-bold my-3">
                        <img :src="imgs[1]" alt="">
                        <h1>Bessie Cooper</h1>
                    </div>
                </div>

            </div>
            <div class=" flex lg:flex-row flex-col w-[50vw] gap-3 p-7 items-center lg:items-start">
                <div class="overflow-hidden rounded-xl w-[240px] lg:w-[170px] h-[170px]">
                    <img v-if="data && data.data"
                        class="transform hover:scale-105 transition ease-in-out duration-1000 rounded-2xl"
                        :src="`http://localhost:1337${data.data[3].image[0].url}`" alt="">
                </div>

                <div class=" flex flex-col gap-3 lg:items-start items-center ">
                    <h1 v-if="data && data.data">
                        {{ data.data[3].title }}
                    </h1>
                    <h1 v-if="data && data.data" class=" text-[20px] font-bold w-[50%]">
                        {{ data.data[0].descrpition }}
                    </h1>


                    <div    
                        class=" p-4 bg-white rounded-xl shadow hover:shadow-lg transition w-fit flex gap-3 font-bold my-3">
                        <img :src="imgs[1]" alt="">
                        <h1>Bessie Cooper</h1>
                    </div>
                </div>

            </div>


        </div>
    </div>
</template>