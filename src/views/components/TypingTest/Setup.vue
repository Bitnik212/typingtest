<template>
    <div class="setup">
        <div class="card border-secondary  mb-3 col-12">
            <div class="card-header bg-secondary">Выбери язык и источник</div>
            <div class="card-body text-secondary container-fluid ">
                <div class="card-title">Это нужно сделать один раз</div>
                <div class="row">
                    <div class="col-6 py-2">
                        <select class="form-select " id="autoSizingSelect">
                            <option selected>Выберите язык:</option>
                            <option value="RU">Русский язык</option>
                            <option value="EN">English lang</option>
                        </select>
                    </div>
                    <div class="col-6 py-2">
                        <select class="form-select " id="autoSizingSelect">
                            <option selected>Выберите источник:</option>
                            <option value="RU">fish-text.ru</option>
                            <option value="EN">baconipsum.com</option>
                        </select>
                    </div>
                    <div class="col-6 py-2">
                        <div class="input-group">
                            <div class="input-group-text" id="btnGroupAddon">Количество абзацев</div>
                            <input type="text" class="form-control" placeholder="например 10" aria-label="Input group example" aria-describedby="btnGroupAddon">
                        </div>
                    </div>
                    <div class="col-6 py-2">
                        <div class="input-group">
                            <div class="input-group-text" id="btnGroupAddon">Количество предложений</div>
                            <input type="text" class="form-control" placeholder="например 10" aria-label="Input group example" aria-describedby="btnGroupAddon">
                        </div>
                    </div>
                </div>
                    
                
                <div class="col-12 my-2">
                    <button @click="nextStep" class="btn btn-secondary px-3 ">Далее</button>
                </div>
            </div>
        </div>    
    </div>
</template>

<script>
export default {
    name: "Setup",
    props: {
        step: Number,
        
    },
    data () {
        return {
            tempStep: this.step,
        }
    },
    methods: {
        nextStep () {
            this.$emit("nextStep", this.tempStep++)
            console.info(this.tempStep)
        }
    }
}
</script>
<style>
    .setup{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
