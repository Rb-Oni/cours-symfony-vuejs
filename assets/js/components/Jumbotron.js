import btn from './Button';

export default {
    name: 'Jumbotron',
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
        <div class="bg-orange-500 text-white py-6">
            <h2 class="mb-4 text-3xl font-bold">
                Le bouton ci-dessous a été cliqué {{ counter }} fois.
            </h2>
            <btn @pressed="add"></btn>
        </div>
    `
}