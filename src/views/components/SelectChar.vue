<template>
    <div class="typingText">
        <span class="text" v-for="item in stringEnum" :key="item.id">
            <span v-if="item.id == selectChar" >
                <span class="select" :class="{uncorrectChar: uncorrectChar}">{{item.char}}</span>
            </span>
            <span v-else>{{item.char}}</span>
        </span>
    </div>
</template>

<script>
export default {
    name: "SelectChar",
    props: {
        string: String,
        selectChar: Number,
        uncorrectChar: Boolean
    },
    
    computed: {
        stringEnum: {
            get () {
                let enumm = [];
                let i = 0;
                for ( let char of this.string) {
                    // console.info(char)
                    enumm.push({"id": i, "char": char})
                    i++
                }
                return enumm
            }
        }
    }
}
</script>
<style scoped>
    .typingText .select{
        background-color: green;
        padding: 0px 5px 2px 5px;
        border-radius: 5px;
        font-size: 23px;
    }
    .typingText .text{
        font-size: 20px;
    }
    .typingText .text .uncorrectChar{
        background-color: red !important;
    }
</style>
