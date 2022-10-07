import {Controller} from '@hotwired/stimulus';
import {createApp} from 'vue/dist/vue.esm-bundler';
import Movie from '../js/components/Movie'
import '../styles/app.css'

export default class extends Controller {
    connect() {
        const application = createApp({
            name: 'ApplicationCore',
            data() {
                return {}
            },
            components: {
                Movie,
            },
            template: `
              <div class="max-w-screen-lg shadow-2xl rounded-lg mx-auto text-center py-12 mt-4">
              <movie></movie>
              </div>
            `
        });

        application.mount(this.element);
    }
}
