const app = Vue.createApp({
    data() {
        return {
            title: 'Заголовок из свойства "Template"'
        }
    },

    template: `
        <div class="card center">
            <h1>{{ title }}</h1>
            <button class="btn" @click="title='Изменили!'">Изменить</button>
        </div>
        `,
})

app.mount('#app')