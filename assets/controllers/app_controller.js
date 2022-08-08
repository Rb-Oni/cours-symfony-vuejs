import { Controller } from '@hotwired/stimulus';
import {createApp} from 'vue/dist/vue.esm-bundler';
import Example from '../js/components/Example'

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
                <div>
                    <example></example>
                </div>
            `
        });

        application.mount(this.element);
        

    }
}
