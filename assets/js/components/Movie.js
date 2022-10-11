import axios from 'axios';

export default {
    name: 'Movie',
    data() {
        return {
            movies: [],
            title: '',
            titleId: ''
        };
    },
    created() {
        this.fetchMovies()
    },
    methods: {
        storeMovie() {
            const movie = {title: this.title}
            axios.post("/api/movie/post", movie)
                .then(response => this.titleId = response.data)
                .then(response => this.title = response.data)
        },
        fetchMovies() {
            axios.get("/api/movie/get")
                .then(response => this.movies = response.data);
        }
    },
    mounted() {
    },
    components: {},
    template: `
      <section class="bg-blue-500 text-white py-6">
      <h2 class="mb-4 text-3xl font-bold">Titles : </h2>
      <ul>
        <li class="text-2xl" v-for="movie in movies" :key="movie.id">{{ movie }}</li>
      </ul>
      </section>

      <section class="movie-add bg-green-500 py-6">
      <h2 class="mb-4 text-3xl font-bold text-white">Add movie</h2>
      <div class="flex flex-col gap-4">
        <div>
          <input type="text" v-model="title"/>
        </div>
        <div>
          <button class="bg-white hover:bg-gray-200 text-black duration-150 font-bold py-2 px-6 shadow rounded-md"
                  @click="storeMovie(); fetchMovies()">Ajouter
          </button>
        </div>
      </div>
      </section>
    `
}