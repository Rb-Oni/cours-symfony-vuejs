export default {
    name: 'UserInput',
    data() {
        return {
            message: '',
        };
    },
    methods: {
        checkForm() {
            if (this.message) {

            } else {
                alert('Supply value');
            }
        }
    },
    components: {
    },
    template: `
        <div class="bg-gray-500 text-white py-6">
            <h2 class="mb-4 text-3xl font-bold">
            User Input
            </h2>
            <form @submit.prevent="checkForm()" class="text-black">
                <div class="mb-4">
                    <input type="text" v-model="message"/>
                </div>
                <div>
                    <button class="bg-white hover:bg-gray-200 duration-150 font-bold py-2 px-6 shadow rounded-md">Submit</button>
                </div>
            </form>
        </div>
    `
}