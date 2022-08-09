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
        <div class="bg-orange-500 text-white py-6">
            <p class="mb-4">
            Le bouton ci-dessous a été cliqué {{ counter }} fois.
            </p>
            <btn @pressed="add"></btn>
        </div>
    `
}