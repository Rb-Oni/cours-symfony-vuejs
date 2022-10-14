import axios from 'axios';

export default {
    name: 'Movie',
    data() {
        return {
            movies: [],
            addTitle: '',
            title: ''
        };
    },
    created() {
        this.fetchMovies()
    },
    methods: {
        fetchMovies() {
            axios.get("/api/movie/get")
                .then(response => this.movies = response.data);
        },
        storeMovie() {
            const movie = {title: this.addTitle};
            axios.post("/api/movie/post", movie)
                .then((response) => {
                    this.movies.push({
                        id: response.id,
                        title: response.title
                    });
                });
        },
        updateMovie() {
            const element = document.querySelector('#put-request');
            const movie = {title: this.title};
            axios.put('/api/movie/put/' + this.movies.id, movie)
                .then(response => this.title = response.data)
                .then(response => console.log(response.data));
        },
    },
    components: {},
    template: `
      <section class="bg-blue-500 text-white py-6">
      <h2 class="mb-4 text-3xl font-bold">Titles : </h2>
      <ul class="flex flex-col gap-4">
        <li v-for="movie in movies" :key="movie.id">
          <span class="text-2xl">{{ movie.title }}</span>
          <input type="text" class="text-black mx-4" v-model="movie.title"/>
          <button class="bg-orange-500 hover:bg-orange-700 duration-150 font-bold py-2 px-6 shadow rounded-md"
                  @click="updateMovie()">Modifier
          </button>
        </li>
      </ul>
      </section>

      <section class="movie-add bg-green-500 py-6">
      <h2 class="mb-4 text-3xl font-bold text-white">Add movie</h2>
      <div class="flex flex-col gap-4">
        <div>
          <input type="text" v-model="addTitle"/>
        </div>
        <div>
          <button class="bg-white hover:bg-gray-200 text-black duration-150 font-bold py-2 px-6 shadow rounded-md"
                  @click="storeMovie();">Ajouter
          </button>
        </div>
      </div>
      </section>
    `
}