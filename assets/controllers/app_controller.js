import {Controller} from '@hotwired/stimulus';
import {createApp} from 'vue/dist/vue.esm-bundler';
import Jumbotron from '../js/components/Jumbotron'
import App from '../js/components/App';
import '../styles/app.css'

export default class extends Controller {
    connect() {
        const application = createApp({
            name: 'ApplicationCore',
            data() {
                return {}
            },
            components: {
                Jumbotron,
                App
            },
            template: `
              <div class="max-w-screen-lg shadow-2xl rounded-lg mx-auto text-center py-12 mt-4">
              <app></app>
              <jumbotron></jumbotron>
              </div>
            `
        });

        application.mount(this.element);
    }
}
