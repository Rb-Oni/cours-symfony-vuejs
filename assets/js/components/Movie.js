import axios from 'axios';

export default {
    name: 'Movie',
    data() {
        return {
            totalVuePackages: null
        };
    },
    methods: {},
    async created() {
        // GET request using axios with async/await
        const response = await axios.get("https://api.npms.io/v2/search?q=vue");
        this.totalVuePackages = response.data.total;
    },
    mounted() {
    },
    components: {},
    template: `
      <section class="bg-blue-500 text-white py-6">
      <h2 class="mb-4 text-3xl font-bold">Titles : {{ totalVuePackages }}</h2>
      </section>
    `
}