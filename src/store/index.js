import { defineStore } from 'pinia'


export const resultCalc = defineStore('result', {
    state: () => ({
        expression: '',
        historic: '0'
    }),
    actions: {
        addExpression(value) {
            this.expression += value
        },
        remExpression() {
            let result = this.expression

            this.expression = result.slice(0, this.expression.length - 1)
        },
        remove(){
            this.expression = '0'
        },
        equal() {
            let result = eval(String(this.expression))

            this.historic = this.expression
            this.expression = result
        }
    },
    getters: {
        getExpression(state) {
            return state.expression
        },
        getHistoric(state) {
            return state.historic
        }
    },
})