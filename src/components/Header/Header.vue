<!--COMPOSITION API-->
<script setup>
import Logo from './components/Logo.vue';
import Menu from  './components/Menu/Container.vue';
import Profile from './components/Profile/Container.vue';
</script>

<template>
    <div class="flex flex-row items-center justify-between h-14 rounded-xl border-2 bg-black-700 space-x-10 px-2">
        <Logo/>
        <Menu/>
        <Profile/>
    </div>
</template>