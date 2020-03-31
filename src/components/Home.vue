<template>
  <div>
      <v-skeleton-loader
      type="article"
      v-if="loading"
      transition="fade-transition"
      >
      </v-skeleton-loader>

      
      <div v-show="!loading">
        <div>
          <v-card class="pa-5">
          <div class="d-flex flex-row justify-space-around">
            <v-icon>mdi-map-marker mdi-16px</v-icon>
            <div class="caption">Country: {{ location.country }}</div>
            <div class="caption">State: {{ location.city }}</div>
            <!-- <div> <v-icon class="ma-2">mdi-account</v-icon>City: {{ location.regionName }}</div> -->
          </div>
        </v-card>
        </div>
      </div>
  </div>
</template>


<script>
  export default {
    name: 'Home',

    data: () => ({
      loading: true,
      loaded: false,
      countries: [],
      location: "",
      gettingLocation: false,
      errorStr:null
    }),
    methods: {
      loaded: function(){
      console.log("loaded function called");
      this.loading = false;
      }
    },
    created(){
        const readyHandler = () => {
          if( document.readyState == 'complete' ){
            this.loading = false;
            this.loaded = true;
            document.removeEventListener('readystatechange', readyHandler);
          }
        };

        document.addEventListener('readystatechange', readyHandler);

        this.$http.get('https://api.covid19api.com/countries')
        .then( response => {
          this.countries = response.body;
        })

        this.$http.get(`http://ip-api.com/json`).then( response => {
            this.location = response.body;
        })
    },
  }
</script>
