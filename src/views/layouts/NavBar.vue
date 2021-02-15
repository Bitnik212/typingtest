<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div class="container-fluid">
            <router-link class="navbar-brand h2" to="/home">Typing Score</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link 
                        class="nav-link h5 font-weight-normal" 
                        to="/typingtest" 
                    >
                        Пройти тест 
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link 
                        class="nav-link h5 font-weight-normal" 
                        to="/trainer" 
                    >
                        Тренажер 
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link 
                        class="nav-link h5 font-weight-normal" 
                        to="/settings" 
                    >
                        Настройки 
                    </router-link>
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
