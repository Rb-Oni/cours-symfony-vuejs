import btn from './Button';

export default {
    name: 'Example',
    data() {
        return {
            counter: 0
        };
    },
    methods: {
        add() {
            this.counter++;
        }
    },
    components: {
        btn
    },
    template: `
        <div>
            <p>
                Example de Vue.JS => {{ counter }}

            </p>
            <btn @pressed="add"></btn>
        </div>
    `
}