import axios from 'axios';

export default {
	name: 'Movie',
	data() {
		return {
			movies: [],
			form: {
				add: {
					title: "",
				}
			},
		};
	},
	mounted() {
		this.fetchMovies()
	},
	methods: {
		fetchMovies() {
			return axios.get('/api/movie/get')
				.then(response => this.movies = response.data);
		},
		storeMovie() {
			axios.post('/api/movie/post', this.form.add)
				.then((response) => {
					this.movies.list.unshift(response.data);
				})
				.then(() => {
					this.$refs.addInput.value = null;
				});
		},
		updateMovie(id) {
			axios.put('/api/movie/put/', + id)
				.then((response) => {
					this.movies = response.data;
				});
		},
		deleteMovie(id) {
			axios.delete('/api/movie/delete/' + id)
				.then((response) => {
					this.movies = response.data;
				});
		},
	},
	components: {},
	template: `
      <section class="bg-blue-500 text-white py-6">
      <h2 class="mb-4 text-3xl font-bold">Titles : </h2>
      <ul class="flex flex-col gap-4">
        <li v-for="movie in movies.list" :key="movie.id">
          <span class="text-2xl">{{ movie.title }}</span>
          <input type="text" class="text-black mx-4" v-model="movie.title"/>
          <button class="bg-orange-500 hover:bg-orange-700 duration-150 font-bold py-2 px-6 shadow rounded-md"
                  @click="updateMovie(movie.id)">Modifier
          </button>
          <button class="bg-red-500 hover:bg-red-700 duration-150 font-bold py-2 px-6 shadow rounded-md"
                  @click="deleteMovie(movie.id)">Supprimer
          </button>
        </li>
      </ul>
      </section>

      <section class="movie-add bg-green-500 py-6">
      <h2 class="mb-4 text-3xl font-bold text-white">Add movie</h2>
      <div class="flex flex-col gap-4">
        <div>
          <input type="text" v-model="form.add.title" ref="addInput" @keydown.enter="storeMovie"/>
        </div>
        <div>
          <button class="bg-white hover:bg-gray-200 text-black duration-150 font-bold py-2 px-6 shadow rounded-md"
                  @click="storeMovie">Ajouter
          </button>
        </div>
      </div>
      </section>
	`
}