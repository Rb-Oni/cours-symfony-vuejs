export default {
    name: 'List',
    data() {
        return {
            guitars: [
                'Gibson Les Paul',
                'Fender Strat',
                'Gibson Explorer',
                'PRS Vela',
                'PRS Starla'
            ]
        };
    },
    methods: {
    },
    components: {
    },
    template: `
        <div class="bg-blue-500 text-white py-6">
            <h2 class="mb-4 text-3xl font-bold">
            List
            </h2>
            <ul>
                <li v-for="(guitar, index) in guitars" :key="index">{{ index }}: {{ guitar }}</li>
            </ul>
        </div>
    `
}