export default {
    name: 'App',
    data() {
        return {
            name: '',
            hello: ''
        }
    },
    methods: {

    },
    template: `
      <section>
          <input type="text" v-model="name">
          <button @click="refreshHello">Demander un bonjour !</button>
          <h1 class="text-4xl font-bold" v-show="!!hello">{{ hello }}</h1>
      </section>
    `
}




