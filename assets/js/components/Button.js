export default {
    name: 'btn',
    methods: {
        pressed() {
            this.$emit("pressed");
        }
    },
    template: `
        <button @click="pressed" class="bg-white hover:bg-gray-200 duration-150 text-black px-2">
            Click
        </button>
    `
}