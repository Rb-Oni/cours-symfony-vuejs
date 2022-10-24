import axios from 'axios';

export default {
	name: 'Movie',
	data() {
		return {
			movies: [],
			form: {
				add: {
					title: "",
				},
				update: {
					title: "",
				}
			}
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
			axios.put('/api/movie/put/' + id, this.form.update)
				.then((response) => {
					this.movies.list = this.movies.list.map((movie) => {

						if (movie.id === response.data.id) {
							movie.title = response.data.title;
						}

						return movie;
					});
				});
		},
		deleteMovie(id) {
			axios.delete('/api/movie/delete/' + id)
				.then((response) => {
					this.movies.list = this.movies.list.filter(movie => movie.id !== id);
				});
		},
	},
	computed: {
		moviesList() {
			return this.movies.list;
		}
	},
	components: {},
	template: `
      <section class="bg-blue-500 text-white py-6">
      <h2 class="mb-4 text-3xl font-bold">Titles : </h2>
      <ul class="flex flex-col gap-4">
        <li v-for="movie in moviesList" :key="movie.id">
          <span class="text-2xl">{{ movie.title }}</span>
          <input type="text" class="text-black mx-4" v-model="form.update.title"/>
          <button class="bg-orange-500 hover:bg-orange-700 duration-150 font-bold py-2 px-4 shadow rounded-md"
                  @click="updateMovie(movie.id)">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"/>
            </svg>
          </button>
          <button class="bg-red-500 hover:bg-red-700 duration-150 font-bold py-2 px-4 shadow rounded-md"
                  @click="deleteMovie(movie.id)">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/>
            </svg>
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