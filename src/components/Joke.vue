<template>
    <div class="column">
        <div class="card">
            <a class="delete" @click="deleteJoke(index)"></a>
            <div class="card-content">
                <p class="subtitle">
                    {{ joke.setup }}
                </p>
                <p class="subtitle">
                    {{ joke.punchline }}
                </p>
            </div>
            <footer class="card-footer">
                <p class="card-footer-item">
                    <span>
                        Share on <a href="#">Twitter</a>
                    </span>
                </p>
                <p class="card-footer-item">
                    <span>
                        Share on <a href="#">Facebook</a>
                    </span>
                </p>
           </footer>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        props: ['joke', 'index'],
        methods: mapActions([
            'deleteJoke'
        ])
    }
</script>
