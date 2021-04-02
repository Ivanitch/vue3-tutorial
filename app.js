const App = {
  data() {
    return {
      placeholder: 'Название заметки',
      title: 'Список заметок',
      inputValue: '',
      notes: ['note 1', 'note 2'],
    }
  },
  methods: {
    addNote () {
      if (this.inputValue !== '') {
        this.notes.push(this.inputValue)
        this.inputValue = ''
      }

    },
    deleteNote (idx, event) {
      this.notes.splice(idx, 1)
      //console.log(event)
    },
    upperCase (item) {
      return item.toUpperCase()
    }
  },
  computed: {
    doubleCount () {
      return this.notes.length * 2
    }
  },
  watch: {
    inputValue (value) {
      console.log(value)
    }
  }
}

Vue.createApp(App).mount('#app')