const app = Vue.createApp({
    data() {
    return {
      user: {
        first_name: '',
        last_name: '',
        age: '',
        profile_picture: ''
      },
      city: 'London',
      province: 'Ontario',
      country: 'Canada',
      weather: {
        temperature: '',
        wind: '',
        description: ''
      },
      word: '',
      dictionary: {
        word: '',
        phonetic: '',
        definition: ''
      }
    };
  },
  methods: {
    fetchUser() {
      fetch('https://comp6062.liamstewart.ca/random-user-profile')
        .then(res => res.json())
        .then(data => {
          this.user = data;
        })
        .catch(error => {
          console.error("User Fetch Error:", error);
        });
    },
    fetchWeather() {
      const url = `https://comp6062.liamstewart.ca/weather-information?city=${this.city}&province=${this.province}&country=${this.country}`;
      fetch(url)
        .then(res => res.json())
        .then(data => {
          this.weather = data;
        })
        .catch(error => {
          console.error("Weather Fetch Error:", error);
        });
    },
    getDefinition() {
      if (this.word.trim() === '') return;
      fetch(`https://comp6062.liamstewart.ca/define?word=${this.word}`)
        .then(res => res.json())
        .then(data => {
          this.dictionary = data[0];
        })
        .catch(error => {
          console.error("Definition Fetch Error:", error);
        });
    }
  },
  created() {
    this.fetchUser();
    this.fetchWeather();
  }
});

app.mount('#app');