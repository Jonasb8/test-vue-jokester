<template>
    <div id="app">
        <div class="container">
            <h1 class="title">Jokes</h1>
            <button type="button" name="button" class="button" @click="initActions">Add random jokes</button>
            <button type="button" name="button" class="button is-primary" @click="addJoke">Add a joke</button>
            <Joke
                v-for="(joke, index) in $store.state.jokes"
                :joke="joke"
                :index="index"
                :key="index"
            />
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import Joke from './components/Joke.vue'

    export default {
        components: {
            Joke
        },
        methods: mapActions([
            'initActions',
            'addJoke',
        ])
    }
</script>
