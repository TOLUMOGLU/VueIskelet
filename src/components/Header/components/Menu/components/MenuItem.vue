<template>
    <RouterLink :to="url" class="bg-bluue">
        {{ title  }}
    </RouterLink>
</template>
<script>
import { RouterLink } from 'vue-router';

export default{
    props:{
        title:String,
        url:String
    }
}
</script>

<!--table kısmına bakılacak-->