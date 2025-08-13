<script setup>
import { ref, onMounted } from 'vue'

const data = ref({}) // ✅ default value prevents null errors

let url = 'http://localhost:1337/api/cards?populate=*'

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

                <h1 v-if="data && data.data">
                    {{ data.data[0].title }}
                </h1>

                <div class=" wi">

                    <img
                    v-if="data && data.data"
                    :src="`http://localhost:1337${data.data[0].image[0].url}`" 
                    alt=""
                    >
                </div>

</template>
