import { Controller } from '@hotwired/stimulus';
import { createApp } from 'vue/dist/vue.esm-bundler';
import Count from '../js/components/Count'
import UserInput from '../js/components/UserInput'
import '../styles/app.css'

export default class extends Controller {
    connect() {
        const application = createApp({
            name: 'ApplicationCore',
            data() {
                return {}
            },
            components: {
                Count,
                UserInput
            },
            template: `
                <div class="max-w-screen-lg shadow-2xl rounded-lg mx-auto text-center py-12 mt-4">
                    <count></count>
                    <userInput></userInput>
                </div>
            `
        });

        application.mount(this.element);
    }
}
