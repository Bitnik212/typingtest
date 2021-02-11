<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">Typing Score</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link" to="/" aria-current="page"> 
                    <!-- :class="{active: $route.name == 'Home'}"  -->
                        Home 
                    </router-link>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/">Features</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/">Pricing</a>
                </li>
                
            </ul>
            </div>
        </div>
        </nav>
</template>

<script>
export default {
    name: "NavBar"
}
</script>
