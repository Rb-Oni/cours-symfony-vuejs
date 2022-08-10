import { Controller } from '@hotwired/stimulus';
import { createApp } from 'vue/dist/vue.esm-bundler';
import Cours from '../js/components/Cours'
import '../styles/app.css'

export default class extends Controller {
    connect() {
        const application = createApp({
            name: 'ApplicationCore',
            data() {
                return {}
            },
            components: {
                Cours
            },
            template: `
                <div class="max-w-screen-lg shadow-2xl rounded-lg mx-auto text-center py-12 mt-4">
                    <cours></cours>
                </div>
            `
        });

        application.mount(this.element);
    }
}
