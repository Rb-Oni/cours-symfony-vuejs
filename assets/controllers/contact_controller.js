import { Controller } from '@hotwired/stimulus';
import { createApp } from 'vue/dist/vue.esm-bundler';
import Count from '../js/components/Count'
import UserInput from '../js/components/UserInput'
import ShowingContent from '../js/components/ShowingContent'
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
                UserInput,
                ShowingContent
            },
            template: `
                <div class="max-w-screen-lg shadow-2xl rounded-lg mx-auto text-center py-12 mt-4">
                    <count></count>
                    <userInput></userInput>
                    <showingContent></showingContent>
                </div>
            `
        });

        application.mount(this.element);
    }
}
