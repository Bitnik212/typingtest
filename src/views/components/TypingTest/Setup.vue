<template>
    <div class="setup">
        <div class="card border-secondary  mb-3 col-12">
            <div class="card-header bg-secondary">Выбери язык и источник</div>
            <div class="card-body text-secondary container-fluid ">
                <div class="card-title">Это нужно сделать один раз</div>
                <div class="row">
                    <div class="col-6 py-2">
                        <div class="input-group">
                            <!-- :class="[falid.lang ? 'is-active' : 'is-inactive']" -->
                            <select class="form-select" :class="[validLang ? 'is-valid' : 'is-invalid']" v-model="langg" >
                                <option v-for="lang in langs" :key="lang.id" :value="lang.id">{{lang.name}}</option>
                            </select>
                            <div class="input-group-text">{{langSelected.name}}</div>
                        </div>
                    </div>
                    <div class="col-6 py-2 ">
                        <div class="input-group">
                            <select class="form-select" :class="[validSource ? 'is-valid' : 'is-invalid']" v-model="sourcee">
                                <option v-for="source in sources[langSelected.name]" :key="source.id" :value="source.value">{{source.name}}</option>
                            </select>
                            <div class="input-group-text">{{sourceSelected.name}}</div>
                        </div>
                        
                    </div>
                    <div class="col-6 py-2">
                        <div class="input-group">
                            <div class="input-group-text" >Количество предложений</div>
                            <input type="text" :class="[validSentenceCount ? 'is-valid' : 'is-invalid']" v-model="sentenceCountTemp"  class="form-control" placeholder="например 10">
                            <div class="input-group-text" >{{sentenceCount}}</div>
                        </div>
                    </div>
                </div>
                <div class="col-12 my-2">
                    <button @click="nextStep" type="submit" class="btn btn-secondary px-3 ">Далее</button>
                </div>
            <!-- {{valid}} -->

            </div>
        </div>    
    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex' 

export default {
    name: "Setup",
    props: {
        step: Number,
    },
    data () {
        return {
            tempStep: this.step,
            sentenceCountTemp: this.sentenceCount,
            sourcee: 0,
            langg: 0,
            validLang: true,
            validSource: true,
            validSentenceCount: true,
        }
    },
    methods: {
        nextStep () {
            this.validInputs()
            // console.info(this.tempStep)
        },
        validInputs () {
            if (this.sentenceCount != undefined && this.langSelected != undefined && this.sourceSelected != undefined) {
                if (this.sources[this.langSelected.name].find(e => e.name == this.sourceSelected.name) != undefined) {
                    // console.info("all ok!!")    
                    this.$emit("nextStep", this.tempStep++)
                    this.validLang = this.validSource = this.validSentenceCount = true
                } else {
                    this.validLang = this.validSource = false
                    // console.info("error!!")        
                }

            
            } 
        },
        ...mapMutations(['updateSentenceCount', 'updateSourceSelected', 'updateLangSelected'])
    },
    computed: {
        ...mapGetters(['sentenceCount', 'sources', 'langs', 'langSelected', 'sourceSelected'])
    },
    watch: {
        sentenceCountTemp: "updateSentenceCount",
        langg: 'updateLangSelected',
        sourcee: 'updateSourceSelected'
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
