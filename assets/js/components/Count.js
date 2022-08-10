export default {
    name: 'Count',
    data() {
        return {
            count: 0,
            handle: null
        };
    },
    methods: {
        clearCount(){
            this.count = 0;
        },
        start() {
            this.clearCount();
            this.handle = setInterval(() => this.count++, 1000);
        },
        stop() {
            clearInterval(this.handle);
        }
    },
    components: {
    },
    template: `
        <div class="bg-green-500 text-white py-6">
            <h2 class="mb-4 text-3xl font-bold">
            Count
            </h2>
            <p>Counter : {{ count }}</p>
            <button @click="start()" class="bg-white hover:bg-gray-200 text-black duration-150 font-bold py-2 px-6 shadow rounded-md">Start</button>
            <button @click="stop()" class="bg-white hover:bg-gray-200 text-black duration-150 font-bold py-2 px-6 shadow rounded-md">Stop</button>
        </div>
    `
}