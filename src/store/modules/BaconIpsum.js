import axios from 'axios'

export default {
    state: {
        text: "",
    },
    mutations: {
        updateTextBI(state, text) {
            state.text = text
        },
    },
    actions: {
        async fetchTextBI(ctx, sentenceCount = 1, callback = () => {}) {
            const host = "baconipsum.com"
            await axios.get("https://"+host+"/api/?type=all-meat&sentences="+sentenceCount)
            .then( res => {
                console.info(res.data[0])
                ctx.commit("updateTextBI", res.data[0])
                callback(res.data[0])
            })
            // const json = await res.json()
        }
    },
    getters: {
        textBI(state) {
            return state.text
        },
        
    }
}