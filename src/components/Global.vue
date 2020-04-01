<template>
  <div>
      
 <v-card>
    <v-card-title>
      Country stats
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="countries"
      :search="search"
    ></v-data-table>
  </v-card>

  </div>
</template>

<script>
  export default {
    name: 'Global',
    data () {
      return {
        search: '',
        test:'',
        headers: [
          {
            text: 'Country',
            align: 'start',
            sortable: false,
            value: 'Country',
          },
          { text: 'Total Deaths', value: 'TotalDeaths' },
          { text: 'Total Recovered', value: 'TotalRecovered' },
          { text: 'Total Confirmed', value: 'TotalConfirmed' },
          { text: 'New Deaths', value: 'NewDeaths' },
          { text: 'New Recovered', value: 'NewRecovered' },
          { text: 'New Confirmed', value: 'NewConfirmed' },
        ],
        countries: [],
      }
    },
    computed: {
      
    },
    created: function() {
      this.$http.get(`https://api.covid19api.com/summary`)
        .then(function(response) {
          this.countries = response.body.Countries;
          this.countries.splice(0,1);
          this.countries.map(function(country){
            delete country.Slug;
            // console.log(country);
          });
        });
    }
  }
</script>
