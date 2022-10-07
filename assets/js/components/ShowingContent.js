export default {
    name: 'ShowingContent',
    data() {
        return {
            color: '',
            favoriteMessage: ''
        };
    },
    methods: {
        checkForm() {
            if (!this.color) {
                alert('Please enter a color');
                return;
            }
            this.favoriteMessage = 'That is not my favorite color';

            if (this.color === 'blue') {
                this.favoriteMessage = 'That is my favorite, too !';
            }

            this.showMessage = this.color === 'blue';
        }
    },
    components: {
    },
    template: `
        <div class="bg-red-500 text-white py-6">
            <h2 class="mb-4 text-3xl font-bold">
            Showing Content
            </h2>
            <form @submit.prevent="checkForm()" class="text-black">
                <div class="flex flex-col mb-4 w-fit mx-auto">
                    <label for="">Your Favorite Color</label>
                    <input type="text" v-model="color"/>
                </div>
                <div>
                    <button class="bg-white hover:bg-gray-200 duration-150 font-bold py-2 px-6 shadow rounded-md">Submit</button>
                </div>
            </form>
            <div v-if="favoriteMessage">
                {{ favoriteMessage }}
            </div>
        </div>
    `
}