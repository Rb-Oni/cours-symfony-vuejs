export default {
    name: 'Watcher',
    data() {
        return {
            count: 0,
            evens: 0,
        };
    },
    mounted() {
        setInterval(() => this.count++, 1000);
    },
    methods: {
    },
    watch: {
        count(newValue, oldValue) {
            if (newValue % 2 == 0) {
                this.evens++;
            }
        }
    },
    template: `
        <div class="bg-purple-500 text-white py-6">
            <h2 class="mb-4 text-3xl font-bold">
            Watcher
            </h2>
            <div>
                Counter : {{ count }}
            </div>
            <div>
                Evens Counter : {{ evens }}
            </div>
        </div>
    `
}