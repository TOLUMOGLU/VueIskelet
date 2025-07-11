<script setup>
import MenuItem from './components/MenuItem.vue';
import { reactive } from 'vue';
const state = reactive({ 
    title: "Extra",
    menu: [
        {title: "Anasayfa", url:"/"},
        {title: "Products", url:"/products"},
        {title: "Services", url:"/services"}, 
        {title: "Abaout", url:"/about"},
    ]
});
function changeMenuName(newName){
    state.title=newName;
}
</script>
<template>
    <div class="flex flex-row content-evenly space-x-2">
        <MenuItem :key="`mn-${item.title}`" v-for="item in state.menu" :title="item.title" :url="item.url"></MenuItem>
        <!---<MenuItem title="Anasayfa"/>
        <MenuItem title="Producs"/>
        <MenuItem title="Services"/>
        <MenuItem title="About"/>
        <div>{{ state.title }}</div>
        <button 
        @click="$event => changeMenuName('Gani')"
        >Change Menu</button>-->
    </div>
</template>

<!---<script>
//options api
import MenuItem from './components/MenuItem.vue';
export default{
    data() {
        return {
            title:"Gani",
        };
    }, //componentin stati
    methods:{
        function changeMenuName(newName){
        state.title="Nre Menu Item";}
    }
    components: {MenuItem},//LOCAL REGISTRATION
}
</script>-->