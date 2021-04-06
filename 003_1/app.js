Vue.createApp({

    data: () => ({
        title: 'Заголовок',
        'myHtml': '<h2>Vue 2 App</h2>',
        person: {
            name: 'John',
            age: 32
        },
        items: [1, 2, 3]
    }),
    computed: {
        eventItems () {
            return this.items.filter(i => i % 2 === 0)
        }
    }

}).mount('#app')