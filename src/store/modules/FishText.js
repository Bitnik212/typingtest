export default {
    state: {
        textFT: "",
    },
    mutations: {
        updateText(state, text) {
            state.textFT = text
        },
    },
    actions: {
        async fetchTextFT(ctx, sentenceCount = 1) {
            const host = "fish-text.ru"
            const res = await fetch("https://"+host+"/get?type=sentence&number="+sentenceCount)
            
            const json = await res.json()
            if (json.status == "success") {
                ctx.commit("updateText", json.text)
            }
        }
    },
    getters: {
        textFT(state) {
            return state.textFT
        },
        
    }
}