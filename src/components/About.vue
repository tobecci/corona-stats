<template>
  <div>
      <div>about page</div>
      <v-card>
        <line-chart :chartdata="chartdata" :options="options"></line-chart>
      </v-card>
  </div>
</template>

<script>
  import LineChart from './LineChart.js';
  
  export default {
    name: 'About',
    
    components:{
    'line-chart': LineChart
    },

    data: () => ({
      chartdata: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
      
    }),
    methods: {
      start(){
        console.log('hello');
      },
    }
  }
</script>
