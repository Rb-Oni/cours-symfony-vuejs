import axios from 'axios';

export default {
    name: 'Movie',
    data() {
        return {
            movies: []
        };
    },
    methods: {},
    async created() {
        // GET request using axios with async/await
        axios.get("/api/movie")
            .then(response => this.movies = response.data);
    },
    mounted() {
    },
    components: {},
    template: `
      <section class="bg-blue-500 text-white py-6">
        <h2 class="mb-4 text-3xl font-bold">Titles : </h2>
        <ul>
          <li class="text-2xl" v-for="movie in movies">{{ movie }}</li>
        </ul>
      </section>
    `
}