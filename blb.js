const app = Vue.createApp({
  data() {
    return {
      bulbState: false,
      bulbImage: 'off.png', 
    };
  },
  methods: {
    toggleBulb() {
      this.bulbState = !this.bulbState;
      this.bulbImage = this.bulbState ? 'on.png' : 'off.png';
    },
    
  },
});

app.mount('#bulb');
