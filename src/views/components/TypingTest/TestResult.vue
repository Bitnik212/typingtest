<template>
    <div class="container-fluid">
        <div class="row">
            <div class="mb-3">
                <h3>Результат теста</h3>
            </div>
            <div class="row">
                <div class="col-3">
                    <h4 class="p-3 rounded text-wrap bg-dark ">Скорость (зн/мин): <h2 class="mt-3">{{result.speed}} </h2></h4>
                </div>
                <div class="col-3">
                    <h4 class="p-3 rounded text-wrap bg-dark">Точность (%): <h3 class="mt-3">{{result.accuracy}}</h3></h4>
                </div>
            </div>
            <div class="my-3">
                <button v-on:click="PrevStep()" class="btn btn-primary px-2">Назад</button>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    name: "TestResult",
    props: {
        result: Object
    },
    data () {
        return {
            tempStep: this.step,
        }
    },
    methods: {
        PrevStep () {
            this.$emit('prevStep', this.tempStep--)
        },
    }
}
</script>
