export default {
    name: 'ClassStyle',
    data() {
        return {
            email: '',
            formWasValidated: false
        };
    },
    methods: {
        submitForm(form) {
            let isValid = form.checkValidity();
            this.formWasValidated = true;
        }
    },
    components: {
    },
    template: `
        <div class="bg-yellow-500 text-white py-6">
            <h2 class="mb-4 text-3xl font-bold">
            ClassStyle
            </h2>
            <form action="" :class="{'was-validated': formWasValidated}" @submit.prevent="submitForm($event.target)" novalidate>
                <div>
                    <label class="flex flex-col">Email</label>
                    <input type="email" class="text-black" v-model="email" required/>
                    <div class="invalid-feedback">Please enter a valid email address.</div>
                    <div class="valid-feedback">Thanks !</div>
                </div>
                <div>
                    <button class="bg-white hover:bg-gray-200 text-black duration-150 font-bold py-2 px-6 shadow rounded-md">Submit</button>
                </div>
            </form>
        </div>
    `
}