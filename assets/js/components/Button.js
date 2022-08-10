export default {
    name: 'btn',
    data() {
        return {
            isAddClass: false
        }
    },
    methods: {
        pressed() {
            this.$emit("pressed");
        },
        addClass() {
            if (this.isAddClass == false) {
                this.isAddClass = true;
            }
            else {
                this.isAddClass = false;
            }
        }
    },
    template: `
        <button @click="pressed(); addClass();" :class="{ 'bg-black hover:bg-gray-700 text-white': isAddClass }" class="bg-white hover:bg-gray-200 text-black duration-150 font-bold py-2 px-6 shadow rounded-md">
            Click
        </button>
    `
}