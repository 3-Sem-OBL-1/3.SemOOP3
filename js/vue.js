const app = Vue.createApp({
  data() {
    return {
      word: null,
      words: [],
      showResult: false      
    }
  },
  methods: {
    show: function() {
      this.word = this.word.trim()
      if (this.word.length > 0) {
        let word = this.word
        this.words = []
        this.words.push(word.toUpperCase())
        this.words.push(word.toLowerCase())
        this.words.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        this.words.push(word.slice(0, word.length-1).toLowerCase() + word.charAt(word.length-1).toUpperCase())
        this.words.push(word.split('').reverse().join(''))
        this.showResult = true
      }
    }
  },
})

app.mount('#app')