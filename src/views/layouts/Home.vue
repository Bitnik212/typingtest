<template>
    <div>
        <NavBar></NavBar>
        <router-view></router-view>
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
