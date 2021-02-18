<template>
    <div id="homelayout">
        <NavBar></NavBar>
        <div class="p-3">
            <router-view></router-view>
        </div>
    </div>    
</template>
<script>
import NavBar from './NavBar' // @/views/layouts/NavBar

export default {
    name: "HomeLayout",
    components: {
        NavBar
    }
}
</script>

<style>
    #homelayout{
        background-color: rgba(0,0,10,0.7);
        color: white;
    }
    
</style>
