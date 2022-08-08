export default {
    name: 'btn',
    methods: {
        pressed() {
            this.$emit("pressed");
        }
    },
    template: `
        <button @click="pressed">
            Click
        </button>
    `
}