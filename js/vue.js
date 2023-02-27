const app = Vue.createApp({
  data() {
    return {
      word: null,
      words: [],      
    }
  },
  methods: {
    show: function() {
      let word = this.word
      this.words = []
      this.words.push(word.toUpperCase())
      this.words.push(word.toLowerCase())
      this.words.push(word.charAt(0).toUpperCase() + word.slice(1))
      this.words.push(word.slice(0, word.length-1) + word.charAt(word.length-1).toUpperCase())
      this.words.push(word.split('').reverse().join(''))
    }
  },
})

app.mount('#app')