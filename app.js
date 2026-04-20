const { createApp } = Vue;

createApp({
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        age: "",
        role: "",
        avatar: ""
      },

      weatherForm: {
        city: "London",
        province: "Ontario",
        country: "Canada"
      },

      weather: {
        temperature: "12 °C",
        wind: "18 km/h",
        description: "Partly cloudy"
      },

      dictionaryForm: {
        word: "bottle"
      },

      dictionary: {
        word: "bottle",
        phonetic: "/ˈbɒt.əl/",
        definition: "A container, usually made of glass or plastic, used for holding liquids."
      },

      heroProfiles: [
        {
          firstName: "Nova",
          lastName: "Blaze",
          age: 27,
          role: "Sky Guardian",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
        },
        {
          firstName: "Shadow",
          lastName: "Strike",
          age: 31,
          role: "Night Protector",
          avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80"
        },
        {
          firstName: "Luna",
          lastName: "Storm",
          age: 24,
          role: "Energy Defender",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
        },
        {
          firstName: "Titan",
          lastName: "Volt",
          age: 35,
          role: "City Defender",
          avatar: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=400&q=80"
        },
        {
          firstName: "Crimson",
          lastName: "Wing",
          age: 29,
          role: "Rescue Hero",
          avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80"
        }
      ]
    };
  },

  computed: {
    fullName() {
      return `${this.user.firstName} ${this.user.lastName}`;
    },

    formattedLocation() {
      return `${this.weatherForm.city}, ${this.weatherForm.province}, ${this.weatherForm.country}`;
    }
  },

  methods: {
    fetchRandomUser() {
      const randomIndex = Math.floor(Math.random() * this.heroProfiles.length);
      const selectedUser = this.heroProfiles[randomIndex];

      this.user.firstName = selectedUser.firstName;
      this.user.lastName = selectedUser.lastName;
      this.user.age = selectedUser.age;
      this.user.role = selectedUser.role;
      this.user.avatar = selectedUser.avatar;
    },

    fetchWeather() {
      this.weather.temperature = "12 °C";
      this.weather.wind = "18 km/h";
      this.weather.description = "Partly cloudy";
    },

    fetchDefinition() {
      const word = this.dictionaryForm.word.trim();

      if (!word) {
        this.dictionary.word = "";
        this.dictionary.phonetic = "";
        this.dictionary.definition = "Please enter a word.";
        return;
      }

      this.dictionary.word = word;
      this.dictionary.phonetic = "/sample/";
      this.dictionary.definition = `Sample definition for "${word}".`;
    }
  },

  mounted() {
    this.fetchRandomUser();
    this.fetchWeather();
  }
}).mount("#app");