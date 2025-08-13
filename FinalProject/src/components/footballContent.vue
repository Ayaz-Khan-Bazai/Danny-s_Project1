<script setup>
const data = ref({}) // ✅ default value prevents null errors
import { ref, onMounted } from 'vue'



let url = 'http://localhost:1337/api/footballs?populate=*&sort=number:asc'

const getdata = async () => {
    const res = await fetch(url)
    const json = await res.json()
    data.value = json
    console.log(data.value.data);
}

onMounted(getdata)
</script>


<template>
    <div class=" flex flex-col text-center justify-center items-center">
        <h1 class=" text-6xl font-extrabold">Vorstand</h1>
        <p class=" text-[20px] w-[70%]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit.</p>
    </div>

    <div class=" flex gap-6 flex-wrap justify-center mx-8 my-40 ">

        <!-- 1st card -->
        <div class=" w-[290px] rounded-2xl overflow-hidden h-[400px]">
            <div>
                <div class="">
                    <img class=" w-full transform hover:scale-105 transition ease-in-out duration-1000 "
                        v-if="data && data.data" :src="`http://localhost:1337${data.data[0].football[0].url}`" alt="">
                </div>
                <div class=" relative w-[290px] ">.

                    <div class="flex bottom-18 absolute w-[290px] justify-center">
                        <div class=" justify-self-center bgclr p-5 rounded-2xl w-[270px]">
                            
                            <h1 class=" cursor-pointer text-white text-[20px] font-bold" v-if="data && data.data">
                                {{ data.data[0].name }}
                            </h1>
                            <h1 class="cursor-pointer text-gray-400 font-bold" v-if="data && data.data">
                                {{ data.data[0].role }}
                            </h1>
                        </div>
                    </div>
                </div>

            </div>
        </div>


        <!-- 2nd Card -->
        <div class=" w-[290px] rounded-2xl overflow-hidden h-[400px]">
            <div>
                <div class="">
                    <img class=" w-full transform hover:scale-105 transition ease-in-out duration-1000 "
                        v-if="data && data.data" :src="`http://localhost:1337${data.data[1].football[0].url}`" alt="">
                </div>
                <div class=" relative w-[290px] ">.

                    <div class="flex bottom-18 absolute w-[290px] justify-center">
                        <div class=" justify-self-center bgclr p-5 rounded-2xl w-[270px]">
                            
                            <h1 class=" cursor-pointer text-white text-[20px] font-bold" v-if="data && data.data">
                                {{ data.data[0].name }}
                            </h1>
                            <h1 class="cursor-pointer text-gray-400 font-bold" v-if="data && data.data">
                                {{ data.data[0].role }}
                            </h1>
                        </div>
                    </div>
                </div>

            </div>
        </div>


        <!-- 3rd Card -->

        <div class=" w-[290px] rounded-2xl overflow-hidden h-[400px]">
            <div>
                <div class=" w-full h-full">
                    <img class=" object-top w-full transform hover:scale-105 transition ease-in-out duration-1000 "
                        v-if="data && data.data" :src="`http://localhost:1337${data.data[2].football[0].url}`" alt="">
                </div>
                <div class=" relative w-[290px] ">.

                    <div class="flex bottom-18 absolute w-[290px] justify-center">
                        <div class=" justify-self-center bgclr p-5 rounded-2xl w-[270px]">
                            
                            <h1 class=" cursor-pointer text-white text-[20px] font-bold" v-if="data && data.data">
                                {{ data.data[0].name }}
                            </h1>
                            <h1 class="cursor-pointer text-gray-400 font-bold" v-if="data && data.data">
                                {{ data.data[0].role }}
                            </h1>
                        </div>
                    </div>
                </div>

            </div>
        </div>


        <!-- 4th Card -->

        <div class=" w-[290px] rounded-2xl overflow-hidden h-[400px]">
            <div>
                <div class="">
                    <img class=" w-full transform hover:scale-105 transition ease-in-out duration-1000 "
                        v-if="data && data.data" :src="`http://localhost:1337${data.data[3].football[0].url}`" alt="">
                </div>
                <div class=" relative w-[290px] ">.

                    <div class="flex bottom-18 absolute w-[290px] justify-center">
                        <div class=" justify-self-center bgclr p-5 rounded-2xl w-[270px]">
                            
                            <h1 class=" cursor-pointer text-white text-[20px] font-bold" v-if="data && data.data">
                                {{ data.data[0].name }}
                            </h1>
                            <h1 class="cursor-pointer text-gray-400 font-bold" v-if="data && data.data">
                                {{ data.data[0].role }}
                            </h1>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>
<style scoped>
.bgclr {
    background-color: rgba(20, 0, 0, 0.775);
}
</style>