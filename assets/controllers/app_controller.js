import { Controller } from '@hotwired/stimulus';
import { createApp } from 'vue/dist/vue.esm-bundler';
import Example from '../js/components/Example'
import '../styles/app.css'

export default class extends Controller {
    connect() {
        const application = createApp({
            name: 'ApplicationCore',
            data() {
                return {}
            },
            components: {
                Example
            },
            template: `
                <div class="max-w-screen-lg bg-orange-500 shadow-2xl rounded-lg mx-auto text-center py-12 mt-4">
                    <example></example>
                </div>
            `
        });

        application.mount(this.element);


    }
}
